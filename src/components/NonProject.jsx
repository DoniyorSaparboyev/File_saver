import logoImage from "../assets/no-projects.png"


export default function NonProject() {
  let st = "text-orange-400 px-16 py-4 hover:bg-stone-200 rounded-md hover:text-blue-700 font-semibold "
    return (
        <div className="my-28 w-3/4 text-center">
            <img src={logoImage} alt="logo"
                className="mx-auto w-16 h-16" />
            <h1 className="uppercase my-4 font-bold text-stone-600 text-xl font-Oxanium">
                No project selected
            </h1>
            <p className="my-4 font-semibold font-Oxanium text-stone-700">
                select a project or get started with a new one
            </p>
            <button className={st}>
                create new project
            </button>
        </div>
    );
}