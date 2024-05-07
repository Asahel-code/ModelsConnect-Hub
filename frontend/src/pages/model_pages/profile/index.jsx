import { FormControl, FormLabel } from "@chakra-ui/react"
import CustomInput from "../../../components/general/CustomInput"
import { GoLock } from "react-icons/go"
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import CustomButton from "../../../components/general/CustomButton";

const Profile = () => {

    const [passwordType, setPasswordType] = useState("password");
    return (
        <div>
            <div className="mt-5 flex justify-center">
                <div className="h-16 w-16 bg-secondary_color rounded-full flex justify-center items-center">
                    <span className="uppercase text-2xl font-[1000] text-faded_yellow">PL</span>
                </div>
            </div>
            <form className="mx-10">
                <div className="mt-8 grid grid-cols-2 gap-y-5 gap-x-4">
                    <FormControl isRequired>
                        <FormLabel fontSize={"sm"}>First name</FormLabel>
                        <CustomInput
                            icon={<FaRegUser className="text-xl" />}
                            placeholder={"Enter first name"}
                            name={"firstName"}
                            type={"text"}
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel fontSize={"sm"}>Last name</FormLabel>
                        <CustomInput
                            icon={<FaRegUser className="text-xl" />}
                            placeholder={"Enter last name"}
                            name={"lastName"}
                            type={"text"}
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel fontSize={"sm"}>Phone number</FormLabel>
                        <CustomInput
                            placeholder={"Enter phone number"}
                            name={"phoneNumber"}
                            type={"number"}
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel fontSize={"sm"}>New Password</FormLabel>
                        <CustomInput
                            icon={<GoLock className="text-xl" />}
                            placeholder={"Enter password"}
                            name={"password"}
                            type={passwordType}
                            handleEyeClick={setPasswordType}
                        />
                    </FormControl>
                </div>
                <div className="flex justify-end mt-8">
                    <CustomButton
                       width={"150px"}
                        variant={"solid"}
                        text={"Update"}
                    />
                </div>
            </form>

        </div>
    )
}

export default Profile