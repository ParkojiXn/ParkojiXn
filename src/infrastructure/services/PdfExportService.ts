export class PdfExportService {
  /**
   * Triggers browser native print dialog formatted for PDF export
   */
  static triggerPrint(): void {
    if (typeof window !== 'undefined') {
      window.print();
    }
  }

  /**
   * Generates a direct link for a downloadable document
   */
  static getDownloadUrl(path: string): string {
    return path.startsWith('/') ? path : `/${path}`;
  }
}
