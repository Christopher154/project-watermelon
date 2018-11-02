exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['KainosMapTests.js'],
  capabilities: {
  	'browserName': 'firefox'
  }
};
