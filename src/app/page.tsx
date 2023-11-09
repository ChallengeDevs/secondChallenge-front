import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-cover bg-[url('/imgs/bg-img.png')]">
      <div className="flex flex-col items-center justify-center gap-5">
        <Image src="/imgs/logo.svg" width={96} height={96} alt="Eagle logo symbol" />
        <h1 className="text-7xl text-black font-bold">ScoreSlam</h1>
      </div>
      <div className='flex flex-col items-center gap-4 pt-4 from-'>
        <Link href={'/login'}><button className="w-[360px] h-14 bg-black rounded-lg text-primary hover:bg-slate-950 duration-300">login</button></Link>
        <Link href={'/register'}><button className="w-[360px] h-14 bg-black rounded-lg text-primary hover:bg-slate-950 duration-300">register</button></Link>
      </div>
    </main>
  )
}