import './Card.css'

const Card = ({ src, heading, desc, alt }) => {
  return (
    <div className='card-item'>
      <figure className='card-picture'>
        <img src={src} alt={alt} />
      </figure>
      <div className='card-description'>
        <h3>{heading}</h3>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default Card
