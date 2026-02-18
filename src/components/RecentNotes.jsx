import Notes from "./notes";

export default function RecentNotes({tasks}){
    return(
        <div className="flex-1 md:w-1/2 p-5 border-git remote set-url origin https://github.com/username/newrepo.gitl-2 border-amber-50">
            <h3 className="text-2xl font-bold">Recent Notes</h3>
            <div className="flex gap-4 mt-4 flex-wrap">
                {tasks.map((item, idx) => {
                    return (
                        <div key = {idx}><Notes title = {item.title} desc = {item.desc}/></div>
                    )
                })}
            </div>
        </div>
    )
}