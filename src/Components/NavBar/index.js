import React from 'react'
import paperPlane from './images/paper-plane.svg'

import { Container, Header, Logo, StyledLink, Title, Navigation } from './style'


const NavBar = () => {
  return (
    <Container>
      <Header>
        <Logo src={ paperPlane } />
        <Title>Quadly</Title>
      </Header>
      <Navigation>
        <StyledLink to="/locations">Locations</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
        <StyledLink to="/">Home</StyledLink>
      </Navigation>
    </Container>     
  )
}

export default NavBar