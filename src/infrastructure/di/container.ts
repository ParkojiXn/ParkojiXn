import { StaticCvRepository } from '../repositories/StaticCvRepository';
import {
  GetProfileUseCase,
  GetProjectsUseCase,
  GetExperiencesUseCase,
  GetEducationUseCase,
  GetCertificationsUseCase,
  GetSkillsUseCase,
} from '../../application/use-cases';

class ServiceContainer {
  private static instance: ServiceContainer;

  public readonly cvRepository: StaticCvRepository;
  public readonly getProfileUseCase: GetProfileUseCase;
  public readonly getProjectsUseCase: GetProjectsUseCase;
  public readonly getExperiencesUseCase: GetExperiencesUseCase;
  public readonly getEducationUseCase: GetEducationUseCase;
  public readonly getCertificationsUseCase: GetCertificationsUseCase;
  public readonly getSkillsUseCase: GetSkillsUseCase;

  private constructor() {
    this.cvRepository = new StaticCvRepository();
    this.getProfileUseCase = new GetProfileUseCase(this.cvRepository);
    this.getProjectsUseCase = new GetProjectsUseCase(this.cvRepository);
    this.getExperiencesUseCase = new GetExperiencesUseCase(this.cvRepository);
    this.getEducationUseCase = new GetEducationUseCase(this.cvRepository);
    this.getCertificationsUseCase = new GetCertificationsUseCase(this.cvRepository);
    this.getSkillsUseCase = new GetSkillsUseCase(this.cvRepository);
  }

  public static getInstance(): ServiceContainer {
    if (!ServiceContainer.instance) {
      ServiceContainer.instance = new ServiceContainer();
    }
    return ServiceContainer.instance;
  }
}

export const container = ServiceContainer.getInstance();

export const {
  cvRepository,
  getProfileUseCase,
  getProjectsUseCase,
  getExperiencesUseCase,
  getEducationUseCase,
  getCertificationsUseCase,
  getSkillsUseCase,
} = container;
