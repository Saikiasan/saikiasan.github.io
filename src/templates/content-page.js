import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

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

export default function ContentPage({ data: { markdownRemark } }) {
  return (
    <Layout>
      <div className="container-fluid">
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </div>
    </Layout>
  )
}
