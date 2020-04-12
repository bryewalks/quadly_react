import React from 'react'
import { Link } from 'react-router-dom'

import AuthForm from 'Components/AuthForm'
import { PageContainer } from 'Components/Globals'

const Login = (props) => {
  return (
    <PageContainer>
      <AuthForm title="Login">
        <h1>Username</h1>
        <input placeholder="Username" />
        <h1>Password</h1>
        <input placeholder="Password" />
        <button>Login</button>
        <p>Not a member?</p>
        <Link to="/signup">Signup</Link>
      </AuthForm>
    </PageContainer>
  );
}

export default Login;
