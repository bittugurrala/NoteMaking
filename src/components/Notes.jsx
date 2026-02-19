export default function Notes({idx,title, desc, deleteTask}){
    // console.log(title)
    // console.log(desc)
    return(
        <div className="w-56 h-48 p-4 bg-white rounded flex flex-col justify-between items-center">
            <div className="flex flex-col gap-4">
                <h3 className="text-black text-lg font-bold ">{title}</h3> 
                <p className="text-gray-400 text-xs ">{desc}</p>
            </div>
            <button className="h-8 w-20 bg-red-600 text-xs flex justify-center items-center" onClick = {() => deleteTask(idx)}>Delete</button>
        </div>
    )
}