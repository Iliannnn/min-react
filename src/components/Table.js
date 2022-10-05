import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import '../../min.css';

const Table = ({ className, children, ...rest }) => {
    const classes = classNames(className, 'table');
    
    return (
        <table className={classes} {...rest}>
            {children}
        </table>
    );
};

Table.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default Table;