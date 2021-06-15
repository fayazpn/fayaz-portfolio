import './Button.css'
import { Link } from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large']

export const Button = ({ children, buttonStyle, buttonSize }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0]

  const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0]

  const onClick = () => {
    const newWindow = window.open(
      'https://drive.google.com/drive/folders/1tmX1gVwIw7R6H8Ywup97Q4iGPYzbMROt?usp=sharing',
      '_blank',
      'noopener,noreferrer'
    )
    if (newWindow) newWindow.opener = null
  }

  return (
    <Link className='btn-mobile'>
      <button
        onClick={onClick}
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        target='_blank'
      >
        {children}
      </button>
    </Link>
  )
}
