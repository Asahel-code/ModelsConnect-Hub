import ContractTable from "../../../components/clients_c/ContractTable";
import CreateContractForm from "../../../components/clients_c/creat_form/CreateContractForm";
import { useState } from "react";
import CustomButton from "../../../components/general/CustomButton";
import { useClientsJobs } from "../../../hooks/useJobs";


const ClientContract = () => {

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editState, setEditState] = useState({});

  const { isLoading, jobs, refetch } = useClientsJobs();

  return (
    <div className="mt-3">
      <div className="flex justify-end">
        <CustomButton
          width={"150px"}
          variant={"solid"}
          text={"Add contract"}
          onClick={() => setIsFormOpen(true)}
        />
      </div>
      <div className="mt-5">
        <ContractTable
          isLoading={isLoading}
          data={jobs}
          refetch={refetch}
          handleEdit={(data) => {
            setEditState(data);
            setIsFormOpen(true);
            setIsEditing(true);
          }}
        />
      </div>
      <CreateContractForm
        isModalOpen={isFormOpen}
        handleCancel={() => {
          setIsFormOpen(false);
          setIsEditing(false);
        }}
        isEditing={isEditing}
        editState={editState}
        refetch={refetch}
      />
    </div>
  )
}

export default ClientContract