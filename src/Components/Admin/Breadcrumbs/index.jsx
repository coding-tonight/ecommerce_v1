import PropTypes from "prop-types";
import { Breadcrumb } from "antd";

const BreadCrumbs = ({ title }) => {
  return (
    <>
      <Breadcrumb title={title} />
    </>
  );
};

BreadCrumbs.prototype = {
  title: PropTypes.array, // [{ title: 'page name' }]
};

export default BreadCrumbs;
