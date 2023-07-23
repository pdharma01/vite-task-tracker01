const Button = ({ text, color, onClick }) => {
  return (
    <button
      className="button"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >{text}</button>
  )
}

export default Button