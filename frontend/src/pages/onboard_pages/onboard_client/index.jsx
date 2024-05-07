import { useState } from "react";
import { Link } from "react-router-dom";
import Stepper from "../../../components/onboarding/stepper/Stepper";
import CustomButton from "../../../components/general/CustomButton";
import SelectPersona from "./SelectPersona";
import Self from "./Self";
import Organization from "./Organization";

const OnboardClient = () => {

    const [currentStep, setCurrentStep] = useState(0);
    const [selectedPersona, setSelectedPersona] = useState("");

    const steps = [
        {
            title: "Select persona"
        },
        {
            title: "Fill in details"
        }
    ]

    return (
        <div>
            <div className="flex">
                <div className="w-fir px-4 py-10 border-r border-gray-300 h-[500px] bg-white shadow-md">
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
                        <SelectPersona
                            currentStep={currentStep}
                            selectedPersona={selectedPersona}
                            setCurrentStep={setCurrentStep}
                            setSelectedPersona={setSelectedPersona}
                        />
                    ) : currentStep === 1 && (
                        selectedPersona === "self" ? (
                            <Self
                                currentStep={currentStep}
                                setCurrentStep={setCurrentStep}
                            />
                        ) : selectedPersona === "organization" && (
                            <Organization
                                currentStep={currentStep}
                                setCurrentStep={setCurrentStep}
                            />
                        )
                    )}
                    <div className="mt-16">
                        <div className="absolute bottom-4 right-0 px-8">
                            <CustomButton variant={"solid"} text={currentStep < (steps.length - 1) ? "Proceed" : "Complete"} onClick={() => currentStep < (steps.length - 1) && setCurrentStep((prev) => (prev + 1))} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OnboardClient