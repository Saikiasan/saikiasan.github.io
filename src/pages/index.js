import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import * as style from "../styles/home.module.css"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { GiSpiderWeb } from "react-icons/gi"
import { IoLogoAndroid } from "react-icons/io"
import { FaDigitalOcean, FaUikit } from "react-icons/fa6"
import { TbBrandGoogleAnalytics } from "react-icons/tb"
import { SiTensorflow } from "react-icons/si"
import { BsArrowUpRight } from "react-icons/bs"
import { useMediaQuery } from "react-responsive"

const skills = [
  {
    n: "Happy Clients",
    d: "23+",
  },
  {
    n: "projects",
    d: "50+",
  },
  {
    n: "photoshop",
    d: "40+",
  },
  {
    n: "local business",
    d: "8+",
  },
  {
    n: "3d autocad",
    d: "4+",
  },
]

const services = [
  {
    icon: <IoLogoAndroid className={style.reactIcons} />,
    name: "Web Development",
    description:
      "We specialize in building high-quality websites using modern technologies and best practices.",
    price: "999",
    link: "/services/web-development",
  },
  {
    icon: <GiSpiderWeb className={style.reactIcons} />,
    name: "App Development",
    description:
      "We develop high-quality mobile applications using React Native, Flutter, or Ionic.",
    price: "1,499",
    link: "/services/app-development",
  },
  {
    icon: <FaDigitalOcean className={style.reactIcons} />,
    name: "Digital Solutions",
    description:
      "We help businesses transform their digital presence by designing and implementing solutions.",
    price: "1,299",
    link: "/services/digital-solutions",
  },
  {
    icon: <FaUikit className={style.reactIcons} />,
    name: "UI - UX design",
    description:
      "We help businesses create visually appealing and user-friendly interfaces.",
    price: "899",
    link: "/services/ui-ux-design",
  },
  {
    icon: <TbBrandGoogleAnalytics className={style.reactIcons} />,
    name: "Data Analysis",
    description:
      "We help businesses make data-driven decisions by analyzing and interpreting data.",
    price: "3,100",
    link: "/services/data-analysis",
  },
  {
    icon: <SiTensorflow className={style.reactIcons} />,
    name: "Machine Learning",
    description:
      "We help businesses create advanced machine learning models and algorithms.",
    price: "5,490",
    link: "/services/machine-learning",
  },
]

const BannerSkills = () => {
  return (
    <div className={style.bannerSkillCards}>
      {/* <div className=""> */}
      {skills.map((skill, index) => (
        <div className={`card`}>
          <div className={`card-body ${style.body}`}>
            <span className={style.bannerSkillData}>{skill.d}</span>
            <span className={style.bannerSkillName}>{skill.n}</span>
          </div>
        </div>
      ))}
      <Link to="/about/services" className="card text-decoration-none">
        <div className={`card-body ${style.bannerKnowMoreCardBody}`}>
          <i className={`bi bi-arrow-up-right ${style.bannerKnowMoreIcon}`}></i>
          <span className={style.bannerKnowMoreLink}>know more</span>
        </div>
      </Link>
    </div>
  )
}
const MobileBannerSkills = () => {
  return (
    <div className={style.mbannerSkillCards}>
      {/* <div className=""> */}
      {skills.map((skill, index) => (
        <div className={`card ${style.mbannerSkillCard}`}>
          <div className={`card-body ${style.mbody}`}>
            <span className={style.mbannerSkillName}>{skill.n}</span>
            <span className={style.mbannerSkillData}>{skill.d}</span>
          </div>
        </div>
      ))}
      <Link
        to="/about/services"
        className={`card text-decoration-none ${style.mbannerKnowMoreLinkContainer}`}
      >
        <div className={`card-body ${style.mbannerKnowMoreCardBody}`}>
          <span className={style.mbannerKnowMoreIconSpan}>
            <BsArrowUpRight className={style.mbannerKnowMoreIcon} />
          </span>
          <span className={style.mbannerKnowMoreLink}>know more</span>
        </div>
      </Link>
    </div>
  )
}

