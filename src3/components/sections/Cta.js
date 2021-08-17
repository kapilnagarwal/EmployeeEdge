import React,{useEffect, useState} from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Forms from '../../assets/images/forms2.jpg';
import Image from '../elements/Image';
import axios from "axios";
import GoogleMapReact from 'google-map-react';


const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const Cta = ({
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
      'features-tiles section forms_section',
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
    paragraph: ''
  };

  const [formData, setData] = useState();

  const getForm = (event) => {
      event.preventDefault()
      const { name, contact, email, address, website, cand, salary, desc } = event.target.elements;

      axios({
          method:"POST",
          url:'https://sustained-truck-318614.de.r.appspot.com/requestapi/',
          data: {
              name:name.value,
              email:email.value,
              phone:contact.value,
              address:address.value,
              website: website.value,
              cand:cand.value,
              salary:salary.value,
              desc:desc.value
          }
      })
          .then((res) => {
              alert(" Data Has Been Saved ! ")
          })
          .catch((error) => {
              console.log(error)
          })
  }

  return (
      <section
          {...props}
          className={outerClasses}

      >
        <div className="container">
          <div className={innerClasses}>

            {/*<SectionHeader data={sectionHeader} className="center-content" />*/}

            <div>
              <div className="row">

                <div className="col-sm-6 mt-5">
                    <img src={Forms} />
                </div>

                  <div className="col-sm-6 ">
                     <div className="card  mt-5">
                         <div className="card-body">
                            <div>
                                <div>

                                    <span className="request-form"> <strong className="request"> Request </strong>  a call back </span> <br /><br />

                                    <form onSubmit={getForm}>
                                        <div className="form-group">
                                            <input type={"text"} required className="form-control form-control-sm" name={"name"} id={"name"} placeholder="Company Name" />
                                        </div>

                                        <div className="form-group">
                                            <input type={"email"} required name={"email"} id={"email"} className="form-control form-control-sm" placeholder="Contact Email" />
                                        </div>

                                        <div className="form-group">
                                            <input type={"number"} required name={"contact"} id={"contact"} className="form-control form-control-sm" placeholder="Contact Number" />
                                        </div>

                                        <div className="form-group">
                                            <input name={"address"} required id={"äddress"} className="form-control form-control-sm" placeholder="Company Address" />
                                        </div>

                                        <div className="form-group">
                                            <input name={"website"} required id={"website"} className="form-control form-control-sm" placeholder="Company Website" />
                                        </div>

                                        <div className="form-group">
                                            <input name={"cand"} required id={"cand"} className="form-control form-control-sm" placeholder="No Of Candidate" />
                                        </div>

                                        <div className="form-group">
                                            <input name={"salary"} required id={"salary"} className="form-control form-control-sm" placeholder="Desired Salary" />
                                        </div>

                                        <div className="form-group">
                                            <textarea name={"desc"} required id={"desc"} className="form-control form-control-sm" placeholder="Job Description" />
                                        </div>

                                        <div className="form-group">
                                            <button type="submit" className="submit_button"> Submit Request </button>
                                        </div>

                                    </form>

                                </div>
                            </div>
                         </div>
                     </div>
                  </div>

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