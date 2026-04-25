import { Link } from "gatsby"
import React from "react"
import { 
  BsFacebook, 
  BsInstagram, 
  BsLinkedin, 
  BsWhatsapp, 
  BsArrowRight 
} from "react-icons/bs"

const socialMediaLinks = [
  { name: "Facebook", icon: <BsFacebook />, url: "https://www.facebook.com/opseeker.saikia" },
  { name: "Instagram", icon: <BsInstagram />, url: "https://www.instagram.com/saikia.code/" },
  { name: "LinkedIn", icon: <BsLinkedin />, url: "https://www.linkedin.com/in/ankit-saikia-17a48623b/" },
  { name: "WhatsApp", icon: <BsWhatsapp />, url: "https://wa.me/918257068226" },
]

export default function Footer({ siteAuthor }) {
  return (
    <footer className="section-padding" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', marginTop: 'var(--spacing-lg)' }}>
      <div className="container-fluid" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="row g-5">
          <div className="col-lg-4">
            <h3 className="mb-4" style={{ fontWeight: 800 }}>Ready to upgrade?</h3>
            <p className="text-secondary mb-4">Take the first step towards digital success with me. Turn your ideas into reality.</p>
            <Link to="/contact" className="glass px-4 py-2 d-inline-flex align-items-center gap-2 glass-hover">
              Get in touch <BsArrowRight style={{ color: 'var(--accent-primary)' }} />
            </Link>
          </div>
          
          <div className="col-6 col-lg-2 ms-lg-auto">
            <h5 className="mb-3 text-white">Links</h5>
            <div className="d-flex flex-column gap-2">
              <Link to="/about" className="text-secondary glass-hover p-1">About</Link>
              <Link to="/projects" className="text-secondary glass-hover p-1">Projects</Link>
              <Link to="/blogs" className="text-secondary glass-hover p-1">Blogs</Link>
              <Link to="/contact" className="text-secondary glass-hover p-1">Contact</Link>
            </div>
          </div>

          <div className="col-6 col-lg-3">
            <h5 className="mb-3 text-white">Connect</h5>
            <div className="d-flex gap-3">
              {socialMediaLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass d-flex align-items-center justify-content-center glass-hover"
                  style={{ width: '40px', height: '40px', fontSize: '1.2rem' }}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3" style={{ borderTop: '1px solid var(--border-color)', fontSize: '0.9rem' }}>
          <p className="text-muted m-0">&copy; {new Date().getFullYear()} {siteAuthor}. All rights reserved.</p>
          <div className="d-flex gap-4">
            <Link to="/about/tnc" className="text-muted">Terms</Link>
            <Link to="/privacy-policy" className="text-muted">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
