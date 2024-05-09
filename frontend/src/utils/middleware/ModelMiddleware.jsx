import PropTypes from "prop-types"
import useUserStore from "../zustand/Store"
import { Navigate } from "react-router-dom";

const ModelMiddleware = ({ children }) => {
    const { isModel, isVerified } = useUserStore((state) => state.user);

    return isModel && isVerified ? children : isModel && !isVerified ? <Navigate to="/verify_phone_number" /> : <Navigate to="/" />
}

ModelMiddleware.propTypes = {
    children: PropTypes.node
}

export default ModelMiddleware