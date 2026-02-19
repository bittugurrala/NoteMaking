
import { useState } from 'react'
import AddNote from './components/addNote'
import RecentNotes from './components/recentNotes'

function App() {

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [tasks, setTasks] = useState([])


  const submitHandler = (e) =>{
    e.preventDefault()
    // alert(`Details Recieved!`)
    // console.log(`Details Recieved!`)
    // console.log(`${title}, ${desc}`)
    // setTasks((prev) => [...prev, {title, desc}])

    // const copyTask = [...tasks, {title, desc}]       //First create a copy that has the prev values
    // // copyTask.push({title, desc})  //In that copy push the new objects

    // setTasks(copyTask)   //Update the array with the copied(updated) 

    // setTitle("")
    // setDesc("")
    // // console.log(Tasks)

    setTasks(prev => [...prev, {title, desc}])
    setTitle("")
    setDesc("")
  }

    const deleteTask = (idx) =>{
        // const copy = [...tasks]

        // copy.splice(idx, 1)
        // setTasks(copy)

        setTasks(prev => prev.filter((_, i) => i !== idx))
    }




  return (
    <div className='w-screen h-screen flex md:flex-row flex-col' >
        <AddNote title = {title} desc = {desc} setTitle = {setTitle} setDesc = {setDesc} submissionHandler={submitHandler} />
        <RecentNotes tasks = {tasks} deleteTask = {deleteTask}/>
    </div>
  )
}

export default App


// Always create a copy and update the object using usestate.

    //const copyTask = [...tasks]       //First create a copy that has the prev values
    // copyTask.push({title, desc})  //In that copy push the new objects
    //setTasks(copyTask)   //Update the array with the copied(updated) 


    // The above one can also be written as

    //  const copyTask = [...tasks, {title, desc}]       //First create a copy using the gathering method and add the new object
    // copyTask.push({title, desc})  //In that copy push the new objects
    // setTasks(copyTask)   //Update the array with the copied(updated) 


    // The most used and industry way of doing the above task is 

    // setTasks (prev => [...prev, {title, desc}])    //This is writing all the this mixing always use this in React