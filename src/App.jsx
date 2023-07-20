import { useState, useEffect } from 'react'
import './App.css'

// Layout Components
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from './components/AddTask'

let tempData = [{
  "text": "Brush Teeth",
  "time": "Today",
  "reminder": true,
  "id": 0
},
{
  "text": "Take a Dump",
  "time": "Tomorrow",
  "reminder": false,
  "id": 1
},
{
  "text": "Eat Breakfast",
  "time": "Monday",
  "reminder": true,
  "id": 2
}]




function App() {


  const [displayAdd, setDisplayAdd] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      let tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])


  const fetchTasks = async (url) => {

    // fetch tasks json from Database 
    let data = tempData;
    return data
  }

  const addTask = (text, time, reminder) => {
    let id = tasks.length
    let newTask = {text, time, reminder, id}

    // Save new task to Database 


    setTasks([...tasks, newTask])
  }

  const deleteTask=()=>{

  }


  return (
    <>
      <Header
        displayAdd={displayAdd}
        onClickAddBtn={() => setDisplayAdd(!displayAdd)}
      />
      {displayAdd && <AddTask addTask={addTask}/>}
      {tasks.length > 0 ? (<Tasks tasks={tasks} />) : (<h1>No Tasks</h1>)}

    </>
  )
}

export default App
