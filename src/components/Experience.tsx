"use client";

import Image from "next/image";
import { experienceData } from "@/data/experience-data";
import { Experience, Theme } from "@/types";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useTheme } from "@/services/theme";

function ExperienceCard(props: Experience) {
  return (
    <div className="flex flex-col items-center justify-between w-full max-w-3xl gap-4 p-8 mb-8 text-center bg-gray-100 shadow-md lg:text-left lg:flex-row dark:bg-slate-700 rounded-2xl">
      <div className="flex flex-col items-center lg:gap-12 lg:flex-row">
        <div className="relative dark:bg-white dark:bg-opacity-40 rounded-full h-[100px] aspect-square overflow-visible">
          <Image
            src={props.image}
            height={100}
            width={100}
            className="absolute w-full -translate-y-1/2 top-1/2 aspect-[2]"
            alt={props.title}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-2xl">{props.title}</span>
          <span className="tracking-wide uppercase text-md">
            {props.company}
          </span>
        </div>
      </div>
      <div className="tracking-wide uppercase">{props.year}</div>
    </div>
  );
}

export function Experience() {
  const { theme } = useTheme();

  return (
    <section id="experience" className="p-12">
      <h2 className="mb-12 text-5xl tracking-wide text-center lg:text-left">
        My Experience
      </h2>
      <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-y-8">
        <div>
          {experienceData.map((exp) => (
            <ExperienceCard key={exp.title} {...exp} />
          ))}
        </div>
        <div className="m-auto text-center">
          <IoDocumentTextOutline size="4rem" className="mx-auto mb-8" />
          <div className="text-2xl">
            Want to find out more? <br />
            Check out{" "}
            <a
              href="/files/Milan Haria CV.pdf"
              download
              className="font-semibold animated"
            >
              my resume here
            </a>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
