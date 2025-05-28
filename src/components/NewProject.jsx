import Input from "./Input.jsx"
export default function NewProject() {
    return(
        <div className="w-[35rem] my-16">
           <menu className="flex justify-end gap-8">
            <li>
                <button className="px-8 py-4 text-stone-700 hover:text-stone-950 hover:font-semibold"> 
                    Cancel
                    </button>
            </li>
            <li>
                <button className="px-16 py-4 text-stone-100 bg-stone-700 hover:bg-stone-900 rounded-md">Save</button>
            </li>
           </menu>
            <div>
                <Input label="title" type="text" />
                <Input label="description" isTextArea={true} />
                <Input label="Due Date" type="date" />
            </div>
        </div>
    )
}