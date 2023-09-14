import { useState } from 'react';
import PropTypes from 'prop-types';
import { Drawer, Space, Card, Divider, Button, Badge } from "antd";
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { slide1 } from '../../../assets/js/image';

const CartDrawer = ({ openCart, setopenCart }) => {
    const [qty, setQty] = useState(1);
    /** 
     * increase and decrease feature 
     * @returns increase or decrease value
     * */

    // increment
    const increment = () => {
        setQty((pev) => pev + 1);
    }
    // decrement
    const decrement = () => {
        if (qty > 0) {
            setQty((pev) => pev - 1);
        } else {
            setQty(1);
        }
    }
    // end here

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
                <h1 className='mb-4'>Shopping Cart:</h1>
                <Card>
                    <div className='flex justify-around'>
                        <img src={slide1} alt="" className='w-20' />
                        <div className=''>
                            <h1>Name: Product name</h1>
                            <p>Category: clothes</p>
                            <p>Color: red</p>
                        </div>
                    </div>
                    <div className='flex justify-around mt-2'>
                        <p>Price: 500</p>
                        <div className='flex items-center gap-2'>
                            <Button onClick={decrement} >
                                <MinusOutlined />
                            </Button>
                            <span className=''>
                                <Badge count={qty} color="#5C5470" />
                            </span>
                            <Button onClick={increment}>
                                <PlusOutlined />
                            </Button>
                        </div>
                    </div>
                </Card>

                {/* footer part */}
                <Divider />
                <div>
                    <h5>Total Amount: 500</h5>
                    <Button className='bg-dark'>Checkout</Button>
                </div>
            </Drawer>
        </Space>
    );
}

CartDrawer.propTypes = {
    openCart: PropTypes.bool,
    closeCartFeature: PropTypes.func
}

export default CartDrawer;