import PropTypes from "prop-types"
import useUserStore from "../zustand/Store"
import { Navigate} from "react-router-dom";

const ClientMiddleware = ({ children }) => {
    const { isClient, isVerified } = useUserStore((state) => state.user);


    return isClient && isVerified ? children : isClient && !isVerified ? <Navigate to="/verify_phone_number" /> : <Navigate to="/" />
}

ClientMiddleware.propTypes = {
    children: PropTypes.node
}

export default ClientMiddleware