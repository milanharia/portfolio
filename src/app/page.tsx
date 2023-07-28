import { About, Header, Intro, Projects, Experience } from "@/components";

export default function Home() {
  return (
    <main className="container flex flex-col mx-auto">
      <Header />
      <Intro />
      <Projects />
      <About />
      <Experience />
    </main>
  );
}
