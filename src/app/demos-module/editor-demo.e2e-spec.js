// if(browser.params.runAllTests) {
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
                browser.sleep(5000);
                browser.driver.switchTo().defaultContent().then(() => {
                    let wysiwygHeader = element(by.xpath('//editor-demo/div/div/div[2]/div/h1'));
                    expect(wysiwygHeader.getAttribute('innerHTML')).toContain('Paul Gilchrist');
                });
            });
        });
    });
// }