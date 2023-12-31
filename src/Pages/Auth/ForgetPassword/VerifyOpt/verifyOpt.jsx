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

const VerifyOtp = () => {
  const [processing, setProcessing] = useState(false);
  const [otp, setOtp] = useState(null);

  console.log(otp)

  // forget password send email or mail to verfiy if it exits or not
  const sendOtp = async () => {
    setProcessing(true);
    try {
      const response = await verifyOtp({
        otp: otp,
      });
      
      console.log(response.data);

      if (response.data && response.data.status == 200) {

        const resetToken = {
          token: response.data.token,
          user_id: response.data.user_id
        }
        // if otp is verify then storage restToken in the localstorage 
        localStorage.setItem('restToken', base64Encode(JSON.stringify(resetToken)))

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
            <h1 className="text-xl text-center my-2">Verify OTP</h1>
            <Form className="w-96 h-50">
              <Form.Item
                hasFeedback
                name="otp"
                validateTrigger="onBlur"
                rules={[
                  {
                    type: "text",
                    required: true,
                  },
                ]}
              >
                <Input
                  placeholder="OTP"
                  prefix={<MailOutlined />}
                  onChange={(event) => setOtp(event.target.value)}
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

export default VerifyOtp;
