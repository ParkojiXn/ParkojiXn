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

export interface Project {
  id: string;
  title: string;
  category: 'Planning & QS' | 'BIM & CAD' | 'Industrial & QC' | 'Tender & Research' | 'Government & Supervision';
  role: string;
  period: string;
  clientOrInstitution: string;
  location: string;
  summary: string;
  architectureAndSolution: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  techStack: string[];
  deliverables: string[];
  featured?: boolean;
  coverImage?: string;
  mediaGallery?: ProjectMediaItem[];
  documents?: ProjectDocument[];
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
  mediaPreview?: {
    title: string;
    url: string;
  }[];
  documents?: {
    name: string;
    url: string;
  }[];
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

export interface SkillCategory {
  category: string;
  description: string;
  items: {
    name: string;
    level?: string;
    details?: string;
    categoryTag: string;
  }[];
}

export interface CoreValue {
  title: string;
  subtitle: string;
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
  keyStats: {
    value: string;
    label: string;
    description: string;
  }[];
  coreValues?: CoreValue[];
}
