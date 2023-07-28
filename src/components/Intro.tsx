import Link from "next/link";
import Image from "next/image";

export function Intro() {
  return (
    <section className="flex items-center h-[calc(100vh-128px)]">
      <div className="grid w-full grid-cols-1 px-12 lg:grid-cols-2 animate__animated animate__fadeIn animate__delay-2s">
        <div className="">
          <h1 className="mb-12 text-xl lg:text-3xl">
            Hi, my name is
            <br />
            <br />
            <span className="text-5xl font-semibold lg:text-8xl">
              Milan Haria
            </span>
            <br />
            <br /> I am an aspiring software developer
            <br />
            Check out my work below
          </h1>
          <Link
            href="#projects"
            className="px-4 py-2 text-xl font-semibold tracking-widest border border-black rounded-sm dark:border-gray-300 hover:bg-gray-300 hover:text-gray-800"
          >
            MY PROJECTS
          </Link>
        </div>
        <div className="relative hidden w-full lg:block">
          <Image src="/images/intro/light.svg" layout="fill" alt="" />
        </div>
      </div>
    </section>
  );
}
