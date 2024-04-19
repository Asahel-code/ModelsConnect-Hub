import { useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/react"
import CustomInput from "../../../components/general/CustomInput"
import CustomButton from "../../../components/general/CustomButton";
import AuthLayout from "../../../components/layouts/AuthLayout";
import { MdOutlineToken } from "react-icons/md";
import { GoLock } from "react-icons/go";

const ResetPassword = () => {

    const [passwordType, setPasswordType] = useState("password");
    const [passwordConfirmationType, setPasswordConfimationType] = useState("password");

    return (
        <AuthLayout>
            <div className="pt-24 pb-20 md:px-20 px-10 min-h-full">
                <div className="flex justify-center items-center">
                    <div className="rounded-lg border md:w-2/5 w-full bg-gray-50">
                        <div className="text-center py-4 border-b">
                            <h3 className="text-2xl font-bold">Reset your password</h3>
                        </div>
                        <form className="my-3 p-5">
                            <div className="grid grid-cols-1 gap-3">
                                <FormControl my={2} isRequired>
                                    <FormLabel>Phone number</FormLabel>
                                    <CustomInput
                                        placeholder={"Enter your phone number"}
                                        name={"phoneNumber"}
                                        type={"number"}
                                    />
                                </FormControl>
                                <FormControl my={2} isRequired>
                                    <FormLabel>Reset Token</FormLabel>
                                    <CustomInput
                                        icon={<MdOutlineToken className="text-xl" />}
                                        placeholder={"Enter reset token"}
                                        name={"resetToken"}
                                        type={"text"}
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
                                <CustomButton variant={"solid"} text={"Submit"} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}

export default ResetPassword