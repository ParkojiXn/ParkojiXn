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
