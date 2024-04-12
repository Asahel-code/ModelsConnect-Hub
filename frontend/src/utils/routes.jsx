
import AboutUs from "../pages/primary_pages/about_us";
import Contact from "../pages/primary_pages/contact";
import Home from "../pages/primary_pages/home";

import Login from "../pages/auth/login";
import Signup from "../pages/auth/signup";
import VerifyPhoneNumber from "../pages/auth/verify_phone_number";
import ForgotPassword from "../pages/auth/forgot_password";
import ResetPassword from "../pages/auth/reset_password";

import OnboardClient from "../pages/onboarding/onboard_client";
import OnboardModel from "../pages/onboarding/onboard_model";


export const PrimaryRoutes = [
    {
        path: "",
        element: <Home />
    },
    {
        path: "/about",
        element: <AboutUs />
    },
    {
        path: "/contact",
        element: <Contact />
    }
];

export const AuthRoutes = [
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/verify_phone_number",
        element: <VerifyPhoneNumber />
    },
    {
        path: "/forgot_password",
        element: <ForgotPassword />
    },
    {
        path: "/reset_password",
        element: <ResetPassword />
    },
]

export const OnboardingRoutes = [
    {
        path: "client",
        element: <OnboardClient />
    },
    {
        path: "model",
        element: <OnboardModel />
    },
]
