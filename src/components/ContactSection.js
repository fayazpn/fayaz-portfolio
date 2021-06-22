import emailjs from 'emailjs-com';
import './ContactSection.css'
const ContactSection = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('contact_service', 'contact_form', e.target, 'user_hu0CcN2Rwc2qDPAgzrMn1')
      .then((result) => {
        alert('Email sent successfully')
      }, (error) => {
          alert(error.message)
      });
  }

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
                <i className='fas fa-thumbtack' aria-hidden='true'></i>{' '}
                <span> Sharjah, United Arab Emirates</span>
              </li>

              <li>
                <i className='fas fa-mobile' aria-hidden='true'></i>{' '}
                <span>+(971) 56-912-3576</span>
              </li>

              <li>
                <i className='fas fa-at' aria-hidden='true'></i>{' '}
                <span>pnfayaz@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className='contact-right'>

          <div className='form-style-6'>
            <form onSubmit={sendEmail}>
              <input type='text' name='user_name' placeholder='Your Name' />
              <input type='email' name='user_email' placeholder='Email Address' />
              <textarea
                name='message'
                rows='6'
                cols='50'
                maxLength='50'
                placeholder='Type your Message'
              ></textarea>
              <button type='submit'>
                <i className='fas fa-paper-plane'></i>
              </button>
            </form>
          </div> 
        </div>
      </div>
    </section>
  )
}

export default ContactSection
