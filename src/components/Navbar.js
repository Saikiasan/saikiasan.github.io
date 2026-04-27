import * as React from "react"
import { Link } from "gatsby"
import { useState, useEffect } from "react"
import { useMediaQuery } from "react-responsive"
import { useTranslation } from "react-i18next"
import { FiSun, FiMoon } from "react-icons/fi"
import { FaGamepad } from "react-icons/fa"

const Header = ({ siteTitle }) => {
  const { t, i18n } = useTranslation()
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState('dark')
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = React.useRef(0)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const navbarLinks = [
    { t: t('common.nav.home'), u: "/" },
    { t: t('common.nav.about'), u: "/about" },
    { t: t('common.nav.projects'), u: "/projects" },
    { t: 'Game Dev', u: "/game-dev", icon: <FaGamepad /> },
    { t: t('common.nav.careers'), u: "/careers" },
    { t: t('common.nav.blogs'), u: "/blogs" },
    { t: t('common.nav.contact'), u: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Add shadow after scrolling 20px
      setIsScrolled(currentScrollY > 20)
      
      // Visibility Logic: Hide if scrolling down past 150px, show if scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
        setIsVisible(false)
        setIsOpen(false) // Close mobile menu if scrolling down
      } else {
        setIsVisible(true)
      }
      
      lastScrollY.current = currentScrollY
    }
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'as' : 'en'
    i18n.changeLanguage(newLang)
  }

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <nav
      className={`fixed-top w-100 d-flex justify-content-center ${isVisible ? 'navbar-visible' : 'navbar-hidden'} ${isMobile ? 'p-0' : 'px-3 py-3'}`}
      style={{
        zIndex: 1000,
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        background: (isMobile || isScrolled || isOpen) ? 'var(--bg-primary)' : 'transparent',
      }}
    >
      <div
        className={`navbar-solid d-flex align-items-center justify-content-between px-4 py-2 ${!isMobile ? 'neu-card' : ''}`}
        style={{
          width: '100%',
          maxWidth: '1200px',
          height: '64px',
          background: 'var(--bg-primary)',
          boxShadow: (isScrolled || isOpen) ? 'var(--nm-outset)' : 'none',
          transition: 'var(--transition-norm)',
          borderBottom: (isMobile || isOpen) ? '1px solid var(--border-color)' : 'none'
        }}
      >
        <Link to="/" className="navbar-brand m-0" style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.04em', color: 'var(--text-primary)' }}>
          {siteTitle}
        </Link>

        {isMobile ? (
          <div className="d-flex align-items-center gap-3">
            <button 
              onClick={toggleLanguage}
              className="neu-button px-2 py-1"
              style={{ fontSize: '0.7rem', padding: '0.4rem 0.8rem', borderRadius: '8px', color: 'var(--text-primary)' }}
            >
              {i18n.language === 'en' ? 'AS' : 'EN'}
            </button>

            <button 
              onClick={toggleTheme}
              className="neu-button"
              style={{ width: '40px', height: '40px', padding: 0, justifyContent: 'center', borderRadius: '8px', color: 'var(--text-primary)' }}
            >
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="btn p-0 border-0"
              style={{ width: '40px', height: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '6px', alignItems: 'flex-end' }}
            >
              <span style={{ width: '24px', height: '1px', background: 'var(--text-primary)', transition: '0.3s', transform: isOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }}></span>
              <span style={{ width: isOpen ? '0' : '18px', height: '1px', background: 'var(--text-primary)', transition: '0.2s', opacity: isOpen ? 0 : 1 }}></span>
              <span style={{ width: '24px', height: '1px', background: 'var(--text-primary)', transition: '0.3s', transform: isOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }}></span>
            </button>
            
            {isOpen && (
              <div 
                className="navbar-solid position-fixed start-0 w-100 px-4 py-5"
                style={{ 
                  top: '64px', 
                  zIndex: 999,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  background: 'var(--bg-primary)',
                  animation: 'fadeInUp 0.4s forwards'
                }}
              >
                {navbarLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.u}
                    onClick={() => setIsOpen(false)}
                    className="text-capitalize h5 m-0 d-flex align-items-center gap-3"
                    activeStyle={{ color: 'var(--accent-primary)' }}
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link.icon && <span style={{ color: 'var(--accent-primary)' }}>{link.icon}</span>}
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
                  className="text-capitalize d-flex align-items-center gap-2"
                  style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}
                  activeStyle={{ color: 'var(--accent-primary)' }}
                >
                  {link.icon && <span style={{ color: 'var(--accent-primary)', fontSize: '1rem' }}>{link.icon}</span>}
                  {link.t}
                </Link>
              ))}
            </div>
            
            <button 
              onClick={toggleLanguage}
              className="neu-button"
              style={{ fontSize: '0.7rem', padding: '0.4rem 0.8rem', borderRadius: '8px', color: 'var(--text-primary)' }}
            >
              {i18n.language === 'en' ? 'AS' : 'EN'}
            </button>

            <button 
              onClick={toggleTheme}
              className="neu-button"
              style={{ width: '40px', height: '40px', padding: 0, justifyContent: 'center', borderRadius: '8px', color: 'var(--text-primary)' }}
            >
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header
