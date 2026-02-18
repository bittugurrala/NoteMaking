
import AddNote from './components/addNote'
import RecentNotes from './components/recentNotes'

function App() {

  return (
    <div className='w-screen h-screen flex md:flex-row flex-col' >
        <AddNote/>
        <RecentNotes/>
    </div>
  )
}

export default App
