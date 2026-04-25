import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import * as styles from "../styles/sass/project-home.module.scss"
import { motion } from "framer-motion"

const Projects = ({ data }) => {
  const projects = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div className="container-fluid px-4" style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '120px' }}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-5 pb-4"
          >
            <span className="small text-uppercase fw-bold" style={{ letterSpacing: '0.2em', color: 'var(--accent-primary)' }}>Work Archive / 2024-2026</span>
            <h1 className="display-3 mt-3 fw-bold" style={{ letterSpacing: '-0.04em' }}>The Manifesto of Work</h1>
            <p className="text-muted lead mt-4" style={{ maxWidth: '600px', lineHeight: 1.6 }}>
                A collection of technical artifacts and neural architectures. Each project represents a milestone in the journey toward autonomy.
            </p>
          </motion.div>

          <div className={styles.projectContainer}>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Link
                    to={`/projects/${project.frontmatter.slug}`}
                    className={styles.projectCard}
                    style={{ textDecoration: 'none' }}
                >
                    <div className="d-flex justify-content-between align-items-start mb-4">
                        <p className={styles.pStack}>{project.frontmatter.stack}</p>
                        <div className="neu-card-inset px-2 py-1 small text-muted" style={{ fontSize: '0.65rem', borderRadius: '4px' }}>v1.2</div>
                    </div>
                    <h2 className={styles.pTitle} style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{project.frontmatter.title}</h2>
                    <div className={styles.pExcerpt} style={{ fontSize: '0.9rem', opacity: 0.8 }}>{project.excerpt}</div>
                    <div className="mt-5 pt-3 d-flex align-items-center gap-2 small fw-bold" style={{ color: 'var(--accent-primary)' }}>
                        Inspect Artifact &rarr;
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
        excerpt(format: PLAIN, pruneLength: 150)
      }
    }
  }
`

export const Head = () => <Seo title="The Manifesto | Work Archive" />

export default Projects
