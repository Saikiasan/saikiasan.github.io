import React from "react"
import { graphql } from "gatsby"

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

export default function PolicyDetail({ data: { markdownRemark } }) {
  //   const { markdownRemark } = data
  return (
    <div className="container">
      <div className="mt-5">
        <h1
          className="text-center text-uppercase"
          style={{ color: "var(--o-60)" }}
        >
          {markdownRemark.frontmatter.title}
        </h1>
        <h5 className="text-center text-light ">
          Last Updated: {markdownRemark.frontmatter.last_updated}
        </h5>
        <h5 className="text-center text-light ">
          Author: {markdownRemark.frontmatter.author}
        </h5>
        <hr />
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
        className="lead p-5"
        style={{ color: "var(--g-50)" }}
      />
    </div>
  )
}
