import * as React from "react"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import * as styles from "../styles/sass/about-page.module.scss"

const AboutClientContent = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`${styles.pageTitle} title-large`}
      >
        {t('about.title')}
      </motion.h1>
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className={`${styles.description} neu-card`}
      >
        <p className={styles.descriptionText} dangerouslySetInnerHTML={{ __html: t('about.description') }} />
        <p className={styles.descriptionText}>{t('about.journey')}</p>
      </motion.div>

      <div className="row g-4 mt-4">
        <div className="col-md-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`${styles.textSection} neu-card`}
          >
            <h2 className={styles.textSectionsHead}>the intelligence shift</h2>
            <p className={styles.textSectionsPara}>In 2026, the barrier between 'code' and 'logic' has dissolved. I focus on creating self-healing systems that leverage Edge AI to provide near-zero latency intelligence.</p>
          </motion.div>
        </div>
        <div className="col-md-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`${styles.textSection} neu-card`}
          >
            <h2 className={styles.textSectionsHead}>future ventures</h2>
            <p className={styles.textSectionsPara}>Currently exploring the limits of decentralized intelligence and autonomous agent ecosystems. The goal is to build tools that empower humans, not replace them.</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AboutClientContent
