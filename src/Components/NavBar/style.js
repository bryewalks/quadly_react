import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  align-items: center;
  background-color: #282F37;
  display: flex;
  height: 55px;
  line-height: 55px;
  margin: auto;
  padding: 0 20px;
`

export const Header = styled.div`
  display: flex;
  cursor: pointer;
`

export const Logo = styled.img`
  fill: white;
  height: auto;
  margin: 0 5px;
  src: ${ props => props.src};
  width: 25px;
`

export const Navigation = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

export const StyledLink = styled(Link)`
  color: #dadada;
  font-size: 16px;
  margin: 0 10px;
  text-decoration: none;
  :hover {
    color: white;
    cursor: pointer;
  }
`

export const Title = styled.a`
  color: white;
  font-size: 24px;
  margin: 0 5px;
`