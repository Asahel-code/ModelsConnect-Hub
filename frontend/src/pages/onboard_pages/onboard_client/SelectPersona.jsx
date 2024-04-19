import PropTypes from "prop-types";
import Navigator from "../../../components/onboarding/Navigator";
import PersonaSelect from "../../../components/onboarding/PersonaSelect";

const SelectPersona = ({ currentStep, selectedPersona, setCurrentStep, setSelectedPersona }) => {
    return (
        <div className="px-8">
            <Navigator
                text={"Select profile"}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
            />
            <div className="mt-5 flex flex-col gap-5">
                <PersonaSelect
                    isSelected={selectedPersona === "organization"}
                    text={"Organization"}
                    onClick={() => setSelectedPersona("organization")}
                />
                <PersonaSelect
                    isSelected={selectedPersona === "self"}
                    text={"Yourself"}
                    onClick={() => setSelectedPersona("self")}
                />
            </div>
        </div>
    )
}

SelectPersona.propTypes = {
    currentStep: PropTypes.number,
    selectedPersona: PropTypes.string,
    setCurrentStep: PropTypes.func,
    setSelectedPersona: PropTypes.func
}


export default SelectPersona