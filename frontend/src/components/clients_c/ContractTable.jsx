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
import { Link } from "react-router-dom";
import ConfirmDeleteModal from "../general/ConfirmDeleteModal";

const ContractTable = ({ handleEdit }) => {

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const columns = [
        {
            title: "Job Title",
            dataIndex: "jobTitle",
            key: "jobTitle",
            render: (_, item) => {
                return <Link to="/client/contracts/578959hvr89tu"><span className="font-bold">{item.jobTitle}</span></Link>
            }
        },
        {
            title: "No. of Models",
            dataIndex: "models",
            key: "models",
        },
        {
            title: "Start Date",
            dataIndex: "start",
            key: "start",
        },
        {
            title: "End Date",
            dataIndex: "end",
            key: "end",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            // eslint-disable-next-line no-unused-vars
            render: (_, record) => (
                <div className={"flex gap-x-3"}>
                    {record?.status ? (
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
                        // record={record}
                        // setRecord={setEditState}
                        // handleDelete={handleDelete}
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
                className={"shadow"}
                columns={columns}
                dataSource={testdata}
                rowClassName={"hover:cursor-pointer"}
            // pagination={{
            //   current: data?.page + 1,
            //   total: data?.totalElements,
            //   pageSize: data?.size,
            //   onChange: (page) => handlePageChange(page),
            // }}
            />
        </div>
    )
}

ContractTable.propTypes = {
    handleEdit: PropTypes.func
}

const testdata = [
    {
        jobTitle: "HETET",
        models: 20,
        startDate: moment().format("Do MMMM, YYYY"),
        endDate: moment().format("Do MMMM, YYYY"),
        status: true,
    }
]

export default ContractTable