import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useTranslation } from "react-i18next"

const IntelligenceClientContent = () => {
  const { t } = useTranslation()
  const { scrollYProgress } = useScroll()
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <>
        <motion.div 
            style={{ y: headerY, opacity }}
            className="text-center mb-5"
        >
          <span className="text-gradient small text-uppercase fw-bold" style={{ letterSpacing: '0.3em' }}>{t('intelligence.tag')}</span>
          <h1 className="display-2 mt-3" style={{ fontWeight: 800 }}>{t('intelligence.title')}</h1>
          <p className="text-secondary lead mt-4 mx-auto" style={{ maxWidth: '700px' }}>
            {t('intelligence.subtitle')}
          </p>
        </motion.div>

        <section className="mt-5">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-5"
            >
                <div className="glass p-5 mb-4 border-accent">
                    <h2 className="h3 mb-4 text-white">I. The End of the Input/Output Era</h2>
                    <p className="lead text-secondary" style={{ lineHeight: 1.8 }}>
                        In 2026, the traditional prompt-and-response cycle is a legacy pattern. Today's systems operate as <b>Active Agents</b>. 
                        They don't wait for instructions; they exist in a continuous state of environmental awareness, preemptively adjusting digital landscapes to meet human goals before they are even articulated.
                    </p>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-5"
            >
                <h2 className="h4 mb-4" style={{ color: 'var(--accent-primary)' }}>II. Liquid Intelligence Interfaces</h2>
                <div className="glass p-5 mb-4">
                    <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                        The interfaces I build in 2026 are not fixed. They are <b>Neural Constructs</b>. 
                        They reorganize their structure based on session-intent and cognitive load. By leveraging agentic sub-routines, the UI morphs into the most efficient version of itself for every unique interaction.
                    </p>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-5"
            >
                <h2 className="h4 mb-4">III. The New Developer Stewardship</h2>
                <div className="glass p-5 mb-4 border-accent">
                    <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                        Programming in the Agentic Era is about <b>Alignment</b>. My focus has shifted from syntax to strategy. 
                        I architect the ethical guardrails and semantic foundations that allow agents to act with high fidelity and zero-harm. We are no longer just builders; we are the guardians of digital intent.
                    </p>
                </div>
            </motion.div>

            <div className="text-center mt-5 pt-5">
                <hr className="opacity-10 mb-5" />
                <p className="text-muted small">Anthology of 2026 &bull; Ankit Saikia &bull; Intelligence Specialist</p>
            </div>
        </section>
    </>
  )
}

export default IntelligenceClientContent
