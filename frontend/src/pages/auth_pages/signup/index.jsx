import { useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/react"
import CustomInput from "../../../components/general/CustomInput"
import CustomButton from "../../../components/general/CustomButton";
import AuthLayout from "../../../components/layouts/AuthLayout";
import { GoLock } from "react-icons/go";
import { Link } from "react-router-dom";
import { useSignUpFlowStore } from "../../../utils/zustand/Store";
import { useRegister } from "../../../hooks/useAuth";
import LoadingButton from "../../../components/general/LoadingButton";

const Signup = () => {

  const [passwordType, setPasswordType] = useState("password");
  const [passwordConfirmationType, setPasswordConfimationType] = useState("password");

  const removePersona = useSignUpFlowStore((state) => state.removePersona);

  const { modelRegistrationMutation, clientRegistrationMutation, handleSubmit } = useRegister();

  return (
    <AuthLayout>
      <div className="pt-24 pb-20 md:px-20 px-10 min-h-full">
        <div className="flex justify-center items-center">
          <div className="rounded-lg border md:w-2/5 w-full bg-gray-50">
            <div className="text-center py-4 border-b">
              <h3 className="text-2xl font-bold">Join us Today</h3>
            </div>
            <form className="my-3 p-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-3">
                <FormControl my={2} isRequired>
                  <FormLabel>Phone number</FormLabel>
                  <CustomInput
                    placeholder={"Enter phone number"}
                    name={"phoneNumber"}
                    type={"number"}
                  />
                </FormControl>
                <FormControl my={2} isRequired>
                  <FormLabel>Password</FormLabel>
                  <CustomInput
                    icon={<GoLock className="text-xl" />}
                    placeholder={"Enter password"}
                    name={"password"}
                    type={passwordType}
                    handleEyeClick={setPasswordType}
                  />
                </FormControl>
                <FormControl my={2} isRequired>
                  <FormLabel>Confirm Password</FormLabel>
                  <CustomInput
                    icon={<GoLock className="text-xl" />}
                    placeholder={"Confirm password"}
                    name={"passwordConfirmation"}
                    type={passwordConfirmationType}
                    handleEyeClick={setPasswordConfimationType}
                  />
                </FormControl>
                <div className="my-2 text-right">
                  <div onClick={() => removePersona()}>Already have an account, <Link to="/login" className="text-primary_blue hover:underline">login In</Link></div>
                </div>
                {modelRegistrationMutation.isLoading || clientRegistrationMutation.isLoading ? (
                  <LoadingButton
                    loadingText={"Creating..."}
                  />
                ) : (
                  <CustomButton
                    type={"submit"}
                    variant={"solid"}
                    text={"Signup"}
                  />
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Signup