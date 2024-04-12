import PropTypes from "prop-types";
import Header from "../Header"

const AuthLayout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

AuthLayout.propTypes = {
    children: PropTypes.element.isRequired
}

export default AuthLayout