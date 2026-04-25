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
    name: "Enterprise Ecosystems",
    description: "Designing scalable, high-performance web infrastructures that serve as the backbone for modern businesses.",
    price: "1,999",
    link: `https://wa.me/918257068226?text=Enterprise%20Ecosystems`,
  },
  {
    icon: <AiOutlineOpenAI />,
    name: "Business Intelligence",
    description: "Integrating advanced AI and automation to streamline operations and unlock data-driven decision making.",
    price: "4,999",
    link: `https://wa.me/918257068226?text=Business%20Intelligence`,
  },
  {
    icon: <IoLogoAndroid />,
    name: "Custom Product Design",
    description: "End-to-end software development from creative concept to market-ready mobile and web applications.",
    price: "3,499",
    link: `https://wa.me/918257068226?text=Custom%20Product%20Design`,
  },
  {
    icon: <BsGraphUpArrow />,
    name: "Growth Strategy",
    description: "Strategic consulting to align your technical roadmap with long-term business growth and creative goals.",
    price: "2,499",
    link: `https://wa.me/918257068226?text=Growth%20Strategy`,
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
