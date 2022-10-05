import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import '../../min.css';

const Form = ({ children, ...rest }) => {
    return (
        <div {...rest}>
            {children}
        </div>
    );
};

Form.propTypes = {
    children: PropTypes.node.isRequired
};

const FormInput = ({ type, className, ...rest }) => {
    const classes = classNames(className, 'smooth');

    return <input type={type} className={classes} {...rest} />;
};

FormInput.propTypes = {
    type: PropTypes.oneOf(['button', 'checkbox', 'color', 'date', 'datetime-local', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week']),
    className: PropTypes.string
};

FormInput.defaultProps = {
    type: 'text'
};

const FormTextArea = ({ className, ...rest }) => {
    const classes = classNames(className, 'smooth');

    return <textarea className={classes} {...rest} />;
};

FormTextArea.propTypes = {
    className: PropTypes.string
};

const FormAddon = ({ className, children, ...rest }) => {
    const classes = classNames(className, 'addon');

    return <span className={classes} {...rest}>{children}</span>;
};

FormAddon.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
};

Form.Input = FormInput;
Form.TextArea = FormTextArea;
Form.Addon = FormAddon;

export default Form;