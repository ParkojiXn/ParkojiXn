import { ICvRepository } from '../../core/repositories/ICvRepository';
import { Project, ProjectCategory } from '../../core/entities/Project';

export class GetProjectsUseCase {
  constructor(private readonly cvRepository: ICvRepository) {}

  execute(category?: ProjectCategory | 'ALL'): Project[] {
    return this.cvRepository.getProjects(category);
  }

  getById(id: string): Project | undefined {
    return this.cvRepository.getProjectById(id);
  }

  getCategories(): string[] {
    return this.cvRepository.getCategories();
  }

  getCategoryCount(category: string): number {
    if (category === 'ALL') {
      return this.cvRepository.getProjects().length;
    }
    return this.cvRepository.getProjects().filter(p => p.category === category).length;
  }
}
