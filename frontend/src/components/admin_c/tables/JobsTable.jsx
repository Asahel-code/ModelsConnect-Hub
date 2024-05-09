import PropTypes from "prop-types"
import { GoSearch } from "react-icons/go"
import CustomInput from "../../general/CustomInput"
import { Table } from "antd"
import StatusTag from "../../general/StatusTag"
import moment from "moment"


const JobsTable = ({ isLoading, data }) => {


    const columns = [
        {
            title: "Job title",
            dataIndex: "jobTitle",
            key: "jobTitle",
            render: (_, item) => {
                return <span className="font-bold">{item.jobTitle}</span>
            }
        },
        {
            title: "Job location",
            dataIndex: "location",
            key: "location",
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

JobsTable.propTypes = {
    isLoading: PropTypes.bool,
    data: PropTypes.array,
    refetch: PropTypes.func
}


export default JobsTable