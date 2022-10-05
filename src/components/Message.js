import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import '../../min.css';

const Message = ({ className, children, ...rest }) => {
    const classes = classNames(className, 'msg');

    return (
        <div className={classes} {...rest}>
            {children}
        </div>
    );
};

Message.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default Message;