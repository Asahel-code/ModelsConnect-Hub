import { FormControl, FormLabel } from "@chakra-ui/react"
import CustomInput, { CustomTextArea } from "../../../components/general/CustomInput"

const Contact = () => {
    return (
        <div className="my-10 mx-20">
            <div className="text-center">
                <h3 className="mt-36 md:text-4xl text-3xl font-[1000]">Love to hear from you,</h3>
            </div>
            <div className="mt-10 mb-8 flex md:flex-row flex-col gap-10">
                <div>
                    <h3 className="md:text-4xl text-3xl font-[1000]">Get in touch <span>&#128075;&#127998;</span></h3>
                </div>
                <form className="w-full">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                        <FormControl my={2} isRequired>
                            <FormLabel>Full name</FormLabel>
                            <CustomInput
                                width="full"
                                placeholder={"Enter your full name"}
                                name={"name"}
                                type={"text"}
                            />
                        </FormControl>
                        <FormControl my={2} isRequired>
                            <FormLabel>Email</FormLabel>
                            <CustomInput
                                placeholder={"Enter your email"}
                                name={"email"}
                                type={"email"}
                            />
                        </FormControl>
                    </div>
                    <div className="grid grid-cols-1 gap-y-2">
                        <FormControl my={2} isRequired>
                            <FormLabel>Subject</FormLabel>
                            <CustomInput
                                placeholder={"Enter subject"}
                                name={"subject"}
                                type={"text"}
                            />
                        </FormControl>
                        <FormControl my={2} isRequired>
                            <FormLabel>Message</FormLabel>
                            <CustomTextArea
                                placeholder={"Enter your message"}
                                name={"message"}
                                type={"text"}
                            />
                        </FormControl>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact