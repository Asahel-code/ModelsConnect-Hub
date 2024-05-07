
import AboutUs from "../pages/primary_pages/about_us";
import Contact from "../pages/primary_pages/contact";
import Home from "../pages/primary_pages/home";

import Login from "../pages/auth_pages/login";
import Signup from "../pages/auth_pages/signup";
import VerifyPhoneNumber from "../pages/auth_pages/verify_phone_number";
import ForgotPassword from "../pages/auth_pages/forgot_password";
import ResetPassword from "../pages/auth_pages/reset_password";

import OnboardClient from "../pages/onboard_pages/onboard_client";
import OnboardModel from "../pages/onboard_pages/onboard_model";
import ModelHome from "../pages/model_pages/model_home";
import ModelGallery from "../pages/model_pages/model_gallery";
import Profile from "../pages/model_pages/profile";


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


export const ModelRoutes = [
    {
        path: "",
        element: <ModelHome />
    },
    {
        path: "gallery",
        element: <ModelGallery />
    },
    {
        path: "profile",
        element: <Profile />
    },
]