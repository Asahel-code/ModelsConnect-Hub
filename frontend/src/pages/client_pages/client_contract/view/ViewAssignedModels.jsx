import ModelsTable from "../../../../components/clients_c/ModelsTable";
import Breadcrumb from "../../../../components/general/Breadcrumb"
import { MdWorkOutline } from "react-icons/md";


const ViewAssignedModels = () => {
    return (
        <div className="mt-3">
            <Breadcrumb
                icon={<MdWorkOutline />}
                title={"Contracts"}
                subtitle={"5858585-80058-599"}
            />
            <div>
                <ModelsTable />
            </div>
        </div>
    )
}

export default ViewAssignedModels