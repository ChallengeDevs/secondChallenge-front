import Image from "next/image";
import Link from "next/link";

export const MenuDropdown = () => {
  return (
    <>
      <section className="flex flex-col w-24 items-center justify-center w-40 gap-4 bg-black rounded-lg border-black border-2 absolute top-16 left-12 p-3">
        <ul>
          <li>
            <Link
              href="/team"
              className="text-primary font-bold cursor-pointer hover:opacity-70 duration-300"
            >
              Teams
            </Link>
          </li>
        </ul>
        <span className="w-full h-[2px] bg-primary"></span>
        <div>
          <Image
            src="/imgs/github.png"
            width={24}
            height={24}
            alt="Logo GitHub"
            className="cursor-pointer hover:transform hover:scale-105 duration-300"
            aria-label="Github opening repository button"
          />
        </div>
      </section>
    </>
  );
};
