import { Table } from "antd";

const AssignModelsForm = () => {
    const columns = [
        {
            title: "Select",
            dataIndex: "select",
            key: "select",
            // eslint-disable-next-line no-unused-vars
            render: (_, item) => {
                return <input
                    name="model"
                    type={"checkbox"}
                />;
            },
        },
        {
            title: "Model's Name",
            dataIndex: "name",
            key: "name",
        }
    ]
    return (
        <div className={"mt-3 max-h-[70vh] overflow-y-scroll pr-5"}>
            <div className={"py-2.5 border-b border-zinc-300 mb-2"}>
                <h5 className={"font-[600] text-zinc-500"}>Select Models</h5>
            </div>

            <div>
                <Table
                    // loading={isLoading}
                    className={"shadow"}
                    columns={columns}
                    dataSource={models}
                // pagination={{
                //     current: data?.page + 1,
                //     total: data?.totalElements,
                //     pageSize: data?.size,
                //     onChange: (page) => handlePageChange(page),
                // }}
                />
            </div>
        </div>
    )
}

const models = [
    {
        name: "Mary Wangare"
    },
    {
        name: "Paul Morogo"
    },
]

export default AssignModelsForm