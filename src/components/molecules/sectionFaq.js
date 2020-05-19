import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Container from "@atoms/container"
import FaqQuestion from "@atoms/faqQuestion"
import { media } from "@utils/media"

const SectionFAQ = () => {
  const data = useStaticQuery(graphql`
    query FaqQuery {
      file(relativePath: { eq: "faqVisual.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <FaqContainer content contentTop grid>
      <Questions>
        <h1>Frequently asked questions</h1>
        <FaqQuestion
          index="1"
          question="How do I set up donations?"
          answer="Create Stripe and MoonClerk accounts if you do not have them already. Then create a new MoonClerk form and customize it to meet your donation needs. Once the form is created embed the form in your website/landing page."
        />
        <FaqQuestion
          index="2"
          question="Are there any contracts or setup fees?"
          answer="With MoonClerk, Gatsby, Netlify, and Stripe there are no contracts or setup fees. You can cancel your accounts anytime."
        />
        <FaqQuestion
          index="3"
          question="How do I use this starter?"
          answer="1. Clone this repo to your local machine, customize the branding, text, and imagery to match your non-profit. 2. Create a MoonClerk form and use the embed code to place your own donation form in the header. 3. Deploy the site to Netlify and connect it to your domain for the world to see."
        />
        <FaqQuestion
          index="4"
          question="What is MoonClerk?"
          answer="If you’re looking for a cost-effective, easy-to-use way to accept donations online, MoonClerk is here to help. MoonClerk allows any organization to start accepting recurring and one-time donations. Reduce administrative headaches. Increase conversion rates. Look great online while doing it. "
        />
      </Questions>
      <Visual>
        <Img fluid={data.file.childImageSharp.fluid} />
      </Visual>
    </FaqContainer>
  )
}

export default SectionFAQ

const FaqContainer = styled(Container)`
  align-items: start;
  background-color: ${props => props.theme.colors.background};
  grid-template-columns: 1fr;

  @media ${media.lg} {
    grid-template-columns: 60fr 40fr;
  }
`
const Questions = styled.div`
  grid-row: 2;

  h1 {
    margin-bottom: 2.5rem;
  }

  @media ${media.lg} {
    grid-row: 1;
  }
`

const Visual = styled.div`
  grid-row: 1;
`
