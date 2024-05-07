import { Table } from "antd";
import CustomInput from "../general/CustomInput";
import { GoSearch } from "react-icons/go";
import CustomButton from "../general/CustomButton";


const JobsTable = () => {
    const columns = [
        {
            title: "Job Title",
            dataIndex: "jobTitle",
            key: "jobTitle",
        },
        {
            title: "Contractor",
            dataIndex: "contractor",
            key: "contractor",
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
        },
        {
            title: "   ",
            key: "action",
            width: 100,
            // eslint-disable-next-line no-unused-vars
            render: (_, record) => (
                <div className="flex items-center gap-4">
                    <CustomButton
                        variant={"solid"}
                        text={"Accept"}
                        onClick={() => { }}
                    />
                    <CustomButton
                        variant={"outline"}
                        text={"Decline"}
                        onClick={() => { }}
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
                dataSource={[]}
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

export default JobsTable