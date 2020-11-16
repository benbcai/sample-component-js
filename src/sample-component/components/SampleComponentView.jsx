import React from 'react';
import PropTypes from 'prop-types';
import { ApplicationIntlContext } from 'orion-application/lib/application-intl';
import ContentContainer from 'terra-content-container';
import Header from 'terra-action-header';
import Spacer from 'terra-spacer';
import StatusView from 'terra-status-view';

const propTypes = {
  /**
   * Example data.
   */
  exampleData: PropTypes.string,
};

const SampleComponentView = ({ exampleData }) => {
  const intl = React.useContext(ApplicationIntlContext);
  const headerTitle = intl.formatMessage({ id: 'sample-component-engine.sample-component' });

  return (
    <ContentContainer header={<Header title={headerTitle} />}>
      <Spacer paddingTop="large+1" paddingBottom="large+1" paddingLeft="large+1" paddingRight="large+1">
        {exampleData}
        {!exampleData && (
          <StatusView
            variant="no-data"
            isGlyphHidden
            message={intl.formatMessage({ id: 'sample-component-engine.no-sample-component' })}
          />
        )}
      </Spacer>
    </ContentContainer>
  );
};

SampleComponentView.propTypes = propTypes;

export default SampleComponentView;
