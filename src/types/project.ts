export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  technologies: string[];
  repositoryUrl: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  image?: string;
  featured: boolean;
}
