// TO Do 
// react router dom - task detail pages
// filter tasks (view reminders / all)

import { useState, useEffect } from 'react'
import './App.css'

// Layout Components
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import TaskForm from './components/TaskForm'

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
    let postRequest = {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(newTask)
    }

    let postedTask = await fetchTasks(url, postRequest)
    setTasks([...tasks, postedTask])

  }

  const editTask = async ({text, time, reminder, id}) => {
    let newTask = {text, time, reminder}
    let putUrl = url + "/" + id;
    let putRequest = {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(newTask)
    }
    await fetchTasks(putUrl, putRequest);

    setTasks(tasks.map((task) => {
      if (task.id === id) return newTask;
      return task
    }
    ))

  }

  const tottleReminder = (id) => {
    console.log("toggle reminder id:" + id);

  }

  const deleteTask = async (id) => {
    let deleteUrl = url + "/" + id;
    await fetchTasks(deleteUrl, { method: "DELETE" })
    setTasks(tasks.filter((task) => {
      return task.id !== id
    }))

  }


  return (
    <>
      <Header
        displayAdd={displayAdd}
        onClickAddBtn={() => setDisplayAdd(!displayAdd)}
      />

    {/* Add Task  */}
      {displayAdd && <TaskForm
        defaultText=""
        defaultTime=""
        defaultReminder={false}
        submitFunction={addTask}
      />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} editTask={editTask} deleteTask={deleteTask} />) : (<h1>No Tasks</h1>)}

    </>
  )
}

export default App
