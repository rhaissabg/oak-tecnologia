interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: string;
    name: string;
    label: string;
}

function Input({ type, name, label, ...rest }: InputProps) {
    return (
        <>
            <label className="block mb-1">{label} </label>
            <input className="py-1 px-2 mb-4 w-full border-2 border-slate-200 rounded-md" {...rest} type={type} name={name} id={name} />
        </>
    )
}

export default Input