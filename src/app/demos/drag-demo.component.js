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
var dragula_directive_1 = require('../directives/dragula.directive');
var dragula_service_1 = require('../services/dragula.service');
var DragDemoComponent = (function () {
    function DragDemoComponent(dragulaService) {
        this.dragulaService = dragulaService;
        this.many = ['The', 'possibilities', 'are', 'endless!'];
        this.many2 = ['Explore', 'them'];
        this.list1 = [
            { id: 0, text: 'You can drag and drop these elements between these two containers', allowMove: true },
            { id: 1, text: 'There\'s also the possibility of moving elements around in the same container, changing their position', allowMove: true },
            { id: 2, text: 'A drop event is fired whenever an element is dropped anywhere other than its origin', allowMove: true },
            { id: 3, text: 'The over event fires when you drag something over a container, and out fires when you drag it away from the container', allowMove: true }
        ];
        this.list2 = [
            { id: 4, text: 'There are also events such as cancel, cloned, drag, dragend, remove, shadow, dropModel, and removeModel', allowMove: true },
            { id: 5, text: 'Make sure to check out the dragula and ng2-dragula documentation on GitHub!', allowMove: true },
            { id: 6, text: 'Don\'t move me!!!', allowMove: false },
        ];
    }
    DragDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _self = this;
        this.dragulaService.setOptions('dragContainer', {
            isContainer: function (el) { return false; },
            moves: function (el, source, handle, sibling) {
                //Elements are always draggable by default
                return true;
            },
            accepts: function (el, target, source, sibling) {
                //Elements can be dropped in any of the `containers` by default
                var itemId = parseInt($(el).attr('id'));
                var item = _.findWhere(_self.list1, { id: itemId }) || _.findWhere(_self.list2, { id: itemId });
                if (!item.allowMove) {
                    return false;
                }
                else {
                    return true;
                }
            },
            invalid: function (el, handle) { return false; },
            direction: 'vertical',
            copy: false,
            copySortSource: true,
            revertOnSpill: true,
            removeOnSpill: false,
            mirrorContainer: document.body,
            ignoreInputTextSelection: true // allows users to select input text, see details below
        });
        //Look at DragulaService for additional events to subscribe to
        //drag, dragend, drop cancel, remove, shadow, over, out, cloned
        this.dragulaService.over.subscribe(function (value) {
            _this.onOver(value.slice(1));
        });
        this.dragulaService.out.subscribe(function (value) {
            _this.onOut(value.slice(1));
        });
    };
    DragDemoComponent.prototype.onOver = function (args) {
        //container is the source not the target container
        var el = args[0], container = args[1], source = args[2];
        var itemId = parseInt($(el).attr('id'));
        var item = _.findWhere(this.list1, { id: itemId }) || _.findWhere(this.list2, { id: itemId });
        if (container != source) {
            if (item.allowMove) {
                $(container).addClass('drag-success');
            }
            else {
                $(container).addClass('drag-error');
            }
        }
    };
    DragDemoComponent.prototype.onOut = function (args) {
        var el = args[0], container = args[1], source = args[2];
        $(container).removeClass('drag-success drag-error');
    };
    DragDemoComponent.prototype.removeObject = function (list, objToRemove) {
        //Finds the object in the list with the matching id and removes it
        for (var i = 0; i < list.length; i++) {
            if (list[i].id === objToRemove.id) {
                list.splice(i, 1);
                break;
            }
        }
    };
    DragDemoComponent = __decorate([
        core_1.Component({
            directives: [dragula_directive_1.Dragula],
            selector: 'drag-demo',
            styleUrls: ['app/demos/drag-demo.component.css'],
            viewProviders: [dragula_service_1.DragulaService],
            templateUrl: 'app/demos/drag-demo.component.html'
        }), 
        __metadata('design:paramtypes', [dragula_service_1.DragulaService])
    ], DragDemoComponent);
    return DragDemoComponent;
}());
exports.DragDemoComponent = DragDemoComponent;
//# sourceMappingURL=drag-demo.component.js.map