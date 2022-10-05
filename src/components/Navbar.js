import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import '../../min.css';

function focus(e) {
    e.target.focus();
}

const Navbar = ({ className, children, ...rest }) => {
    const classes = classNames(className, 'nav');

    return (
        <nav className={classes} id="navbar" tabIndex={-1} {...rest} onClick={focus}>
            <div className="container">
                {children}
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
};

const NavbarName = ({ href, className, children, ...rest }) => {
    const classes = classNames(className, 'pagename', 'current');

    return (
        <a className={classes} id="pagename" href={href} {...rest}>
            {children}
        </a>
    );
};

NavbarName.propTypes = {
    href: PropTypes.string.isRequired,
    className: PropTypes.string,
    children: PropTypes.node.isRequired
};

const NavbarCloseButton = ({ className, children, ...rest }) => {
    const classes = classNames(className, 'btn-close', 'btn', 'btn-sm');

    return (
        <button className={classes} {...rest}>
            {children}
        </button >
    );
};

NavbarCloseButton.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
};

Navbar.Name = NavbarName;
Navbar.CloseButton = NavbarCloseButton;

export default Navbar;