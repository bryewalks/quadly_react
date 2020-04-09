import React from 'react'

import { Footer, HomeLogo, SignInLogo, SignOutLogo, SignUpLogo, StyledLink } from './style'

const NavFooter = () => {
  return (
    <Footer>
      <StyledLink to="/login"><SignInLogo />Login</StyledLink>
      <StyledLink to="/logout"><SignOutLogo />Logout</StyledLink>
      <StyledLink to="/signup"><SignUpLogo />Signup</StyledLink>
      <StyledLink to="/"><HomeLogo />Home</StyledLink>
    </Footer>
  )
}

export default NavFooter