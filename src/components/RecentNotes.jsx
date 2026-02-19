import Notes from "./notes";

export default function RecentNotes({tasks, deleteTask}){




    return(
        <div className="flex-1 md:w-1/2 p-5 border-l-2 border-amber-50">
            <h3 className="text-2xl font-bold">Recent Notes</h3>
            <div className="flex gap-4 mt-4 flex-wrap">
                {tasks.map((item, idx) => {
                    return (
                        // Key is not a prop, and always pass idx to the child so that it know each ID
                        <div key = {idx} ><Notes idx = {idx} title = {item.title} desc = {item.desc} deleteTask={deleteTask}/></div>
                    )
                })}
            </div>
        </div>
    )
}