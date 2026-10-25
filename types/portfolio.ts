export type SkillIcon =
  | "languages"
  | "frameworks"
  | "backend"
  | "databases"
  | "cloud"
  | "devops"
  | "monitoring"
  | "tools"
  | "ai";

export type SkillGroup = {
  id: string;
  title: string;
  icon: SkillIcon;
  items: string[];
};

export type Experience = {
  id: string;
  company: string;
  organization?: string;
  monogram: string;
  role: string;
  start: string;
  end: string;
  current: boolean;
  location: string;
  technologies: string[];
  highlights: string[];
};

export type ProjectArtKind =
  | "identity"
  | "courier"
  | "booking"
  | "automation"
  | "healthcare";

export type Project = {
  id: string;
  title: string;
  context: string;
  overview: string;
  stack: string[];
  responsibilities: string[];
  art: ProjectArtKind;
  motif: string;
};

export type EducationItem = {
  id: string;
  credential: string;
  detail: string;
  school: string;
  location?: string;
  period: string;
  prominent: boolean;
};

export type FocusArea = {
  title: string;
  body: string;
};

export type NavLink = {
  href: string;
  label: string;
};
