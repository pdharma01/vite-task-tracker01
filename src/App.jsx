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
  const url = "http://localhost:5000/tasks"

  // initial setTasks from fetched database, no dependancy array 
  useEffect(() => {
    const getTasks = async () => {
      let tasksFromServer = await fetchTasks(url);
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])


  const fetchTasks = async (url, request) => {
    let response = await fetch(url, request)
    
    if (!response.ok) {
      console.log("response not OK!");
      let data = []
      return data
    }

    let data = await response.json()
    return data
  }

  const addTask = async (newTask) => {
    // get last task in array + 1 
    newTask.id = tasks[tasks.length-1].id + 1

    let postRequest = {
      method: "POST",
      headers: {
        "Content-type" : "application/json"
      },
      body: JSON.stringify(newTask)
    }

    let postedTask = await fetchTasks(url, postRequest)
 
    setTasks([...tasks, postedTask])
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
