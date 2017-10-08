if(browser.params.runAllTests) {
    describe('Editor Page', () => {
        it('Page should load', () => {
            element(by.cssContainingText("a", "Editor")).click();
            expect(browser.getCurrentUrl()).toContain('/demos/editor');
        });
        it('Updating WYSIWYG should update mail merge', () => {
            let el = element(by.xpath('//*[@id="cke_1_contents"]/iframe'));
            browser.driver.switchTo().frame(el.getWebElement()).then(() => {
                let doc = browser.driver.findElement(protractor.By.xpath('/html/body'));
                doc.sendKeys('[DeveloperName]\n');
                browser.switchTo().defaultContent().then(() => {
                    //Need to allow time for iFrame to change parent DOM
                    browser.sleep(1000);
                    let mergedContentHeader = element.all(by.xpath('//*[@id="mergedContent"]/h1')).first();
                    expect(mergedContentHeader.getAttribute('innerHTML')).toContain('Paul Gilchrist');
                });
            });
        });
    });
}