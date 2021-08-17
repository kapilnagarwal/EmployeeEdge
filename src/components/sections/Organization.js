import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Carousel from 'react-elastic-carousel';
import Testi from '../../assets/images/testi.jpg';
import axios from "axios";


import Male from "../../assets/images/male.png";
import Female from "../../assets/images/female.png";


const propTypes = {
    ...SectionSplitProps.types
}

const defaultProps = {
    ...SectionSplitProps.defaults
}

const Organization = ({
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

    const outerClassesOne = classNames(
        'features-split section',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const outerClassesTwo = classNames(
        'features-split org-img review',
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

    const [area, setArea] = useState("Customer");

    const changeArea = (value) => {
        setArea(value);
    };

    const sectionHeader = {
        title: 'Reviews',
        sub_value: area
        // paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
    };

    useEffect(() => {
        getData()
    },[]);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    const [data2, setData2] = useState([]);
    const [loading2, setLoading2] = useState(true)



    const getData = () => {
        axios({
            method: 'GET',
            url:'https://sustained-truck-318614.de.r.appspot.com/reviewapi/'
        })
            .then((result) => {
                setData(result.data)
                setLoading(false)
            })
            .catch((error) => {
                setLoading(false)
            })
    }

    const getData2 = () => {
        axios({
            method: 'GET',
            url:'https://sustained-truck-318614.de.r.appspot.com/reviewcanapi/'
        })
            .then((result) => {
                setData2(result.data)
                setLoading2(false)
            })
            .catch((error) => {
                setLoading2(false)
            })
    }

    const url = "http://sustained-truck-318614.de.r.appspot.com"
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
    ];

    let list

    return (
        <>

            <section
                {...props}
                className={outerClassesTwo}
            >
                <div className="container">
                    <div className={innerClasses}>
                        <SectionHeader data={sectionHeader} header_side={area} className="center-content" />

                        <div className="row" align="center">
                            <div className="col-sm-6">
                                <button className={area == "Customer" ? "client_button_active" : "client_button"} onClick={() => changeArea('Customer')}> Customer </button>
                            </div>
                            <div className="col-sm-6">
                                <button className={area == "Candidate" ? "candidate_button_active" : "candidate_button"} onClick={() => changeArea('Candidate')}> Candidate </button>
                            </div>
                        </div>

                        <div className="mt-5">

                            {(() => {
                                if (area == "Customer") {
                                    return (
                                        <>

                                        <Carousel>

                                            <div className="">
                                                <div className="row">
                                                    <div className="col-sm-8 text_area">
                                                        <h2>
                                                            Our Happy Candidates
                                                        </h2>
                                                        <p className="pl-3 pr-3 client-area">
                                                            Thanks to Employee Edge to give me this opportunity to work... Really helpful throughout the joining
                                                        </p>
                                                        <h4 className="pl-3"> RM fast card services </h4>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="card review card">
                                                            <div className="card-body">
                                                                <img src={Male} className="testi_image" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="">
                                                <div className="row">
                                                    <div className="col-sm-8 text_area">
                                                        <h2>
                                                            Our Happy Candidates
                                                        </h2>
                                                        <p className="pl-3 pr-3 client-area">
                                                            One of the best consultancies. Got placed for a great client through Employee Edge.
                                                        </p>
                                                        <h4 className="pl-3"> Meditrust healthcare Pvt Limited </h4>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="card review card">
                                                            <div className="card-body">
                                                                <img src={Female} className="testi_image" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </Carousel>

                                        </>
                                    )
                                } else if (area == "Candidate") {
                                    return (
                                        <>
                                            <Carousel>

                                                <div className="">
                                                    <div className="row">
                                                        <div className="col-sm-8 text_area">
                                                            <h2>
                                                                Our Happy Candidates
                                                            </h2>
                                                            <p className="pl-3 pr-3 client-area">
                                                                Great consultancy firm, provides good candidates and offer great services
                                                            </p>
                                                            <h4 className="pl-3"> Eminent overseas </h4>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <div className="card review card">
                                                                <div className="card-body">
                                                                    <img src={Male} className="testi_image" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="">
                                                    <div className="row">
                                                        <div className="col-sm-8 text_area">
                                                            <h2>
                                                                Our Happy Candidates
                                                            </h2>
                                                            <p className="pl-3 pr-3 client-area">
                                                                Helped in getting experienced candidates within a span of time. Thanks to Employee Edge and supporting members
                                                            </p>
                                                            <h4 className="pl-3"> JMJ infosystems </h4>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <div className="card review card">
                                                                <div className="card-body">
                                                                    <img src={Female} className="testi_image" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </Carousel>
                                        </>
                                    )
                                } else { }
                            })()}

                        </div>

                    </div>
                </div>


            </section>
        </>
    );
}

Organization.propTypes = propTypes;
Organization.defaultProps = defaultProps;

export default Organization;