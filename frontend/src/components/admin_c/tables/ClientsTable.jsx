import PropTypes from "prop-types"
import { GoSearch } from "react-icons/go"
import StatusTag from "../../general/StatusTag"
import CustomInput from "../../general/CustomInput"
import { Table } from "antd"
import { useState } from "react"
import ConfirmDeleteModal from "../../general/ConfirmDeleteModal"
import CustomButton from "../../general/CustomButton"
import { FiEdit } from "react-icons/fi"
import { useChangeAccountState } from "../../../hooks/useClient"

const ClientsTable = ({ isLoading, data, refetch }) => {

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const { handleUpdate } = useChangeAccountState(refetch, setIsDeleteModalOpen);

    const columns = [
        {
            title: "Client name",
            dataIndex: "name",
            key: "name",
            render: (_, item) => {
                return <span className="font-bold">{item.name}</span>
            }
        },
        {
            title: "Client location",
            dataIndex: "location",
            key: "location",
            render: (_, item) => {
                return <span className="capitalize">{`${item?.county}, ${item?.city}`}</span>
            }
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            // eslint-disable-next-line no-unused-vars
            render: (_, record) => (
                <div className={"flex gap-x-3"}>
                    {record?.status === "active" ? (
                        <StatusTag
                            text={"Active"}
                            className={"text-primary_green bg-primary_green_light w-20"}
                        />
                    ) : record?.status === "pending" ? (
                        <StatusTag
                            text={"Pending"}
                            className={"text-zinc-600 bg-gray-200 w-20"}
                        />
                    ) : record?.status === "inactive" && (
                        <StatusTag
                            text={"Inactive"}
                            className={"text-primary_red bg-primary_red_light w-20"}
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
                    <ConfirmDeleteModal
                        record={record}
                        // setRecord={setEditState}
                        handleDelete={() => handleUpdate((record?.status === "pending" || record?.status === "inactive") ? { id: record?._id, data: { status: "active" } } : { id: record?._id, data: { status: "inactive" } })}
                        title={record?.status === "active" ? "Deactivate this account" : "Activate this account"}
                        isModalOpen={isDeleteModalOpen}
                        setIsDeleteModalOpen={setIsDeleteModalOpen}
                        btnClassName={"p-3"}
                        btnTxt={
                            <CustomButton
                                width={"40px"}
                                variant={"outline"}
                            >
                                <FiEdit className="text-xl" />
                            </CustomButton>
                        }
                        confirmTxt={record?.status === "active" ? "Deactivate" : "Activate"}
                    />

                </div>
            ),

        },
    ]

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

ClientsTable.propTypes = {
    isLoading: PropTypes.bool,
    data: PropTypes.array,
    refetch: PropTypes.func
}

export default ClientsTable