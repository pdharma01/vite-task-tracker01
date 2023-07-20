import { useState, useEffect } from 'react'
import './App.css'

// Layout Components
import Header from "./components/Header"
import Tasks from "./components/Tasks"

let tempData = [{
  "text": "Brush Teeth",
  "time": "Today",
  "reminder": true,
  "id": 1
},
{
  "text": "Take a Dump",
  "time": "Tomorrow",
  "reminder": false,
  "id": 2
},
{
  "text": "Eat Breakfast",
  "time": "Monday",
  "reminder": true,
  "id": 3
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
    let data = tempData;
    return data
  }


  return (
    <>
      <Header
        displayAdd={displayAdd}
        onClickAddBtn={() => setDisplayAdd(!displayAdd)} />
      <Tasks tasks={tasks} />
    </>
  )
}

export default App
