import PropTypes from "prop-types";

const OnboardingLayout = ({ children }) => {
    return (
        <div className="bg-gradient-to-b from-faded_yellow to-white">
            <div className="flex justify-center items-center h-screen">
                {children}
            </div>
        </div>
    )
}

OnboardingLayout.propTypes = {
    children: PropTypes.element.isRequired
}

export default OnboardingLayout