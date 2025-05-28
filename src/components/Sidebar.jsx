export default function Sidebar() {
     let st = "text-orange-400 px-16 py-4 hover:bg-stone-200 rounded-md hover:text-blue-700 font-semibold"
    return (
        <div className="w-1/3 bg-stone-300 p-4 my-8 rounded-r-md" >
            <h2 className="text-xl uppercase text-blue-400 text-center  font-semibold mb-4">Your projects</h2>
            <button className={st}>Add project</button>
            <ul className="my-4">
                <li>
                    <button className="text-stone-100">all projects go here ...</button>
                </li>
            </ul>
        </div>
    );
}