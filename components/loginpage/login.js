import React, {useState} from "react";
import { Row, Col, Card, Form, Input, Button, Checkbox } from "antd";
import {
  UserOutlined,
  LockOutlined,
  FacebookOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import styles from "./login.module.scss";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";

const Login = ({onFinish, onFinishFailed, changeUsername, changePassword, responseFacebook, responseGoogle}) => {
  const [rememberMe, setRemember] = useState(true);
  const clickRemember = () => setRemember(!rememberMe);

  return (
    <div className={styles.loginContainer}>
      <Row justify="center">
        <Col span={24}>
          <Card style={{ minWidth: "350px" }}>
            <Form name="login"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}>
              <h2 className={styles.textLogin}>LOGIN</h2>
              <Form.Item
                name="Username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  // value={username}
                  placeholder="Username"
                  // onChange={e => setUsername(e.target.value)}
                  onChange={changeUsername}
                />
              </Form.Item>

              <Form.Item
                name="Password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  // value={password}
                  placeholder="Password"
                  autoComplete="off"
                  // onChange={e => setPassword(e.target.value)}
                  onChange={changePassword}
                />
              </Form.Item>

              <Row>
                <Col span={12}>
                  <Form.Item>
                    <Checkbox checked={rememberMe} onChange={clickRemember}>Remember me</Checkbox>
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item style={{ float: "right" }}>
                    <Button type="primary" htmlType="submit">
                      Sign In
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>

            <Row justify="center" style={{ marginTop: '1rem' }}>
              <Col span={20}>
                <FacebookLogin
                  appId="1000760213748139"
                  callback={responseFacebook}
                  render={(renderProps) => (
                    <Button
                      type="primary"
                      block="true"
                      icon={<FacebookOutlined />}
                      className={styles.buttonFacebook}
                      onClick={renderProps.onClick}
                    >
                      Sign In with Facebook
                    </Button>
                  )}
                />
              </Col>
            </Row>

            <Row justify="center" style={{ marginTop: '1rem' }}>
              <Col span={20}>
                <GoogleLogin
                  clientId="9881449309-mngeuhld95mviml3ainc43okair02hia.apps.googleusercontent.com"
                  render={(renderProps) => (
                    <Button 
                      type="primary"
                      block="true"
                      icon={<GoogleOutlined />}
                      onClick={renderProps.onClick}
                    >
                      Sign In with Google
                    </Button>
                  )}
                  buttonText="Sign In with Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
                ,
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
