import PropTypes from "prop-types";
import { FaArrowLeftLong } from "react-icons/fa6";

const Navigator = ({ text, currentStep, setCurrentStep }) => {
    return (
        <div
            className={`w-fit flex items-center gap-3 ${currentStep > 0 && "cursor-pointer"}`}
            onClick={() => currentStep > 0 && setCurrentStep(currentStep - 1)}
        >
            <FaArrowLeftLong className={currentStep > 0 ? "text-primary_color" : "text-gray-300"} />
            <p className="text-primary_color font-semibold">{text}</p>
        </div>
    )
}

Navigator.propTypes = {
    text: PropTypes.string,
    currentStep: PropTypes.number,
    setCurrentStep: PropTypes.func
}

export default Navigator