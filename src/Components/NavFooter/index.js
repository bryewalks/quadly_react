import React from 'react'
import { useSelector } from 'react-redux'

import { Footer, HomeLogo, SignInLogo, SignOutLogo, SignUpLogo, StyledLink } from './style'

const NavFooter = () => {
  const currentUser = useSelector(state => state.currentUser)

  let links = {}
  if (currentUser.loggedIn) {
    links = <StyledLink to="/logout"><SignOutLogo />Logout</StyledLink>
  } else {
    links = <>
              <StyledLink to="/login"><SignInLogo />Login</StyledLink>
              <StyledLink to="/signup"><SignUpLogo />Signup</StyledLink>
            </>
  }

  return (
    <Footer>
      { links }
      <StyledLink to="/"><HomeLogo />Home</StyledLink>
    </Footer>
  )
}

export default NavFooter