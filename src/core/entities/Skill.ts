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
