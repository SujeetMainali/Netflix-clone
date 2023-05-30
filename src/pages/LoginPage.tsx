import React from 'react'
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'

const LoginPage = () => {
  return (
    <>
      <Header login={false} />
      <BackgroundImage />
    </>
  );
}

export default LoginPage