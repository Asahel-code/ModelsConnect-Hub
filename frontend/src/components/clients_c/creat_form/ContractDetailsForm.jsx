import { FormControl, FormLabel } from "@chakra-ui/react";
import CustomInput, { CustomSelect, CustomTextArea } from "../../general/CustomInput";

const ContractDetailsForm = () => {
    return (
        <div className={"mt-3 max-h-[70vh] overflow-y-scroll pr-5"}>
            <div className={"py-2.5 border-b border-zinc-300 mb-2"}>
                <h5 className={"font-[600] text-zinc-500"}>Basic Information</h5>
            </div>
            <div className="grid grid-cols-2 gap-y-2 gap-x-3">
                <FormControl isRequired>
                    <FormLabel>Job Title</FormLabel>
                    <CustomInput placeholder="Job Title" />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel fontSize={"sm"}>County</FormLabel>
                    <CustomSelect
                        placeholder={"Select county where it will be held"}
                        name={"county"}
                    >
                        <option>Nairobi</option>
                    </CustomSelect>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel fontSize={"sm"}>City</FormLabel>
                    <CustomInput
                        placeholder="Enter the city where it will be held"
                        name="city"
                    />
                </FormControl>
            </div>
            <div className="my-2">
                <FormControl isRequired>
                    <FormLabel fontSize={"sm"}>Description</FormLabel>
                    <CustomTextArea
                        placeholder="Give a little description about the job"
                    />
                </FormControl>
            </div>
            <div className="mt-5 py-2">
                <div className="border-b border-zinc-300 py-1">
                    <h3>Duration</h3>
                </div>
                <div className="grid grid-cols-2 gap-y-2 gap-x-3 pt-3">
                    <FormControl isRequired>
                        <FormLabel fontSize={"sm"}>Start Date</FormLabel>
                        <CustomInput type="date" />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel fontSize={"sm"}>End Date</FormLabel>
                        <CustomInput type="date" />
                    </FormControl>
                </div>

            </div>
        </div>
    )
}

export default ContractDetailsForm