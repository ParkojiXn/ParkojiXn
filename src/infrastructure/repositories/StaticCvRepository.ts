import { ICvRepository } from '../../core/repositories/ICvRepository';
import { ProfileData, Project, Experience, Education, Certification, SkillCategory, ProjectCategory } from '../../core/entities';
import {
  profileData,
  featuredProjects,
  workExperiences,
  educationHistory,
  certifications,
  skillCategories,
} from '../data/cv-data';

export class StaticCvRepository implements ICvRepository {
  getProfile(): ProfileData {
    return profileData;
  }

  getProjects(category?: ProjectCategory | 'ALL'): Project[] {
    if (!category || category === 'ALL') {
      return featuredProjects;
    }
    return featuredProjects.filter((project) => project.category === category);
  }

  getProjectById(id: string): Project | undefined {
    return featuredProjects.find((project) => project.id === id);
  }

  getFeaturedProjects(): Project[] {
    return featuredProjects.filter((project) => project.featured !== false);
  }

  getCategories(): string[] {
    return [
      'ALL',
      'Planning & QS',
      'BIM & CAD',
      'Industrial & QC',
      'Government & Supervision',
      'Tender & Research',
    ];
  }

  getExperiences(): Experience[] {
    return workExperiences;
  }

  getEducation(): Education[] {
    return educationHistory;
  }

  getCertifications(): Certification[] {
    return certifications;
  }

  getSkills(): SkillCategory[] {
    return skillCategories;
  }
}
