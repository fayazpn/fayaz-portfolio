import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-logo'>
          <i className='fas fa-file-code' />
          FB
        </div>

        <div className='footer-name'>
          <h3>Fayaz Basheer | Portfolio 2022</h3>
        </div>

        <ul className='social-links-wrapper footer-socials'>
          <li>
            <a
              href='https://github.com/Fayaz-B'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-github social-single' aria-hidden='true'></i>
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/fayaz-basheer-017a7418b/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i
                className='fab fa-linkedin social-single'
                aria-hidden='true'
              ></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
