
import { useEffect, useState } from 'react'
import AddNote from './components/addNote'
import RecentNotes from './components/recentNotes'

function App() {

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  // before starting the application chech weather the localstorage is there or not 
  // if there is exists the local storage then useState should have parsed values of that local storage else [] empty array
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks")
    return savedTasks ? JSON.parse(savedTasks) : []    
  })


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
        // copy.splice(idx, 1)   //in this way we can use splice as the idx-item will get spliced and a new array will be created
        // setTasks(copy)

        setTasks(prev => prev.filter((_, i) => i !== idx))  //Use filter because it returns the Array after deleting the idx-item
    }

    // when ever the tasks array changes (by update using map or by deletion using filter tasks changes)
    // then the useEffect sets the updated tasks to the local storage.
    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])




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


  // The above one can also be written a
    //  const copyTask = [...tasks, {title, desc}]       //First create a copy using the gathering method and add the new object
    // copyTask.push({title, desc})  //In that copy push the new objects
    // setTasks(copyTask)   //Update the array with the copied(updated) 


  // The most used and industry way of doing the above task is 
    // setTasks (prev => [...prev, {title, desc}])    //This is writing all the this mixing always use this in React


//LOCAL STORAGE
    // For local storage we have three imp methods  => localstorage.getItem(), localstorage.setItem(), localstorage.removeItem()
    // Local storage can only have JSON data, so we use JSON.stringify() method to convert the avaliable data into a string
    // we use JSON.parse() to convert the string back to its form 


// useState
    // To talk lucidly, when we have variables that we have to pass in between / share in between / exchange in between we have to make them as state
    // that can be any variable that can be an input or radio or check any thing 