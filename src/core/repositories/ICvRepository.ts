import { ProfileData } from '../entities/Profile';
import { Project, ProjectCategory } from '../entities/Project';
import { Experience } from '../entities/Experience';
import { Education } from '../entities/Education';
import { Certification } from '../entities/Certification';
import { SkillCategory } from '../entities/Skill';

export interface ICvRepository {
  getProfile(): ProfileData;
  getProjects(category?: ProjectCategory | 'ALL'): Project[];
  getProjectById(id: string): Project | undefined;
  getFeaturedProjects(): Project[];
  getCategories(): string[];
  getExperiences(): Experience[];
  getEducation(): Education[];
  getCertifications(): Certification[];
  getSkills(): SkillCategory[];
}
