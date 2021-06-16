import { Button } from './Button'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <section id='hero-section'>
      <div className='hero-container'>
        <div className='hero-left'>
          <h1>Fayaz Basheer</h1>
          <p>
            I'm a Frontend Developer based in Sharjah, United Arab Emirates. I
            have done Multiple projects on both Frontend and Backend systems &
            I'm looking for oppertunities.
          </p>

          <Button
            className='btns hero-btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            Download CV
          </Button>

          <ul className='social-links-wrapper'>
            <li>
              <a
                style={{ display: 'table-cell' }}
                href='https://github.com/Fayaz-B'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i
                  className='fab fa-github social-single'
                  aria-hidden='true'
                ></i>
              </a>
            </li>
            <li>
              <a
                style={{ display: 'table-cell' }}
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
        <div className='hero-right'>
          <img src='/images/undraw.svg' alt='landing-icon' />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
