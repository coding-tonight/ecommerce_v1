import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Card } from "antd";
import {
  LockOutlined,
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import AppLayout from "../../../Layouts/AppLayout";
import { showErrorNotification } from "../../../Common/Notification";
import { publicAxios } from "../../../config/axios/config";
import IsLoading from "../../../Common/Spin";
// import { userLogin } from "../../../config";
import { base64Encode } from "../../../Common/common";

const Login = () => {
  const [processing, setProcessing] = useState(false);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const login = async () => {
    setProcessing(true);
    publicAxios
      .post(
        "login/",
        {},
        {
          auth: {
            username: username,
            password: password,
          },
        }
      )
      .then((response) => {
        // user data
        const userData = {
          username: response.data.data.user,
          email: response.data.data.email,
          is_superuser: response.data.data.is_superuser,
          is_active: response.data.data.is_active,
          joined: response.data.data.joined,
        };
        // storage in the localstorages user data and token
        localStorage.setItem("token", JSON.stringify(response.data.data.token));
        localStorage.setItem("userData", base64Encode(JSON.stringify(userData)));

        if (userData.is_superuser) {
          window.location.href = "/dashboard";
          return;
        }

        window.location.href = "/";
      })
      .catch(({ response }) => {
        if (response) {
          //  console.log(response.data.MSG)
          showErrorNotification("Error", response.data.MSG);
          return;
        }
        showErrorNotification("Error", "Ops something went wrong!");
      })
      .finally(() => {
        setProcessing(false);
      });
  };

  return (
    <>
      <AppLayout>
        {/* <Notifications message /> */}
        <section className="flex justify-center items-center mt-5">
          <Card>
            <h1 className="text-xl text-center my-2">Login</h1>
            <Form className="w-96 h-50">
              <Form.Item
                hasFeedback
                name="username"
                validateTrigger="onBlur"
                rules={[
                  {
                    min: 5,
                    required: true,
                  },
                ]}
              >
                <Input
                  placeholder="Username"
                  prefix={<UserOutlined />}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </Form.Item>
              <Form.Item
                hasFeedback
                name="password"
                validateTrigger="onBlur"
                rules={[
                  {
                    min: 9,
                    required: true,
                  },
                ]}
              >
                <Input
                  placeholder="password"
                  type="password"
                  prefix={<LockOutlined />}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  className="bg-black text-white"
                  type="dark"
                  htmlType="submit"
                  block
                  onClick={login}
                >
                  {processing ? <IsLoading /> : "Login"}
                </Button>
              </Form.Item>

              <div className="flex justify-between">
                <Link to="/forget/password">Forget Password?</Link>
                <Link to="/register">Sign Up</Link>
              </div>
            </Form>
          </Card>
        </section>
      </AppLayout>
    </>
  );
};

export default Login;
