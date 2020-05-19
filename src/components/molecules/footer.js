import React from "react"
import styled from "styled-components"
import Container from "@atoms/container"
import TextLink from "@atoms/textLink"

const Footer = () => (
  <FooterContainer content>
    <Links>
      <li>
        <TextLink href="gatsby.org">Gatsby</TextLink>
      </li>
      <li>
        <TextLink href="moonclerk.com">MoonClerk</TextLink>
      </li>
      <li>
        <TextLink href="stripe.com">Stripe</TextLink>
      </li>
    </Links>
    <Copyright>
      <p>© 2020 All Rights Reserved</p>
    </Copyright>
  </FooterContainer>
)

export default Footer

const FooterContainer = styled(Container)`
  background-color: ${props => props.theme.colors.black};
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  padding-top: 1rem;

  a,
  p {
    color: ${props => props.theme.colors.lightGray};
    margin-bottom: 0;
  }
`

const Copyright = styled.div``

const Links = styled.ul`
  margin: 0;
  display: flex;
  list-style: none;

  li {
    margin: 0;
    padding-right: 0.75rem;
  }
`
