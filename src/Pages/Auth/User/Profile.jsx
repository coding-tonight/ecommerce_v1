import { Image, Card, Form, Row, Col, Input, Button } from "antd";

import { auth } from "@/Common/AuthContext";
import AppLayout from "@/Layouts/AppLayout";

const Profile = () => {
  const authData = auth();
  return (
    <>
      <AppLayout>
        <section className="container mx-auto mt-3">
          <Card>
            <Row>
              <Col span={6}>
                <Image
                  width={200}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
              </Col>
              <Col span={12}>
                <Form
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  style={{
                    maxWidth: 600,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  // onFinish={onFinish}
                  // onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                      {
                        message: "Username",
                      },
                    ]}
                  >
                    <Input defaultValue={authData?.username} />
                  </Form.Item>

                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        message: "Your email",
                      },
                    ]}
                  >
                    <Input defaultValue={authData?.email} />
                  </Form.Item>

                  <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Button  htmlType="submit">
                      Update
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Card>
        </section>
      </AppLayout>
    </>
  );
};

export default Profile;
