import Task from "./Task"

const Tasks = ({ tasks }) => {
  return (
    <div>
      <h2>Tasks</h2>
      {tasks.map((task, index)=>(
      <Task key={index} task={task} />
      ))}


      {/* {tasks.map((task, index) => (
        <Task key={index} task={task} />
      ))} */}

    </div>
  )
}

export default Tasks