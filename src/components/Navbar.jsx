import { motion } from 'framer-motion'
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa'
import { useContext, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { navLinks } from '../utils/constants'
import './styles/Navbar.css'

export const Navbar = ({ activeSection }) => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.nav 
      className={`navbar ${theme}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <motion.a 
          href="#home" 
          className="logo"
          whileHover={{ scale: 1.05 }}
        >
          <span>AKSHAY</span>BHAT
        </motion.a>

        <div className="desktop-links">
          {navLinks.map((link) => (
            <motion.a
              key={link.id}
              href={`#${link.id}`}
              className={activeSection === link.id ? 'active' : ''}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.title}
            </motion.a>
          ))}
        </div>

        <div className="nav-right">
          <motion.button
            className="theme-toggle"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </motion.button>

          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div 
          className="mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.id}
              href={`#${link.id}`}
              className={activeSection === link.id ? 'active' : ''}
              onClick={() => setMobileMenuOpen(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.title}
            </motion.a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}