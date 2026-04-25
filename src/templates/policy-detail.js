import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const PolicyDetail = ({ data: { markdownRemark } }) => {
  return (
    <Layout>
      <div className="container-fluid px-4" style={{ maxWidth: '900px', margin: '120px auto' }}>
        <Link to="/" className="neu-button mb-5">
          &larr; Back to Home
        </Link>
        
        <div className="neu-card p-5">
          <div className="mb-5 text-center">
            <h1 className="display-4 fw-bold mb-3">
              {markdownRemark.frontmatter.title}
            </h1>
            <div className="d-flex justify-content-center gap-4 text-secondary small">
              <span>Updated: {markdownRemark.frontmatter.last_updated}</span>
              <span>Author: {markdownRemark.frontmatter.author}</span>
            </div>
          </div>
          
          <div
            dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
            className="policy-content"
            style={{ 
              lineHeight: 1.8, 
              color: "var(--text-secondary)",
              fontSize: "1.1rem"
            }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PolicyDetail($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        last_updated
        author
      }
    }
  }
`

export const Head = ({ data }) => (
  <Seo title={data.markdownRemark.frontmatter.title} />
)

export default PolicyDetail
