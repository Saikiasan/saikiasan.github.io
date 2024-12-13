import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import * as s from "../styles/project-home.module.css"
import "../styles/project-blog.css"
import { useMediaQuery } from "react-responsive"

const Pc = ({ markdownRemark }) => {
  return (
    <div className="container-fluid" style={{ margin: "4rem 0px" }}>
      <h1 className={s.projectHeading} style={{ fontSize: "4rem" }}>
        {markdownRemark.frontmatter.title}
      </h1>
      <h2 className={s.pStack}>{markdownRemark.frontmatter.stack}</h2>
      <div
        className={`card ${s.projectCardBody}`}
        style={{ marginTop: "3.5rem" }}
      >
        <div
          className={s.pExcerpt}
          style={{
            color: "var(--o-90)",
          }}
          dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
        />
      </div>
    </div>
  )
}

const Mobile = ({ markdownRemark }) => {
  return (
    <div className="container-fluid" style={{ margin: "12px 0px" }}>
      <h1 className={s.mprojectHeading}>{markdownRemark.frontmatter.title}</h1>
      <h2 className={s.mpStack}>{markdownRemark.frontmatter.stack}</h2>
      <div className={`${s.mprojectCardBody}`} style={{ marginTop: "24px" }}>
        <div
          className={s.mpExcerpt}
          style={{
            color: "var(--o-90)",
          }}
          dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
        />
      </div>
    </div>
  )
}
const ProjectDetail = ({ data }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const { markdownRemark } = data
  return (
    <Layout>
      {isMobile ? (
        <Mobile markdownRemark={markdownRemark} />
      ) : (
        <Pc markdownRemark={markdownRemark} />
      )}
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
