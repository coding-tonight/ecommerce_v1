import { useState } from "react";
import { Form, Input, Button, Card } from "antd";
import { MailOutlined } from "@ant-design/icons";
import AppLayout from "@/Layouts/AppLayout";
import IsLoading from "@/Common/Spin";
import {
  showErrorNotification,
  showSuccessNotification,
} from "@/Common/Notification";

import { verifyOtp } from "@/config/axios/config";
import { base64Encode } from "@/Common/common";
import { getResetToken } from "@/Common/common";

const RestPassword = () => {
  const [processing, setProcessing] = useState(false);
  const [password, setPassword] = useState(null);
  const [confirm_password, setConfirm_password] = useState(null);
  const token = getResetToken()

  // forget password send email or mail to verfiy if it exits or not
  const sendOtp = async () => {
    setProcessing(true);
    try {
      const response = await verifyOtp({
        password: password,
        confirm_password: confirm_password,
        user_id: token.user_id
      });

      console.log(response.data);

      if (response.data && response.data.status == 200) {
        localStorage.clear()
        showSuccessNotification("success", response.data.MSG);

        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      }
    } catch (error) {
      console.log(error);

      if (error) {
        showErrorNotification("Error", error.response.data.MSG);
        return;
      }
      showErrorNotification("Error", "Ops something went wrong!");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <>
      <AppLayout>
        <section className="flex justify-center items-center mt-5">
          <Card>
            <h1 className="text-xl text-center my-2">Chanage Password</h1>
            <Form className="w-96 h-50">
              <Form.Item
                hasFeedback
                name="password"
                validateTrigger="onBlur"
                rules={[
                  {
                    type: "text",
                    required: true,
                  },
                ]}
              >
                <Input
                  placeholder="Password"
                  prefix={<MailOutlined />}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Form.Item>

              <Form.Item
                hasFeedback
                name="confirm_password"
                validateTrigger="onBlur"
                rules={[
                  {
                    type: "text",
                    required: true,
                  },
                ]}
              >
                <Input
                  placeholder="confirm_password"
                  prefix={<MailOutlined />}
                  onChange={(event) => setConfirm_password(event.target.value)}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  className="bg-black text-white"
                  type="dark"
                  htmlType="submit"
                  block
                  onClick={sendOtp}
                >
                  {processing ? <IsLoading /> : "Verify"}
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </section>
      </AppLayout>
    </>
  );
};

export default RestPassword;
