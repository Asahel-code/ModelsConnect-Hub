
import AboutUs from "../pages/primary_pages/about_us";
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
import ModelProfile from "../pages/model_pages/model_profile";

import ClientHome from "../pages/client_pages/client_home";
import ClientProfile from "../pages/client_pages/client_profile";
import ViewModel from "../pages/client_pages/client_home/view/ViewModel";
import ClientContract from "../pages/client_pages/client_contract";
import ViewAssignedModels from "../pages/client_pages/client_contract/view/ViewAssignedModels";

import Dashboard from "../pages/admin_pages/dashboard_page";
import AdminProfile from "../pages/admin_pages/admin_profile";
import ModelsList from "../pages/admin_pages/admin_models_list";
import ClientsList from "../pages/admin_pages/admin_clients_list";
import JobsList from "../pages/admin_pages/admin_jobs_list";


export const PrimaryRoutes = [
    {
        path: "",
        element: <Home />
    },
    {
        path: "/about",
        element: <AboutUs />
    },
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
];

export const OnboardingRoutes = [
    {
        path: "client",
        element: <OnboardClient />
    },
    {
        path: "model",
        element: <OnboardModel />
    },
];


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
        element: <ModelProfile />
    },
];

export const ClientRoutes = [
    {
        path: "",
        element: <ClientHome />
    },
    {
        path: "home/:id",
        element: <ViewModel />
    },
    {
        path: "contracts",
        element: <ClientContract />
    },
    {
        path: "contracts/:id",
        element: <ViewAssignedModels />
    },
    {
        path: "profile",
        element: <ClientProfile />
    },
];

export const AdminRoutes = [
    {
        path: "",
        element: <Dashboard />
    },
    {
        path: "models",
        element: <ModelsList />
    },
    {
        path: "clients",
        element: <ClientsList />
    },
    {
        path: "jobs",
        element: <JobsList />
    },
    {
        path: "profile",
        element: <AdminProfile />
    },
]
