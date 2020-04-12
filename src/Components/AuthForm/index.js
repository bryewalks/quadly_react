import React from 'react'

import { Form, FormBody, FormHeader } from './style'

export const AuthForm = ({ children, title }) => {
  return (
    <Form>
      <FormHeader>
        { title }
      </FormHeader>
      <FormBody>
        { children }
      </FormBody>
    </Form>
  )
}

export default AuthForm