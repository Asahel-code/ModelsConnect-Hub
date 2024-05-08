import StatisticsCard from "../../../components/admin_c/StatisticsCard";
import ModelsTable from "../../../components/admin_c/tables/ModelsTable";
import Breadcrumb from "../../../components/general/Breadcrumb";
import { FaRegUser } from "react-icons/fa";

const ModelsList = () => {
  return (
    <div className="mt-3">
      <Breadcrumb
        icon={<FaRegUser />}
        title={"Admin"}
        subtitle={"models"}
      />

      <div className="flex py-1 mt-1 justify-between">
        <StatisticsCard
          icon={<FaRegUser className="text-4xl text-gray-400" />}
          title={"Total Models"}
          number={0}
        />
        <StatisticsCard
          icon={<FaRegUser className="text-4xl text-gray-400" />}
          title={"Active Models"}
          number={0}
        />
        <StatisticsCard
          icon={<FaRegUser className="text-4xl text-gray-400" />}
          title={"Inactive Models"}
          number={0}
        />
      </div>

      <ModelsTable />
    </div>
  )
}

export default ModelsList