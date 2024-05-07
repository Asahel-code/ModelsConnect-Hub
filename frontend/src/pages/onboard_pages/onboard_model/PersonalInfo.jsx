import PropTypes from "prop-types";
import Navigator from "../../../components/onboarding/Navigator";
import { FormControl, FormLabel } from "@chakra-ui/react";
import CustomInput, { CustomSelect } from "../../../components/general/CustomInput";

const PersonalInfo = ({ currentStep, setCurrentStep }) => {
  return (
    <div className='px-8'>
      <Navigator
        text={"Personal Details"}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      <div className="py-4">
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
              placeholder="Enter your first name"
              name="firstName"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontSize={"sm"}>County</FormLabel>
            <CustomSelect
              placeholder={"Select county"}
              name={"county"}
            >
              <option>Nairobi</option>
            </CustomSelect>
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontSize={"sm"}>City</FormLabel>
            <CustomInput
              placeholder="Enter your city"
              name="city"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontSize={"sm"}>Gender</FormLabel>
            <CustomSelect
              placeholder={"Select your gender"}
              name={"gender"}
            >
              <option value={"male"}>Male</option>
              <option value={"female"}>Male</option>
            </CustomSelect>
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontSize={"sm"}>Height</FormLabel>
            <CustomInput
              placeholder="Enter your height in inches"
              name="height"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontSize={"sm"}>Skin tone</FormLabel>
            <CustomSelect
              placeholder={"Select your skin tone"}
              name={"skinTone"}
            >
              <option value={"light"}>Light</option>
              <option value={"light to medium"}>Light to Medium</option>
              <option value={"medium"}>Medium</option>
              <option value={"olive"}>Olive</option>
              <option value={"golden"}>Golden</option>
              <option value={"medium to dark"}>Medium to Dark</option>
              <option value={"dark"}>Dark</option>
              <option value={"deep dark"}>Deep Dark</option>
              <option value={"reddish"}>Reddish</option>
              <option value={"porcelain"}>Porcelain</option>
            </CustomSelect>
          </FormControl>
        </div>
      </div>
    </div>
  )
}

PersonalInfo.propTypes = {
  currentStep: PropTypes.number,
  setCurrentStep: PropTypes.func,
}

export default PersonalInfo