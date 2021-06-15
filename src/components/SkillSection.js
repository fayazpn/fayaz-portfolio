import './SkillSection.css'
import SkillCard from './SkillCard.js'
const SkillSection = () => {
  return (
    <section id='skill-section'>
      <h1>Skills</h1>
      <div className='skills-container'>
        <SkillCard src='/images/skills/html.svg' alt='html' desc='HTML5' />
        <SkillCard src='/images/skills/css.svg' alt='css' desc='CSS3' />
        <SkillCard
          src='/images/skills/react-js.svg'
          alt='react js'
          desc='React.js'
        />
        <SkillCard
          src='/images/skills/next-js.svg'
          alt='next js'
          desc='Next.js'
        />
        <SkillCard
          src='/images/skills/mui.svg'
          alt='material ui'
          desc='Material UI'
        />
        <SkillCard
          src='/images/skills/tailwind.svg'
          alt='tailwind css'
          desc='Tailwind CSS'
        />
        <SkillCard
          src='/images/skills/mongo.svg'
          alt='mongo db'
          desc='Mongo DB'
        />
        <SkillCard
          src='/images/skills/express-js.svg'
          alt='express js'
          desc='Express.js'
        />
        <SkillCard src='/images/skills/mysql.svg' alt='my sql' desc='MySQL' />
        <SkillCard
          src='/images/skills/node-js.svg'
          alt='node js'
          desc='Node.js'
        />
      </div>
    </section>
  )
}

export default SkillSection
