import PropTypes from "prop-types"
import { GoSearch } from "react-icons/go"
// import StatusTag from "../../general/StatusTag"
import CustomInput from "../../general/CustomInput"
import { Table } from "antd"
// import { useState } from "react"
// import ConfirmDeleteModal from "../../general/ConfirmDeleteModal"
// import CustomButton from "../../general/CustomButton"
// import { FiEdit } from "react-icons/fi"


const JobsTable = ({ isLoading, data, refetch }) => {

    // const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

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
            title: "Start date",
            dataIndex: "startDate",
            key: "startDate",
            // eslint-disable-next-line no-unused-vars

        },
        {
            title: "End date",
            dataIndex: "endDate",
            key: "endDate",
            // eslint-disable-next-line no-unused-vars

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
                oading={isLoading}
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