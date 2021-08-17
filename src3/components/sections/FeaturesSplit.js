import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader2 from './partials/SectionHeader2';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section services_content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Our Services',
    // paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  };

  return (

    <section
      {...props}
      className={outerClasses}
    >
      <div className="container" align="center">
        <div className={innerClasses}>
          <SectionHeader2 data={sectionHeader} className="center-content" />
          <div className="row">

            <div className="col-sm-4">
                <div className="card service_card">
                  <div className="card-body">
                      <div><i className="fa fa-briefcase" aria-hidden="true"></i></div>
                      <div> <h3 className="service_head"> Consulting </h3> </div>
                  </div>
                </div>
            </div>
            <div className="col-sm-4">
              <div className="card service_card">
                <div className="card-body">
                  <div><i className="fa fa-handshake-o" aria-hidden="true"></i></div>
                  <div> <h3 className="service_head"> Recruitment </h3> </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card service_card">
                <div className="card-body">
                  <div><i className="fa fa-users" aria-hidden="true"></i></div>
                  <div> <h3 className="service_head"> Man Power </h3> </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;