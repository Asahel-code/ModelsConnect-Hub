import StatisticsCard from "../../../components/admin_c/StatisticsCard"
import { MdWorkOutline } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import Wrapper from "../../../components/general/Wrapper";
// import { BarChart } from "../../../components/charts/BarChart";
// import { PieChart } from "../../../components/charts/PieChart";
import { CustomSelect } from "../../../components/general/CustomInput";
import { useModel } from "../../../hooks/useModel";
import { useClient } from "../../../hooks/useClient";
import { useJobs } from "../../../hooks/useJobs";

const Dashboard = () => {

  const { clients } = useClient();
  const { models } = useModel();
  const { jobs } = useJobs();
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
          number={jobs?.length}
        />
      </div>

      <div>
        <Wrapper>
          <div className="w-full h-[330px] flex flex-col">
            <div className="px-5">
              <p className="font-semibold">Clients Trend</p>
            </div>
            <div className="h-[310px]">
              {/* <BarChart options={orderSummary.options} data={orderSummary.data} /> */}
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
              {/* <BarChart options={orderSummary.options} data={orderSummary.data} /> */}
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
                {/* <BarChart options={orderSummary.options} data={orderSummary.data} /> */}
              </div>

            </div>
          </Wrapper>
        </div>
        <div className="w-2/5">
          <Wrapper>
            <div className="w-full h-[330px] flex flex-col">
              <div className="px-5 flex justify-between items-center">
                <p className="font-semibold">Jobs location trend</p>
                <CustomSelect
                  width={"130px"}
                  placeholder={"Select period"}
                >
                  <option>Current Month</option>
                  <option>First quarter</option>
                  <option>Second quarter</option>
                  <option>Third quarter</option>
                  <option>Fourth quarter</option>
                </CustomSelect>
              </div>
              <div className="h-[310px]">
                {/* <PieChart options={orderSummary.options} data={orderSummary.data} /> */}
              </div>

            </div>
          </Wrapper>
        </div>
      </div>

    </div>
  )
}

export default Dashboard