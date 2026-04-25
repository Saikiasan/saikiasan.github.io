import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { motion } from "framer-motion"

const BlogPost = ({ data }) => {
  const { markdownRemark } = data
  const { html, frontmatter } = markdownRemark

  return (
    <Layout>
      <div className="container-fluid px-4" style={{ maxWidth: '800px', margin: '120px auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            to="/blogs" 
            className="neu-button mb-5"
          >
            &larr; Back to Intelligence
          </Link>
          
          <div className="neu-card p-5">
            <div className="mb-5">
              <span className="text-gradient small text-uppercase fw-bold" style={{ letterSpacing: '0.2em' }}>
                {frontmatter.category} / {frontmatter.date}
              </span>
              <h1 className="mt-3 mb-4" style={{ fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                {frontmatter.title}
              </h1>
              <div className="d-flex align-items-center gap-3 text-secondary">
                <div className="neu-button" style={{ width: '40px', height: '40px', padding: 0, borderRadius: '50%', justifyContent: 'center' }}>AS</div>
                <span className="small">By {frontmatter.author}</span>
              </div>
            </div>

            <div 
              className="blog-content"
              style={{ 
                  fontSize: '1.15rem', 
                  lineHeight: 1.8, 
                  color: 'var(--text-secondary)'
              }}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>

          <div className="mt-5 pt-5 border-top border-secondary" style={{ opacity: 0.2 }}>
            <p className="text-muted small">Anthology of 2026 &bull; Ankit Saikia</p>
          </div>
        </motion.div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostBySlug($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
        category
      }
    }
  }
`

export const Head = ({ data }) => (
  <Seo title={`${data.markdownRemark.frontmatter.title} | Intelligence`} />
)

export default BlogPost
