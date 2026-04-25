import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const ContentPage = ({ data: { markdownRemark } }) => {
  return (
    <Layout>
      <div className="container-fluid px-4" style={{ maxWidth: '1000px', margin: '120px auto' }}>
        <div className="neu-card p-5 animate-fade-in">
          <h1 className="display-4 fw-bold mb-5">{markdownRemark.frontmatter.title}</h1>
          <div 
            style={{ lineHeight: 1.8, color: 'var(--text-secondary)', fontSize: '1.15rem' }}
            dangerouslySetInnerHTML={{ __html: markdownRemark.html }} 
          />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ContentPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
      html
    }
  }
`

export const Head = ({ data }) => (
  <Seo title={data.markdownRemark.frontmatter.title} />
)

export default ContentPage
