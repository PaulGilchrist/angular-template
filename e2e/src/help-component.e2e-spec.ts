import { browser, by, element } from 'protractor';

if (browser.params.runAllTests) {
    describe('Help Page', () => {
        it('Page should load', () => {
            element(by.cssContainingText('a', 'Help')).click();
            expect(browser.getCurrentUrl()).toContain('/help');
        });
        it('"Git Branching" button should scroll down page to proper section', () => {
            element(by.linkText('Git Branching')).click();
            expect(browser.getCurrentUrl()).toContain('/help/topic-gitBranching');
        });
    });
}
