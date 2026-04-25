import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import { FaArrowRight } from "react-icons/fa6"
import { BsArrowUpRight } from "react-icons/bs"
import * as style from "../styles/sass/homepage.module.scss"

const IndexClientContent = ({ stats, services }) => {
  const { t } = useTranslation()
  const { scrollYProgress } = useScroll()
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 400])
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <>
      <section className={style.heroSection} style={{ overflow: 'hidden' }}>
        <motion.div 
          style={{ y: yHero, opacity: opacityHero }}
          className={style.heroContent}
        >
          <h1 className={style.heroTitle} dangerouslySetInnerHTML={{ __html: t('home.hero.title') }} />
          <p className={style.heroSubtitle}>{t('home.hero.subtitle')}</p>
          <div className="d-flex gap-3">
            <Link to="/projects" className="glass px-4 py-3 glass-hover d-flex align-items-center gap-2">
              {t('home.hero.cta')} <FaArrowRight style={{ color: 'var(--accent-primary)' }} />
            </Link>
            <Link to="/about" className="px-4 py-3 d-flex align-items-center" style={{ textDecoration: 'underline' }}>
              {t('home.hero.about_link')}
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
          className={`${style.glassCard} glass d-flex flex-column justify-content-center`}
        >
          <p className="text-secondary small text-uppercase mb-4" style={{ letterSpacing: '0.1em' }}>{t('home.stats.impact')}</p>
          <div className={style.statsGrid}>
            {stats.map((stat, i) => (
              <div key={i} className={style.statItem}>
                <span className={style.statNumber}>{stat.d}</span>
                <span className={stat.statLabel}>{stat.n}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="section-padding">
        <div className="d-flex justify-content-between align-items-end mb-5">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="display-4 mb-0">{t('home.services.title')}</h2>
            <p className="text-secondary mt-2">{t('home.services.subtitle')}</p>
          </motion.div>
        </div>
        
        <div className={style.servicesGrid}>
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${style.serviceCard} glass glass-hover`}
            >
              <div className={style.serviceIcon}>{service.icon}</div>
              <h3 className={style.serviceName}>{service.name}</h3>
              <p className={style.serviceText}>{service.description}</p>
              <div className={style.serviceFooter}>
                <span className="small text-muted">Licensing from <span className="text-white">₹{service.price}</span></span>
                <a href={service.link} target="_blank" rel="noopener noreferrer" className="text-white d-flex align-items-center gap-1 small glass-hover px-2 py-1 rounded">
                  Initialize <BsArrowUpRight style={{ color: 'var(--accent-primary)' }} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}

export default IndexClientContent
