"use strict";
/* tslint:disable:no-unused-variable */
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
////////  SPECS  /////////////
/// Delete this
describe('Smoke test', function () {
    it('should run a passing test', function () {
        expect(true).toEqual(true, 'should pass');
    });
});
describe('AppComponent', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent],
        });
        testing_1.TestBed.overrideComponent(app_component_1.AppComponent, {
            set: {
                template: '<div>Overridden template here</div>'
            }
        });
    });
    it('Should instantiate component', testing_1.async(function () {
        testing_1.TestBed.compileComponents().then(function () {
            var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
            expect(fixture.componentInstance instanceof app_component_1.AppComponent).toBe(true, 'should create AppComponent');
        });
    }));
    it('Should have expected <div> text', testing_1.async(function () {
        testing_1.TestBed.compileComponents().then(function () {
            var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
            fixture.detectChanges();
            var div = fixture.debugElement.query(function (el) { return el.name === 'div'; }).nativeElement; // it works
            div = fixture.debugElement.query(platform_browser_1.By.css('div')).nativeElement; // preferred
            expect(div.innerText).toMatch(/Overridden template/i, '<div> should say something about "Overridden template"');
        });
    }));
});

//# sourceMappingURL=app.component.spec.js.map
