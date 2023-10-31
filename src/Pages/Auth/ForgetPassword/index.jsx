import { useState } from 'react';
import { Form, Input, Button, Card } from "antd";
import { MailOutlined } from "@ant-design/icons";
import AppLayout from "../../../Layouts/AppLayout";

const ForgetPassword = () => {
    const [processing, setProcessing] = useState(false);
    const [email, setEmail] = useState(null);

  return (
    <>
      <AppLayout>
        <section className="flex justify-center items-center mt-5">
          <Card>
            <h1 className="text-xl text-center my-2">Forget Password</h1>
            <Form className="w-96 h-50">
              <Form.Item
                hasFeedback
                name="email"
                validateTrigger="onBlur"
                rules={[
                  {
                    type: 'email',
                    required: true,
                  },
                ]}
              >
                <Input
                  placeholder="Email"
                  prefix={<MailOutlined />}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Item>
           
              <Form.Item>
                <Button
                  className="bg-black text-white"
                  type="dark"
                  htmlType="submit"
                  block
                //   onClick={login}
                >
                  {processing ? <IsLoading /> : "submit"}
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </section>
      </AppLayout>
    </>
  );
};


export default ForgetPassword;
