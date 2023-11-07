import Link from "next/link"

type ButtonPropsSchema = {
  title: string
  type: "submit" | "button" | "reset" | undefined
  link: string
}

export const Button = ({title, type, link, ...rest }: ButtonPropsSchema) => {
  return (
    <Link href={link}>
      <button 
        className="font-bold w-80 p-2 mt-4 text-primary text-lg uppercase bg-black rounded-xl hover:bg-slate-950 duration-300" 
        type={type} 
        {...rest}
      >
        {title}
      </button>
    </Link>
  )
}
