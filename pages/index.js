import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import HomePage from './home';
import LoginPage from './login';
// import '~antd/dist/antd.css';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Layout title="E-Commerce">
      { isLoggedIn &&
        <HomePage />
      }
      { !isLoggedIn &&
        <LoginPage />
      }
    </Layout>
  )
};

export default Index;

