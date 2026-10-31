export interface CertificationFile {
  name: string;
  url: string;
  score?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  levelOrScore?: string;
  year?: string;
  verificationFile?: string;
  files?: CertificationFile[];
  description?: string;
}
