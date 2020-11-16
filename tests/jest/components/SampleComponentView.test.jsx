import React from 'react';
import { mockIntl } from 'terra-enzyme-intl';
import { ApplicationIntlContext } from 'orion-application/lib/application-intl';
import SampleComponentView from '../../../src/sample-component/components/SampleComponentView';

it('should render a SampleComponentView with no data', () => {
  jest.spyOn(React, 'useContext').mockImplementation((contextType) => {
    if (contextType === ApplicationIntlContext) {
      return mockIntl;
    }
    return undefined;
  });
  const sampleComponentView = shallow(<SampleComponentView />);
  expect(sampleComponentView.first().shallow()).toMatchSnapshot();
});

it('should render a SampleComponentView that has succeeded with a valid SampleComponentEngine', () => {
  jest.spyOn(React, 'useContext').mockImplementation((contextType) => {
    if (contextType === ApplicationIntlContext) {
      return mockIntl;
    }
    return undefined;
  });
  const sampleComponentView = shallow(<SampleComponentView exampleData="SampleComponent" />);
  expect(sampleComponentView.first().shallow()).toMatchSnapshot();
});
