import classNames from 'classnames';
import s from './Container.module.css';
import PropTypes from "prop-types";

const Layout = ({children, className}) => {
    return (
        <div className={classNames(s.root, className)}>
            {children}
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout;