// import PropTypes from 'prop-types'
import { Form } from "react-router-dom";


const FormPage = () => {
    const location = window.location.pathname;
    
  return (
    <>
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

      </Form>
    </>
  );
};

// FormPage.propTypes = {
//   children: PropTypes.node
// }

export default FormPage;
