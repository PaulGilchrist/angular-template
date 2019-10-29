import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ToastrService } from 'ngx-toastr';

import { ConnectivityService } from 'angular-connectivity'; // My NPM Package
import { FlooringState } from '../../models/flooring-state.model';
import { INITIAL_FLOORING_STATE } from '../../data/initial-flooring-state.data';

import * as $ from 'jquery';

// We only put interfaces in the models folder when they are reused across components
export interface FloorZone { name: string; type: string; layers: string[]; active: boolean; } // Valid types are undecided, carpet, tile, or wood
export interface Option { level: number; name: string; standardName: string; optionName: string; standardLayers: string[]; optionLayers: string[]; active: boolean; }

@Component({
    selector: 'app-floor',
    styleUrls: ['./floor.component.css'],
    templateUrl: './floor.component.html'
})
export class FloorComponent implements OnDestroy, OnInit {
    apiUpdateNeeded = false;
    flooringState: FlooringState = null;
    isConnected = true;
    shrink =  window.innerWidth < 768;
    subscriptions: Subscription[] = [];

    constructor(private connectivityService: ConnectivityService, private toastrService: ToastrService) { }

    ngOnDestroy(): void {
        // Unsubscribe all subscriptions to avoid memory leak
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }

    ngOnInit(): void {
        // Keep track of network connectivity and update API if anything was only saved locally
        this.subscriptions.push(this.connectivityService.isConnected$.subscribe(isConnected => {
            this.isConnected = isConnected;
            if (isConnected && this.apiUpdateNeeded) {
                this.save();
            }
        }));
        // Get the last saved flooringState and initialize the SVG appropriatly
        const flooringStateJson = localStorage.getItem('flooringState');
        if (flooringStateJson) {
            this.flooringState = JSON.parse(flooringStateJson) as FlooringState;
        } else {
            this.flooringState = { ...INITIAL_FLOORING_STATE };
        }
        this.initSvg();
        // Add mousewheel event listner to control svg scale
        $('#floorplan').on('mousewheel', (e: any) => {
            if (e.altKey === true) {
                const stepping = 20;
                const floorplan: any = $('#floorplan');
                let width: string = floorplan.css('width');
                width = width.substring(0, width.length - 2); // remove px
                let height: string = floorplan.css('height');
                height = height.substring(0, height.length - 2); // remove px
                if (e.originalEvent.wheelDelta / 120 > 0) {
                    floorplan.css('width', parseInt(width, 10) - stepping + 'px');
                    floorplan.css('height', parseInt(height, 10) - stepping + 'px');
                } else {
                    floorplan.css('width', parseInt(width, 10) + stepping + 'px');
                    floorplan.css('height', parseInt(height, 10) + stepping + 'px');
                }
        }
        });
        // Track screen size  changes to adjust button size
        window.onresize = () => this.shrink = window.innerWidth < 768;
    }

    initSvg() {
        this.changeDimension(this.flooringState.dimension);
        this.changeLevel(this.flooringState.level);
        // Loop through flooring zones setting their initial SVG visibility
        for (const flooringZone of this.flooringState.flooringZones) {
            // The function will toggle the active value, but this one time we do not want it changed
            this.toggleFlooringZones(flooringZone, flooringZone.type);
        }
        // Loop through options setting their initial default visibility
        for (const option of this.flooringState.options) {
            // The function will toggle the active value, but this one time we do not want it changed
            option.active = !option.active;
            this.toggleOption(option);
        }
    }

    reset() {
        this.flooringState = { ...INITIAL_FLOORING_STATE };
        this.initSvg();
        localStorage.removeItem('flooringState');
        console.log(`Flooring state reset`);
    }

    save() {
        localStorage.setItem('flooringState', JSON.stringify(this.flooringState));
        if (this.isConnected) {
            this.toastrService.success('Flooring state saved to API', 'Save Flooring');
            this.apiUpdateNeeded = false;
            console.log(`Flooring state saved`);
        } else {
            this.toastrService.success('Flooring state changes saved locally since no Internet connection is currently available.  Once connected, changes will be uploaded', 'Save Flooring');
            this.apiUpdateNeeded = true;
            console.log(`Offline - Flooring state changes saved locally.  Once connected, changes will be uploaded`);
        }
    }

    toggleFlooringZones(zone: FloorZone, type: string): void {
        // Zone.active = !zone.active;
        zone.active = true;
        zone.type = type;
        for (const layer of zone.layers) {
            // Turn on or off each associated layer based on the active state of the zone
            const dimzone = $('.' + layer + ' .dimzone');
            const path = dimzone.find('path');
            switch (zone.type) {
                case 'carpet':
                    path.removeClass( 'tile wood' ).addClass('carpet');
                    break;
                case 'tile':
                    path.removeClass( 'carpet wood' ).addClass('tile');
                    break;
                case 'wood':
                    path.removeClass( 'carpet tile' ).addClass('wood');
                    break;
                default:
                    path.removeClass( 'carpet tile wood' );
            }
            if (zone.active && zone.type !== 'undecided') {
                dimzone.css('opacity', 1);
            } else {
                dimzone.css('opacity', 0);
            }
        }
    }

    toggleOption(option: Option): void {
        const _this = this;
        option.active = !option.active;
        // console.log(option.active);
        for (const standardLayer of option.standardLayers) {
            const layer = $('.' + standardLayer);
            layer.css('opacity', option.active ? 0 : 1);
            // Testing - Setup click events
            layer.find('.dimzone path').addClass('test');
            layer.find('.dimzone path').on('click', () => console.log('clicked'));
        }
        for (const optionLayer of option.optionLayers) {
            const layer = $('.' + optionLayer);
            layer.css('opacity', option.active ? 1 : 0);
            // Testing - Setup click events
            layer.find('.dimzone path').addClass('test');
            layer.find('.dimzone path').on('click', () => console.log('clicked'));
            // d3.select();
        }
    }

    changeDimension(dimension: boolean): void {
        this.flooringState.dimension = dimension;
        $('.dimension').css('opacity', dimension ? 1 : 0);
    }

    changeLevel(level: number): void {
        this.flooringState.level = level;
        $('.level1').css('opacity', level === 1 ? 1 : 0);
        $('.level2').css('opacity', level === 2 ? 1 : 0);
        $('.level3').css('opacity', level === 3 ? 1 : 0);
    }

}
