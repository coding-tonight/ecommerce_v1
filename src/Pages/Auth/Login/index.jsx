import { Form, Alert, Input } from 'antd';

const Login = () => {
    return (
        <>
            <Form>
                <Form.Item
                    hasFeedback
                    label="Field A"
                    name="field_a"
                    validateTrigger="onBlur"
                    rules={[
                        {
                            max: 3,
                        },
                    ]}
                >
                    <Input placeholder="Validate required onBlur" />
                </Form.Item>
            </Form>
        </>
    );
}

export default Login;