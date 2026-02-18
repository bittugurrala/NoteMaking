export default function AddNote(){
    return(
        <div className="h-screen w-screen md:w-1/2 p-5">
            <h3 className="text-2xl font-bold">Add Note</h3>
            <div className="flex flex-col mt-4">
                <input className = "border-2 border-gray-200 rounded p-3" placeholder="Enter notes heading"></input>
                <textarea className = "border-2 mt-2 h-80 border-gray-200 rounded p-3" placeholder="Write details here"></textarea>
                <button className="mt-4 bg-white text-black">Add Note</button>
            </div>
        </div>
    )
}