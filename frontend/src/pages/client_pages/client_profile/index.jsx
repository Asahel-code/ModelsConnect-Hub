import { FormControl, FormLabel } from "@chakra-ui/react";
import CustomButton from "../../../components/general/CustomButton";
import CustomInput, { CustomSelect } from "../../../components/general/CustomInput";
import { FaRegUser } from "react-icons/fa";
import { counties } from "../../../constants/counties";
import { useClientProfile, useCreateClientProfile } from "../../../hooks/useClient";
import LoadingButton from "../../../components/general/LoadingButton";

const ClientProfile = () => {

    const { data, refetch } = useClientProfile();

    const isEditing = true;

    const { clientState, updateProfileMutation, handleChange, handleSubmit } = useCreateClientProfile(refetch, isEditing, data);
    return (
        <div>
            <div className="mt-5 flex justify-center">
                <div className="h-16 w-16 bg-secondary_color rounded-full flex justify-center items-center">
                    <span className="uppercase text-2xl font-[1000] text-faded_yellow">{data?.persona === "self" ? `${data?.name?.split(" ")[0].charAt(0)}${data?.name?.split(" ")[1].charAt(0)}` : data?.name.charAt(0)}</span>
                </div>
            </div>
            <div className="mx-10 mt-6">
                {data?.persona === "self" ? (
                    <div className="grid grid-cols-2 gap-y-5 gap-x-4">
                        <FormControl isRequired>
                            <FormLabel fontSize={"sm"}>First name</FormLabel>
                            <CustomInput
                                icon={<FaRegUser className="text-xl" />}
                                placeholder={"Enter first name"}
                                name={"firstName"}
                                type={"text"}
                                value={clientState?.firstName}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel fontSize={"sm"}>Last name</FormLabel>
                            <CustomInput
                                icon={<FaRegUser className="text-xl" />}
                                placeholder={"Enter last name"}
                                name={"lastName"}
                                type={"text"}
                                value={clientState?.lastName}
                                onChange={handleChange}
                            />
                        </FormControl>
                    </div>
                ) : (
                    <FormControl isRequired>
                        <FormLabel fontSize={"sm"}>Organization name</FormLabel>
                        <CustomInput
                            placeholder="Enter organization name"
                            name="organizationName"
                            value={clientState.organizationName}
                            onChange={handleChange}
                        />
                    </FormControl>
                )}
                <div className="mt-8 grid grid-cols-2 gap-y-5 gap-x-4">
                    <FormControl isRequired>
                        <FormLabel fontSize={"sm"}>County</FormLabel>
                        <CustomSelect
                            placeholder={"Select county"}
                            name={"county"}
                            value={clientState?.county}
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
                            value={clientState?.city}
                            onChange={handleChange}
                        />
                    </FormControl>
                </div>
                <div className="flex justify-end mt-8">
                    {updateProfileMutation.isLoading ? (
                        <LoadingButton
                            loadingText={"Updating..."}
                        />
                    ) : (
                        <CustomButton
                            onClick={handleSubmit}
                            width={"150px"}
                            variant={"solid"}
                            text={"Update"}
                        />
                    )}
                </div>
            </div>

        </div>
    )
}

export default ClientProfile