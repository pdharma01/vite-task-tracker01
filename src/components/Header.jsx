import Button from "./Button"

const Header = ({ displayAdd, onClickAddBtn}) => {

  let text = displayAdd ? "Close" : "Add a Task"
  let color = displayAdd ? "limegreen" : "orange"

  return (
    <div className="header d-grid">
      <h1>Task Tracker</h1>
      <Button
        text={text}
        color={color}
        onClickAddBtn={onClickAddBtn} />

    </div>
  )
}

export default Header