import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';


import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'About Us',
    paragraph: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  };

  return (
    <section
      {...props}
      className={outerClasses}
      id={"about"}

    >
      <div className="container"  >
        <div className={innerClasses}>

          {/*<SectionHeader data={sectionHeader} className="center-content" />*/}

          <div className={tilesClasses}>
            <div className="row">
              <div className="col-sm-4 about-left">
                <h4 className="about-head"> {sectionHeader.title}</h4>
              </div>
              <div className="col-sm-8 about-content about-text">
                <h6 className="about-company"> Employee Edge </h6>
                <div>
                  <p>
                    HR placement consultancy firm which gives services in consulting, recruitment, manpower and training.
                    Established in 2021 we aim to provide quality services to our customers and help them grow with the workforce required.
                    We are one of the top HR consultants in Delhi NCR and serving more then 10+ clients.
                    Provided Jobs to 100+ candidates across various fields and not charging them a single penny
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;