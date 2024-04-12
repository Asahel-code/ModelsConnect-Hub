import { Outlet } from "react-router-dom"
import OnboardingLayout from "../../components/layouts/OnboardingLayout"

const Onboarding = () => {
    return (
        <OnboardingLayout>
            <Outlet />
        </OnboardingLayout>
        
    )
}

export default Onboarding