import { Link } from "gatsby"
import React from "react"
import * as s from "../styles/sass/footer.module.scss"
import { BiLogoFacebookSquare } from "react-icons/bi"
import {
  BsArrowUpRight,
  BsArrowUpRightCircleFill,
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
} from "react-icons/bs"

const socialMediaLinks = [
  {
    name: "Facebook",
    icon: <BiLogoFacebookSquare className={s.socialCardIcon} />,
    cap: "Share posts on Facebook",
    url: "https://www.facebook.com/opseeker.saikia",
  },
  {
    name: "Instagram",
    icon: <BsInstagram className={s.socialCardIcon} />,
    cap: "Follow on Instagram",
    url: "https://www.instagram.com/saikia.code/",
  },
  {
    name: "LinkedIn",
    icon: <BsLinkedin className={s.socialCardIcon} />,
    cap: "Connect on LinkedIn",
    url: "https://www.linkedin.com/in/ankit-saikia-17a48623b/",
  },
  {
    name: "WhatsApp",
    icon: <BsWhatsapp className={s.socialCardIcon} />,
    cap: "Contact on WhatsApp",
    url: "https://wa.me/918257068226?text=Hello%0AI%20saw%20your%20site%20and%20wanted%20to%20know%20more",
  },
]

const navigationLinks = {
  site: [
    { name: "why me?", url: "/why-us" },
    { name: "About", url: "/about" },
    { name: "Testimonials", url: "/testimonials" },
    { name: "FAQ", url: "/faq" },
  ],
  services: [
    { name: "Web Development", url: "/web-development" },
    { name: "App Development", url: "/mobile-app-development" },
    { name: "Digital solutions", url: "/digital-marketing" },
    { name: "UI - UX design", url: "/web-design" },
  ],
  projects: [
    { name: "C.T College", url: "/projects/ctctsk" },
    { name: "AtomyKeson", url: "/projects/atomy-keson" },
    { name: "keson template", url: "/projects/keson-templates-android" },
    { name: "indigain", url: "/projects/indigain" },
  ],
  blogs: [
    { name: "Gatsby SSG", url: "/blog-1" },
    { name: "PHP UI", url: "/blog-2" },
    { name: "Static SPA", url: "/blog-3" },
    { name: "Flutter UI", url: "/blog-4" },
  ],
}

const SocialCards = () => {
  return (
    <div className={s.socialCardContainer}>
      {socialMediaLinks.map((link, index) => (
        <div
          className={`card btn justify-content-center align-items-center ${s.socialCard}`}
          key={index}
        >
          <div className={`card-body ${s.socialCardBody}`}>
            <div className="top d-flex justify-content-between align-items-center w-100">
              {link.icon}
              <Link
                to={link.url}
                target="_blank"
                className={s.socialCardLink}
              >
                <BsArrowUpRight className={s.arrowIcon} />
              </Link>
            </div>
            <div className={s.socialCardDetails}>
              <h5 className={s.socialCardTitle}>{link.name}</h5>
              <div className={s.socialCardText}>{link.cap}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const Navigation = () => {
  return (
    <div className={s.navigationContainer}>
      <div className={`card ${s.navigationCard}`}>
        <div className={`card-body ${s.navigationBody}`}>
          <div className={`${s.navigationColumn}`}>
            <h5 className={`${s.navigationListTitle}`}>Home</h5>
            <ul className="nav flex-column">
              {navigationLinks.site.map((link, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    to={link.url}
                    className={`${s.navigationLink}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${s.navigationColumn}`}>
            <h5 className={`${s.navigationListTitle}`}>Services</h5>
            <ul className="nav flex-column">
              {navigationLinks.services.map((link, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    to={link.url}
                    className={`${s.navigationLink}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${s.navigationColumn}`}>
            <h5 className={`${s.navigationListTitle}`}>Projects</h5>
            <ul className="nav flex-column">
              {navigationLinks.projects.map((link, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    to={link.url}
                    className={`${s.navigationLink}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${s.navigationColumn}`}>
            <h5 className={`${s.navigationListTitle}`}>Blogs</h5>
            <ul className="nav flex-column">
              {navigationLinks.blogs.map((link, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    to={link.url}
                    className={`${s.navigationLink}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

const Newsletter = () => {
  return (
    <div className={s.newsLetterContainer}>
      <div className={`card ${s.newsLetterCard}`}>
        <div className="card-body">
          <h5 className={s.newsLetterTitle}>Newsletter</h5>
          <div className={s.newsletterContent}>
            <h4 className={s.newsLetterText}>subscribe to my newsletters</h4>
            <form className={s.newsLetterForm}>
              <input
                type="email"
                placeholder="Enter your email"
                className={s.newsLetterInput}
              />
              <button
                type="submit"
                className={`btn rounded-circle ${s.newsLetterLink} ${s.transitionAll500ms}`}
              >
                <BsArrowUpRight
                  className={s.arrowIcon}
                  style={{ color: "var(--o-80)" }}
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

const Copyright = ({ author }) => {
  return (
    <div className={s.copyright}>
      <div className="card">
        <div className={`card-body ${s.copyrightCardBody}`}>
          <p className={s.copyrightText}>
            &copy; {new Date().getFullYear()} {author}. All rights reserved.
          </p>
          <div className={s.copyrightLinks}>
            <Link to="/about/tnc" className={s.tnc}>
              Terms & Conditions
            </Link>
            <div className="vr mx-2" style={{ height: "15px" }}></div>
            <Link to="/privacy-policy" className={s.tnc}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Footer({ siteAuthor }) {
  return (
    <footer className={s.footer}>
      <div className={`card ${s.promoCard}`}>
        <div className="card-body">
          <h2 className={s.promoCardTitle}>ready to upgrade your business?</h2>
          <p className={`lead ${s.promoCardText}`}>
            Take the first step towards digital success with me. Turn your ideas into reality.
          </p>
          <Link
            to="/contact/"
            className={`text-uppercase btn ${s.customBtn_12px} ${s.transitionAll500ms}`}
            style={{
              background: "var(--d-06)",
              color: "var(--0-90)",
              marginTop: "12px",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px"
            }}
          >
            Get in touch
            <BsArrowUpRightCircleFill
              className={s.arrowIcon}
            />
          </Link>
        </div>
      </div>
      <div className={s.grid1}>
        <SocialCards />
        <Navigation />
        <div className={s.grid2}>
          <Newsletter />
          <Copyright author={siteAuthor} />
        </div>
      </div>
    </footer>
  )
}
