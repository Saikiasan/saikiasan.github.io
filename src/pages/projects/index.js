import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import * as styles from "../../styles/sass/project-home.module.scss"
import { motion } from "framer-motion"

const Projects = ({ data }) => {
  const projects = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div className="container-fluid px-4" style={{ maxWidth: '1200px', margin: '100px auto' }}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5"
          >
            <span className="text-gradient small text-uppercase fw-bold" style={{ letterSpacing: '0.2em' }}>Work Archive / 2024-2026</span>
            <h1 className={`${styles.projectHeading} display-3 mt-2`} style={{ fontWeight: 800 }}>The Manifesto of Work</h1>
            <p className="text-secondary lead mt-3" style={{ maxWidth: '600px' }}>
                A collection of technical artifacts and neural architectures. Each project represents a milestone in the journey toward autonomy.
            </p>
          </motion.div>

          <div className={styles.projectContainer}>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                    to={`/projects/${project.frontmatter.slug}`}
                    className={`${styles.projectCard} glass glass-hover`}
                    style={{ textDecoration: 'none' }}
                >
                    <div className="d-flex justify-content-between align-items-start mb-3">
                        <p className={styles.pStack}>{project.frontmatter.stack}</p>
                        <span className="text-muted small">v1.2</span>
                    </div>
                    <h2 className={styles.pTitle} style={{ fontWeight: 700 }}>{project.frontmatter.title}</h2>
                    <div className={styles.pExcerpt} style={{ fontSize: '0.9rem', opacity: 0.8 }}>{project.excerpt}</div>
                    <div className="mt-auto pt-4 d-flex align-items-center gap-2 text-white small" style={{ fontWeight: 600 }}>
                        Inspect Artifact <span style={{ color: 'var(--accent-primary)' }}>&rarr;</span>
                    </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsPage {
    allMarkdownRemark(
      sort: { frontmatter: { title: ASC } }
      filter: { frontmatter: { type: { eq: "project" } } }
    ) {
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

export const Head = () => <Seo title="The Manifesto | Work Archive" />

export default Projects
