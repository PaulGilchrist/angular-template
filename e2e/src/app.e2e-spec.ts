import { browser, by, element } from 'protractor';

if (browser.params.runAllTests) {
    it('should display welcome message', () => {
      expect(element(by.css('p')).getText()).toContain('This template was designed using Angular CLI');
    });
}
