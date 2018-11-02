describe('KainosMap Courses list', function() {
	it('should have a title, and table should be populated', function() {
		browser.get('http://localhost:4200/home');

		var titleField = element(by.id('title'));
		var courseTitle1Field = element(by.id('courseTitle1')); 
		expect(titleField.getText()).toEqual('Title');
		expect(courseTitle1Field.getText());

		courseTitle1Field.click().then(function(){
		browser.waitForAngular();

		var courseNameField = element(by.id('courseName'));
		var courseDetailsField = element(by.id('courseDetails'));
		var courseDateField = element(by.id('courseDate'));
		var courseLocationField = element(by.id('courseLocation'));
		var courseTrainerField = element(by.id('courseTrainer'));
		var courseWhoField = element(by.id('courseWho'));
		var courseDurationField = element(by.id('courseDuration'));
		expect(courseNameField.getText());
		expect(courseDetailsField.getText());
		expect(courseDateField.getText());
		expect(courseLocationField.getText());
		expect(courseTrainerField.getText());
		expect(courseWhoField.getText());
		expect(courseDurationField.getText());
		});
	});
});