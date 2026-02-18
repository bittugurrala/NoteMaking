export default function AddNote(
    {
        title,
        desc,
        setTitle,
        setDesc,
        submissionHandler
    }){
    return(
        <div className="flex-1 md:w-1/2 p-5">
            <h3 className="text-2xl font-bold">Add Note</h3>
            <form onSubmit={submissionHandler} className="flex flex-col mt-4">
                <input value = {title} onChange={(e) => setTitle(e.target.value)} className = "border-2 border-gray-200 rounded p-3" placeholder="Enter notes heading"></input>
                <textarea value = {desc} onChange = {(e) => setDesc (e.target.value)}className = "border-2 mt-2 h-80 border-gray-200 rounded p-3" placeholder="Write details here"></textarea>
                <button type = "submit" className="mt-4 bg-white text-black">Add Note</button>
            </form>
        </div>
    )
}