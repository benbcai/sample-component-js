import React from 'react';
import ApplicationBase from 'orion-application/lib/application-base';
import { ApplicationSessionProvider } from 'orion-application/lib/application-session';
import ApplicationNavigation from 'orion-application/lib/application-navigation';
import SampleComponentContainer from './SampleComponentContainer';

const SampleComponentApplication = () => (
  <ApplicationBase
    applicationName="SampleComponent"
    applicationVersion="0.0.0"
    applicationAboutPageUrl="https://github.cerner.com/orion/sample-component-js.git"
    applicationHelpPageUrl="https://github.cerner.com/orion/sample-component-js.git"
    renderSessionProvider={children => (
      <ApplicationSessionProvider>
        {children}
      </ApplicationSessionProvider>
    )}
  >
    <ApplicationNavigation>
      <SampleComponentContainer />
    </ApplicationNavigation>
  </ApplicationBase>
);

export default SampleComponentApplication;
