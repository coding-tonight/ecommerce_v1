import PropTypes from "prop-types";

import { Table, Input } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";

const CustomTable = ({ columns, data }) => {
  return (
    <>
      <section className="overflow-x-scroll">
        <div className="my-4">
          <Input
            prefix={<SearchOutlined className="site-form-item-icon" />}
            placeholder="Search here.."
          />
        </div>
        {/* <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
        > */}
          <Table columns={columns} datasource={data} style={{
            width: '100vw'
          }} />
        {/* </Highlighter> */}
      </section>
    </>
  );
};

CustomTable.propTypes = {
  columns: PropTypes.array,
  datasource: PropTypes.array,
};

export default CustomTable;
