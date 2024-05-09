import PropTypes from "prop-types";
import Navigator from "../../../components/onboarding/Navigator";
import { FormControl, FormLabel } from "@chakra-ui/react";
import CustomInput, { CustomSelect } from "../../../components/general/CustomInput";
import { counties } from "../../../constants/counties";

const PersonalInfo = ({ currentStep, setCurrentStep, modelState, handleChange }) => {
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
              value={modelState?.firstName}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontSize={"sm"}>Last name</FormLabel>
            <CustomInput
              placeholder="Enter your first name"
              name="lastName"
              value={modelState?.lastName}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontSize={"sm"}>County</FormLabel>
            <CustomSelect
              placeholder={"Select county"}
              name={"county"}
              value={modelState?.county}
              onChange={handleChange}
            >
              {counties.map((county, index) => (
                <option key={index} value={county}>{county}</option>
              ))}
            </CustomSelect>
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontSize={"sm"}>City</FormLabel>
            <CustomInput
              placeholder="Enter your city"
              name="city"
              value={modelState?.city}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontSize={"sm"}>Gender</FormLabel>
            <CustomSelect
              placeholder={"Select your gender"}
              name={"gender"}
              value={modelState?.gender}
              onChange={handleChange}
            >
              <option value={"male"}>Male</option>
              <option value={"female"}>Female</option>
            </CustomSelect>
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontSize={"sm"}>Height</FormLabel>
            <CustomInput
              placeholder="Enter your height in inches"
              name="height"
              value={modelState?.height}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontSize={"sm"}>Skin tone</FormLabel>
            <CustomSelect
              placeholder={"Select your skin tone"}
              name={"skinColor"}
              value={modelState?.skinColor}
              onChange={handleChange}
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
  modelState: PropTypes.object,
  handleChange: PropTypes.func
}

export default PersonalInfo