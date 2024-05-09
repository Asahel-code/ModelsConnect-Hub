import PropTypes from "prop-types";

import { Table } from "antd";
import { useAvailableModel } from "../../../hooks/useModel";

const AssignModelsForm = ({ handleSelectChange }) => {

    const { isLoading, data } = useAvailableModel();

    const columns = [
        {
            title: "Select",
            dataIndex: "select",
            key: "select",
            // eslint-disable-next-line no-unused-vars
            render: (_, item) => {
                return <input
                    name="model"
                    value={item?._id}
                    onChange={handleSelectChange}
                    type={"checkbox"}
                />;
            },
        },
        {
            title: "Model's Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Current location",
            dataIndex: "location",
            key: "location",
            render: (_, item) => {
                return <span>{`${item?.county}, ${item?.city}`}</span>
            }
        }
    ]
    return (
        <div className={"mt-3 max-h-[70vh] overflow-y-scroll pr-5"}>
            <div className={"py-2.5 border-b border-zinc-300 mb-2"}>
                <h5 className={"font-[600] text-zinc-500"}>Select Models</h5>
            </div>

            <div>
                <Table
                    loading={isLoading}
                    className={"shadow"}
                    columns={columns}
                    dataSource={data}
                    pagination={{
                        defaultPageSize: 15,
                        showSizeChanger: true,
                        pageSizeOptions: ["10", "15", "20", "30"],
                    }}
                />
            </div>
        </div>
    )
}

AssignModelsForm.propTypes = {
    handleSelectChange: PropTypes.func
}

export default AssignModelsForm