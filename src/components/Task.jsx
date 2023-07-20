const Task = ({task}) => {
  return (
    // style reminders 
    <div className={`task ${task.reminder ? 'reminder' : ''}`}>

      {/* task content  */}
      <h3>{task.text}</h3>
      <h5>{task.time}</h5>
    </div>
  )
}

export default Task