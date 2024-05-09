// import Profile from "../../../components/general/Profile";

import { FormControl, FormLabel } from "@chakra-ui/react";
import CustomInput, { CustomSelect } from "../../../components/general/CustomInput";
import { useCreateModelProfile, useModelProfile } from "../../../hooks/useModel";
import { counties } from "../../../constants/counties";
import CustomButton from "../../../components/general/CustomButton";
import LoadingButton from "../../../components/general/LoadingButton";

const ModelProfile = () => {

    const { data, refetch } = useModelProfile();

    const isEditing = true;

    const { modelState, updateModelProfileMutation, handleChange, handleSubmit } = useCreateModelProfile(refetch, isEditing, data);

    return (
        // <Profile />
        <div className="mx-10">
            <div className="mt-5 flex justify-center">
                <div className="h-16 w-16 bg-secondary_color rounded-full flex justify-center items-center">
                    <span className="uppercase text-2xl font-[1000] text-faded_yellow">{data?.name.split(" ")[0].charAt(0)}{data?.name.split(" ")[1].charAt(0)}</span>
                </div>
            </div>
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
                <div className="flex justify-end mt-8">
                    {updateModelProfileMutation.isLoading ? (
                        <LoadingButton
                            loadingText={"Updating..."}
                        />
                    ) : (
                        <CustomButton
                            width={"fit"}
                            variant={"solid"}
                            text={"Update"}
                            onClick={handleSubmit}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default ModelProfile