
type InputPropsSchema = {
  title: string
  type: string
  name: string
  placeholder: string
}

export const Input = ({ title, type, name, placeholder, ...rest }: InputPropsSchema) => {
  return (
    <div className="flex flex-col w-80 gap-2">
      <label className="text-black text-xl font-bold" htmlFor={name}>{title}</label>
      <input
        className="text-primary p-2 text-lg bg-black rounded-xl"
        name={name}
        type={type}
        autoComplete="off"
        {...rest} />
    </div>
  )
}
