export interface CoreValue {
  title: string;
  subtitle: string;
  description: string;
}

export interface KeyStat {
  value: string;
  label: string;
  description: string;
}

export interface ProfileData {
  name: string;
  roleTitle: string;
  headline: string;
  location: string;
  timezone?: string;
  phone: string;
  email: string;
  linkedin: string;
  status: string;
  bioSummary: string;
  personalStatement?: string;
  keyStats: KeyStat[];
  coreValues?: CoreValue[];
}

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

export interface ExperienceMediaPreview {
  title: string;
  url: string;
}

export interface ExperienceDocument {
  name: string;
  url: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  responsibilities: string[];
  keyImpacts: string[];
  toolsUsed: string[];
  mediaPreview?: ExperienceMediaPreview[];
  documents?: ExperienceDocument[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  status?: string;
  isOngoing?: boolean;
  gpa?: string;
  details?: string[];
  transcriptUrl?: string;
}

export interface CertificationFile {
  name: string;
  url: string;
  score?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  levelOrScore?: string;
  year?: string;
  verificationFile?: string;
  files?: CertificationFile[];
  description?: string;
}

export interface SkillItem {
  name: string;
  level?: string;
  details?: string;
  categoryTag: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  items: SkillItem[];
}
