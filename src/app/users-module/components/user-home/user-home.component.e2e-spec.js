if(browser.params.runAllTests) {
    describe('User Page', () => {
        it('Page should load', () => {
            element(by.cssContainingText("a", "User")).click();
            expect(browser.getCurrentUrl()).toContain('/user');
        });
        it('Selecting user from list populates user and address edit forms', () => {
            element(by.xpath('//user-list//tbody/tr[1]')).click();
            let userForm = element(by.id('user-form'));
            //Allow time for DOM to generate user-form
            // browser.wait(protractor.ExpectedConditions.presenceOf(userForm), 10000);
            browser.sleep(1000);
            expect(userForm.isDisplayed()).toBeTruthy();
        });
        it('Save is disabled if user form has not changed, or fails validation', () => {
            //Assumes a user is already selected from the list
            let saveButton = element(by.xpath('//*[@id="user-form"]/form/button[1]'));
            expect(saveButton.getAttribute('disabled')).toBeTruthy();
        });
        it('Save is enabled once user form has changed', () => {
            //Assumes a user is already selected from the list
            element(by.xpath('//*[@id="user-form"]/form/div[1]/div[1]/input'))
                .clear()
                .sendKeys('Aar')
                .sendKeys(protractor.Key.TAB);
            let saveButton = element(by.xpath('//*[@id="user-form"]/form/button[1]'));
            expect(saveButton.getAttribute('disabled')).toBeFalsy();
        });
        it('Saving user changes updates list', () => {
            //Assumes a user is already selected from the list and its name modified to 'Aar' but not yet saved
            element(by.xpath('//*[@id="user-form"]/form/button[1]')).click();
            //Allow time for user-form to communicate change to user-list
            browser.sleep(5000);
            let rowFirstName = element(by.xpath('//user-list//tbody/tr[1]/td[1]'));
            expect(rowFirstName.getText()).toEqual('Aar');
        });
    });
}