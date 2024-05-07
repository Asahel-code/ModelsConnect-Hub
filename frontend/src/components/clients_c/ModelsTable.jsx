import { Table } from "antd";
import CustomInput from "../general/CustomInput";
import { GoSearch } from "react-icons/go";
import StatusTag from "../general/StatusTag";
import { Link } from "react-router-dom";

const ModelsTable = () => {
    const columns = [
        {
            title: "Model name",
            dataIndex: "name",
            key: "name",
            render: (_, item) => {
                return <Link to="/client/home/578959hvr89tu"><span className="font-bold">{item.name}</span></Link>
            }
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            // eslint-disable-next-line no-unused-vars
            render: (_, record) => (
                <div className={"flex gap-x-3"}>
                    {record?.status === "accepted" ? (
                        <StatusTag
                            text={"Acceepted"}
                            className={"text-primary_green bg-primary_green_light w-20"}
                        />
                    ) : record?.status === "pending" ? (
                        <StatusTag
                            text={"Pending"}
                            className={"text-zinc-600 bg-gray-200 w-20"}
                        />
                    ) : record?.status === "declined" && (
                        <StatusTag
                            text={"Declined"}
                            className={"text-primary_red bg-primary_red_light w-20"}
                        />
                    )}
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
                dataSource={test_data}
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

const test_data = [
    {
        name: "Brian Njoroge",
        status: "pending"
    },
    {
        name: "Rose Othiambo",
        status: "declined"
    },
    {
        name: "Mary Mueni",
        status: "accepted"
    },
]

export default ModelsTable