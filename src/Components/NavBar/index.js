import React from 'react'
import { useSelector } from 'react-redux'

import paperPlane from './images/paper-plane.svg'
import { Container, Header, Logo, Navigation, StyledLink, Title } from './style'

const NavBar = () => {
  const currentUser = useSelector(state => state.currentUser)

  return (
    <Container>
      <Header>
        <Logo src={ paperPlane } />
        <Title>Quadly</Title>
      </Header>
      <Navigation>
        <StyledLink to="/locations">Locations</StyledLink>
        { currentUser.loggedIn ? <StyledLink to="/logout">Logout</StyledLink> : <StyledLink to="/login">Login</StyledLink> }
        <StyledLink to="/">Home</StyledLink>
      </Navigation>
    </Container>     
  )
}

export default NavBar