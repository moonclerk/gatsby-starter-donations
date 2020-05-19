import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Button from "@atoms/button"
import Container from "@atoms/container"

const SectionCTA = () => {
  const data = useStaticQuery(graphql`
    query CtaQuery {
      donate: file(relativePath: { eq: "donateVisual.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      volunteer: file(relativePath: { eq: "volunteerVisual.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <CTAContainer content contentTop>
      <h1>We need your support to help those in need.</h1>
      <Buttons>
        <Button href="">Donate</Button>
        <Button alt href="">
          Volunteer
        </Button>
      </Buttons>
      <Visuals>
        <Img fluid={data.donate.childImageSharp.fluid} />
        <Img fluid={data.volunteer.childImageSharp.fluid} />
      </Visuals>
    </CTAContainer>
  )
}

export default SectionCTA

const CTAContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  text-align: center;

  h1 {
    margin-bottom: 2rem;
  }
`

const Buttons = styled.div`
  align-items: center;
  display: flex;

  a {
    margin: 1rem 1rem;
  }
`

const Visuals = styled.div`
  bottom: 0;
  display: flex;
  justify-content: space-between;
  position: absolute;
  transform: translateY(0.25rem);
  width: 100%;

  .gatsby-image-wrapper {
    width: 30%;
  }
`
