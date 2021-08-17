import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
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
    'features-split section back-img',
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
    title: '',
    paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  };

  return (

    <section
      {...props}
      className={outerClasses}
    >
      <div className="container" align="center">
        <div className={innerClasses}>
          {/*<SectionHeader data={sectionHeader} className="center-content" />*/}


          <div className={splitClasses}>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left info-box" align="center" data-reveal-container=".split-item">
                <div>
                  <Image
                    className="card-icon"
                    src={require('./../../assets/images/suit.png')}
                    alt="Features split 01"
                    width={50}
                    height={50} />
                </div>
                <div>
                  <h4> Managed Services </h4>
                </div>
              </div>

              <div className="split-item-content center-content-mobile reveal-from-left info-box" align="center" data-reveal-container=".split-item">
                <div>
                  <Image
                      className="card-icon"
                      src={require('./../../assets/images/ai.png')}
                      alt="Features split 01"
                      width={50}
                      height={50} />
                </div>
                <div>
                  <h4> Artificial Intelligence </h4>
                </div>
              </div>
            </div>
          </div>


          <div className={splitClasses}>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left info-box" align="center" data-reveal-container=".split-item">
                <div>
                  <Image
                      className="card-icon"
                      src={require('./../../assets/images/marketing.png')}
                      alt="Features split 01"
                      width={50}
                      height={50} />
                </div>
                <div>
                  <h4> Performance Marketing </h4>
                </div>
              </div>

              <div className="split-item-content center-content-mobile reveal-from-left info-box" align="center" data-reveal-container=".split-item">
                <div>
                  <Image
                      className="card-icon"
                      src={require('./../../assets/images/innovation.png')}
                      alt="Features split 01"
                      width={50}
                      height={50} />
                </div>
                <div>
                  <h4> Staff Augmentation </h4>
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