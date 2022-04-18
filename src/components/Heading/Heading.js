import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import s from './Heading.module.scss';

const Heading = ({
                     level = 1,
                     className,
                     black = false,
                     backline,
                     children,
                 }) => {
    const el = `h${level}`
    return React.createElement(el, {
        className: classNames(s.root,
            className,
            s[`level${level}`],
            {
            [s.colorBlack]: black
        },
            [s.backline]: backline)
    }, children)
}

Heading.defaultProps = {
    level: 1,
    black: false,
}

Heading.propTypes = {
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
    className: PropTypes.string,
    black: PropTypes.bool,
    backline: PropTypes.bool,
    children: PropTypes.node,
}

export default Heading; 