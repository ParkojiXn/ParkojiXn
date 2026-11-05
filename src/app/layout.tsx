import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0F172A',
};

export const metadata: Metadata = {
  title: 'Reza Sepdide | Civil Engineer & Construction Planner',
  description:
    'Professional Engineering Portfolio of Reza Sepdide — Civil Engineer (Politeknik Negeri Padang, GPA 3.72 Magna Cum Laude), BNSP Level 5 Certified Building Construction Supervisor, Quantity Surveyor, Detailed Engineering Design (DED/BoQ), and BIM/CAD Modeler.',
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
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-[#2563EB] selection:text-[#FFFFFF]">
        {children}
      </body>
    </html>
  );
}
