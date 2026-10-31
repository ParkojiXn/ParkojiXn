import { ICvRepository } from '../../core/repositories/ICvRepository';
import { ProfileData } from '../../core/entities/Profile';

export class GetProfileUseCase {
  constructor(private readonly cvRepository: ICvRepository) {}

  execute(): ProfileData {
    return this.cvRepository.getProfile();
  }
}
