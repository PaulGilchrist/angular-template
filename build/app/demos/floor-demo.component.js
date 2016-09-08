"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var FloorDemoComponent = (function () {
    function FloorDemoComponent() {
        this.dimension = false;
        this.level = 1;
        this.flooringZones = [
            { name: 'Kitchen', type: 'undecided', layers: ['s1', 's3'], active: false },
            { name: 'Living', type: 'undecided', layers: ['s9', 's10', 's11', 's18'], active: false },
            { name: 'Bathrooms', type: 'undecided', layers: ['s13_1', 's15', 's16', 's19', 's22', 'o2', 'o5', 'o6'], active: false },
            { name: 'Bedrooms', type: 'undecided', layers: ['s17', 's20', 's21', 's23', 's24', 'o3', 'o7'], active: false },
            { name: 'Foyer', type: 'undecided', layers: ['s8'], active: false },
            { name: 'Dining', type: 'undecided', layers: ['s7'], active: false },
            { name: 'Laundry', type: 'undecided', layers: ['s6', 's4', 's4_1'], active: false }
        ];
        this.options = [
            { level: 1, name: 'Garage', standardName: 'Standard', optionName: 'Extended', standardLayers: ['s14'], optionLayers: ['o4'], active: false },
            { level: 1, name: 'Flex Room', standardName: 'Den', optionName: 'Guest Suite', standardLayers: ['s11', 's12', 's13'], optionLayers: ['o3'], active: false },
            { level: 1, name: 'Powder Room', standardName: 'No', optionName: 'Yes', standardLayers: ['s4'], optionLayers: ['o2', 's4_1'], active: false },
            { level: 1, name: 'Sunroom', standardName: 'No', optionName: 'Yes', standardLayers: ['s1', 's26', 's26_2'], optionLayers: ['o1', 'o8', 'o8_1'], active: false },
            { level: 2, name: 'Owner\'s Bath Shower', standardName: 'Standard', optionName: 'Upgraded', standardLayers: ['s15'], optionLayers: ['o5'], active: false },
            { level: 3, name: 'Basement Bed and Bath', standardName: 'No', optionName: 'Yes', standardLayers: ['s25', 's27', 's28'], optionLayers: ['o6', 'o7'], active: false }
        ];
        this.focusOption = null;
    }
    FloorDemoComponent.prototype.ngOnInit = function () {
        this.changeDimension(this.dimension);
        this.changeLevel(this.level);
        //Loop through options setting their initial default visibility
        for (var i = 0; i < this.options.length; i++) {
            var option = this.options[i];
            //The function will toggle the active value, but this one time we do not want it changed
            option.active = !option.active;
            this.toggleOption(option);
        }
        //Add mousewheel event listner to control svg scale
        $('#floorplan').bind('mousewheel', function (e) {
            var stepping = 20;
            var floorplan = $('#floorplan');
            var width = floorplan.css('width');
            width = width.substring(0, width.length - 2); //remove px
            var height = floorplan.css('height');
            height = height.substring(0, height.length - 2); //remove px
            if (e.originalEvent.wheelDelta / 120 > 0) {
                floorplan.css('width', parseInt(width) - stepping + 'px');
                floorplan.css('height', parseInt(height) - stepping + 'px');
            }
            else {
                floorplan.css('width', parseInt(width) + stepping + 'px');
                floorplan.css('height', parseInt(height) + stepping + 'px');
            }
        });
    };
    FloorDemoComponent.prototype.toggleFlooringZones = function (zone, type) {
        //zone.active = !zone.active;
        zone.active = true;
        zone.type = type;
        for (var i = 0; i < zone.layers.length; i++) {
            //Turn on or off each associated layer based on the active state of the zone
            var dimzone = $('.' + zone.layers[i] + ' .dimzone');
            var path = dimzone.find("path");
            switch (zone.type) {
                case 'carpet':
                    path.removeClass("tile wood").addClass('carpet');
                    break;
                case 'tile':
                    path.removeClass("carpet wood").addClass('tile');
                    break;
                case 'wood':
                    path.removeClass("carpet tile").addClass('wood');
                    break;
                default:
                    path.removeClass("carpet tile wood");
            }
            if (zone.active && zone.type != 'undecided') {
                dimzone.css('opacity', 1);
            }
            else {
                dimzone.css('opacity', 0);
            }
        }
    };
    FloorDemoComponent.prototype.toggleOption = function (option) {
        var _this = this;
        option.active = !option.active;
        for (var j = 0; j < option.standardLayers.length; j++) {
            var layer = $('.' + option.standardLayers[j]);
            layer.css('opacity', option.active ? 0 : 1);
            //Testing - Setup click events
            layer.find('.dimzone path').addClass('test');
            layer.find('.dimzone path').on('click', function () {
                console.log('clicked');
            });
        }
        for (var j = 0; j < option.optionLayers.length; j++) {
            var layer = $('.' + option.optionLayers[j]);
            layer.css('opacity', option.active ? 1 : 0);
            //Testing - Setup click events
            layer.find('.dimzone path').addClass('test');
            layer.find('.dimzone path').on('click', function () {
                console.log('clicked');
            });
            d3.select();
        }
    };
    FloorDemoComponent.prototype.changeDimension = function (dimension) {
        this.dimension = dimension;
        $('.dimension').css('opacity', dimension ? 1 : 0);
    };
    FloorDemoComponent.prototype.changeLevel = function (level) {
        this.level = level;
        $('.level1').css('opacity', level == 1 ? 1 : 0);
        $('.level2').css('opacity', level == 2 ? 1 : 0);
        $('.level3').css('opacity', level == 3 ? 1 : 0);
    };
    FloorDemoComponent = __decorate([
        core_1.Component({
            selector: 'floor-demo',
            styleUrls: ['app/demos/floor-demo.component.css'],
            templateUrl: 'app/demos/floor-demo.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FloorDemoComponent);
    return FloorDemoComponent;
}());
exports.FloorDemoComponent = FloorDemoComponent;

//# sourceMappingURL=floor-demo.component.js.map
