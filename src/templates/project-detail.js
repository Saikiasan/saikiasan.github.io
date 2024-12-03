import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const ProjectDetail = ({ data }) => {
  const { markdownRemark } = data
  return (
    <Layout>
      <h1>{markdownRemark.frontmatter.title}</h1>
      <h2>Stack: {markdownRemark.frontmatter.stack}</h2>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetail($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        stack
      }
    }
  }
`

export default ProjectDetail
