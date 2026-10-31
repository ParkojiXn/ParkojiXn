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
