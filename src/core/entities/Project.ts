export interface ProjectMediaItem {
  title: string;
  url: string;
  caption?: string;
  isDocument?: boolean;
}

export interface ProjectDocument {
  name: string;
  url: string;
  format: string;
  size?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export type ProjectCategory =
  | 'Planning & QS'
  | 'BIM & CAD'
  | 'Industrial & QC'
  | 'Tender & Research'
  | 'Government & Supervision';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  role: string;
  period: string;
  clientOrInstitution: string;
  location: string;
  summary: string;
  architectureAndSolution: string[];
  metrics: ProjectMetric[];
  techStack: string[];
  deliverables: string[];
  featured?: boolean;
  coverImage?: string;
  mediaGallery?: ProjectMediaItem[];
  documents?: ProjectDocument[];
}
