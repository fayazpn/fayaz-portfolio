import { useState } from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <i className='fas fa-file-code' />
            FB
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                activeClass='active'
                spy={true}
                smooth={true}
                to='hero-section'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                activeClass='active'
                to='service-section'
                spy={true}
                smooth={true}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                activeClass='active'
                to='skill-section'
                spy={true}
                smooth={true}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Skills
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                activeClass='active'
                to='projects-section'
                spy={true}
                smooth={true}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                activeClass='active'
                to='contact-section'
                spy={true}
                smooth={true}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Let's Connect
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
//rgba(56, 133, 255, 1)
export default Navbar
