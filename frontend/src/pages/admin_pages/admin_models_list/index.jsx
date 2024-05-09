import StatisticsCard from "../../../components/admin_c/StatisticsCard";
import ModelsTable from "../../../components/admin_c/tables/ModelsTable";
import Breadcrumb from "../../../components/general/Breadcrumb";
import { FaRegUser } from "react-icons/fa";
import { useModel } from "../../../hooks/useModel";

const ModelsList = () => {

  const { isLoading, models, refetch } = useModel();

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
          number={isLoading ? 0 : models?.length}
        />
        <StatisticsCard
          icon={<FaRegUser className="text-4xl text-gray-400" />}
          title={"Active Models"}
          number={isLoading ? 0 : models?.reduce((acc, obj) => obj?.status === "active" ? acc += 1 : acc, 0)}
        />
        <StatisticsCard
          icon={<FaRegUser className="text-4xl text-gray-400" />}
          title={"Inactive Models"}
          number={isLoading ? 0 : models?.reduce((acc, obj) => (obj?.status === "inactive" || obj?.status === "pending") ? acc += 1 : acc, 0)}
        />
      </div>

      <ModelsTable
        isLoading={isLoading}
        data={models}
        refetch={refetch}
      />
    </div>
  )
}

export default ModelsList