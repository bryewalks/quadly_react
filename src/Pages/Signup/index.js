import React from 'react'
import { Link } from 'react-router-dom'

import AuthForm from 'Components/AuthForm'
import { PageContainer } from 'Components/Globals'

const Signup = (props) => {
  return (
    <PageContainer>
      <AuthForm title="Signup">
        <h1>Username</h1>
        <input placeholder="Username" />
        <h1>Email</h1>
        <input placeholder="Email" />
        <h1>Password</h1>
        <input placeholder="Password" />
        <h1>Password Confirmation</h1>
        <input placeholder="Password Confirmation" />
        <button>Signup</button>
        <p>Already a member?</p>
        <Link to="/login">Login</Link>
      </AuthForm>
    </PageContainer>
  );
}

export default Signup;
