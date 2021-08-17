import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Carousel from 'react-elastic-carousel';
import Testi from '../../assets/images/testi.jpg';

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
        'features-split org-img',

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


    const [area, setArea] = useState("client");

    const changeArea = (value) => {
        setArea(value);
    };

    const sectionHeader = {
        title: 'Reviews',
        // paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
    };

    return (
        <>

            <section
                {...props}
                className={outerClassesTwo}
            >
                <div className="container">
                    <div className={innerClasses}>
                        <SectionHeader data={sectionHeader} className="center-content" />

                        <div className="row" align="center">
                            <div className="col-sm-6">
                                <button className={area == "client" ? "client_button_active" : "client_button"} onClick={() => changeArea('client')}> Client </button>
                            </div>
                            <div className="col-sm-6">
                                <button className={area == "candidate" ? "candidate_button_active" : "candidate_button"} onClick={() => changeArea('candidate')}> Candidate </button>
                            </div>
                        </div>

                        <div className="mt-5">

                            {(() => {
                                if (area == "client") {
                                    return (
                                        <>
                                            <Carousel dots={false}>

                                                <div className="client_list">
                                                    <div className="row">
                                                        <div className="col-sm-4">
                                                            <img src={Testi} className="testi_image" />
                                                        </div>
                                                        <div className="col-sm-8 text_area">
                                                            <h4 className="pl-3"> Client Name </h4>
                                                            <p className="pl-3 pr-3 client-area">
                                                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ."
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="client_list">
                                                    <div className="row">
                                                        <div className="col-sm-4">
                                                            <img src={Testi} className="testi_image" />
                                                        </div>
                                                        <div className="col-sm-8 text_area">
                                                            <h4 className="pl-3"> Client Name </h4>
                                                            <p className="pl-3 pr-3 client-area">
                                                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ."
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </Carousel>
                                        </>
                                    )
                                } else if (area == "candidate") {
                                    return (
                                        <>
                                            <Carousel>

                                                <div className="client_list">
                                                    <div className="row">
                                                        <div className="col-sm-4">
                                                            <img src={Testi} className="testi_image" />
                                                        </div>
                                                        <div className="col-sm-8 text_area">
                                                            <h4 className="pl-3"> Candidate Name </h4>
                                                            <p className="pl-3 pr-3 client-area">
                                                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ."
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="client_list">
                                                    <div className="row">
                                                        <div className="col-sm-4">
                                                            <img src={Testi} className="testi_image" />
                                                        </div>
                                                        <div className="col-sm-8 text_area">
                                                            <h4 className="pl-3"> Candidate Name </h4>
                                                            <p className="pl-3 pr-3 client-area">
                                                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ."
                                                            </p>
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