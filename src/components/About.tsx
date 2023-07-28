import Image from "next/image";

export function About() {
  return (
    <section id="about" className="p-12">
      <h2 className="mb-12 text-5xl tracking-wide text-center lg:text-left">
        About Me
      </h2>
      <div className="flex flex-col-reverse items-center gap-12 lg:flex-row">
        <div className="max-w-4xl">
          <p>
            I love tackling problems using the latest technology and pushing the
            boundaries to what can be done. To achieve this, I focus on the key
            data, work effectively within teams and am very adaptable.
          </p>
          <br />
          <p>
            I am a recent graduate from The University of Nottingham, graduating
            with First Class Honours in Aerospace Engineering. The nature of my
            degree in Aerospace Engineering has given me a solid platform to
            gain experience in working in groups, deal with high-pressure
            environments and compete with other personnel to see who can perform
            the best at the highest level. Having the opportunity to work in the
            development team at Morrisons has been greatly beneficial to my
            personal development. I have had the opportunity to understand the
            project lifecycle during app development and gain invaluable
            experience in writing and testing both front-end and back-end code.
            Working closely with senior developers has also helped me understand
            their method of approaching a problem and the steps they take.
          </p>
          <br />
          <p>
            I recently started learning web development as a hobby and instantly
            fell in love with it. I loved having the ability to express my
            creativity, challenge myself with different problems and watch my
            ideas come to life before me. This opened the door to the world of
            software development for me and it has now become a passion of mine.
            The more I learn about the different languages and frameworks, and
            their capabilities, the deeper my interest and enthusiasm becomes.
            Joining the development team at Morrisons.
          </p>
          <br />
          <p>
            My specialities include quickly learning new skills and programming
            languages, attention to detail, problem solving and organisation. I
            am always looking to learn more languages, frameworks and principles
            as I go and I am eager to undertake new projects to expand my
            portfolio.
          </p>
        </div>
        <Image
          src="/images/about/portrait.jpeg"
          height={300}
          width={300}
          className="h-[300px] mx-auto rounded-full"
          alt="portrait of Milan Haria"
        />
      </div>
    </section>
  );
}
