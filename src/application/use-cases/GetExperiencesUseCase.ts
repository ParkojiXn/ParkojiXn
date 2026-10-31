import { ICvRepository } from '../../core/repositories/ICvRepository';
import { Experience } from '../../core/entities/Experience';

export class GetExperiencesUseCase {
  constructor(private readonly cvRepository: ICvRepository) {}

  execute(): Experience[] {
    return this.cvRepository.getExperiences();
  }
}
