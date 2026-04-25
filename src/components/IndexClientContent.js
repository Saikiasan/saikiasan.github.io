import * as React from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import { FaArrowRight } from "react-icons/fa6"
import { BsArrowUpRight } from "react-icons/bs"
import * as style from "../styles/sass/homepage.module.scss"

const IndexClientContent = ({ stats, services }) => {
  const { t } = useTranslation()

  // Simplified animations for a minimalistic feel
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <>
      <section className={style.heroSection}>
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className={style.heroContent}
        >
          <motion.div variants={itemVariants}>
            <span className="text-uppercase small fw-bold mb-3 d-block" style={{ letterSpacing: '0.3em', color: 'var(--accent-primary)' }}>
              Architect of Autonomy
            </span>
          </motion.div>
          <motion.h1 
            variants={itemVariants}
            className={style.heroTitle} 
            dangerouslySetInnerHTML={{ __html: t('home.hero.title') }} 
          />
          <motion.p variants={itemVariants} className={style.heroSubtitle}>
            {t('home.hero.subtitle')}
          </motion.p>
          <motion.div variants={itemVariants} className="d-flex align-items-center gap-4 mt-5">
            <Link to="/projects" className={`${style.ctaMain} d-flex align-items-center gap-3`}>
              {t('home.hero.cta')} <FaArrowRight />
            </Link>
            <Link to="/about" className={style.secondaryLink}>
              {t('home.hero.about_link')}
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className={`${style.glassCard} d-flex flex-column justify-content-center mt-5 mt-lg-0`}
        >
          <p className="text-muted small text-uppercase mb-5 fw-bold" style={{ letterSpacing: '0.15em', textAlign: 'center' }}>
            {t('home.stats.impact')}
          </p>
          <div className={style.statsGrid}>
            {stats.map((stat, i) => (
              <div key={i} className={style.statItem}>
                <span className={style.statNumber}>{stat.d}</span>
                <span className={style.statLabel}>{stat.n}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="section-padding">
        <div className="mb-5">
          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeIn}
          >
            <h2 className="display-4 mb-3 fw-bold">{t('home.services.title')}</h2>
            <p className="text-muted lead" style={{ maxWidth: '600px' }}>{t('home.services.subtitle')}</p>
          </motion.div>
        </div>
        
        <div className={style.servicesGrid}>
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={style.serviceCard}
            >
              <div className={style.serviceIcon}>{service.icon}</div>
              <h3 className={style.serviceName}>{service.name}</h3>
              <p className={style.serviceText}>{service.description}</p>
              <div className={style.serviceFooter}>
                <span className="small text-muted">From <span style={{ color: 'var(--text-primary)' }}>₹{service.price}</span></span>
                <a href={service.link} target="_blank" rel="noopener noreferrer" className="text-muted d-flex align-items-center gap-2 small fw-bold">
                  Consult <BsArrowUpRight />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-padding" style={{ borderTop: '1px solid var(--border-color)' }}>
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className={style.glassCard}
              style={{ padding: '3rem' }}
            >
              <h4 className="mb-4" style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>The Foundational Philosophy</h4>
              <p className="lead mb-4" style={{ color: 'var(--text-primary)', fontWeight: 500, lineHeight: 1.6 }}>
                "We don't just build software; we architect the growth engines for the next generation of business ventures."
              </p>
              <p className="text-muted mb-0">
                In my role as a founder and creative lead, I focus on the intersection of technical excellence and strategic vision. Every project I touch is treated as a venture, with a focus on long-term scalability and market disruption.
              </p>
            </motion.div>
          </div>
          <div className="col-lg-6 ps-lg-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="h1 fw-bold mb-5" style={{ color: 'var(--text-primary)' }}>Scaling Vision through <br/> Creative Engineering</h2>
              <div className="d-flex flex-column gap-5">
                {[
                  { id: '01', title: 'Strategic Leadership', desc: 'Navigating technical landscapes to deliver business value.' },
                  { id: '02', title: 'Creative Innovation', desc: 'Blending design-thinking with robust engineering.' },
                  { id: '03', title: 'Venture Scaling', desc: 'Building infrastructure for global impact.' }
                ].map((item) => (
                  <div key={item.id} className="d-flex gap-4 align-items-center">
                    <div className="neu-card-inset d-flex align-items-center justify-content-center" style={{ minWidth: '60px', height: '60px', color: 'var(--accent-primary)', fontWeight: 'bold' }}>{item.id}</div>
                    <div>
                      <h5 className="mb-1" style={{ color: 'var(--text-primary)' }}>{item.title}</h5>
                      <p className="text-muted small mb-0">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default IndexClientContent
