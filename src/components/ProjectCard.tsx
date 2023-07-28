import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";

const chipClasses =
  "px-2 py-1 border border-black rounded-full dark:border-white whitespace-nowrap";

export function ProjectCard(props: Project) {
  return (
    <div className="p-8 mb-8 bg-gray-100 shadow-md lg:p-12 dark:bg-slate-700 rounded-2xl">
      <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h3 className="mb-8 text-2xl font-semibold text-center lg:text-left lg:text-4xl">
            {props.title}
          </h3>
          <ul className="flex gap-4 mb-4 text-sm font-medium tracking-wide uppercase">
            <li className={chipClasses}>{props.type}</li>
            <li className={chipClasses}>{props.year}</li>
          </ul>
          <ul className="flex flex-wrap gap-4 mb-8 text-sm font-medium tracking-wide uppercase">
            {props.technologies.map((name) => (
              <li key={name} className={chipClasses}>
                {name}
              </li>
            ))}
          </ul>
          <div className="mb-4">
            {props.summary.map((content, i) => (
              <p className="mb-4" key={i}>
                {content}
              </p>
            ))}
          </div>
          <Link href={props.link} className="font-semibold animated">
            LEARN MORE
          </Link>
        </div>
        <Image
          src={props.image}
          height={500}
          width={500}
          alt={props.title}
          className="m-auto"
        />
      </div>
    </div>
  );
}
