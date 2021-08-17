import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        paragraph: PropTypes.string
    }).isRequired,
    children: PropTypes.node,
    tag: PropTypes.oneOf(['h1', 'h2', 'h3'])
}

const defaultProps = {
    children: null,
    tag: 'h2'
}

const SectionHeader2 = ({
                           className,
                           data,
                           children,
                           tag,
                           ...props
                       }) => {

    const classes = classNames(
        'section-header',
        className
    );

    const Component = tag;

    return (
        <>
            {(data.title || data.paragraph) &&
            <div
                {...props}
                className={classes}
            >
                <div className="container-xs">
                    {children}
                    <h4 className="heading2">{data.sub_value} {data.title} </h4>
                    {data.paragraph &&
                    <p className="m-0">{data.paragraph}</p>
                    }
                </div>
            </div>
            }
        </>
    );
}

SectionHeader2.propTypes = propTypes;
SectionHeader2.defaultProps = defaultProps;

export default SectionHeader2;