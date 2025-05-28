export default function Input ({label,isTextArea, ...proxprops}){
    const classes = "px-4 py-2 mb-4 bg-stone-300 text-stone-950 w-full rounded-md focus:"
    return(
        <p className="flex flex-col gap-4">
        <label className="">{label}</label>
        {isTextArea ? <textarea {...proxprops} className={classes} /> : <input {...proxprops}  className={classes}/>}
        </p>
    )
}