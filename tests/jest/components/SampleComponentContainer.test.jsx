import React from 'react';
import SampleComponentContainer from '../../../src/sample-component/components/SampleComponentContainer';

it('should render a SampleComponentContainer with a default SampleComponentView', () => {
  const testContainer = <SampleComponentContainer />;
  expect(shallow(testContainer)).toMatchSnapshot();
});
