import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import ProductPage from "../Pages/Reusable/Product";
import ForgetPassword from "../Pages/Auth/ForgetPassword";
import GuestMiddleware from "../middleware/GuestMiddleware";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />

        {/* guest routers */}
        <Route element={<GuestMiddleware />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget/password" element={<ForgetPassword />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
