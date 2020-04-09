import React from 'react'
import { Link } from 'react-router-dom'

import { PageContainer } from 'Components/Globals'

const Login = (props) => {
  return (
    <PageContainer>
      <h1>Login Page</h1>
      <Link to="/">Home</Link>
    </PageContainer>
  );
}

export default Login;
