import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { GiSpiderWeb } from "react-icons/gi"
import { IoLogoAndroid } from "react-icons/io"
import { AiOutlineOpenAI } from "react-icons/ai"
import { BsGraphUpArrow } from "react-icons/bs"
import { useTranslation } from "react-i18next"
import ClientOnly from "../components/ClientOnly"
import IndexClientContent from "../components/IndexClientContent"

const stats = (t) => [
  { n: t('home.stats.clients'), d: "23+" },
  { n: t('home.stats.projects'), d: "50+" },
  { n: t('home.stats.business'), d: "8+" },
]

const services = (t) => [
  {
    icon: <GiSpiderWeb />,
    name: "Agentic Web Engines",
    description: "Orchestrating autonomous web environments that learn and adapt to user intent in real-time.",
    price: "999",
    link: `https://wa.me/918257068226?text=Agentic%20Web`,
  },
  {
    icon: <AiOutlineOpenAI />,
    name: "Neural Interfaces",
    description: "Developing intelligent bridge-layers between human intuition and machine action.",
    price: "4,499",
    link: `https://wa.me/918257068226?text=Neural%20Interfaces`,
  },
  {
    icon: <IoLogoAndroid />,
    name: "Autonomous Mobility",
    description: "Deploying self-correcting agentic apps for the next generation of spatial computing.",
    price: "3,199",
    link: `https://wa.me/918257068226?text=Autonomous%20Mobility`,
  },
  {
    icon: <BsGraphUpArrow />,
    name: "Predictive Analytics",
    description: "Leveraging 2026-grade data agents to forecast market shifts before they occur.",
    price: "2,399",
    link: `https://wa.me/918257068226?text=Predictive%20Analytics`,
  },
]

const IndexPage = () => {
  const { t } = useTranslation()
  const statsList = stats(t)
  const servicesList = services(t)

  return (
    <Layout>
      <div className="container-fluid px-4" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <ClientOnly>
          <IndexClientContent stats={statsList} services={servicesList} />
        </ClientOnly>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Architect of Autonomy" />

export default IndexPage
