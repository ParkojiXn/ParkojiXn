import { ICvRepository } from '../../core/repositories/ICvRepository';
import { Education } from '../../core/entities/Education';

export class GetEducationUseCase {
  constructor(private readonly cvRepository: ICvRepository) {}

  execute(): Education[] {
    return this.cvRepository.getEducation();
  }
}
