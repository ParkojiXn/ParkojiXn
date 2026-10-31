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
