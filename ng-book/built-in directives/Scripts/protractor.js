/**
 * Created by Dave on 29/06/2014.
 */
var switchElem = element(by.css('[ng-switch]'));
var select = element(by.model('selection'));

it('should start in settings', function() {
    expect(switchElem.getText()).toMatch(/Settings Div/);
});
it('should change to home', function() {
    select.element.all(by.css('option')).get(1).click();
    expect(switchElem.getText()).toMatch(/Home Span/);
});
it('should select default', function() {
    select.element.all(by.css('option')).get(2).click();
    expect(switchElem.getText()).toMatch(/default/);
});