import React, { useContext, useState, useEffect } from 'react';
import { OrionRequestorContext } from 'orion-application/lib/orion-requestor';
import { ApplicationIntlContext } from 'orion-application/lib/application-intl';
import ApplicationLoadingOverlay from 'orion-application/lib/application-loading-overlay';
import StatusView from 'terra-status-view';
import SampleComponentView from './SampleComponentView';

/**
 * A sample component container used to retrieve example information.
 */
const SampleComponentContainer = () => {
  // Use Orion Requestor to make services calls. Orion Requestor is provided via context by orion application.
  const orionRequestor = useContext(OrionRequestorContext);
  // Internationalization is provided via context by orion application.
  const intl = React.useContext(ApplicationIntlContext);

  // Setup state hooks.
  const [requestState, setRequestState] = useState({ isLoading: true, hasError: false });

  /**
   * Fetch example data prior to mounting the view.
   * Note: The usage of empty brackets in the useEffect hook ensures the request is only made on the initial mount.
   */
  useEffect(() => {
    const { request, cancelRequest } = orionRequestor.get({
      url: '', // An empty string uses the current route (/sample_component/<id>/).
      headers: { Accept: 'application/json' },
    });

    request
      .then(({ data }) => {
        setRequestState({ isLoading: false, exampleData: data.data });
      })
      .catch(() => {
        setRequestState({ isLoading: false, hasError: true });
      });

    // Cancel the request if the component is unmounted prior to completion.
    return () => {
      cancelRequest();
    };
  }, [orionRequestor]);

  const { isLoading, hasError, exampleData } = requestState;

  // If the data retrieval was unsuccessful render an error view.
  if (hasError) {
    const errorMessage = intl.formatMessage({ id: 'sample-component-engine.sample-component-failed-to-load' });

    return <StatusView variant="error" message={errorMessage} isGlyphHidden />;
  }

  // Display a loading indicator to the user while the data is retrieved.
  if (isLoading) {
    return <ApplicationLoadingOverlay isOpen backgroundStyle="clear" />;
  }

  // If the data retrieval was successful render the example view.
  return <SampleComponentView exampleData={exampleData} />;
};

export default SampleComponentContainer;
