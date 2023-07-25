import { useState } from "react"
import Button from "./Button"
import TaskForm from "./TaskForm"

const Task = ({ task, editTask, deleteTask }) => {

  // Display edit TaskForm 
  const [displayEditTask, setDisplayEditTask] = useState(false)

  // reset function prop drilled down to TaskForm (run on TaskForm submit)
  const reset=()=>{
    setDisplayEditTask(false)
  }

  // Button props 
  let text = displayEditTask ? "Close" : "Edit"
  let color = displayEditTask ? "salmon" : "limegreen"

  return (
    <div>
      {/* style reminder highlight */}
      <div className={`d-grid task-container task ${task.reminder ? 'reminder' : ''}`}>

        {/* task content  */}
        <div>
          <h3>{task.text}</h3>
          <h5>{task.time}</h5>
        </div>

        <Button
          text={text}
          color={color}
          onClick={() => setDisplayEditTask(!displayEditTask)} />

        <Button
          text="Delete"
          color="red"
          onClick={() => deleteTask(task.id)} />

      </div>
      {displayEditTask && <TaskForm
        defaultText={task.text}
        defaultTime={task.time}
        defaultReminder={task.reminder}
        submitFunction={editTask}
        id = {task.id}
        reset={reset}

      />}
    </div>
  )
}

export default Task