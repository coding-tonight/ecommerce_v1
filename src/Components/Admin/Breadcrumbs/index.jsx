import PropTypes, { object } from "prop-types";
import { Breadcrumb } from "antd";

const BreadCrumbs = ({ items }) => {
  return (
    <>
      <Breadcrumb items={items} />
    </>
  );
};

BreadCrumbs.prototype = {
  title: PropTypes.arrayOf(object), // [{ title: 'page name' }]
};

export default BreadCrumbs;
