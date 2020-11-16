Terra.describeViewports('SampleComponent', ['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], () => {
  describe('No Data available', () => {
    it('validates when no data is available', () => {
      browser.url('/orion-dev-site/raw/tests/sample-component-js/sample-component-no-data');
      Terra.validates.element();
    });
  });
});
