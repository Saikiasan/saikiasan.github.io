import * as React from "react"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Link } from "gatsby"

const IntelligenceClientContent = ({ blogs }) => {
  const { t } = useTranslation()

  return (
    <>
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-center mb-5"
        >
          <span className="small text-uppercase fw-bold mb-3 d-block" style={{ letterSpacing: '0.3em', color: 'var(--accent-primary)' }}>{t('intelligence.tag')}</span>
          <h1 className="display-3 mt-3 fw-bold">{t('intelligence.title')}</h1>
          <p className="text-muted lead mt-4 mx-auto" style={{ maxWidth: '700px', lineHeight: 1.6 }}>
            {t('intelligence.subtitle')}
          </p>
        </motion.div>

        <section className="mt-5">
            {[
                { 
                    id: "I", 
                    title: "The End of the Input/Output Era", 
                    content: "In 2026, the traditional prompt-and-response cycle is a legacy pattern. Today's systems operate as Active Agents. They don't wait for instructions; they exist in a continuous state of environmental awareness." 
                },
                { 
                    id: "II", 
                    title: "Liquid Intelligence Interfaces", 
                    content: "The interfaces I build are not fixed. They are Neural Constructs. They reorganize their structure based on session-intent and cognitive load, morphing into the most efficient version for every interaction." 
                },
                { 
                    id: "III", 
                    title: "The New Developer Stewardship", 
                    content: "Programming in the Agentic Era is about Alignment. I architect the ethical guardrails and semantic foundations that allow agents to act with high fidelity and zero-harm." 
                }
            ].map((item, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className="mb-5"
                >
                    <div className="neu-card p-5">
                        <h2 className="h4 mb-4" style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{item.id}. {item.title}</h2>
                        <p className="text-muted" style={{ lineHeight: 1.8, fontSize: '1.05rem' }}>
                            {item.content}
                        </p>
                    </div>
                </motion.div>
            ))}

            {/* Blog Posts Section */}
            <div className="mt-5 pt-5">
                <h2 className="h1 mb-5 fw-bold">Strategy Logs</h2>
                <div className="d-flex flex-column gap-4">
                    {blogs.map((blog, index) => (
                        <motion.div 
                            key={blog.id}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                        >
                            <Link 
                                to={`/blogs/${blog.frontmatter.slug}`}
                                className="neu-card p-4 d-block text-decoration-none"
                                style={{ transition: 'var(--transition-norm)' }}
                            >
                                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-4">
                                    <div>
                                        <span className="small text-uppercase fw-bold mb-2 d-block" style={{ letterSpacing: '0.1em', color: 'var(--accent-primary)' }}>
                                            {blog.frontmatter.category} &bull; {blog.frontmatter.date}
                                        </span>
                                        <h3 className="h5 mb-2" style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{blog.frontmatter.title}</h3>
                                        <p className="text-muted small mb-0">{blog.excerpt}</p>
                                    </div>
                                    <div className="neu-button" style={{ padding: '0.6rem 1.2rem', borderRadius: '8px' }}>
                                        Read Log <span style={{ color: 'var(--accent-primary)' }}>&rarr;</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="text-center mt-5 pt-5">
                <hr style={{ opacity: 0.1, marginBottom: '3rem', borderColor: 'var(--text-muted)' }} />
                <p className="text-muted small" style={{ letterSpacing: '0.1em' }}>ANTHOLOGY OF 2026 &bull; ANKIT SAIKIA</p>
            </div>
        </section>
    </>
  )
}

export default IntelligenceClientContent
