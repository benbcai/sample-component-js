class ExampleService {
  beforeSession() {
    console.log('*********Executing "beforeSession" hook in Example Service*********');
    console.log('*********browser object in "beforeSession" hook*********', global.browser);
  }

  before() {
    console.log('*********Executing "before" hook in Example Service*********');

    // Custom command that iterates the describe block for each given form factor.
    global.describeWithFormFactors = (title, formFactors, fn) => {
      formFactors.forEach(formFactor => global.describe(`[${formFactor}]`, () => {
        global.before(() => {
          // Call global.browser.setWindowSize to set the form factor height and width.
        });

        global.describe(title, fn);
        
        global.after(() => {
          // Call global.browser.setWindowSize to restore to the original window size.
        });
      }));
    };
  }
}

module.exports = ExampleService;
