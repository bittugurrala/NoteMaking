
import { useState } from 'react'
import AddNote from './components/addNote'
import RecentNotes from './components/recentNotes'

function App() {

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")


  const submitHandler = (e) =>{
    e.preventDefault()
    // alert(`Details Recieved!`)
    console.log(`Details Recieved!`)
    console.log(`${title}, ${desc}`)

    setTitle("")
    setDesc("")
  }



  return (
    <div className='w-screen h-screen flex md:flex-row flex-col' >
        <AddNote title = {title} desc = {desc} setTitle = {setTitle} setDesc = {setDesc} submissionHandler={submitHandler} />
        <RecentNotes/>
    </div>
  )
}

export default App
