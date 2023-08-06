import React from 'react';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';
import Footer from './components/Footer';

function App() {
  let[showAddTask, setshowAddTask] = useState(false);
  const[tasks, setTasks] = useState([])

  useEffect(()=>{
    const getTasks = async() =>{
      const getTasks = await fetchtasks()
      setTasks(getTasks)
    }
    getTasks()
  },[])
  
  const fetchtasks = async() => {
    const res = await fetch(`http://localhost:5000/tasks`)
    const data = await res.json()
    return data;
  }

  const fetchtask = async(id)=>{
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json();
    return data;
  }

  const inTaskAdd = async(task) => {

    const res = await fetch(`http://localhost:5000/tasks`,{
      method:'POST',
      headers:{
        'content-type':'application/json',
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()
     setTasks([...tasks,data])
    /*
    const id = Math.floor(Math.random() * 10000) + 1
    const newtask = {id,...task}
    setTasks([...tasks, newtask])*/
  }

  const DeleteTask = async(id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'DELETE',
    })
    setTasks(tasks.filter((task)=> task.id !== id));
  }

  const Reminderpref = async(id) => {
    const taskToToggle = await fetchtask(id)
    const updatetask = {...taskToToggle,reminder:!taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'PUT',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(updatetask)
     })

     const data = await res.json();
    setTasks(tasks.map((task)=> task.id===id?{...task, reminder: data.reminder}:task))
  }
  return (
    <div className='container'>
      <Header onAdd={()=> setshowAddTask(!showAddTask)}
      showAdd={showAddTask}/>
      {showAddTask && <AddTask OnAdd={inTaskAdd}/>}
      {tasks.length>0?<Tasks tasks={tasks} OnDelete={DeleteTask}
      onToggle={Reminderpref}/>:'No task to show'}
      <Footer/>
    </div>
  );
}

export default App;
