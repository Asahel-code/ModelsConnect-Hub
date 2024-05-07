import PropTypes from "prop-types";
import { Modal } from 'antd';
import CustomButton from '../../general/CustomButton';
import { useState } from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import ContractDetailsForm from "./ContractDetailsForm";
import AssignModelsForm from "./AssignModelsForm";

const CreateContractForm = ({ isModalOpen, handleOk, handleCancel }) => {

    const [currentStage, setCurrentStage] = useState(1);

    return (
        <Modal
            className={"max-w-[700px] px-0 "}
            width={"60%"}
            title={
                <Title
                    title={"Add New Contract"}
                    handleGoBack={() => setCurrentStage(currentStage === 1 ? 1 : currentStage - 1)}
                    currentStage={currentStage}
                />
            }
            open={isModalOpen}
            style={{ top: 20 }}
            onOk={handleOk}
            onCancel={() => {
                handleCancel();
            }}
            footer={[
                <div
                    key={"close"}
                    className="space-x-4"
                >
                    <CustomButton
                        variant={"outline"}
                        text={"Cancel"}
                        width={"120px"}
                        onClick={handleCancel}
                    />
                    <CustomButton
                        variant={"solid"}
                        text={currentStage === 1 ? "Proceed" : "Submit"}
                        width={"120px"}
                        onClick={() => currentStage === 1 && setCurrentStage(2)}
                    />
                </div>
            ]}
        >
            <h5 className={"font-inter text-sm font-[400] text-zinc-500"}>
                Add Information about the new a contract and assign it to models of your choice.{" "}
            </h5>

            <div className={"flex rounded-full w-full bg-gray-200 my-2"}>
                <div
                    className={`h-1 rounded-full bg-primary_color ${currentStage === 1
                        ? "w-1/2"
                        : "w-full"
                        }`}
                />
            </div>
            {currentStage === 1 ? (
                <ContractDetailsForm />
            ) : currentStage === 2 && (
                <AssignModelsForm />
            )}
        </Modal>
    )
}

const Title = ({ title, handleGoBack, currentStage }) => (
    <div className={"flex gap-x-2 items-center"}>
        {currentStage > 1 && (
            <button
                className={"h-7 w-7 flex justify-center items-center"}
                onClick={handleGoBack}
            >
                <MdKeyboardBackspace className="text-xl font-semibold" />
            </button>
        )}

        <span>{title}</span>
    </div>
);

Title.propTypes = {
    title: PropTypes.string,
    handleGoBack: PropTypes.func,
    currentStage: PropTypes.number
}

CreateContractForm.propTypes = {
    isModalOpen: PropTypes.bool,
    handleOk: PropTypes.func,
    handleCancel: PropTypes.func,
    isEditing: PropTypes.bool,
    editState: PropTypes.object
}

export default CreateContractForm