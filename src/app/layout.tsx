import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#111111',
};

export const metadata: Metadata = {
  title: 'Reza Sepdide | Civil Engineer & Construction Planner',
  description:
    'Engineering Portfolio of Reza Sepdide, A.Md.T. — Civil Engineer (Politeknik Negeri Padang, GPA 3.72 Cum Laude), BNSP Level 5 Certified: Pelaksana Lapangan Pekerjaan Gedung Madya (Implementing Intermediate Building Works, Reg. F7472118), Quantity Surveyor, Detailed Engineering Design (DED/BoQ), and BIM & CAD Modeler.',
  keywords: [
    'Reza Sepdide',
    'Civil Engineer',
    'Quantity Surveyor',
    'Construction Planner',
    'BIM Modeler',
    'Autodesk Revit',
    'AutoCAD',
    'Bill of Quantities',
    'BoQ',
    'Detailed Engineering Design',
    'DED',
    'S-Curve',
    'BNSP Level 5',
    'Politeknik Negeri Padang',
    'Civil Engineering Portfolio'
  ],
  authors: [{ name: 'Reza Sepdide' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#F3EEE3] text-[#111111] selection:bg-[#D9541E] selection:text-[#F3EEE3]">
        {children}
      </body>
    </html>
  );
}
