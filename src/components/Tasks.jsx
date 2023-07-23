import Task from "./Task"

const Tasks = ({ tasks, editTask, deleteTask }) => {
  return (
    <div>
      <h2>Tasks</h2>
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