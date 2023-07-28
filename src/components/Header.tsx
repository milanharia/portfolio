"use client";
import { useTheme } from "@/services/theme";
import { Theme } from "@/types";
import Link from "next/link";
import { FaMoon, FaSun } from "react-icons/fa";

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <header className="flex items-center justify-between p-12 tracking-wide uppercase animate__animated animate__fadeInDown">
        <Link className="text-2xl font-medium animated" href="/">
          Milan Haria
        </Link>
        <div className="flex items-center gap-12">
          <nav className="items-center hidden gap-12 text-xl text-gray-600 lg:flex dark:text-gray-300">
            <Link
              className="animated hover:text-black dark:hover:text-white"
              href="#projects"
            >
              My Projects
            </Link>
            <Link
              className="animated hover:text-black dark:hover:text-white"
              href="#about"
            >
              About Me
            </Link>
            <Link
              className="animated hover:text-black dark:hover:text-white"
              href="#experience"
            >
              Experience
            </Link>
            <Link
              className="animated hover:text-black dark:hover:text-white"
              href="https://github.com/milanharia"
            >
              GITHUB
            </Link>
          </nav>
          <button onClick={toggleTheme}>
            {theme === Theme.DARK ? (
              <FaMoon
                className="text-gray-300 rounded-full hover:text-white hover:outline outline-2 outline-offset-8"
                size="2rem"
              />
            ) : (
              <FaSun
                className="text-gray-600 rounded-full hover:text-black hover:outline outline-2 outline-offset-8"
                size="2rem"
              />
            )}
          </button>
        </div>
      </header>
    </>
  );
}
