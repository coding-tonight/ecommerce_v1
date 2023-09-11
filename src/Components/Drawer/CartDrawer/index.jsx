import PropTypes from 'prop-types';
import { Drawer, Space } from "antd";

const CartDrawer = ({ openCart, setopenCart }) => {
    return (
        <Space>
            <Drawer
                // title="Basic Drawer"
                placement={'right'}
                closable={true}
                onClose={() => setopenCart(false)}
                open={openCart}
                key={'right'}
            >
                <h1>this is cart</h1>
            </Drawer>
        </Space>
    );
}

CartDrawer.propTypes = {
    openCart: PropTypes.bool,
    closeCartFeature: PropTypes.func
}

export default CartDrawer;