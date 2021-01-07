import React, {useState} from 'react';
import Layout from '../components/layout';
import Login from '../components/loginpage/login';

import { setAuth } from "../redux/actions/authActions";
import { connect } from "react-redux";

const LoginPage = ({setAuth}) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const responseFacebook = (response) => {
    if (response !== null) {
      const userFB = {
        username: response.name,
        password: response.name
      }
      loginUser(userFB, 'facebook');
    } else {
      alert('Tidak dapat mengambil data dari Facebook!');
    }
  }

  const responseGoogle = (response) => {
    if (response !== null) {
      const userGoogle = {
        username: response.profileObj.name,
        password: response.profileObj.name
      }
      loginUser(userGoogle, 'google');
    } else {
      alert('Tidak dapat mengambil data dari Google!');
    }
  }

  const loginUser = (value, type) => {
    const dataAuth = {
      username: value.username,
      password: value.password,
      type: type
    }
    setAuth(dataAuth);
  }

  const onFinish = () => {
    const values = { username, password };
    loginUser(values, 'form');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const changeUsername = (e) => {
    return setUsername(e.target.value);
  }

  const changePassword = (e) => {
    return setPassword(e.target.value);
  }

  return (
    <Layout title="Login">
      <Login 
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        changeUsername={changeUsername}
        changePassword={changePassword}
        responseFacebook={responseFacebook}
        responseGoogle={responseGoogle}
      />
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  ...state.authReducer
})

const mapDispatchToProps = (dispatch) => ({ 
    setAuth: (dataAuth) => dispatch(setAuth(dataAuth))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);