import Wrapper from "../../../components/general/Wrapper"
import JobsTable from "../../../components/models_c/JobsTable"
import { useModelsJobs } from "../../../hooks/useJobs";
import { useModelProfile } from "../../../hooks/useModel"


const ModelHome = () => {

  const { data } = useModelProfile();

  const { isLoading, jobs } = useModelsJobs();
  return (
    <div className="mt-3">
      <h3 className="text-3xl font-bold">Welcome</h3>
      <div className="flex justify-end">
        <Wrapper className={"w-fit relative text-sm"}>
          <div className="px-3">
            <h5 className="font-semibold">Account Status</h5>
            <p className="text-gray-600 capitalize">{data?.status ?? ""}</p>
          </div>

          <div className={`content-[] w-2 h-2 rounded-full ${data?.status === "active" ? "bg-primary_green" : data?.status === "inactive" ? "bg-primary_red" : "bg-slate-500"} absolute top-2 right-2`} />
        </Wrapper>
      </div>
      <div className="mt-5">
        <JobsTable
          isLoading={isLoading}
          data={jobs}
        />
      </div>
    </div>
  )
}

export default ModelHome