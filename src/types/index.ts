export interface Project {
  id: string;
  title: string;
  category: 'Planning & QS' | 'BIM & CAD' | 'Industrial & QC' | 'Tender & Research';
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
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  gpa?: string;
  details?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  levelOrScore?: string;
  year?: string;
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
