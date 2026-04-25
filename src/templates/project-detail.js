import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import * as s from "../styles/sass/project-home.module.scss"
import "../styles/sass/project-blog.scss"

const ProjectDetail = ({ data }) => {
  const { markdownRemark } = data
  return (
    <Layout>
      <div className="container-fluid px-4" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div className={`${s.container} neu-card p-5`}>
          <p className={s.pStack}>{markdownRemark.frontmatter.stack}</p>
          <h1 className={s.projectHeading}>
            {markdownRemark.frontmatter.title}
          </h1>
          
          <div 
            className="animate-fade-in"
            style={{ marginTop: 'var(--spacing-md)' }}
          >
            <div
              className="project-content"
              dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
            />
          </div>
        </div>
      </div>
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
