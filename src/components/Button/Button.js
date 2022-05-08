import s from './Button.module.scss';
import PropTypes from 'prop-types';
import classNames from "classnames";

const Button = ({
                    children, className, isBlack, onClick
                }) => {
    return (
        <button
            className={
                classNames(s.root, className, {[s.black]: isBlack})
            }
type="button"
            onClick={onClick}>
            {children}
        </button>
    )
};

Button.defaultProps = {
    isBlack: false,
};

Button.propTypes = {
    children: PropTypes.node,
    isBlack: PropTypes.bool,
};

export default Button;