import AuthLayout from "../../../components/layouts/AuthLayout"
import { useResendVerificationTokenRequest } from "../../../hooks/useResendVerificationTokenRequest"
import { FormControl, FormLabel } from "@chakra-ui/react"
import CustomInput from "../../../components/general/CustomInput"
import CustomButton from "../../../components/general/CustomButton";

const VerifyPhoneNumber = () => {
    return (
        <AuthLayout>
            <div className="pt-24 pb-20 md:px-20 px-10 min-h-full">
                <div className="flex justify-center items-center">
                    <div className="rounded-lg border md:w-2/5 w-full bg-gray-50">
                        <div className="text-center py-4 border-b">
                            <h3 className="text-2xl font-bold">Verify your Account</h3>
                        </div>
                        <form className="my-3 p-5">
                            <div className="mb-2">
                                <p className="text-sm">Check your phone message, a verification code has been sent to you</p>
                            </div>
                            <div className="grid grid-cols-1 gap-3">
                                <FormControl my={2} isRequired>
                                    <FormLabel>Verification code</FormLabel>
                                    <CustomInput
                                        placeholder={"Enter code"}
                                        name={"otp"}
                                        type={"text"}
                                    />
                                </FormControl>
                                <ResendVerificationToken />
                                <CustomButton variant={"solid"} text={"Submit"} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}

export default VerifyPhoneNumber

const ResendVerificationToken = () => {

    const { counter, isRequested, resendVerificationToken } = useResendVerificationTokenRequest();

    return (
        <div className="flex justify-end py-0">
            {isRequested ?
                <div className="flex justify-end py-0">
                    <p className="text-sm text-gray-400 py-0" >Try again after {counter}s</p>
                </div>
                : <div className="flex justify-end py-0">
                    <p className="text-sm cursor-pointer hover:font-semibold py-0" onClick={resendVerificationToken}>Resend code</p>
                </div>
            }
        </div>
    )
}