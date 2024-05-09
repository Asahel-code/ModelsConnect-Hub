import PropTypes from "prop-types"
import useUserStore from "../zustand/Store"
import { Navigate } from "react-router-dom";

const AdminMiddleware = ({ children }) => {
    const { isAdmin } = useUserStore((state) => state.user);

    return isAdmin ? children : <Navigate to="/" />
}

AdminMiddleware.propTypes = {
    children: PropTypes.node
}

export default AdminMiddleware