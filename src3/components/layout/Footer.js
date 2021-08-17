import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

const Footer = ({
  className,
  topOuterDivider,
  topDivider,
  ...props
}) => {

  const classes = classNames(
    'site-footer center-content-mobile mt-10',
    topOuterDivider && 'has-top-divider',
    className
  );

  const center = {
    lat: 59.95,
    lng: 30.33
  };

  const zoom = 11;


  return (
    <footer
      {...props}
      className={classes}
      id={"contact"}
    >
      <div className="container">
        <div className={
          classNames(
            'site-footer-inner',
            topDivider && 'has-top-divider'
          )}>

          <div className="row">

            <div className="col-sm-2"></div>
            <div className="col-sm-8">
              <div className="card footer_card">
                <div className="row">

                  <div className="col-sm-6 contact_us">
                    <h2> Contact Us </h2>

                    <div>
                      <p className="contact_address">Address</p>
                    </div>

                    <div>
                      <span className="d-flex">
                        <span className="contact_address"> <strong> Office Contact :  </strong> </span>
                        <span className="pl-2 contact_address"> +91 9999999999 </span>
                      </span>
                      <span className="d-flex">
                        <span className="contact_address"> <strong> Office Contact :  </strong> </span>
                        <span className="pl-2 contact_address"> +91 9999999999 </span>
                      </span>
                    </div>

                    <div className="mt-3">

                    </div>

                    <div>
                      <span className="d-flex">
                        <span className="contact_address"> <strong> Email :  </strong> </span>
                        <span className="pl-2 contact_address"> contact@companyname.com </span>
                      </span>
                    </div>
                    <div>
                      <span className="d-flex">
                        <span className="contact_address"> <strong> Inquiries :  </strong> </span>
                        <span className="pl-2 contact_address"> contact@companyname.com </span>
                      </span>
                    </div>

                    <div className="mt-3">

                    </div>


                    <div>
                      <span className="d-flex">
                        <span className="contact_address"> <strong> Operational Hours :  </strong> </span>
                        <span className="pl-2 contact_address"> 24x7 </span>
                      </span>
                    </div>

                  </div>
                  <div className="col-sm-6">
                    <div id="map"></div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-2"></div>



        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;