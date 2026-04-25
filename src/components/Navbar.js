import * as React from "react"
import { Link } from "gatsby"
import { useState, useEffect } from "react"
import { useMediaQuery } from "react-responsive"
import { useTranslation } from "react-i18next"

const Header = ({ siteTitle }) => {
  const { t, i18n } = useTranslation()
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const navbarLinks = [
    { t: t('common.nav.home'), u: "/" },
    { t: t('common.nav.about'), u: "/about" },
    { t: t('common.nav.projects'), u: "/projects" },
    { t: t('common.nav.careers'), u: "/careers" },
    { t: t('common.nav.blogs'), u: "/blogs" },
    { t: t('common.nav.contact'), u: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'as' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <nav
      className={`fixed-top w-100 d-flex justify-content-center px-3 py-3`}
      style={{
        zIndex: 1000,
        transition: 'var(--transition-norm)',
      }}
    >
      <div
        className="glass d-flex align-items-center justify-content-between px-4 py-2"
        style={{
          width: '100%',
          maxWidth: '1200px',
          height: '64px',
          background: isScrolled ? 'rgba(20, 20, 23, 0.85)' : 'rgba(20, 20, 23, 0.4)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Link to="/" className="navbar-brand m-0" style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.03em' }}>
          {siteTitle}
        </Link>

        {isMobile ? (
          <div className="d-flex align-items-center gap-3">
             <button 
              onClick={toggleLanguage}
              className="glass px-2 py-1 small text-uppercase"
              style={{ fontSize: '0.7rem', border: '1px solid var(--accent-primary)' }}
            >
              {i18n.language === 'en' ? 'AS' : 'EN'}
            </button>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="btn p-0 border-0 text-white"
              style={{ width: '40px', height: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '6px', alignItems: 'flex-end' }}
            >
              <span style={{ width: '24px', height: '2px', background: 'white', transition: '0.3s', transform: isOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }}></span>
              <span style={{ width: isOpen ? '0' : '18px', height: '2px', background: 'white', transition: '0.2s', opacity: isOpen ? 0 : 1 }}></span>
              <span style={{ width: '24px', height: '2px', background: 'white', transition: '0.3s', transform: isOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }}></span>
            </button>
            
            {isOpen && (
              <div 
                className="glass position-fixed start-0 w-100 px-4 py-5"
                style={{ 
                  top: '84px', 
                  zIndex: 999,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  animation: 'fadeInUp 0.4s forwards'
                }}
              >
                {navbarLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.u}
                    onClick={() => setIsOpen(false)}
                    className="text-capitalize h4 m-0"
                    activeStyle={{ color: 'var(--accent-primary)' }}
                  >
                    {link.t}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="d-flex align-items-center gap-4">
            <div className="d-flex gap-4">
              {navbarLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.u}
                  className="text-capitalize font-weight-bold"
                  style={{ fontSize: '0.9rem', opacity: 0.8 }}
                  activeStyle={{ opacity: 1, color: 'var(--accent-primary)' }}
                  onMouseEnter={(e) => e.target.style.opacity = 1}
                  onMouseLeave={(e) => e.target.style.opacity = 0.8}
                >
                  {link.t}
                </Link>
              ))}
            </div>
            
            <button 
              onClick={toggleLanguage}
              className="glass px-2 py-1 small text-uppercase glass-hover"
              style={{ fontSize: '0.7rem', border: '1px solid var(--accent-primary)' }}
            >
              {i18n.language === 'en' ? 'AS' : 'EN'}
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header
