import PropTypes from 'prop-types'
import Footer from '../Footer'
import Header from '../Header'
import { useLocation } from 'react-router-dom'

const PrimaryLayout = ({ children }) => {

    const { pathname } = useLocation();
    return (
        <>
            <Header />
            <div className={pathname != "/" ? "mt-20": ""}>
                {children}
            </div>
            <Footer />
        </>
    )
}

PrimaryLayout.propTypes = {
    children: PropTypes.element.isRequired
}

export default PrimaryLayout