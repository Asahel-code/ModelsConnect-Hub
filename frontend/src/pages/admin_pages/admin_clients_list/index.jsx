import StatisticsCard from "../../../components/admin_c/StatisticsCard";
import ClientsTable from "../../../components/admin_c/tables/ClientsTable";
import Breadcrumb from "../../../components/general/Breadcrumb";
import { FaRegUser } from "react-icons/fa";


const ClientsList = () => {
  return (
    <div className="mt-3">
      <Breadcrumb
        icon={<FaRegUser />}
        title={"Admin"}
        subtitle={"clients"}
      />

      <div className="flex py-1 mt-1 justify-between">
        <StatisticsCard
          icon={<FaRegUser className="text-4xl text-gray-400" />}
          title={"Total Clients"}
          number={0}
        />
        <StatisticsCard
          icon={<FaRegUser className="text-4xl text-gray-400" />}
          title={"Active Clients"}
          number={0}
        />
        <StatisticsCard
          icon={<FaRegUser className="text-4xl text-gray-400" />}
          title={"Inactive Clients"}
          number={0}
        />
      </div>

      <ClientsTable />
    </div>
  )
}

export default ClientsList