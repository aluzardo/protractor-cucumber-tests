// Test step 1 protractor tutorial http://www.protractortest.org/#/tutorial#step-1-interacting-with-elements
describe('Protractor Demo App', function() {
    it('should add one and two', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(1);
        element(by.model('second')).sendKeys(2);

        element(by.id('gobutton')).click();

        expect(element(by.binding('latest')).getText()).
        toEqual('3');
    });
});