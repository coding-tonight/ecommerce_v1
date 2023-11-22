import { Table, Tag, Space } from "antd";

/**
 * Latest order table.
 * @returns {JSX.Element}
 */

const OrderTable = () => {
  // table colums
  const columns = [
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Qunatity",
      dataIndex: "qunatity",
      key: "qunatity",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Customer Name",
      dataIndex: "customer",
      key: "customer",
    },
    {
      title: "Mode Of Payment",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "cash") {
              color = "green";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>View Order of {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  //   table data
  const data = [
    {
      key: "1",
      name: "T shirt",
      qunatity: 2,
      address: "New York No. 1 Lake Park",
      customer: "John Brown",
      tags: ["cash"],
    },
    {
        key: "2",
        name: "T shirt",
        qunatity: 1,
        address: "New York No. 1 Lake Park",
        customer: "John Brown",
        tags: ["FonePay"],
      },
  ];
  return (
    <>
      {/* <h1>Latest Order</h1> */}
      <section className="overflow-hidden sm:overflow-x-scroll">
        <Table columns={columns} dataSource={data} />
      </section>
    </>
  );
};

export default OrderTable;
