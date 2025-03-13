import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
// import * as style from "../styles/home.module.css"
import * as style from "../styles/sass/homepage.module.scss"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { GiSpiderWeb } from "react-icons/gi"
import { IoLogoAndroid } from "react-icons/io"
import { FaCode, FaFaceAngry, FaFigma, FaSearchengin } from "react-icons/fa6"
import { AiOutlineOpenAI } from "react-icons/ai"
import { BsArrowUpRight, BsGraphUpArrow } from "react-icons/bs"
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
    icon: <GiSpiderWeb className={style.reactIcons} />,
    name: "Web Development",
    description:
      "We specialize in building high-quality websites using modern technologies and best practices.",
    price: "599",
    link: `https://api.whatsapp.com/send?phone=918257068226&text=${encodeURIComponent(
      "Hello, I'm interested in Web Development. Please share more details.")}`,
  },
  {
    icon: <IoLogoAndroid className={style.reactIcons} />,
    name: "App Development",
    description:
      "We develop high-quality mobile applications using React Native, Flutter, or Ionic.",
    price: "2,799",
    link: `https://api.whatsapp.com/send?phone=918257068226&text=${encodeURIComponent(
      "Hello, I'm interested in Android App Development. Please share more details.")}`,
  },
  {
    icon: <BsGraphUpArrow className={style.reactIcons} />,
    name: "Digital Solutions",
    description:
      "We help businesses transform their digital presence by designing and implementing solutions.",
    price: "1,399",
    link: `https://api.whatsapp.com/send?phone=918257068226&text=${encodeURIComponent(
      "Hello, I'm interested in Digital Solutions part plans. Please share more details.")}`,
  },
  {
    icon: <FaFigma className={style.reactIcons} />,
    name: "UI - UX design",
    description:
      "We help businesses create visually appealing and user-friendly interfaces.",
    price: "299",
    link: `https://api.whatsapp.com/send?phone=918257068226&text=${encodeURIComponent(
      "Hello, I'm interested in UI/ UX design shwon at your Portfolio. Please share more details.")}`,
  },
  {
    icon: <FaSearchengin className={style.reactIcons} />,
    name: "Data Analysis",
    description:
      "We help businesses make data-driven decisions by analyzing and interpreting data.",
    price: "2,050",
    link: `https://api.whatsapp.com/send?phone=918257068226&text=${encodeURIComponent(
      "Hello, I'm interested in Data Analysis. Please share more details.")}`,
  },
  {
    icon: <AiOutlineOpenAI className={style.reactIcons} />,
    name: "Machine Learning",
    description:
      "We help businesses create advanced machine learning models and algorithms.",
    price: "8,499",
    link:`https://api.whatsapp.com/send?phone=918257068226&text=${encodeURIComponent(
      "Hello, I'm interested in Machine learning. Please share more details.")}`,
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
          <BsArrowUpRight className={style.bannerKnowMoreIcon} />
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
        to="/about/know-more"
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
              {/* <Link to={service.link} className={style.serviceLink}>
                <BsArrowUpRight className={style.serviceLinkIcon} />
                <span className={style.serviceLinkSpan}>Book a call</span>
              </Link> */}
              <a
  href={service.link}
  target="_blank"
  rel="noopener noreferrer"
  className={style.mserviceLink}
>
  <span className={style.mserviceLinkSpan}>Book a call</span>
</a>

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
            {/* <Link to={service.link} className={style.mserviceLink}>
              <span className={style.mserviceLinkSpan}>Book a call</span>
            </Link> */}
            <a href={service.link} target="_blank" rel="noopener noreferrer" 
            className={style.mserviceLink}>
              <span className={style.mserviceLinkSpan}>Book a call</span>
            </a>
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
          <hr/>
          {/* <GatsbyImage image={image} className={style.animImg} /> */}
          <p className={style.serviceDescription} style={{color:"var(--o-80)"}}>
            I create tools and solutions tailored to the situation and 
            requirements, with the help of software and technology, I imrove
            every task by 2X.
          </p>
          <p className={style.serviceDescription} style={{color:"var(--o-80)"}}>
            If you got anything for me, then drop me a message. I will be pleased
            to be of help. For things that may seem hard or impossible, lets
            work on it together to make it happen. With the vast ocean of
            overflowing tech stacks and information, achieving a successful
            solution is just around the corner.
          </p>
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
          <h1 className={style.bannerShowcaseH1}>shaping new realities</h1>
          <h2 className={style.bannerShowcaseH2}>
            solving problems at code level
          </h2>
          <p className={style.serviceDescription}>
            I create tools and solutions tailored to the situation and
            requirements, with the help of software and technology, I imrove
            every task by 2X.
          </p>
          <p className={style.serviceDescription}>
            If you got anything for me, then drop me a{" "}
            <a href="mailto:saikiacodes@gmail.com">mail</a>. I will be pleased
            to be of help. For things that may seem hard or impossible, lets
            work on it together to make it happen. With the vast ocean of
            overflowing tech stacks and information, achieving a successful
            solution is just around the corner.
          </p>
        </div>
      </div>
      <div className={`card ${style.profileImg}`}>
        <div className={`card-body p-4`}>
          {/* <GatsbyImage image={image} className={style.animImg} />*/}
          <p className={style.serviceDescription}>
            There will be many more oppurtunities in life for you to be more and
            more productive in what you do. This is a given.
          </p>
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
