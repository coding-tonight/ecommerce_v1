import { Form, Input, Button, Card } from 'antd';
import { MailOutlined ,LockOutlined } from '@ant-design/icons'
import AppLayout from '../../../Layouts/AppLayout';

const Login = () => {
    return (
        <>
            <AppLayout>
                <section className="flex justify-center items-center mt-5">
                    <Card>
                         <h1 className='text-xl text-center my-2'>Login</h1>
                        <Form className='w-72'>
                            <Form.Item
                                hasFeedback
                                name="email"
                                validateTrigger="onBlur"
                                rules={[
                                    {
                                        type: "email" ,
                                        required: true
                                    }
                                ]}
                            >
                                <Input placeholder="Email" prefix={<MailOutlined /> } />
                            </Form.Item>
                            <Form.Item
                                hasFeedback
                                name="password"
                                validateTrigger="onBlur"
                                rules={[
                                    {
                                        min: 8,
                                        required: true
                                    },
                                ]}
                            >
                                <Input placeholder="password" type='password' prefix={<LockOutlined />} />
                            </Form.Item>

                            <Form.Item>
                                <Button  className="bg-black text-white" type="dark" htmlType="submit" block>
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </section>
            </AppLayout>
        </>
    );
}

export default Login;