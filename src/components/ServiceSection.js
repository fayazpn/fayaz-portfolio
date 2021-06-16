import './ServiceSection.css'
import Card from './Card'
const ServiceSection = () => {
  return (
    <section id='service-section' className='card-container'>
      <h1>Services</h1>
      <div className='hero-container card-hero-container'>
        <Card
          src='/images/undraw-static.svg'
          alt='Develop Websites'
          heading='Websites'
          desc='Design & develop responsive websites according to your requirements.'
        />
        <Card
          src='/images/undraw-frontend.svg'
          alt='Frontend Developer'
          heading='Frontend-Developer'
          desc='Aspiring Fullstack developer currently focusing on frontend development.'
        />
        <Card
          src='/images/undraw-redesign.svg'
          alt='Redesign Webpages'
          heading='Re-design Websites'
          desc='Redesign your current/outdated website with modern design methodology & practices.'
        />
      </div>
    </section>
  )
}

export default ServiceSection
