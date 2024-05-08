import PropTypes from "prop-types";
import { Modal } from "antd";
import { RiDeleteBin6Line } from "react-icons/ri";

const ConfirmDeleteModal = ({
    btnTxt,
    btnClassName,
    title,
    subTxt,
    record,
    setRecord,
    handleDelete,
    isModalOpen,
    setIsDeleteModalOpen,
    confirmTxt = "Delete",
}) => {
    return (
        <>
            <button
                onClick={() => {
                    setIsDeleteModalOpen(true);
                    setRecord(record);
                }}
                className={btnClassName}>
                {btnTxt}
            </button>
            <Modal
                wrapClassName={"custom-modal-class"}
                title=""
                open={isModalOpen}
                onOk={() => setIsDeleteModalOpen(false)}
                onCancel={() => setIsDeleteModalOpen(false)}
                footer={
                    <ModalFooter
                        handleCancel={() => setIsDeleteModalOpen(false)}
                        handleConfirm={handleDelete}
                        confirmTxt={confirmTxt}
                        record={record}
                    />
                }
            >
                <div className={"flex flex-col items-center"}>
                    {/*    icon  */}
                    {record?.status ? (
                        null
                    ) : (
                        <div
                            className={
                                `h-16 w-16 rounded-full flex items-center justify-center bg-primary_red_light`
                            }
                        >
                            <RiDeleteBin6Line className="text-3xl text-primary_red" />u
                        </div>
                    )}

                    <div className={"py-3 text-center"}>
                        <h5 className={"text-xl font-semibold"}>
                            {title ? title : "Do you want to delete this item?"}
                        </h5>
                        {subTxt && (
                            subTxt
                        )}
                    </div>
                </div>
            </Modal >
        </>
    );
};

export default ConfirmDeleteModal;

const ModalFooter = ({ handleCancel, handleConfirm, confirmTxt, record }) => {
    return (
        <div className={"flex font-inter text-sm w-full gap-3 px-5"}>
            {/*    cancel button*/}
            <button
                className={"flex-1 h-11 bg-gray-100 text-black rounded-full"}
                onClick={handleCancel}
            >
                Cancel
            </button>

            {/*    submit button*/}
            <button
                className={`flex-1 h-11 ${(record?.status === "inactive" || record?.status === "pending") ? "bg-primary_green" : "bg-primary_red"} text-white rounded-full`}
                onClick={handleConfirm}
            >
                {confirmTxt}
            </button>
        </div>
    )
};

ConfirmDeleteModal.propTypes = {
    btnTxt: PropTypes.string,
    btnClassName: PropTypes.string,
    title: PropTypes.string,
    subTxt: PropTypes.string,
    record: PropTypes.object,
    setRecord: PropTypes.func,
    handleDelete: PropTypes.func,
    isModalOpen: PropTypes.bool,
    setIsDeleteModalOpen: PropTypes.func,
    confirmTxt: PropTypes.string
}

ModalFooter.propTypes = {
    handleCancel: PropTypes.func,
    handleConfirm: PropTypes.func,
    confirmTxt: PropTypes.string,
    record: PropTypes.object,
}

