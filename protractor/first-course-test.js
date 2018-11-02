describe('KainosMap Courses list', function() {
  it('should have a title, and table should be populated', function() {
    browser.get('http://localhost:4200/list');

    expect(element(by.id('title')).getText()).toEqual('Title');
    expect(element(by.id('courseTitle1')).getText());
  });
});
