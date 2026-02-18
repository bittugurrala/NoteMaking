
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

    const copyTask = [...tasks, {title, desc}]       //First create a copy that has the prev values
    // copyTask.push({title, desc})  //In that copy push the new objects

    setTasks(copyTask)   //Update the array with the copied(updated) 

    setTitle("")
    setDesc("")
    // console.log(Tasks)
  }



  return (
    <div className='w-screen h-screen flex md:flex-row flex-col' >
        <AddNote title = {title} desc = {desc} setTitle = {setTitle} setDesc = {setDesc} submissionHandler={submitHandler} />
        <RecentNotes tasks = {tasks}/>
    </div>
  )
}

export default App


// Always create a copy and update the object using usestate.