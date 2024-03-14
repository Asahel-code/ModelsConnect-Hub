import Home from "../pages/primary_pages/home"
import Login from "../pages/primary_pages/login";


export const PrimaryRoutes = [
    {
        path: "",
        element: <Home/>
    },
    {
        path: "/login",
        element: <Login/>
    }
]