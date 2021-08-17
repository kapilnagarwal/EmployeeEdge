import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from "../elements/Image";
import Carousel from 'react-elastic-carousel';
import Comp1 from '../../assets/images/icici.jpg';
import {Carousels} from '3d-react-carousal';

import One from "../../assets/images/maruti.jpg";
import Two from "../../assets/images/mahindra.jpg";


const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
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
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Our Clients',
    paragraph: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper.'
  };


  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];

  let slides = [
    <img  src="https://picsum.photos/800/300/?random" alt="1" />,
    <img  src="https://picsum.photos/800/301/?random" alt="2" />,
    <img  src="https://picsum.photos/800/302/?random" alt="3" />,
    <img  src="https://picsum.photos/800/303/?random" alt="4" />,
    <img src="https://picsum.photos/800/304/?random" alt="5" /> 
  ];

  return (
    <>
    <section
      {...props}
      className={outerClasses}
      id={"client"}
    >
      <div className="container client_area">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

          <Carousel breakPoints={breakPoints}>
              
              <div className="client_list" style={{ width:'200px' }}> 
            
                <div class="card" align="center">
                  <div class="card-body" style={{ fontWeight:'bold', color: 'black' }}>
                    RM fast card services
                  </div>
                </div>

              </div>

              <div className="client_list" style={{ width:'200px' }}> 
            
                <div class="card" align="center">
                  <div class="card-body" style={{ fontWeight:'bold', color: 'black' }}>
                  Meditrust healthcare Pvt Limited

                  </div>
                </div>
                
              </div>

              <div className="client_list" style={{ width:'200px' }}> 
            
                <div class="card" align="center">
                  <div class="card-body" style={{ fontWeight:'bold', color: 'black' }}>
                  Eminent overseas

                  </div>
                </div>
                
              </div>

              <div className="client_list" style={{ width:'200px' }}> 
            
                <div class="card" align="center">
                  <div class="card-body" style={{ fontWeight:'bold', color: 'black' }}>
                  JMJ infosystems
                  </div>
                </div>
                
              </div>
              
          </Carousel>

          </div>
        </div>
      </div>
      
      
    </section>

   

    </>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;