import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom ',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner form-content',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div
          className={innerClasses}
        >
          <div className="cta-slogan">
            <h3 className="m-0">
              Have any questions?<br />
              Request a call back
              I would like to discuss:
              </h3>
          </div>
          <div className="cta-action">

            <div className="form-group">
              <select className="form-control" id="exampleFormControlSelect1">

                <option>Digital Marketing</option>
                <option>Managed Services</option>
                <option>Artificial Intelligence</option>
                <option>Staff Augmentation</option>

              </select>
            </div>


            <div className="form-group">
              <input type="text" className="form-control" placeholder="Name" />
            </div>

            <div className="form-group">
              <input type="email" className="form-control" placeholder="Email" />
            </div>

            <div className="form-group">
              <input type="number" className="form-control" placeholder="Phone" />
            </div>

            <div className="form-group">
              <button className="button button-request"> Request Now </button>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;