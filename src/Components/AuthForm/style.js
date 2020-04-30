import styled from 'styled-components'
import { PageContainer } from 'Components/Globals'

export const Form = styled.form`
  background-color: white;
  border-radius: 15px;
  border: 2px solid #282F37;
  margin: 0 auto;
  min-width: 600px;
`

export const FormContainer = styled(PageContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FormHeader = styled.div`
  background-color: #282F37;
  border-radius: 12px 12px 0 0;
  color: white;
  font-size: 45px;
  height: 75px;
  line-height: 75px;
  max-width: 600px;
  text-align: center;
`

export const FormBody = styled.div`
  padding: 25px 0;
  text-align: center;

  h1 {
    font-weight: 300;
    :first-child {
      margin-top: 0;
    }
  }

  input {
    font-size: 20px;
  }

  button {
    background-color: #282F37;
    border: none;
    color: white;
    display: block;
    font-size: 20px;
    font-weight: 600;
    margin: 22px auto 0;
    padding: 10px;
    width: 200px;
    :hover {
      cursor: pointer
    }
  }
`