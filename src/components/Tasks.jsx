import { useState } from "react"
import Task from "./Task"
import Button from "./Button"

const Tasks = ({ tasks, editTask, deleteTask, filterReminders }) => {

  let [showFilterButton, setShowFilterButton] = useState(true)

  let [text, color] = showFilterButton ?
    ["Show Reminders Only", "magenta"] : ["Show All", "teal"]

  return (
    <div>
      <h2>Tasks</h2>
      <Button
        text={text}
        color={color}
        onClick={() => {
          filterReminders(showFilterButton);
          setShowFilterButton(!showFilterButton);
        }} />
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          editTask={editTask}
          deleteTask={deleteTask} />
      ))}
    </div>
  )
}

export default Tasks