import { useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/react"
import CustomInput from "../../../components/general/CustomInput"
import CustomButton from "../../../components/general/CustomButton";
import AuthLayout from "../../../components/layouts/AuthLayout";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { GoLock } from "react-icons/go";
import { useLogin } from "../../../hooks/useAuth";
import LoadingButton from "../../../components/general/LoadingButton";

const Login = () => {

  const [passwordType, setPasswordType] = useState("password");

  const { loginMutation, handleSubmit } = useLogin();

  return (
    <AuthLayout>
      <div className="pt-24 pb-20 md:px-20 px-10 min-h-full">
        <div className="flex justify-center items-center">
          <div className="rounded-lg border md:w-2/5 w-full bg-gray-50">
            <div className="text-center py-4 border-b">
              <h3 className="text-2xl font-bold">Welcome back</h3>
            </div>
            <form className="my-3 p-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-3">
                <FormControl my={2} isRequired>
                  <FormLabel>Phone number</FormLabel>
                  <CustomInput
                    icon={<FaRegUser className="text-xl" />}
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
                <div className="my-2 text-right">
                  <Link to="/forgot_password" className="text-primary_blue hover:underline">Forgot password?</Link>
                </div>
                {loginMutation.isLoading ? (
                  <LoadingButton
                    loadingText={"Login..."} u
                  />
                ) : (
                  <CustomButton
                    type={"submit"}
                    variant={"solid"}
                    text={"Login"}
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

export default Login