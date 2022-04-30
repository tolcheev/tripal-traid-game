import s from './Text.module.scss';
import PropTypes from 'prop-types';
import React from "react";
import classNames from "classnames";

const Text = ({
                  element, children, strong, italic, disabled
              }) => {
    const el = `${element}`
    return React.createElement(el, {
        className: classNames(s.root, {
            [s.strong]: strong,
            [s.italic]: italic,
            [s.disabled]: disabled
        })
    }, children);
};

Text.propTypes = {
    element: PropTypes.oneOf(['div', 'p', 'span']).isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    strong: PropTypes.bool,
    italic: PropTypes.bool,
    disabled: PropTypes.bool
}

export default Text;