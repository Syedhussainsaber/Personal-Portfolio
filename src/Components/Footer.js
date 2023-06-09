import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  width: 87%;
  background-color: black;
  color: white;
  font-family: mono;
  text-align: center;
  position: absolute;
  top: 3280px;
  right: 0px;
  padding: 15px 0px;
  a {
    margin: 0px 8px;
    text-decoration: none;
  }
  @media (max-width: 640px) {
    top: 5050px;
    width: 100%;
  }
  @media (min-width: 592px) and (max-width: 640px) {
    top: 4000px;
  }
`
const Footer = () => {
  return (
    <StyledFooter>
      Copyright &copy; Reserved For
      <a href="syedsaber.netlify.com">syedsaber.netlify.com</a>
    </StyledFooter>
  )
}

export default Footer
