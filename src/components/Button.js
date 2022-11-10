import './Button.css'


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
    <div className='btn-mobile'>
      <a
        href='/file/Fayaz PN - Resume 2022.pdf'
        download="Fayaz's Resume"
        target='_blank'
      >
        <button
          className={`btn ${checkButtonStyle} ${checkButtonSize}`}
          target='_blank'
        >
          {children}
        </button>
      </a>
    </div>
  )
}
