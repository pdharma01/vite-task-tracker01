import { useState } from "react"
import Button from "./Button"
import TaskForm from "./TaskForm"

const Task = ({ task, editTask, deleteTask }) => {

  const [displayEditTask, setDisplayEditTask] = useState(false)

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
        id = {task.id}
        submitFunction={editTask}

      />}
    </div>
  )
}

export default Task