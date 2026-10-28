import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Reza Sepdide | Civil Engineer, Quantity Surveyor & BIM Modeler',
  description:
    'Website Portofolio Profesional Reza Sepdide — Lulusan Teknik Sipil Politeknik Negeri Padang (IPK 3,72), Bersertifikasi BNSP Pelaksana Gedung Madya Jenjang 5, Perencana Teknis DED/RAB, Kurva S, dan BIM/AutoCAD Modeler.',
  keywords: [
    'Reza Sepdide',
    'Teknik Sipil',
    'Quantity Surveyor',
    'Construction Planner',
    'BIM Modeler',
    'AutoCAD',
    'Revit',
    'RAB',
    'DED',
    'Kurva S',
    'BNSP Jenjang 5',
    'Politeknik Negeri Padang'
  ],
  authors: [{ name: 'Reza Sepdide' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#FAFAFA] text-[#0A0A0A] selection:bg-[#EF4444] selection:text-[#FAFAFA]">
        {children}
      </body>
    </html>
  );
}
