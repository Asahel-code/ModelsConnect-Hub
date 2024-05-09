import StatisticsCard from "../../../components/admin_c/StatisticsCard";
import ClientsTable from "../../../components/admin_c/tables/ClientsTable";
import Breadcrumb from "../../../components/general/Breadcrumb";
import { FaRegUser } from "react-icons/fa";
import { useClient } from "../../../hooks/useClient";


const ClientsList = () => {

  const { isLoading, clients, refetch } = useClient();

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
          number={isLoading ? 0 : clients?.length}
        />
        <StatisticsCard
          icon={<FaRegUser className="text-4xl text-gray-400" />}
          title={"Active Clients"}
          number={isLoading ? 0 : clients?.reduce((acc, obj) => obj?.status === "active" ? acc += 1 : acc, 0)}
        />
        <StatisticsCard
          icon={<FaRegUser className="text-4xl text-gray-400" />}
          title={"Inactive Clients"}
          number={isLoading ? 0 : clients?.reduce((acc, obj) => (obj?.status === "inactive" || obj?.status === "pending") ? acc += 1 : acc, 0)}
        />
      </div>

      <ClientsTable
        isLoading={isLoading}
        data={clients}
        refetch={refetch}
      />
    </div>
  )
}

export default ClientsList