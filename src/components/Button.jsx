const Button = ({ text, color, onClickAddBtn }) => {
  return (
    <button className="button"
      style={{ backgroundColor: color }}
      onClick={onClickAddBtn}
    >{text}</button>
  )
}

export default Button