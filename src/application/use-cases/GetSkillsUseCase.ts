import { ICvRepository } from '../../core/repositories/ICvRepository';
import { SkillCategory } from '../../core/entities/Skill';

export class GetSkillsUseCase {
  constructor(private readonly cvRepository: ICvRepository) {}

  execute(): SkillCategory[] {
    return this.cvRepository.getSkills();
  }
}
