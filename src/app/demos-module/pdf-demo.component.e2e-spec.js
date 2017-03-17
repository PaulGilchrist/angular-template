if(browser.params.runAllTests) {
    describe('PDF Page', () => {
        it('Page should load', () => {
            element(by.cssContainingText("a", "PDF")).click();
            expect(browser.getCurrentUrl()).toContain('/demos/pdf');
        });
        // it('Selecting "View PDF" button opens new window with PDF generated', () => {
        //     let viewPdfButton = element.all(by.buttonText('View PDF'));
        //     browser.wait(protractor.ExpectedConditions.presenceOf(viewPdfButton), 10000);
        //     viewPdfButton.click().then(() => {
        //         browser.getAllWindowHandles().then((handles) => {
        //             let oldWindowHandle = handles[0];
        //             let newWindowHandle = handles[1];
        //             browser.switchTo().window(newWindowHandle).then(function () {
        //                 expect(browser.driver.getCurrentUrl()).toContain('data:application/pdf');
        //                 //Now we need to close this browser window going back to the PDF page
        //                 browser.switchTo().window(oldWindowHandle);
        //                 //Do we need to wait for this to complete?  Testing shows it is currently working.
        //             });
        //         });
        //     });
        // });
        //Could always insert some tests here to look at the content of the PDF
        // it('Selecting "View Modal" button opens modal window', () => {
        //     let viewModalButton = element.all(by.buttonText('View Modal'));
        //     browser.wait(protractor.ExpectedConditions.presenceOf(viewModalButton), 10000);
        //     viewModalButton.click().then(() => {
        //         let title = element(by.css('modal-title'));
        //         browser.wait(protractor.ExpectedConditions.presenceOf(title), 10000);
        //         expect(title.isDisplayed()).toBeTruthy();
        //     });
        // });
    });
}