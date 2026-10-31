import { ICvRepository } from '../../core/repositories/ICvRepository';
import { Certification } from '../../core/entities/Certification';

export class GetCertificationsUseCase {
  constructor(private readonly cvRepository: ICvRepository) {}

  execute(): Certification[] {
    return this.cvRepository.getCertifications();
  }
}
