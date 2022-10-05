import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import '../../min.css';

const Table = ({ className, children, ...rest }) => {
    const classes = classNames(className, 'ico');

    return (
        <i className={classes} {...rest}>
            {children}
        </i>
    );
};

Table.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default Table;