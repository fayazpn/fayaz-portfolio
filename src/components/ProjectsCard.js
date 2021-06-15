import './ProjectsSection.css'
const ProjectsCard = ({ src, alt, title, desc, label, link }) => {
  return (
    <div className='project-card'>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <div className='project-img'>
          <img src={src} alt={alt} />
        </div>
        <div className='project-details'>
          <small className='label'>{label.stack}</small>
          <small className='label'>{label.fw}</small>
        </div>
        <div className='project-desc'>
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
      </a>
    </div>
  )
}

export default ProjectsCard
