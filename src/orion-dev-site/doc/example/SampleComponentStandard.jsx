import React from 'react';
import OrionRequestorMockProvider from 'orion-application/lib/orion-requestor/OrionRequestorMockProvider';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import SampleComponentContainer from 'sample-component-js/lib/sample-component/components/SampleComponentContainer';

export default () => (
  <OrionRequestorMockProvider
    mock={(instance) => {
      instance.onGet().reply(200, {
        data: 'Example Data.',
      });
    }}
  >
    <SampleComponentContainer />
  </OrionRequestorMockProvider>
);
