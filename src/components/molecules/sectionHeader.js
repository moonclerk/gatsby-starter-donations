import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Container from "@atoms/container"
import DonationForm from "@atoms/donationForm"
import { media } from "@utils/media"

const SectionHeader = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      file(relativePath: { eq: "headerImage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Header grid>
      <Image>
        <Img fluid={data.file.childImageSharp.fluid} />
      </Image>
      <Content>
        <h1>Recurring and one-time donation forms in just 5 minutes</h1>
        <p>
          Set up beautiful donations forms with a flexible back-end. Built on
          top of Stripe. No coding, merchant account, or hosting required.
          Create customizable donation forms that can embedded on your site.
          Thousands of 3rd party integrations available.{" "}
        </p>
        <DonationForm />
      </Content>
    </Header>
  )
}

export default SectionHeader

const Header = styled(Container)`
  align-items: center;
  grid-template-columns: 1fr;
  grid-gap: 0;

  @media ${media.lg} {
    grid-template-columns: 40fr 60fr;
  }
`

const Image = styled.div`
  width: 100%;
  height: 100%;

  @media ${media.lg} {
    border-right: 4px solid ${props => props.theme.colors.primary};
  }

  .gatsby-image-wrapper {
    height: 100%;
    max-height: 75vh;
    width: 100%;

    @media ${media.lg} {
      max-height: none;
    }

    img {
      object-position: top center !important;
    }
  }
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 900px;
  padding: 4rem 2rem;

  p {
    margin-bottom: 2rem;
  }
`
