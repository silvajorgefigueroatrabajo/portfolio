export interface Project {
  id: number;
  title: string;
  description: string;

  technologies: string[];

  repositoryUrl: string;

  liveUrl?: string;

  image?: string;

  featured: boolean;
}