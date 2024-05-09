import PropTypes from "prop-types";
import { useState } from "react";
import { Table } from "antd";
import CustomInput from "../general/CustomInput";
import { GoSearch } from "react-icons/go";
import CustomButton from "../general/CustomButton";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import moment from "moment";
import StatusTag from "../general/StatusTag";
import ConfirmDeleteModal from "../general/ConfirmDeleteModal";
import { useDeleteContract } from "../../hooks/useJobs";

const ContractTable = ({ handleEdit, isLoading, data, refetch }) => {

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const { handleDelete } = useDeleteContract(refetch, setIsDeleteModalOpen);

    const columns = [
        {
            title: "Job Title",
            dataIndex: "jobTitle",
            key: "jobTitle",
            render: (_, item) => {
                return <span className="font-bold">{item.jobTitle}</span>
            }
        },
        {
            title: "No. of Models",
            dataIndex: "models",
            key: "models",
            render: (_, item) => {
                return <span>{item?.models?.length}</span>
            }
        },
        {
            title: "Start Date",
            dataIndex: "startDate",
            key: "startDate",
            render: (_, item) => {
                return <span>{moment(item?.startDate).format("Do MMMM, YYYY")}</span>
            }
        },
        {
            title: "End Date",
            dataIndex: "endDate",
            key: "endDate",
            render: (_, item) => {
                return <span>{moment(item?.endDate).format("Do MMMM, YYYY")}</span>
            }
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            // eslint-disable-next-line no-unused-vars
            render: (_, record) => (
                <div className={"flex gap-x-3"}>
                    {record?.endDate > new Date().toISOString() ? (
                        <StatusTag
                            text={"Open"}
                            className={"text-primary_green bg-primary_green_light w-20"}
                        />
                    ) : (
                        <StatusTag
                            text={"Closed"}
                            className={"text-zinc-600 bg-gray-200 w-20"}
                        />
                    )}
                </div>
            ),
        },
        {
            title: "   ",
            key: "action",
            width: 100,
            // eslint-disable-next-line no-unused-vars
            render: (_, record) => (
                <div className="flex items-center gap-4">
                    <CustomButton
                        width={"40px"}
                        variant={"outline"}
                        onClick={() => handleEdit(record)}
                    >
                        <FiEdit className="text-xl" />
                    </CustomButton>
                    <ConfirmDeleteModal
                        record={record}
                        handleDelete={() => handleDelete(record?._id)}
                        isModalOpen={isDeleteModalOpen}
                        setIsDeleteModalOpen={setIsDeleteModalOpen}
                        btnClassName={"p-3"}
                        btnTxt={
                            <CustomButton
                                width={"40px"}
                                variant={"outline"}
                            >
                                <MdDeleteOutline className="text-xl" />
                            </CustomButton>
                        }
                        subTxt={
                            <p
                                className={"text-sm font-medium text-gray-500 text-center mt-1"}
                            >
                                Are you sure you want to delete this contract?
                                <br /> This action is irreversible
                            </p>
                        }
                        confirmTxt={"Delete"}
                    />

                </div>
            ),

        },
    ];
    return (
        <div className={"mt-3"}>
            <div className={"flex justify-end flex-1 mb-3"}>
                <CustomInput
                    width={"sm"}
                    icon={<GoSearch className="text-gray-400 text-xl" />}
                />
            </div>
            <Table
                loading={isLoading}
                className={"shadow"}
                columns={columns}
                dataSource={data}
                rowClassName={"hover:cursor-pointer"}
                pagination={{
                    defaultPageSize: 15,
                    showSizeChanger: true,
                    pageSizeOptions: ["10", "15", "20", "30"],
                }}
            />
        </div>
    )
}

ContractTable.propTypes = {
    handleEdit: PropTypes.func,
    isLoading: PropTypes.bool,
    data: PropTypes.array,
    refetch: PropTypes.func,
}

export default ContractTable