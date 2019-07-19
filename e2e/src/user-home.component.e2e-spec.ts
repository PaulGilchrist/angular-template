import { browser, by, element, ExpectedConditions, Key } from 'protractor';

if (browser.params.runAllTests) {
    describe('User Page', () => {
        it('Page should load', () => {
            element(by.cssContainingText('a', 'User')).click();
            expect(browser.getCurrentUrl()).toContain('/user');
        });
        it('Selecting user from list populates user and address edit forms', () => {
            browser.sleep(1000);
            const myElement = element(by.xpath('//user-list//tbody/tr[1]'));
            browser.wait(ExpectedConditions.elementToBeClickable(myElement), 10000);
            myElement.click();
            const userForm = element(by.id('user-form'));
            browser.wait(ExpectedConditions.presenceOf(userForm), 10000);
            expect(userForm.isDisplayed()).toBeTruthy();
        });
        it('Save is disabled if user form has not changed, or fails validation', () => {
            // Assumes a user is already selected from the list
            const saveButton = element(by.xpath('//*[@id="user-form"]/form/button[1]'));
            expect(saveButton.getAttribute('disabled')).toBeTruthy();
        });
        it('Save is enabled once user form has changed', () => {
            // Assumes a user is already selected from the list
            const myElement = element(by.xpath('//*[@id="user-form"]/form/div[1]/div[1]/input'));
            myElement.clear();
            myElement.sendKeys('Aar');
            myElement.sendKeys(Key.TAB);
            const saveButton = element(by.xpath('//*[@id="user-form"]/form/button[1]'));
            expect(saveButton.getAttribute('disabled')).toBeFalsy();
        });
        // it('Saving user changes updates list', () => {
        // 	// Assumes a user is already selected from the list and its name modified to 'Aar' but not yet saved
        // 	const myElement = element(by.xpath('//*[@id="user-form"]/form/button[1]'));
        // 	myElement.click();
        // 	const rowFirstName = element(by.xpath('//user-list//tbody/tr[1]/td[1]'));
        // 	expect(rowFirstName.getText()).toEqual('Aar');
        // });
    });
}
