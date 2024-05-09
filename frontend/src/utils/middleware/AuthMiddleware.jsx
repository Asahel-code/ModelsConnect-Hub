import PropTypes from "prop-types"
import useUserStore from "../zustand/Store"
import { Navigate } from "react-router-dom";

const AuthMiddleware = ({ children }) => {
    const { token } = useUserStore((state) => state.user);


    return token ? children  : <Navigate to="/login" />
}

AuthMiddleware.propTypes = {
    children: PropTypes.node
}

export default AuthMiddleware