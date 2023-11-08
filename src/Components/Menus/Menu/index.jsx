import PropTypes from "prop-types";
import { Row, Col } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
import Image from '/mega_menu/menu_image.jpg'

const Menu = ({ title, setOpenMenu, openMenu }) => {
  const toggle = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <section className="mega_menu">
        <div className="categories">
          <div className="cursor-pointer" onClick={toggle}>
            <UnorderedListOutlined className="cursor-pointer" /> {title}
          </div>
          <Row
            gutter={24}
            className={`${openMenu ? `menu` : "hidden"} default`}
          >
            <Col className="gutter-row" span={6}>
               <ul>
                 <h4 className="">Heading</h4>
                 <li>Menu</li>
                 <li>Menu</li>
                 <li>Menu</li>
                 <li>Menu</li>
               </ul>
            </Col>
            <Col className="gutter-row" span={6}>
               <ul>
                 <h4 className="">Heading</h4>
                 <li>Menu</li>
                 <li>Menu</li>
                 <li>Menu</li>
                 <li>Menu</li>
               </ul>
            </Col>
            <Col className="gutter-row" span={6}>
               <ul>
                 <h4 className="">Heading</h4>
                 <li>Menu</li>
                 <li>Menu</li>
                 <li>Menu</li>
                 <li>Menu</li>
               </ul>
            </Col>
            <Col className="gutter-row" span={6}>
               <img src={Image} alt=""  />
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

Menu.propTypes = {
  title: PropTypes.string.isRequired,
  openMenu: PropTypes.bool,
  setOpenMenu: PropTypes.func,
};

export default Menu;
