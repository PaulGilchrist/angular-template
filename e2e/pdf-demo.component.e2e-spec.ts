import { browser, by, element, ExpectedConditions } from 'protractor';

if(browser.params.runAllTests) {
	describe('PDF Page', () => {
		it('Page should load', () => {
			browser.get('/demos/pdf').then(() => {
				// element(by.cssContainingText('a', 'PDF')).click();
				expect(browser.getCurrentUrl()).toContain('/demos/pdf');
			});
		});
		// it('Selecting "View PDF" button opens new window with PDF generated', () => {
		//     element(by.buttonText('View PDF'))
		//         .click()
		//         .then(() => {
		//             browser.getAllWindowHandles().then((handles) => {
		//                 let oldWindowHandle = handles[0];
		//                 let newWindowHandle = handles[1];
		//                 browser.switchTo().window(newWindowHandle).then(() => {
		//                     expect(browser.driver.getCurrentUrl()).toContain('data:application/pdf');
		//                     //Now we need to close this browser window going back to the PDF page
		//                     browser.switchTo().window(oldWindowHandle);
		//                     //Do we need to wait for this to complete?  Testing shows it is currently working.
		//                 });
		//             });
		//     });
		// });
		// Could always insert some tests here to look at the content of the PDF
		it('Selecting "View Modal" button opens modal window', () => {
			element(by.buttonText('View Modal')).click();
			const title = element(by.css('.modal-title'));
			// Allow time for modal to open
			browser.wait(ExpectedConditions.visibilityOf(title), 10000);
			expect(title.isDisplayed()).toBeTruthy();
			element(by.buttonText('Close')).click();
			// Allow time for modal to close
			// browser.wait(protractor.ExpectedConditions.invisibilityOf(title), 10000);
			browser.sleep(1000);
		});
	});
}
