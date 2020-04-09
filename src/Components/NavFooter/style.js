import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { Clippy, Home, SignIn, SignOut } from '@styled-icons/octicons'

const logoStyle = css`
  margin-right: 10px;
  color: #959595;
  width: 20px;
  height: auto;
`

export const Footer = styled.div`
  background-color: #282F37;
  height: 250px;
  padding: 25px;
  text-align: center;
`

export const HomeLogo = styled(Home)`
  ${logoStyle}
`

export const SignInLogo = styled(SignIn)`
  ${logoStyle}
`

export const SignOutLogo = styled(SignOut)`
  ${logoStyle}
`

export const SignUpLogo = styled(Clippy)`
  ${logoStyle}
`

export const StyledLink = styled(Link)`
  color: #dadada;
  display: block;
  width: 100px;
  margin: 10px auto;
  font-size: 16px;
  padding: 5px;
  text-decoration: none;
  :hover, :hover svg {
    color: white;
    cursor: pointer;
  }
`
