import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

import AuthForm from 'Components/AuthForm'
import { PageContainer } from 'Components/Globals'

const Signup = (props) => {
  const [errors, setErrors] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    let params = {
      email: email,
      password: password,
      password_confirmation: passwordConfirmation
    }

    axios
    .post("/auth/users", params)
    .then(response => {
      props.history.push('/login')
    })
    .catch((error) => {
      setErrors("Invalid Email or Password.");
  });
  }

  return (
    <PageContainer>
      <AuthForm submit={ handleSubmit } title="Signup">
        <h1>Email</h1>
        <input placeholder="Email" onChange={ e => setEmail(e.target.value)} />
        <h1>Password</h1>
        <input placeholder="Password" type="password" onChange={ e => setPassword(e.target.value)} />
        <h1>Password Confirmation</h1>
        <input placeholder="Password Confirmation" type="password" onChange={ e => setPasswordConfirmation(e.target.value) } />
        { errors && 
          <div>{ errors }</div>
        }
        <button>Signup</button>
        <p>Already a member?</p>
        <Link to="/login">Login</Link>
      </AuthForm>
    </PageContainer>
  );
}

export default Signup;
