import StatisticsCard from "../../../components/admin_c/StatisticsCard";
import JobsTable from "../../../components/admin_c/tables/JobsTable";
import Breadcrumb from "../../../components/general/Breadcrumb"
import { MdWorkOutline } from "react-icons/md";
import { useJobs } from "../../../hooks/useJobs";

const JobsList = () => {

    const { isLoading, jobs, refetch } = useJobs();
    
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
                    number={jobs?.length ?? 0}
                />
                <StatisticsCard
                    icon={<MdWorkOutline className="text-4xl text-gray-400" />}
                    title={"Done Jobs"}
                    number={jobs?.reduce((acc, obj) => obj?.endDate < new Date().toISOString() ? acc += 1 : acc, 0) ?? 0}
                />
                <StatisticsCard
                    icon={<MdWorkOutline className="text-4xl text-gray-400" />}
                    title={"Open Jobs"}
                    number={jobs?.reduce((acc, obj) => obj?.endDate > new Date().toISOString() ? acc += 1 : acc, 0) ?? 0}
                />
            </div>

            <JobsTable
                isLoading={isLoading}
                data={jobs}
                refetch={refetch}
            />
        </div>
    )
}

export default JobsList