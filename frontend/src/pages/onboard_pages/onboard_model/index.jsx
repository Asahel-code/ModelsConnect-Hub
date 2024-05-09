import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Stepper from "../../../components/onboarding/stepper/Stepper";
import CustomButton from "../../../components/general/CustomButton";
import PersonalInfo from "./PersonalInfo";
import UploadPhotos from "./UploadPhotos";
import { useCreateModelProfile, useModelProfile } from "../../../hooks/useModel";
import LoadingButton from "../../../components/general/LoadingButton";

const OnboardModel = () => {

    const [currentStep, setCurrentStep] = useState(0);

    const navigate = useNavigate();

    const { isLoading, data, refetch } = useModelProfile();

    const isEditing = false;

    const { modelState, images, createProfileMutation, setImages, handleChange, handleSubmit } = useCreateModelProfile(refetch, isEditing, null);

    useEffect(() => {
        if (!isLoading && data) {
            navigate('/model');
        }
    }, [data, isLoading, navigate]);

    const steps = [
        {
            title: "Personal Details"
        },
        {
            title: "Upload Photos"
        }
    ];

    return (
        <div>
            <div className="flex">
                <div className="w-fit px-4 py-10 border-r border-gray-300 h-[500px] bg-white shadow-md">
                    {/* Logo */}
                    <Link to="/">
                        <h2 className="text-primary_color font-bold cursor-pointer text-xl md:text-2xl">ModelsConnect Hub.</h2>
                    </Link>
                    <div className="mt-4 mb-6">
                        <h2 className="font-semibold">Complete your profile</h2>
                    </div>
                    <Stepper
                        steps={steps}
                        currentStep={currentStep}
                        setCurrentStep={setCurrentStep}
                    />
                </div>
                <div className="w-full min-h-[500px] max-h-full relative pt-28 bg-white shadow-md">
                    {currentStep === 0 ? (
                        <PersonalInfo
                            currentStep={currentStep}
                            setCurrentStep={setCurrentStep}
                            modelState={modelState}
                            handleChange={handleChange}
                        />
                    ) : currentStep === 1 && (
                        <UploadPhotos
                            currentStep={currentStep}
                            setCurrentStep={setCurrentStep}
                            images={images}
                            setImages={setImages}
                        />
                    )}
                    <div className="mt-16">
                        <div className="absolute bottom-4 right-0 px-8">
                            {createProfileMutation.isLoading ? (
                                <LoadingButton
                                    loadingText={"Creating..."}
                                />
                            ) : (
                                <CustomButton
                                    type={"button"}
                                    variant={"solid"}
                                    text={currentStep < (steps.length - 1) ? "Proceed" : "Complete"}
                                    onClick={() => currentStep < (steps.length - 1) ? setCurrentStep((prev) => (prev + 1)): handleSubmit()}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OnboardModel