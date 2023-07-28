export enum Theme {
  "DARK" = "DARK",
  "LIGHT" = "LIGHT",
}

export type Project = {
  title: string;
  year: string;
  type: string;
  summary: string[];
  technologies: string[];
  image: string;
  link: string;
};

export type Experience = {
  title: string;
  image: string;
  year: string;
  company: string;
};
