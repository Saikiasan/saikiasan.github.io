import { Link } from "gatsby"
import React from "react"
import "../styles/footer.css"

const socialMediaLinks = [
  {
    name: "Facebook",
    icon: <i class="bi bi-facebook"></i>,
    cap: "Share posts on Facebook",
    url: "https://www.facebook.com/opseeker.saikia",
  },
  {
    name: "Instagram",
    icon: <i class="bi bi-instagram"></i>,
    cap: "Follow on Instagram",
    url: "https://www.instagram.com/saikia.code/",
  },
  {
    name: "LinkedIn",
    icon: <i className="bi bi-linkedin"></i>,
    cap: "Connect on LinkedIn",
    url: "https://www.linkedin.com/in/ankit-saikia-17a48623b/",
  },
  {
    name: "WhatsApp",
    icon: <i class="bi bi-whatsapp"></i>,
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
    { name: "keson template", url: "/projects/keson-template-android" },
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
    <div className="social-cards">
      {socialMediaLinks.map((link, index) => (
        <div
          className="card btn justify-content-center align-items-center"
          key={index}
        >
          <div className="card-body">
            <div className="top justify-content-between align-items-center">
              <div className="icon">{link.icon}</div>
              <Link
                to={link.url}
                className="link"
                style={{ width: "40px", height: "40px" }}
              >
                <i className="bi bi-arrow-up-right"></i>
              </Link>
            </div>
            <div className="details">
              <h5 className="title">{link.name}</h5>
              <div className="text">{link.cap}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="card">
        <div className="card-body row justify-content-center">
          <div className="col">
            <h5 className="card-title">Home</h5>
            <ul className="nav flex-column">
              {navigationLinks.site.map((link, index) => (
                <li className="nav-item" key={index}>
                  <Link to={link.url} className="nav-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col">
            <h5 className="card-title">Services</h5>
            <ul className="nav flex-column">
              {navigationLinks.services.map((link, index) => (
                <li className="nav-item" key={index}>
                  <Link to={link.url} className="nav-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col">
            <h5 className="card-title">Projects</h5>
            <ul className="nav flex-column">
              {navigationLinks.projects.map((link, index) => (
                <li className="nav-item" key={index}>
                  <Link to={link.url} className="nav-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col">
            <h5 className="card-title">Blogs</h5>
            <ul className="nav flex-column">
              {navigationLinks.blogs.map((link, index) => (
                <li className="nav-item" key={index}>
                  <Link to={link.url} className="nav-link">
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
    <div className="newsletter">
      <div className="card">
        <div className="card-body">
          <h5 className="lead" style={{ color: "var(--g-80)" }}>
            Newsletter
          </h5>
          <div className="d-flex justify-content-between">
            <h4 className="text-uppercase" style={{ fontFamily: "Avalon" }}>
              subscribe to my newsletters
            </h4>
            <form className="d-inline-flex">
              <input type="email" placeholder="Enter your email" />
              <button type="submit" className="btn rounded-circle link">
                <i
                  className="bi bi-arrow-up-right"
                  style={{ color: "var(--o-80)" }}
                ></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

const Copyright = siteAuthor => {
  return (
    <div className="copyrights">
      <div className="card">
        <div className="card-body">
          <p className="left">
            <i className="bi bi-c-circle"></i> {new Date().getFullYear()}{" "}
            {siteAuthor.author} All rights reserved.
          </p>
          <p className="right">
            <Link to="/tnc" className="tnc">
              Terms & Conditions
            </Link>
            <div className="vr mx-2"></div>
            <Link to="/privacy-policy" className="tnc">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
export default function Footer({ siteAuthor }) {
  return (
    <footer>
      <div
        className="card"
        style={{
          padding: "24px",
          background: "var(--o-60)",
        }}
      >
        <div className="card-body">
          <h2
            className="text-uppercase"
            style={{
              color: "var(--d-06)",
              letterSpacing: "2px",
              fontFamily: "Mono Medium",
              fontSize: "3em",
            }}
          >
            ready to upgrade your business?
          </h2>
          <p
            className="lead fs-3 fw-normal"
            style={{
              fontFamily: "Monospace",
              color: "var(--d-06)",
            }}
          >
            Take the first step towards digital success with me.
          </p>
          <Link
            to="/contact/"
            className="text-uppercase btn s-btn end-0 bottom-0 position-absolute"
            style={{
              background: "var(--d-06)",
              color: "var(--0-90)",
              marginRight: "calc(24px * 1.5)",
              marginBottom: "calc(24px * 1.5)",
            }}
          >
            Get in touch <i class="bi bi-arrow-up-right"></i>
          </Link>
        </div>
      </div>
      <div className="f1">
        <SocialCards />
        <Navigation />
        <div className="f2">
          <Newsletter />
          <Copyright author={siteAuthor} />
        </div>
      </div>
    </footer>
  )
}
