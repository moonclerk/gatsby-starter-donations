import React from "react"
import Layout from "@utils/layout"
import SEO from "@utils/seo"
import SectionHeader from "@molecules/sectionHeader"
import SectionFAQ from "@molecules/sectionFaq"
import SectionCTA from "@molecules/sectionCta"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SectionHeader />
    <SectionFAQ />
    <SectionCTA />
  </Layout>
)

export default IndexPage
