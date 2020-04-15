import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'

import actions from 'store/actions'

import AuthForm from 'Components/AuthForm'
import { PageContainer } from 'Components/Globals'

const Login = (props) => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    let params = {
      email: email,
      password: password
    }

    axios
      .post("/auth/sessions", params)
      .then(response => {
        localStorage.setItem("jwt", response.data.jwt)
        dispatch(actions.userActions.setUser({
                                              email: response.data.email,
                                              userId: response.data.user_id
                                            }))
        props.history.push('/')
      })
      .catch((error) => {
        setErrors("Invalid Email or Password.");
    });
  }

  return (
    <PageContainer>
      <AuthForm submit={ handleSubmit } title="Login">
        <h1>Email</h1>
        <input onChange={ e => setEmail(e.target.value)} placeholder="Email" />
        <h1>Password</h1>
        <input onChange={ e => setPassword(e.target.value)} placeholder="Password" type="password" />
        { errors && 
          <div>{ errors }</div>
        }
        <button disabled={ !email || !password }>Login</button>
        <p>Not a member?</p>
        <Link to="/signup">Signup</Link>
      </AuthForm>
    </PageContainer>
  );
}

export default Login
