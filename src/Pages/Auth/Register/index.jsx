import { useState } from "react";
// import { Link } from "react-router-dom";
import { Form, Input, Button, Card } from "antd";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import AppLayout from "../../../Layouts/AppLayout";
import IsLoading from "../../../Common/Spin";
import { register } from "../../../config/axios/config";
import { showErrorNotification } from "../../../Common/Notification";

const Register = () => {
  const [processing, setProcessing] = useState(false);
  const [fname, setFname] = useState(null);
  const [lname, setLname] = useState(null);
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirm_password, setConfim_password] = useState(null);
  //   const [passwordVisable, setPasswordVisable] = useState(false)

  const registerUser = async () => {
    setProcessing(true);
    try {
      const response = await register();
      console.log(response.data);
    } catch ({ response }) {
        console.log(response.data)
      if (response) {
        showErrorNotification("Error", response.data.MSG);
        return;
      }
        showErrorNotification('Error', 'Ops something went wrong!')
    } finally {
      setProcessing(false);
    }
  };

  return (
    <>
      <AppLayout>
        <section className="flex justify-center items-center mt-5">
          <Card>
            <h1 className="text-xl text-center my-2">Register</h1>
            <Form className="w-96 h-50">
              <Form.Item
                hasFeedback
                name="First Name"
                validateTrigger="onBlur"
                rules={[
                  {
                    // min: 5,
                    required: true,
                  },
                ]}
              >
                <Input
                  placeholder="First Name"
                  prefix={<UserOutlined />}
                  onChange={(event) => setFname(event.target.value)}
                />
              </Form.Item>

              <Form.Item
                hasFeedback
                name="Last Name"
                validateTrigger="onBlur"
                rules={[
                  {
                    // min: 5,
                    required: true,
                  },
                ]}
              >
                <Input
                  placeholder="Last Name"
                  prefix={<UserOutlined />}
                  onChange={(event) => setLname(event.target.value)}
                />
              </Form.Item>
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
                name="email"
                validateTrigger="onBlur"
                rules={[
                  {
                    type: "email",
                    required: true,
                  },
                ]}
              >
                <Input
                  placeholder="Username"
                  prefix={<MailOutlined />}
                  onChange={(event) => setEmail(event.target.value)}
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

              <Form.Item
                hasFeedback
                name="confirm_password"
                validateTrigger="onBlur"
                rules={[
                  {
                    min: 9,
                    required: true,
                  },
                ]}
              >
                <Input
                  placeholder="confirm_password"
                  type="password"
                  prefix={<LockOutlined />}
                  onChange={(event) => setConfim_password(event.target.value)}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  className="bg-black text-white"
                  type="dark"
                  htmlType="submit"
                  block
                  onClick={registerUser}
                >
                  {processing ? <IsLoading /> : "Register"}
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </section>
      </AppLayout>
    </>
  );
};

export default Register;
