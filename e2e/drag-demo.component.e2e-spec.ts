import { browser, by, element } from 'protractor';

if(browser.params.runAllTests) {
	describe('Drag Demo Page', () => {
		it('Page should load', () => {
			element.all(by.cssContainingText('a', 'Drag'))
			.first() // First will be DRAG and second will be Dragula link in page text
			.click();
			expect(browser.getCurrentUrl()).toContain('/demos/drag');
		});
		it('Left drag container should contain 4 elements', () => {
			// list1 is expected to start with 4 and list 2 <div> will start with 3
			const list1divs = element.all(by.xpath('//*[@id="list1"]/div'));
			expect(list1divs.count()).toEqual(4);
		});
		it('Not Implemented - Item in left container should be dragabble to right container', () => {
			const el2 = element(by.id('2'));
			const el5 = element(by.id('5'));
			const list2 = element(by.id('list2'));
			browser.driver.actions().dragAndDrop(el2.getWebElement(), list2.getWebElement()).mouseUp().perform(); // Timeout works
			// browser.driver.executeScript(simulateDragDrop, el2.getWebElement(), el5.getWebElement());
			expect(true).toBeTruthy();
		});
	});
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Helper function for drag and drop testing
function simulateDragDrop(sourceNode, destinationNode) {
	const EVENT_TYPES = { DRAG_END: 'dragend', DRAG_START: 'dragstart', DROP: 'drop' };
	function createCustomEvent(type) {
		// let event = new CustomEvent('CustomEvent');
		// event.initCustomEvent(type, true, true, null);
		const myEvent: CustomEvent & { dataTransfer?: DataTransfer } = new CustomEvent('CustomEvent', { bubbles: true, cancelable: true });
		myEvent.dataTransfer = {
			dropEffect: '',
			effectAllowed: '',
			files: null,
			items: null,
			types: null,
			clearData: (format) => true,
			getData: (t) => this.data[t],
			setData: (t, val) => {
				this.data[t] = val;
				return true;
			},
			setDragImage: (image, x, y) => {}
		};
		return myEvent;
	}
	function dispatchEvent(node, type, inputEvent) {
		if (node.dispatchEvent) {
			return node.dispatchEvent(event);
		}
		if (node.fireEvent) {
			return node.fireEvent('on' + type, inputEvent);
		}
	}
	const event = createCustomEvent(EVENT_TYPES.DRAG_START);
	dispatchEvent(sourceNode, EVENT_TYPES.DRAG_START, event);
	const dropEvent = createCustomEvent(EVENT_TYPES.DROP);
	dropEvent.dataTransfer = event.dataTransfer;
	dispatchEvent(destinationNode, EVENT_TYPES.DROP, dropEvent);
	const dragEndEvent = createCustomEvent(EVENT_TYPES.DRAG_END);
	dragEndEvent.dataTransfer = event.dataTransfer;
	dispatchEvent(sourceNode, EVENT_TYPES.DRAG_END, dragEndEvent);
}
