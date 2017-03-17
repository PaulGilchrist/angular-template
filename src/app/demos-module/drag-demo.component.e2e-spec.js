if(browser.params.runAllTests) {
    describe('Drag Demo Page', () => {
        it('Page should load', () => {
            element.all(by.cssContainingText("a", "Drag"))
            .first() // First will be DRAG and second will be Dragula link in page text
            .click();
            expect(browser.getCurrentUrl()).toContain('/demos/drag');
        });
        it('Left drag container should contain 4 elements', () => {
            // list1 is expected to start with 4 and list 2 <div> will start with 3
            let list1divs = element.all(by.xpath('//*[@id="list1"]/div'));
            expect(list1divs.count()).toEqual(4);
        });
        it('Not Implemented - Item in left container should be dragabble to right container', () => {
            let el2 = element(by.id('2'));
            let el5 = element(by.id('5'));
            let list2 = element(by.id('list2'));
            browser.driver.actions().dragAndDrop(el2.getWebElement(), list2.getWebElement()).mouseUp().perform(); // Timeout works
            // browser.driver.executeScript(simulateDragDrop, el2.getWebElement(), el5.getWebElement());
            expect(true).toBeTruthy();
        });
    });
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Helper function for drag and drop testing
function simulateDragDrop(sourceNode, destinationNode) {
    let EVENT_TYPES = { DRAG_END: 'dragend', DRAG_START: 'dragstart', DROP: 'drop' };
    function createCustomEvent(type) {
        let event = new CustomEvent('CustomEvent');
        event.initCustomEvent(type, true, true, null);
        event.dataTransfer = {
        data: {},
        setData: function (type, val) { this.data[type] = val; },
        getData: function (type) { return this.data[type]; }
        };
        return event;
    }
    function dispatchEvent(node, type, event) {
        if (node.dispatchEvent) {
        return node.dispatchEvent(event);
        }
        if (node.fireEvent) {
        return node.fireEvent('on' + type, event);
        }
    }
    let event = createCustomEvent(EVENT_TYPES.DRAG_START);
    dispatchEvent(sourceNode, EVENT_TYPES.DRAG_START, event);
    let dropEvent = createCustomEvent(EVENT_TYPES.DROP);
    dropEvent.dataTransfer = event.dataTransfer;
    dispatchEvent(destinationNode, EVENT_TYPES.DROP, dropEvent);
    let dragEndEvent = createCustomEvent(EVENT_TYPES.DRAG_END);
    dragEndEvent.dataTransfer = event.dataTransfer;
    dispatchEvent(sourceNode, EVENT_TYPES.DRAG_END, dragEndEvent);
};