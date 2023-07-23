import { useState } from "react"
import Button from "./Button"

const Task = ({ task, editTask, deleteTask }) => {
  // const [displayEditTask, setDisplayEditTask] = useState(false)

  return (
    // style reminder highlight
    <div className={`d-grid task-container task ${task.reminder ? 'reminder' : ''}`}>

      {/* task content  */}
      <div>
        <h3>{task.text}</h3>
        <h5>{task.time}</h5>
      </div>

      <Button
        text="Edit"

        color="limegreen"
        onClick={()=>editTask(task.id)} />

      <Button
        text="Delete"
        color="salmon"
        onClick={()=>deleteTask(task.id)} />

    </div>
  )
}

export default Task