import Wrapper from "../../../components/general/Wrapper"
import JobsTable from "../../../components/models_c/JobsTable"


const ModelHome = () => {
  return (
    <div className="mt-3">
      <h3 className="text-xl font-bold">Welcome Lucy,</h3>
      <div className="flex justify-end">
        <Wrapper className={"w-fit relative text-sm"}>
          <div className="px-3">
            <h5 className="font-semibold">Account Status</h5>
            <p className="text-gray-600">Active</p>
          </div>

          <div className="content-[] w-2 h-2 rounded-full bg-primary_green absolute top-2 right-2" />
        </Wrapper>
      </div>
      <div className="mt-5">
        <JobsTable/>
      </div>
    </div>
  )
}

export default ModelHome