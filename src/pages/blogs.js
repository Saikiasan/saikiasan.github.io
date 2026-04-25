import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import ClientOnly from "../components/ClientOnly"
import IntelligenceClientContent from "../components/IntelligenceClientContent"

const IntelligencePage = ({ data }) => {
  const blogs = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div className="container-fluid px-4" style={{ maxWidth: '900px', margin: '0 auto', paddingTop: '120px' }}>
        <ClientOnly>
          <IntelligenceClientContent blogs={blogs} />
        </ClientOnly>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query IntelligencePage {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { type: { eq: "blog" } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          slug
          date(formatString: "MMM DD, YYYY")
          category
        }
        excerpt(pruneLength: 150)
      }
    }
  }
`

export const Head = () => <Seo title="Intelligence | The Agentic Manifesto" />

export default IntelligencePage
