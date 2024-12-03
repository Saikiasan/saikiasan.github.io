import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/Layout"
import * as styles from "../../styles/project-home.module.css"

const Projects = ({ data }) => {
  const projects = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div className="container-fluid py-3">
        <h1 className={`${styles.projectHeading}`}>Projects at a glance</h1>

        <div className={`${styles.projectContainer}`}>
          {projects.map(project => (
            <Link
              to={`/projects/${project.frontmatter.slug}`}
              key={project.id}
              className={`card ${styles.projectCard}`}
            >
              <div className={`card-body ${styles.projectCardBody}`}>
                <h2 className={styles.pTitle}>{project.frontmatter.title}</h2>
                <p className={styles.pStack}>{project.frontmatter.stack}</p>
                <p className={styles.pExcerpt}>{project.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsPage {
    allMarkdownRemark(sort: { frontmatter: { title: ASC } }) {
      nodes {
        frontmatter {
          slug
          stack
          title
        }
        id
        excerpt(format: PLAIN, pruneLength: 180)
      }
    }
  }
`

export default Projects
