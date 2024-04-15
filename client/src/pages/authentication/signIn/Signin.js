import { Link, useNavigate } from "react-router-dom";
import { Layout, Space, Flex, Input, Button, Form } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Signin.scss';

const { Header, Content } = Layout;

function Signin() {
  const navigate = useNavigate();

  return (
    <div className="Signin">
      <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout className='mainLayout'>
          <Header className='mainHeader'>
            <Flex justify={'flex-end'} align={'center'}>
              <Button className='signupBtn' onClick={() => { navigate('/') }}>Go back</Button>
            </Flex>
          </Header>
          <Content className='mainContent'>
            <Flex className='mainContentArea' justify={'center'} align={'center'} vertical>
              <div className='signInForm'>
                <img src={process.env.PUBLIC_URL + '/Vision.png'} alt='logo' width={120} />
                <h1> Signin to your account.</h1>
                <Form>

                  <Flex gap="small" className='signInFormArea' justify={'center'} align={'center'} vertical>
                    <Form.Item name="email"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your email."
                        },
                        {
                          type: "email",
                          message: "Please enter a valid email."
                        },
                      ]}
                      hasFeedback>
                      <Input
                        className='formInput'
                        placeholder="Email"
                        prefix={<UserOutlined />} />
                    </Form.Item>

                    <Form.Item name="password" rules={[
                      {
                        required: true,
                      }, { min: 6 },
                    ]}
                      hasFeedback>
                      <Input.Password
                        className='formInput'
                        placeholder="password"
                        prefix={<LockOutlined />} />
                    </Form.Item>

                    <Link to="/forgetpassword"> Forget password?</Link>

                    <Button className='formButton' htmlType="submit">Sign In</Button>

                    <label>Not a Member? <Link to="/signup"> Sign Up</Link> </label>
                  </Flex>
                </Form>
              </div>
            </Flex>
          </Content>
        </Layout>
      </Space>
    </div >
  );
}

export default Signin;
