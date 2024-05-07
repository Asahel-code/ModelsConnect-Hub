import ContractTable from "../../../components/clients_c/ContractTable";
import CreateContractForm from "../../../components/clients_c/creat_form/CreateContractForm";
import { useState } from "react";
import CustomButton from "../../../components/general/CustomButton";


const ClientContract = () => {

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editState, setEditState] = useState({});

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
      />
    </div>
  )
}

export default ClientContract