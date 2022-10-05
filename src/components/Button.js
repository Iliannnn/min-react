import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import '../../min.css';

const Button = ({ variant, small, className, children, ...rest }) => {
    const classes = classNames(className, 'btn', variant, { 'btn-sm': small }, 'smooth');

    return (
        <a role="button" className={classes} {...rest}>
            {children}
        </a>
    );
};

Button.propTypes = {
    variant: PropTypes.oneOf(['btn-a', 'btn-b', 'btn-c']),
    small: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default Button;