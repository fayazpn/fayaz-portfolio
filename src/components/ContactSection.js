import './ContactSection.css'
const ContactSection = () => {
  return (
    <section id='contact-section'>
      <h1>Let's Connect</h1>
      <div className='hero-container card-hero-container contact-container'>
        <div className='contact-left'>
          <div className='img'>
            <img src='/images/undraw-contact.svg' alt='Contact me' />
          </div>
          <div>
            <ul className='contact-list'>
              <li>
                <i class='fas fa-thumbtack' aria-hidden='true'></i>{' '}
                <span> Sharjah, United Arab Emirates</span>
              </li>

              <li>
                <i class='fas fa-mobile' aria-hidden='true'></i>{' '}
                <span>+(971) 56-912-3576</span>
              </li>

              <li>
                <i class='fas fa-at' aria-hidden='true'></i>{' '}
                <span>pnfayaz@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className='contact-right'>
          <div class='form-style-6'>
            <form>
              <input type='text' name='field1' placeholder='Your Name' />
              <input type='email' name='field2' placeholder='Email Address' />
              <textarea
                name='field3'
                rows='6'
                cols='50'
                maxlength='50'
                placeholder='Type your Message'
              ></textarea>
              <button>
                <i class='fas fa-paper-plane'></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
