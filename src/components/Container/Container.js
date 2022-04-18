import classNames from 'classnames';
import s from './Container.module.scss';
import PropTypes from "prop-types";

const Container = ({children, className}) => {
    return (
        <div className={classNames(s.root, className)}>
            {children}
        </div>
    )
}

Container.propTypes = {
    children: PropTypes.node,
}

export default Container;