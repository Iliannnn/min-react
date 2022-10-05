import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import '../../min.css';

const Grid = ({ className, children, ...rest }) => {
    const classes = classNames(className, 'row');

    return (
        <div className={classes} {...rest}>
            {children}
        </div>
    );
};

Grid.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
};

const GridColumn = ({ size, className, children, ...rest }) => {
    const classes = classNames(className, 'col', `c${size}`);

    return (
        <div className={classes} {...rest}>
            {children}
        </div>
    );
};

GridColumn.propTypes = {
    size: PropTypes.number.isRequired,
    className: PropTypes.string,
    children: PropTypes.node.isRequired
};

Grid.Column = GridColumn;

export default Grid;