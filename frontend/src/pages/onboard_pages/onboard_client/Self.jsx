import PropTypes from "prop-types";
import { FormControl, FormLabel } from "@chakra-ui/react";
import Navigator from "../../../components/onboarding/Navigator";
import CustomInput, { CustomSelect } from "../../../components/general/CustomInput";
import { counties } from "../../../constants/counties";

const Self = ({ currentStep, setCurrentStep }) => {

    return (
        <div>
            <div className="px-8">
                <Navigator
                    text={"Fill in details"}
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                />
            </div>
            <div className="py-4 px-8 border-gray-300">
                <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                    <FormControl isRequired>
                        <FormLabel fontSize={"sm"}>First name</FormLabel>
                        <CustomInput
                            placeholder="Enter your first name"
                            name="firstName"
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel fontSize={"sm"}>Last name</FormLabel>
                        <CustomInput
                            placeholder="Enter your last name"
                            name="lastName"
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel fontSize={"sm"}>County</FormLabel>
                        <CustomSelect
                            placeholder={"Select county"}
                            name={"county"}
                        >
                            {counties.map((county, index) => (
                                <option key={index} value={county}>{county}</option>
                            ))}
                        </CustomSelect>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel fontSize={"sm"}>City/Town</FormLabel>
                        <CustomInput
                            placeholder="Enter your city"
                            name="city"
                        />
                    </FormControl>
                </div>
            </div>
        </div>
    )
}

Self.propTypes = {
    currentStep: PropTypes.number,
    setCurrentStep: PropTypes.func,
}

export default Self