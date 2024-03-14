import { Outlet } from "react-router-dom"
import PrimaryLayout from "../../components/layouts/PrimaryLayout"

const PrimaryPages = () => {
    return (
        <PrimaryLayout>
            <Outlet />
        </PrimaryLayout>
    )
}

export default PrimaryPages
