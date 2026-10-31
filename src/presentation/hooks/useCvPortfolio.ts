'use client';

import { useMemo } from 'react';
import {
  getProfileUseCase,
  getProjectsUseCase,
  getExperiencesUseCase,
  getEducationUseCase,
  getCertificationsUseCase,
  getSkillsUseCase,
} from '../../infrastructure/di/container';
import { ProjectCategory } from '../../core/entities/Project';

export function useCvPortfolio() {
  const profile = useMemo(() => getProfileUseCase.execute(), []);
  const allProjects = useMemo(() => getProjectsUseCase.execute(), []);
  const categories = useMemo(() => getProjectsUseCase.getCategories(), []);
  const experiences = useMemo(() => getExperiencesUseCase.execute(), []);
  const education = useMemo(() => getEducationUseCase.execute(), []);
  const certifications = useMemo(() => getCertificationsUseCase.execute(), []);
  const skills = useMemo(() => getSkillsUseCase.execute(), []);

  const getProjectsByCategory = (cat?: ProjectCategory | 'ALL') => {
    return getProjectsUseCase.execute(cat);
  };

  const getCategoryCount = (cat: string) => {
    return getProjectsUseCase.getCategoryCount(cat);
  };

  return {
    profile,
    allProjects,
    categories,
    experiences,
    education,
    certifications,
    skills,
    getProjectsByCategory,
    getCategoryCount,
  };
}
