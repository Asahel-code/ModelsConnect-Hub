import PropTypes from "prop-types";
import { FaArrowRightLong } from "react-icons/fa6";

const PersonaSelect = ({ isSelected, text, ...rest }) => {
    return (
        <div
            className={`w-80 border py-3 px-4 flex justify-between items-center rounded-lg cursor-pointer ${isSelected ? "bg-faded_yellow border-primary_color" : "bg- border-gray-200"}`}
            {...rest}
        >
            <p className="text-secondary_color">{text}</p>
            <FaArrowRightLong />
        </div>
    )
}

PersonaSelect.propTypes = {
    isSelected: PropTypes.bool,
    text: PropTypes.string
}

export default PersonaSelect