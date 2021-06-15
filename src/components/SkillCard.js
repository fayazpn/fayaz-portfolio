import './SkillSection.css'
const SkillCard = ({ src, alt, desc }) => {
  return (
    <div className='item-container'>
      <img src={src} alt={alt} />
      <h1>{desc}</h1>
    </div>
  )
}

export default SkillCard