const ServicesProvided = () => {
  return (
    <div className={`${style.service}`}>
      <div className={style.card} style={{ flex: 1, alignItems: "center" }}>
        <h2
          style={{
            textTransform: "uppercase",
            color: "var(--o-80)",
            fontFamily: "Archive",
          }}
        >
          my services
        </h2>
      </div>

      <div
        style={{
          flex: "1 1 100%",
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          alignItems: "stretch",
          justifyContent: "start",
        }}
      >
        {services.map(service => (
          <div className={style.card} style={{ flex: "1 1 calc(50% - 12px)" }}>
            <div
              className={style.serviceFlex}
              style={{
                marginBottom: "24px",
                justifyContent: "space-between",
              }}
            >
              <div className={style.serviceFlex}>
                <div className={style.serviceIcon}>{service.icon}</div>
                <h3>{service.name}</h3>
              </div>
              <Link to={service.link} className={style.serviceLink}>
                <BsArrowUpRight className={style.serviceLinkIcon} />
                <span className={style.serviceLinkSpan}>Book a call</span>
              </Link>
            </div>
            <p className={style.serviceDescription}>{service.description}</p>
            <span className={style.servicePrice}>
              Starts from&nbsp;
              <span style={{ color: "var(--neon-green)" }}>
                ₹{service.price}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
const MobileServicesProvided = () => {
  return (
    <div className={`${style.mservice}`}>
      <div className={style.card} style={{ flex: 1, alignItems: "center" }}>
        <h2
          style={{
            textTransform: "uppercase",
            color: "var(--o-80)",
            fontFamily: "Archive",
          }}
        >
          my services
        </h2>
      </div>

      <div
        style={{
          flex: "1 1 100%",
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          alignItems: "stretch",
          justifyContent: "start",
        }}
      >
        {services.map(service => (
          <div className={style.mcard} style={{ flex: "1 1 100%" }}>
            <div className={style.serviceFlex}>
              <div className={style.serviceIcon}>{service.icon}</div>
              <h3>{service.name}</h3>
            </div>
            <span className={style.mservicePrice}>
              Starts from&nbsp;
              <span style={{ color: "var(--neon-green)" }}>
                ₹{service.price}
              </span>
            </span>
            <p className={style.serviceDescription}>{service.description}</p>
            <Link to={service.link} className={style.mserviceLink}>
              <span className={style.mserviceLinkSpan}>Book a call</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
export const query = graphql`
  query {
    file(relativePath: { eq: "asa.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: WEBP
        )
      }
    }
  }
`
const MobileHome = () => {
  return (
    <div className={style.msection1}>
      <div className={`card ${style.mbanner}`}>
        <div className="card-body">
          <h1 className={style.bannerShowcaseH1}>
            Crafting Digital Experiences
          </h1>
          <h2 className={style.bannerShowcaseH2}>
            programming new experiences
          </h2>
          {/* <GatsbyImage image={image} className={style.animImg} /> */}
        </div>
      </div>
      <MobileBannerSkills />
    </div>
  )
}
const PcHome = ({ image }) => {
  return (
    <div className={style.section1}>
      <div className={`card ${style.banner}`}>
        <div className="card-body">
          <h1 className={style.bannerShowcaseH1}>
            Crafting Digital Experiences
          </h1>
          <h2 className={style.bannerShowcaseH2}>
            programming new experiences
          </h2>
        </div>
      </div>
      <div className={`card ${style.profileImg}`}>
        <div className="card-body">
          <GatsbyImage image={image} className={style.animImg} />
        </div>
      </div>
      <BannerSkills />
    </div>
  )
}
const IndexPage = ({ data }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const image = getImage(data.file.childImageSharp)
  return (
    <Layout>
      <div className={isMobile ? "" : "container-fluid"}>
        {isMobile ? <MobileHome /> : <PcHome image={image} />}

        {isMobile ? <MobileServicesProvided /> : <ServicesProvided />}
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
