import { useState } from "react";
import { Form, Input, Button, Card } from "antd";
import { MailOutlined } from "@ant-design/icons";
import AppLayout from "@/Layouts/AppLayout";
import IsLoading from "@/Common/Spin";
import { forgetPassword } from "@/config/axios/config";
import { showErrorNotification, showSuccessNotification } from "@/Common/Notification";

const VerifyOtp = () => {
  const [processing, setProcessing] = useState(false);
  const [opt, setOtp] = useState(null);

  // forget password send email or mail to verfiy if it exits or not
  const sendOtp = async () => {
    setProcessing(true);
    try {
      const response = await forgetPassword({
        opt: opt
      });
      console.log(response.data);
      if(response.data) {
        showSuccessNotification('success', 'Otp is successfully sent.')
        setTimeout(()=> {
          window.location.href = '/'
        },1000)
      }
      
    } catch (error) {
      console.log(error)

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
                name="email"
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
