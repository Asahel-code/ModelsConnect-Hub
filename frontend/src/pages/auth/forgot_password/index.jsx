import { FormControl, FormLabel } from "@chakra-ui/react"
import CustomInput from "../../../components/general/CustomInput"
import CustomButton from "../../../components/general/CustomButton";
import AuthLayout from "../../../components/layouts/AuthLayout";

const ForgotPassword = () => {
  return (
    <AuthLayout>
        <div className="pt-24 pb-20 md:px-20 px-10 min-h-full">
        <div className="flex justify-center items-center">
          <div className="rounded-lg border md:w-2/5 w-full bg-gray-50">
            <div className="text-center py-4 border-b">
              <h3 className="text-2xl font-bold">Request password update</h3>
            </div>
            <form className="my-3 p-5">
              <div className="grid grid-cols-1 gap-3">
                <FormControl my={2} isRequired>
                  <FormLabel>Phone number</FormLabel>
                  <CustomInput
                    placeholder={"Enter phone number"}
                    name={"phoneNumber"}
                    type={"number"}
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

export default ForgotPassword