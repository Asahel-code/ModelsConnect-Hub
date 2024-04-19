import { Outlet } from "react-router-dom"
import OnboardingLayout from "../../components/layouts/OnboardingLayout"

const OnboardingPages = () => {
    return (
        <OnboardingLayout>
            <Outlet />
        </OnboardingLayout>
        
    )
}

export default OnboardingPages