import { useSelector } from "react-redux";

const useCart = () => {
    const cart = useSelector((state) => state.cart)
    const products = useSelector((state) => state.cart.store);
    const totalAmount = useSelector((state) => state.cart.totalAmount);

    if (!cart) return

    return products;
}

export default useCart;