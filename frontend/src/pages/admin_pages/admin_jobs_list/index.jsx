import StatisticsCard from "../../../components/admin_c/StatisticsCard";
import JobsTable from "../../../components/admin_c/tables/JobsTable";
import Breadcrumb from "../../../components/general/Breadcrumb"
import { MdWorkOutline } from "react-icons/md";

const JobsList = () => {
    return (
        <div className="mt-3">
            <Breadcrumb
                icon={<MdWorkOutline />}
                title={"Admin"}
                subtitle={"jobs"}
            />

            <div className="flex py-1 mt-1 justify-between">
                <StatisticsCard
                    icon={<MdWorkOutline className="text-4xl text-gray-400" />}
                    title={"Total Jobs"}
                    number={0}
                />
                <StatisticsCard
                    icon={<MdWorkOutline className="text-4xl text-gray-400" />}
                    title={"Done Jobs"}
                    number={0}
                />
                <StatisticsCard
                    icon={<MdWorkOutline className="text-4xl text-gray-400" />}
                    title={"Open Jobs"}
                    number={0}
                />
            </div>

            <JobsTable />
        </div>
    )
}

export default JobsList