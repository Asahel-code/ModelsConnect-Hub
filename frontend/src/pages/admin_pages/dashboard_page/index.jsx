import StatisticsCard from "../../../components/admin_c/StatisticsCard"
import { MdWorkOutline } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import Wrapper from "../../../components/general/Wrapper";
import { BarChart } from "../../../components/charts/BarChart";
import { PieChart } from "../../../components/charts/PieChart";
import { useModel } from "../../../hooks/useModel";
import { useClient } from "../../../hooks/useClient";
import { useJobs } from "../../../hooks/useJobs";

const Dashboard = () => {

  const { clients, clientOnboardedSummary } = useClient();
  const { models, modelOnboardedSummary } = useModel();
  const { jobs, jobsCreationSummary, jobsPerCountySummary } = useJobs();
  return (
    <div className="mt-3">
      <div className="flex py-1 mt-1 justify-between">
        <StatisticsCard
          icon={<FaRegUser className="text-4xl text-gray-400" />}
          title={"Active models"}
          number={models?.reduce((acc, obj) => obj?.status === "active" ? acc += 1 : acc, 0) ?? 0}
        />
        <StatisticsCard
          icon={<FaRegUser className="text-4xl text-gray-400" />}
          title={"Active clients"}
          number={clients?.reduce((acc, obj) => obj?.status === "active" ? acc += 1 : acc, 0) ?? 0}
        />
        <StatisticsCard
          icon={<MdWorkOutline className="text-4xl text-gray-400" />}
          title={"Open Jobs"}
          number={jobs?.reduce((acc, obj) => obj?.endDate > new Date().toISOString() ? acc += 1 : acc, 0) ?? 0}
        />
      </div>

      <div>
        <Wrapper>
          <div className="w-full h-[330px] flex flex-col">
            <div className="px-5">
              <p className="font-semibold">Clients Trend</p>
            </div>
            <div className="h-[310px]">
              <BarChart options={ clientOnboardedSummary.options} data={ clientOnboardedSummary.data} />
            </div>

          </div>
        </Wrapper>
      </div>
      <div>
        <Wrapper>
          <div className="w-full h-[330px] flex flex-col">
            <div className="px-5">
              <p className="font-semibold">Models Trend</p>
            </div>
            <div className="h-[310px]">
              <BarChart options={modelOnboardedSummary.options} data={modelOnboardedSummary.data} />
            </div>

          </div>
        </Wrapper>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-3/5">
          <Wrapper>
            <div className="w-full h-[330px] flex flex-col">
              <div className="px-5">
                <p className="font-semibold">Job Trends</p>
              </div>
              <div className="h-[310px]">
                <BarChart options={jobsCreationSummary.options} data={jobsCreationSummary.data} />
              </div>

            </div>
          </Wrapper>
        </div>
        <div className="w-2/5">
          <Wrapper>
            <div className="w-full h-[330px] flex flex-col">
              <div className="px-5">
                <p className="font-semibold">Jobs location trend</p>
              </div>
              <div className="h-[310px]">
                <PieChart options={jobsPerCountySummary.options} data={jobsPerCountySummary.data} />
              </div>

            </div>
          </Wrapper>
        </div>
      </div>

    </div>
  )
}

export default Dashboard