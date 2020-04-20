import React from 'react'

import { Form, FormContainer, FormBody, FormHeader } from './style'

export const AuthForm = ({ children, title, submit }) => {
  return (
    <FormContainer>
      <Form onSubmit={ submit }>
        <FormHeader>
          { title }
        </FormHeader>
        <FormBody>
          { children }
        </FormBody>
      </Form>
    </FormContainer>
  )
}

export default AuthForm