import './ProjectsSection.css'
import './SkillSection.css'
import ProjectsCard from './ProjectsCard.js'

const ProjectsSection = () => {
  return (
    <section id='projects-section' className='projects-container'>
      <h1>Projects</h1>
      <div className='skills-container'>
        <ProjectsCard
          src='/images/projects/whatsapp.jpg'
          alt='whatsapp clone'
          title='Whatsapp Clone'
          desc='Whatsapp Clone using Next.js TailwindCSS FireBase Node.js'
          label={{ stack: 'Fullstack', fw: 'Next.js' }}
          link='https://whatsapp-clone-wheat.vercel.app/'
        />

        <ProjectsCard
          src='/images/projects/google.jpg'
          alt='Google clone'
          title='Google Clone'
          desc='Clone Clone using Next.js MaterialUI Node.js'
          label={{ stack: 'Fullstack', fw: 'Next.js' }}
          link='https://google-clone-three-swart.vercel.app/'
        />

        <ProjectsCard
          src='/images/projects/ecommerce.png'
          alt='Ecommerce clone'
          title='Ecommerce Clone'
          desc='Ecommerce Clone using React.js Redux MongoDB Node.js'
          label={{ stack: 'Fullstack', fw: 'React.js' }}
          link='https://fayaz-ecomm.herokuapp.com/'
        />

        <ProjectsCard
          src='/images/projects/vaasara.png'
          alt='Vaasara website'
          title='Vaasara Website'
          desc='Client website for app Vaasara, website done using modern design practices and layouts'
          label={{ stack: 'Frontend', fw: 'HTML/CSS/JS' }}
          link='https://vaasara.com/'
        />

        <ProjectsCard
          src='/images/projects/frontendmentor.png'
          alt='Frontend Mentor'
          title='Frontend Challenges'
          desc='12 Responsive Modern Websites done by image to website from Frontend Mentor'
          label={{ stack: 'Frontend', fw: 'HTML/CSS/JS' }}
          link='https://elegant-haibt-f23318.netlify.app/'
        />
      </div>
    </section>
  )
}

export default ProjectsSection
