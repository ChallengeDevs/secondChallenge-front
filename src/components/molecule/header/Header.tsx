import Image from 'next/image'

type HeaderPropsSchema = {
  title: string
}

export const Header = ({ title }: HeaderPropsSchema) => {
  return (
    <header className="flex gap-5 p-6 bg-primary">
      <Image width={80} height={80} alt="Logo" src="/imgs/logo.svg" aria-label="Logo" />
      <h1 className="font-bold uppercase text-7xl text-black">{title}</h1>
    </header>
  )
}
