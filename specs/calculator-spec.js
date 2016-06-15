// Test step 0 protractor tutorial http://www.protractortest.org/#/tutorial#step-0-write-a-test
describe('Protractor Demo App', function() {
    it('should have a title', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');

        expect(browser.getTitle()).toEqual('Super Calculator');
    });
});