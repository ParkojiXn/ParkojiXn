import { ProfileData, Project, Experience, Education, Certification, SkillCategory } from '../types';

export const profileData: ProfileData = {
  name: "REZA SEPDIDE",
  roleTitle: "Civil Engineer & Construction Planner",
  headline: "Quantity Surveyor & Construction Planner | BIM & CAD Modeler",
  location: "Padang, West Sumatra, Indonesia",
  timezone: "UTC+7 (WIB)",
  phone: "+62 896-4459-0915",
  email: "rezasepdide@gmail.com",
  linkedin: "https://linkedin.com/in/rezasepdide",
  status: "OPEN FOR ROLES & CONSULTANCIES",
  bioSummary:
    "Diploma III Civil Engineering graduate from Politeknik Negeri Padang (GPA 3.72/4.00, Cum Laude), certified under BNSP KKNI Level 5: Implementing Intermediate Building Works (Pelaksana Lapangan Pekerjaan Gedung Madya, Reg. F7472118) with a proven track record in technical planning, Quantity Surveying (QS), on-site Quality Control, and S-Curve construction scheduling. Proficient in Autodesk Revit, AutoCAD DED (paper layout viewports to PDF), SAP2000 seismic analysis, MS Project CPM scheduling, as well as certified proficiency in Japanese (JLPT N4 & JFT-Basic 250) and English (TOEIC® Prediction 640).",
  personalStatement:
    "Sound civil engineering does not end with calculations or drawings—it is proven by how safely, accurately, and cost-efficiently designs are executed on site. From optimizing Bar Bending Schedules (BBS) to minimize rebar waste on industrial EPC plants to auditing government school revitalizations, I prioritize engineering accuracy, field verification, and transparent cost accountability.",
  keyStats: [
    {
      value: "3.72",
      label: "GRADUATION GPA / 4.00",
      description: "Politeknik Negeri Padang — D3 Teknik Sipil (Predikat: Pujian / Cum Laude, IPK 3.72/4.00, 115 SKS)",
    },
    {
      value: "LEVEL 5",
      label: "BNSP CERTIFICATION",
      description: "Pelaksana Lapangan Pekerjaan Gedung Madya / Implementing Intermediate Building Works (Reg. F7472118)",
    },
    {
      value: "13+",
      label: "PROJECTS & TECHNICAL STUDIES",
      description: "School & Kindergarten Revitalization, Site Inspection, Industrial EPC, QS Re-Measurement, Tender & BIM",
    },
    {
      value: "3",
      label: "VERIFIED LANGUAGES",
      description: "Indonesian (Native) • Japanese (JLPT N4 / SSW JAC / JFT 250) • English (TOEIC® Prediction 640)",
    },
  ],
  coreValues: [
    {
      title: "Field Constructability & Practicality",
      subtitle: "Bridging Blueprint Design with Jobsite Execution",
      description: "Drawings and schedules deliver real value only when they can be built safely, realistically, and accurately on site. Every estimate and timeline is reconciled with actual ground conditions and practical constructability."
    },
    {
      title: "Accurate Cost Control & Zero-Waste Detailing",
      subtitle: "Precision Take-Off & Bar Bending Schedules",
      description: "Developing detailed Bar Bending Schedules (BBS) to optimize rebar cutting patterns and minimize scrap, paired with transparent, audit-ready Bills of Quantities (BoQ) with zero unaccounted variances."
    },
    {
      title: "Audit-Ready Technical Documentation",
      subtitle: "Transparent, Reliable & Standard-Compliant Records",
      description: "Every Progress Billing milestone is verified with authentic Backup Volume calculations, well-documented Contract Change Orders (CCO), and technical specifications meeting national SNI/PUPR standards."
    },
    {
      title: "Continuous Professional Mastery",
      subtitle: "Advanced Education & International Standards",
      description: "Currently pursuing a D4 in Construction Engineering Management, mastering integrated multi-disciplinary BIM Revit workflows, and certified under Japanese industrial construction standards (SSW Tokutei Ginou)."
    }
  ]
};

export const featuredProjects: Project[] = [
  {
    id: "site-inspector-sifa",
    title: "Structural Supervision & Quality Control Inspector — CV. SIFA Design Consultant",
    category: "Government & Supervision",
    role: "Site Inspector (Supervision Consultant)",
    period: "Sep 2026 – Present",
    clientOrInstitution: "CV. SIFA DESIGN CONSULTANT / Bappeda",
    location: "Padang Pariaman, West Sumatra, Indonesia",
    summary:
      "Comprehensive field supervision and construction quality assurance for public building works. Overseeing rebar reinforcement fabrication, stirrup spacing measurements, column & beam concrete works, on-site structural compliance audits in coordination with Bappeda, issuing official Site Instructions (SI) for instant corrective actions, and compiling verified weekly and monthly physical progress dossiers.",
    architectureAndSolution: [
      "Conducted rigorous daily and weekly structural quality control audits verifying that all field reinforcement aligns 100% with approved Detailed Engineering Design (DED) blueprints.",
      "Inspected stirrup and tie spacing with measurement calipers and steel tapes to verify structural shear capacity in accordance with national building codes (SNI 2847).",
      "Supervised rebar cutting, hook bending tolerances, and concrete cover spacing at the jobsite fabrication yard before concrete casting.",
      "Collaborated directly with regional planning agency (Bappeda) officials during site audits to evaluate milestone progress and technical compliance.",
      "Issued formal Site Instructions (SI) for instant on-site rectification of non-conformances, averting structural rework and contractor dispute.",
      "Compiled itemized weekly and monthly site supervision progress reports tracking physical volume achievements against the master timeline."
    ],
    metrics: [
      { label: "Supervision Scope", value: "Rebar, Concrete & DED Compliance" },
      { label: "Legal Directive", value: "Formal Site Instruction (SI) System" },
      { label: "Milestone Audit", value: "Joint Bappeda Field Oversight" }
    ],
    techStack: ["Site Instruction (SI)", "Reinforcement Inspection", "Structural QA/QC", "Field Progress Logging", "AutoCAD Verification"],
    deliverables: [
      "Official Site Instruction (SI) Defect Correction Directives",
      "Weekly & Monthly Physical Progress Milestone Dossiers",
      "Rebar Fabrication & Stirrup Spacing Verification Records",
      "Joint Bappeda Site Audit & Progress Evaluation Reports"
    ],
    featured: true,
    coverImage: "/portfolio/site-inspector/pengerjaan-penulangan.jpeg",
    mediaGallery: [
      {
        title: "Structural Reinforcement & Rebar Installation",
        url: "/portfolio/site-inspector/pengerjaan-penulangan.jpeg",
        caption: "Field supervision verifying longitudinal column rebar installation, lap splices, and concrete cover spacers before casting."
      },
      {
        title: "Stirrup & Tie Spacing Measurement",
        url: "/portfolio/site-inspector/pengukuran-jarak-sengkang.jpeg",
        caption: "Precision on-site verification of shear stirrup spacing using calipers and tape measures according to structural DED drawings."
      },
      {
        title: "Structural Steel & Rebar Fabrication",
        url: "/portfolio/site-inspector/fabrikasi-besi.jpeg",
        caption: "Inspecting off-pour rebar cutting, hook bending tolerances, and bar schedule conformity at the jobsite fabrication yard."
      },
      {
        title: "Bappeda Planning Agency Joint Inspection",
        url: "/portfolio/site-inspector/kunjungan-badan-perencanaan-pembangunan-daerah.jpeg",
        caption: "Coordinating technical site audit and milestone progress validation with regional planning agency (Bappeda) officials."
      },
      {
        title: "Weekly Physical Construction Log (Part 1)",
        url: "/portfolio/site-inspector/laporan-mingguan-1.png",
        caption: "Itemized weekly progress breakdown verifying cumulative percentage and variance against planned schedule."
      },
      {
        title: "Weekly Physical Construction Log (Part 2)",
        url: "/portfolio/site-inspector/laporan-mingguan-2.png",
        caption: "Verified work quantity tracking ensuring transparent accountability for contractor progress milestones."
      },
      {
        title: "Formal Site Instruction (SI) Administrative Issuance",
        url: "/portfolio/site-inspector/si.jpeg",
        caption: "Official Site Instruction directive issued to contractor for immediate structural defect rectification."
      }
    ],
    documents: [
      {
        name: "Formal Site Instruction (SI) Directive",
        url: "/portfolio/site-inspector/si.jpeg",
        format: "JPEG",
        size: "123 KB"
      }
    ]
  },
  {
    id: "kb-ar-rahma",
    title: "Technical Revitalization Planning & DED of KB Ar-Rahma Facilities",
    category: "Planning & QS",
    role: "Technical Planner & Quantity Surveyor (Planning Consultant)",
    period: "Nov 2026",
    clientOrInstitution: "Early Childhood Education Committee (KB Ar-Rahma)",
    location: "Pasaman, West Sumatra, Indonesia",
    summary:
      "Full-cycle engineering planning and cost estimation for early childhood educational facility revitalization. Delivered comprehensive AutoCAD DED multi-sheet blueprints published directly to PDF, rigorous Unit Price Analysis (AHSP) BoQ/RAB, material specifications (RKS), and Microsoft Excel weighted Time Schedule & S-Curve control charts.",
    architectureAndSolution: [
      "Conducted physical site survey and dimensional measurements of existing classroom and sanitation infrastructure.",
      "Engineered full architectural and structural Detailed Engineering Design (DED) drawings with AutoCAD layout viewports published to multi-sheet PDF.",
      "Formulated comprehensive Bill of Quantities (BoQ/RAB) based on regional Unit Price Analyses (AHSP) ensuring transparent funding allocations.",
      "Established technical specifications (RKS) defining material quality thresholds and child-safe construction standards.",
      "Drafted project execution timelines (Time Schedule) and distributed weekly work weights into an S-Curve chart for strict milestone monitoring."
    ],
    metrics: [
      { label: "Master Blueprint", value: "Full DED Multi-Sheet PDF (5.5 MB)" },
      { label: "Cost Formulation", value: "Itemized BoQ/RAB (2.0 MB)" },
      { label: "Progress Control", value: "Weighted S-Curve Milestone Chart" }
    ],
    techStack: ["AutoCAD (Layout to PDF)", "Microsoft Excel", "Time Schedule & S-Curve", "Cost Estimation (BoQ/RAB)", "RKS Specifications"],
    deliverables: [
      "Complete Multi-Sheet AutoCAD DED Blueprints (5.5 MB PDF)",
      "Comprehensive Bill of Quantities (BoQ/RAB) Dossier (2.0 MB PDF)",
      "Technical Work Requirements & Specifications (RKS)",
      "Master Project Execution Time Schedule & S-Curve (PDF)"
    ],
    featured: true,
    coverImage: "/portfolio/kb-ar-rahma/gambar.png",
    mediaGallery: [
      {
        title: "AutoCAD Architectural & Structural DED Blueprints",
        url: "/portfolio/kb-ar-rahma/gambar.png",
        caption: "Comprehensive multi-sheet architectural and structural floor plans, roof framing, and sanitation details for early childhood school."
      },
      {
        title: "Bill of Quantities (BoQ/RAB) Cost Breakdown",
        url: "/portfolio/kb-ar-rahma/rab.png",
        caption: "Detailed unit price analysis (AHSP) budget recapitulation covering substructure, masonry, and architectural finishes."
      },
      {
        title: "Execution Time Schedule & S-Curve Chart",
        url: "/portfolio/kb-ar-rahma/kurva-s.png",
        caption: "Weekly cumulative S-Curve plotting project weights and milestone targets for on-time completion."
      },
      {
        title: "AutoCAD Paper Layout Viewports Configuration",
        url: "/portfolio/kb-ar-rahma/screenshot-2026-11-20-143223.png",
        caption: "Standardized paper space viewport publishing system generating crisp vector PDF documentation for bidding and execution."
      }
    ],
    documents: [
      {
        name: "Full DED Engineering Blueprints (5.5 MB)",
        url: "/portfolio/kb-ar-rahma/gambar-kb-ar-rahma.pdf",
        format: "PDF",
        size: "5.54 MB"
      },
      {
        name: "Itemized Bill of Quantities (BoQ/RAB)",
        url: "/portfolio/kb-ar-rahma/rab-kb-ar-rahma.pdf",
        format: "PDF",
        size: "1.99 MB"
      },
      {
        name: "Project Time Schedule & S-Curve",
        url: "/portfolio/kb-ar-rahma/kurva-s-kb-ar-rahma.pdf",
        format: "PDF",
        size: "207 KB"
      }
    ]
  },
  {
    id: "tk-negeri-pembina",
    title: "Technical Revitalization Planning & DED of TK Negeri Pembina",
    category: "Planning & QS",
    role: "Technical Planner & Quantity Surveyor (Planning Consultant)",
    period: "Nov 2026",
    clientOrInstitution: "TK Negeri Pembina Revitalization Committee",
    location: "Pasaman, West Sumatra, Indonesia",
    summary:
      "Architectural and structural engineering design, BoQ cost estimation, and schedule formulation for TK Negeri Pembina revitalization. Engineered complete AutoCAD DED drawings exported via layout viewports to PDF, itemized Bills of Quantities, technical quality guidelines (RKS), and master Time Schedule & S-Curve monitoring.",
    architectureAndSolution: [
      "Conducted comprehensive on-site condition audits to establish structural requirements for kindergarten facility upgrades.",
      "Produced detailed AutoCAD DED plans, structural elevations, roof truss drawings, and fenestration schedules published to a complete multi-sheet PDF.",
      "Prepared transparent Bill of Quantities (BoQ/RAB) calculations strictly conforming to regional Unit Price Analyses (AHSP).",
      "Drafted standard Technical Specifications (RKS) defining building materials, concrete mix ratios, and finish tolerances.",
      "Formulated master project timeline (Time Schedule) and mapped weekly weightings into an S-Curve chart for field progress control."
    ],
    metrics: [
      { label: "Master Blueprint", value: "Full DED Multi-Sheet PDF (6.0 MB)" },
      { label: "Cost Formulation", value: "Itemized BoQ/RAB (1.6 MB)" },
      { label: "Schedule Control", value: "Weighted S-Curve Progress Chart" }
    ],
    techStack: ["AutoCAD (Layout to PDF)", "Microsoft Excel", "Time Schedule & S-Curve", "Cost Estimation (BoQ/RAB)", "Technical Specs (RKS)"],
    deliverables: [
      "Complete Multi-Sheet AutoCAD DED Blueprints (6.0 MB PDF)",
      "Comprehensive Bill of Quantities (BoQ/RAB) Dossier (1.6 MB PDF)",
      "Technical Work Requirements & Specifications (RKS)",
      "Master Project Execution Time Schedule & S-Curve (PDF)"
    ],
    featured: true,
    coverImage: "/portfolio/tk-pembina/ded.png",
    mediaGallery: [
      {
        title: "DED Architectural & Engineering Blueprint Layout",
        url: "/portfolio/tk-pembina/ded.png",
        caption: "Complete structural floor plans, elevations, roof truss details, and inclusive spatial planning for public kindergarten."
      },
      {
        title: "Bill of Quantities (BoQ/RAB) Budget Estimation",
        url: "/portfolio/tk-pembina/rab.png",
        caption: "Transparent cost calculations and volume breakdown for revitalizing school infrastructure."
      },
      {
        title: "Master Project Schedule & S-Curve Chart",
        url: "/portfolio/tk-pembina/kurva-s.png",
        caption: "Weekly milestone progress tracking and weighting curve for execution control."
      },
      {
        title: "Technical Specifications & Conditions (RKS)",
        url: "/portfolio/tk-pembina/rks.png",
        caption: "Material specifications, SNI/ASTM compliance standards, and contractor execution guidelines."
      }
    ],
    documents: [
      {
        name: "Full DED Engineering Blueprints (6.0 MB)",
        url: "/portfolio/tk-pembina/gambar-tk-pembina.pdf",
        format: "PDF",
        size: "6.01 MB"
      },
      {
        name: "Comprehensive Bill of Quantities (BoQ/RAB)",
        url: "/portfolio/tk-pembina/rab-tk-pembina.pdf",
        format: "PDF",
        size: "1.65 MB"
      },
      {
        name: "Project Execution S-Curve Progress Chart",
        url: "/portfolio/tk-pembina/kurva-s-tk-pembina.pdf",
        format: "PDF",
        size: "208 KB"
      }
    ]
  },
  {
    id: "sdn-19-kuamang",
    title: "Technical Planning & Revitalization of SDN 19 Kuamang Facilities",
    category: "Planning & QS",
    role: "Technical Planner & Quantity Surveyor (School Revitalization Consultant)",
    period: "Sep 2026",
    clientOrInstitution: "Planning Consultant / Education Department",
    location: "Pasaman, West Sumatra, Indonesia",
    summary:
      "Comprehensive technical planning and cost engineering for the revitalization of public elementary school SDN 19 Kuamang. Spearheaded structural and architectural damage assessments, detailed Quantity Take-Off (QTO), Bill of Quantities (BoQ/RAB) formulation, technical specification (RKS) documents, Time Schedule & S-Curve control charts, and complete Detailed Engineering Design (DED) production in AutoCAD utilizing paper space layout viewports for standardized PDF publishing.",
    architectureAndSolution: [
      "Conducted on-site damage assessment surveys of educational facilities and computed detailed mathematical Backup Volume calculations.",
      "Formulated comprehensive Bill of Quantities (BoQ/RAB) adhering strictly to standard regional Unit Price Analyses (AHSP).",
      "Drafted standard Technical Work Requirements & Specifications (RKS) outlining material quality thresholds, installation tolerances, and field testing protocols.",
      "Established project execution timelines (Time Schedule) and distributed weighted weekly tasks into an S-Curve for rigorous progress monitoring.",
      "Engineered comprehensive architectural and structural DED drawings using AutoCAD layout viewports for professional multi-sheet PDF export."
    ],
    metrics: [
      { label: "Document Dossier", value: "DED, BoQ/RAB, RKS, & S-Curve" },
      { label: "Drafting Architecture", value: "AutoCAD Paper Layout Viewports" },
      { label: "Schedule Control", value: "Weighted S-Curve Milestone Matrix" }
    ],
    techStack: ["AutoCAD", "Microsoft Excel", "Time Schedule & S-Curve", "Technical Specs (RKS)", "Cost Estimation (BoQ)"],
    deliverables: [
      "Complete AutoCAD DED Architectural & Structural Blueprints",
      "Comprehensive Bill of Quantities (BoQ/RAB) & Cost Recapitulation",
      "Technical Work Requirements & Specifications Document (RKS)",
      "Master Time Schedule & S-Curve Progress Chart",
      "Structural & Architectural Damage Assessment Record"
    ],
    featured: true,
    coverImage: "/portfolio/sdn-19-kuamang/menggunakan-layout-autocad.png",
    mediaGallery: [
      {
        title: "AutoCAD Layout-to-PDF Publishing System",
        url: "/portfolio/sdn-19-kuamang/menggunakan-layout-autocad.png",
        caption: "Configured multi-viewport sheets and paper layout in AutoCAD to generate crisp, consultant-standard PDF blueprint packages."
      },
      {
        title: "DED Floor Plans & Spatial Layout",
        url: "/portfolio/sdn-19-kuamang/1.png",
        caption: "Architectural blueprint layout showing revitalized classrooms, faculty administrative offices, and supporting facilities."
      },
      {
        title: "DED Building Elevations & Facades",
        url: "/portfolio/sdn-19-kuamang/2.png",
        caption: "Front, rear, and lateral architectural elevations detailing exterior finishes, natural ventilation, and window openings."
      },
      {
        title: "DED Roof Framing & Truss Engineering",
        url: "/portfolio/sdn-19-kuamang/3.png",
        caption: "Structural timber and steel truss reinforcement plans, anchor connections, and ring beam anchoring details."
      },
      {
        title: "DED Sanitation & Ceiling Construction Details",
        url: "/portfolio/sdn-19-kuamang/4.png",
        caption: "Cross-sections of acoustic gypsum board ceilings, plumbing schematic diagrams, and clean/waste water routing."
      },
      {
        title: "DED Fenestration, Doors & Windows Schedule",
        url: "/portfolio/sdn-19-kuamang/5.png",
        caption: "Detailed dimensions, glazing thickness, security ironmongery, and hardware specifications complying with safety codes."
      },
      {
        title: "Mathematical Backup Volume Spreadsheet",
        url: "/portfolio/sdn-19-kuamang/backup-volume.png",
        caption: "Transparent geometric quantity take-off breakdown per division validating every line item in the BoQ."
      },
      {
        title: "Technical Specifications & Conditions (RKS)",
        url: "/portfolio/sdn-19-kuamang/rks.png",
        caption: "Contractor guidelines governing ASTM/SNI material grades, construction methodologies, and quality control tolerances."
      }
    ],
    documents: [
      {
        name: "SDN 19 Kuamang Project S-Curve",
        url: "/portfolio/sdn-19-kuamang/kurva-s.pdf",
        format: "PDF",
        size: "146 KB"
      },
      {
        name: "Comprehensive Bill of Quantities (BoQ/RAB)",
        url: "/portfolio/sdn-19-kuamang/rab.pdf",
        format: "PDF",
        size: "426 KB"
      },
      {
        name: "Facility Physical Damage Assessment Form",
        url: "/portfolio/sdn-19-kuamang/form-kerusakan.pdf",
        format: "PDF",
        size: "1.96 MB"
      }
    ]
  },
  {
    id: "slbn-2-pariaman",
    title: "Technical Revitalization Planning of SLBN 2 Pariaman Special School",
    category: "Planning & QS",
    role: "Technical Planner & Quantity Surveyor (Special School Revitalization Consultant)",
    period: "Jul 2026",
    clientOrInstitution: "Planning Consultant / SLBN 2 Pariaman (State Special Needs School)",
    location: "Pariaman, West Sumatra, Indonesia",
    summary:
      "Technical revitalization planning for SLBN 2 Pariaman Special Education School, demanding strict compliance with universal accessibility standards (wheelchair ramps, tactile guidance, tactile safety handrails, and accessible sanitation). Produced Detailed Engineering Designs (DED), detailed Bill of Quantities (BoQ/RAB), technical specifications (RKS), Time Schedule & S-Curve, and formulated official Contract Change Order (CCO) addenda to reconcile scope variations against verified field conditions.",
    architectureAndSolution: [
      "Engineered comprehensive DED blueprints optimized for special needs accessibility (maximum 1:12 ramp gradients, widened clear door widths, and disability-compliant sanitation).",
      "Calculated exact quantities and compiled detailed Bill of Quantities (BoQ/RAB) according to regional unit cost data.",
      "Authored Technical Specifications (RKS) enforcing non-slip flooring materials, impact-resistant wall coatings, and ergonomic MEP fixtures.",
      "Formulated official Contract Change Order (CCO) addenda with technical justifications following the discovery of field variances against original preliminary drawings.",
      "Engineered master Time Schedule and weighted S-Curve chart for schedule control and phase-gate milestones."
    ],
    metrics: [
      { label: "Design Code", value: "Universal Accessibility & Inclusive Norms" },
      { label: "Contract Governance", value: "Official Approved CCO Addendum" },
      { label: "Timeline Instrument", value: "Master Schedule & Weighted S-Curve" }
    ],
    techStack: ["AutoCAD", "Contract Change Order (CCO)", "Microsoft Excel", "RKS Specifications", "Time Schedule & S-Curve"],
    deliverables: [
      "Accessible Architectural & Structural DED Blueprints (AutoCAD)",
      "Official Contract Change Order (CCO) Dossier & Technical Justification",
      "Comprehensive Bill of Quantities (BoQ/RAB) Recapitulation",
      "Technical Work Requirements & Specifications (RKS)",
      "Master Time Schedule & S-Curve Control Chart "
    ],
    featured: true,
    coverImage: "/portfolio/slbn-2-pariaman/layout-autocad.png",
    mediaGallery: [
      {
        title: "AutoCAD Multi-Sheet Layout to PDF System",
        url: "/portfolio/slbn-2-pariaman/layout-autocad.png",
        caption: "Configured multi-viewport title blocks and drawing sheets in AutoCAD for high-resolution vector PDF distribution."
      },
      {
        title: "DED Inclusive Classroom & Therapy Spatial Layout",
        url: "/portfolio/slbn-2-pariaman/1.png",
        caption: "Floor plans displaying specialized classrooms, speech therapy facilities, and unobstructed barrier-free circulation corridors."
      },
      {
        title: "DED Architectural Elevations & Daylighting Facades",
        url: "/portfolio/slbn-2-pariaman/2.png",
        caption: "Exterior elevations featuring natural cross-ventilation, optimized daylight distribution, and sensory-friendly acoustic finishes."
      },
      {
        title: "DED Building Transverse Cross-Sections",
        url: "/portfolio/slbn-2-pariaman/3.png",
        caption: "Transverse structural cross-sections illustrating floor slab levels, tie beam reinforcements, and truss apex heights."
      },
      {
        title: "DED Foundation & Substructure Engineering Plan",
        url: "/portfolio/slbn-2-pariaman/4.png",
        caption: "Reinforced concrete continuous footings, ground tie beams (sloof), and earthquake-resistant tie column details."
      },
      {
        title: "DED Accessible Ramp & Specialized Restroom Details",
        url: "/portfolio/slbn-2-pariaman/5.png",
        caption: "Wheelchair ramp gradient profiles (1:12), handrail ergonomics, and accessible bathroom grab-bar dimensions."
      },
      {
        title: "DED Electrical Layout & Sanitation Schematics",
        url: "/portfolio/slbn-2-pariaman/6.png",
        caption: "Lighting fixtures, accessible low-reach switches, distribution boards, and plumbing drainage schematics."
      },
      {
        title: "Contract Change Order (CCO) Addendum Documentation",
        url: "/portfolio/slbn-2-pariaman/cco.png",
        caption: "Official variance log accounting for quantity modifications, cost impacts, and engineering field justifications."
      },
      {
        title: "Backup Volume Mathematical Calculations",
        url: "/portfolio/slbn-2-pariaman/backup-volume.png",
        caption: "Transparent quantity take-off verification sheets ensuring contractor billing accuracy against actual site scope."
      },
      {
        title: "RKS Material Quality Specification Document",
        url: "/portfolio/slbn-2-pariaman/rks.png",
        caption: "Technical standards enforcing non-toxic materials, slip-resistant ceramic tiles, and strict structural tolerances."
      }
    ],
    documents: [
      {
        name: "Official Master Execution Schedule ",
        url: "/portfolio/slbn-2-pariaman/ts.pdf",
        format: "PDF",
        size: "806 KB"
      },
      {
        name: "Revitalization Cost Budget Recapitulation ",
        url: "/portfolio/slbn-2-pariaman/rekap.pdf",
        format: "PDF",
        size: "468 KB"
      }
    ]
  },
  {
    id: "magang-sie-purwakarta",
    title: "Waste Gas Recovery EPC Plant Project — PT Indo-Bharat Rayon",
    category: "Industrial & QC",
    role: "Quality Control & Quantity Surveyor Intern",
    period: "Aug 2024 – Dec 2024",
    clientOrInstitution: "PT Solusi Industri Energi (Main EPC Contractor) / PT Indo-Bharat Rayon",
    location: "Purwakarta, West Java, Indonesia",
    summary:
      "Site Quality Control (QC) inspection and Quantity Surveying on an industrial Waste Gas Recovery facility within the active chemical plant of PT Indo-Bharat Rayon. Responsible for drafting Bar Bending Schedules (BBS) to optimize rebar cut lengths, calculating verified Backup Volume sheets for monthly Progress Billing applications, conducting fresh concrete Slump Tests on site, executing pre-pour rebar checklists, site progress mapping, and assembling Punch Lists for zone handovers.",
    architectureAndSolution: [
      "Engineered Bar Bending Schedules (BBS) for rebar fabrication, reducing industrial steel reinforcement scrap to negligible margins.",
      "Computed installed structural Backup Volume calculations as legal supporting proof for monthly Progress Billing approvals with zero client disputes.",
      "Evaluated additional quantities and financial cost impacts resulting from field modifications and structural rework (QTO Rework).",
      "Conducted rigorous on-site QC inspections: fresh concrete slump cone testing to verify water-cement ratio and workability, formwork alignment checks, and rebar clearance audits.",
      "Mapped spatial construction progress (Site Mapping) and tracked punch list items prior to zone turnover to the facility owner.",
      "Authored Daily Progress logs, Weekly Reports, and Monthly Progress dossiers for multi-stakeholder management coordination."
    ],
    metrics: [
      { label: "Fresh Concrete QC", value: "100% Slump Tested & Specification Compliant" },
      { label: "Rebar Efficiency", value: "BBS Engineered for Minimum Scrap Waste" },
      { label: "Billing Accuracy", value: "100% Verified Backup Volumes" }
    ],
    techStack: ["Bar Bending Schedule (BBS)", "Slump Testing", "AutoCAD", "Punch List Resolution", "Progress Billing", "Microsoft Excel"],
    deliverables: [
      "Rebar Fabrication Bar Bending Schedules (BBS)",
      "Monthly Progress Billing Backup Volume Dossier",
      "Slump Test Quality Inspection & Pre-Pour Checklists",
      "Site Mapping Progress Overlays & Handover Punch Lists",
      "Daily, Weekly, & Monthly Executive Progress Reports"
    ],
    featured: true,
    coverImage: "/portfolio/magang-sie/slump-test.jpg",
    mediaGallery: [
      {
        title: "On-Site Fresh Concrete Slump Testing",
        url: "/portfolio/magang-sie/slump-test.jpg",
        caption: "Standard slump cone testing of ready-mix concrete to verify workability and water-cement ratio before structural placement."
      },
      {
        title: "Bar Bending Schedule (BBS) Engineering",
        url: "/portfolio/magang-sie/bbs.png",
        caption: "Optimized cutting and bending rebar schedule designed to minimize off-cut steel scrap on heavy foundation structures."
      },
      {
        title: "Physical Backup Volume Calculation Dossier",
        url: "/portfolio/magang-sie/dokumen.jpeg",
        caption: "Archival binder of mathematical quantity take-offs complete with field engineer sign-offs for progress invoicing."
      },
      {
        title: "Progress Billing Mathematical Breakdown",
        url: "/portfolio/magang-sie/dokumen-2.jpeg",
        caption: "Detailed spreadsheets calculating actual concrete volumes, formwork contact areas, and rebar tonnage for billing."
      },
      {
        title: "Spatial Work Area Progress Mapping",
        url: "/portfolio/magang-sie/mapping-work.png",
        caption: "Color-coded construction progress mapping across distinct sectors of the Waste Gas Recovery facility."
      },
      {
        title: "Defect Correction Checklist (Punch List)",
        url: "/portfolio/magang-sie/punch-list.png",
        caption: "Punch list log tracking defect remediation items before and after official zone handover to the facility owner."
      },
      {
        title: "On-Site QTO Rework Calculation",
        url: "/portfolio/magang-sie/qto-rework-1.png",
        caption: "Precise quantity and cost impact evaluation for structural components requiring field adjustment and rework."
      },
      {
        title: "Bill of Quantities Rework Cost & Volume Model",
        url: "/portfolio/magang-sie/bill-of-quantity-rework.png",
        caption: "Comprehensive Bill of Quantities (BoQ) calculation dossier evaluating unit pricing, mathematical volume adjustments, and cost impacts for on-site rework."
      },
      {
        title: "Daily Construction Progress Log",
        url: "/portfolio/magang-sie/daily-proggres.png",
        caption: "Daily tracking of workforce allocation, equipment usage, physical milestones achieved, and jobsite weather conditions."
      },
      {
        title: "Weekly Construction Progress Summary",
        url: "/portfolio/magang-sie/weekly-report.png",
        caption: "Weekly report tracking planned vs. actual progress curves to identify and mitigate schedule deviations immediately."
      },
      {
        title: "Executive Monthly Management Dossier",
        url: "/portfolio/magang-sie/monthly-report.png",
        caption: "Comprehensive monthly report covering materials procurement, HSE safety statistics, S-Curve trends, and photo logs."
      }
    ],
    documents: [
      {
        name: "PT Solusi Industri Energi Official Internship Certificate",
        url: "/portfolio/certificates/sertifikat-magang-sie.pdf",
        format: "PDF",
        size: "298 KB"
      }
    ]
  },
  {
    id: "fasilitator-kemendikdasmen",
    title: "Technical Review & Oversight of Elementary School Revitalization — Kemendikdasmen",
    category: "Government & Supervision",
    role: "Technical Facilitator — Primary School Revitalization Program",
    period: "Jun 2025 – Dec 2025",
    clientOrInstitution: "Ministry of Primary and Secondary Education (Kemendikdasmen)",
    location: "West Sumatra, Indonesia",
    summary:
      "Appointed Technical Facilitator by the Ministry of Primary and Secondary Education to oversee the government-funded school infrastructure revitalization initiative. Entrusted with auditing technical and administrative submissions (DED blueprints, BoQ/RAB budgets, and RKS specifications) across recipient schools, executing periodic field monitoring audits of on-site construction quality, and certifying progress reports as mandatory prerequisites for state funding disbursement milestones.",
    architectureAndSolution: [
      "Conducted comprehensive technical audits of DED blueprints, validated BoQ prices against regional AHSP indices, and ensured clarity of technical specifications (RKS).",
      "Conducted periodic monitoring inspections to recipient school jobsites to verify construction quality, material compliance, and structural integrity.",
      "Assessed schedule variances and partnered with school construction management committees to implement recovery plans during material delays.",
      "Audited administrative records and verified physical field achievements required to issue formal disbursement recommendation certificates.",
      "Facilitated Technical Guidance Workshops (BIMTEK) for school building committees to enforce regulatory governance and safety compliance."
    ],
    metrics: [
      { label: "Scope of Oversight", value: "DED, BoQ, RKS & On-Site Audits" },
      { label: "Accountability", value: "100% Milestone Disbursements Verified" },
      { label: "State Program", value: "National School Revitalization" }
    ],
    techStack: ["Technical Review DED/RAB/RKS", "Field Site Monitoring", "Disbursement Milestone Audit", "BIMTEK Facilitation"],
    deliverables: [
      "Technical Planning Document Review Evaluation Sheets",
      "Periodic Physical Monitoring & Quality Inspection Reports",
      "Official Milestone Physical Progress Verification Minutes",
      "Technical Guidance Workshop (BIMTEK) Training Documentation"
    ],
    featured: true,
    coverImage: "/portfolio/fasilitator/site-monitoring.jpeg",
    mediaGallery: [
      {
        title: "On-Site Physical Construction Monitoring",
        url: "/portfolio/fasilitator/site-monitoring.jpeg",
        caption: "Periodic on-site inspections of recipient elementary schools to evaluate workmanship and structural integrity."
      },
      {
        title: "Field Quality Audit with School Committee",
        url: "/portfolio/fasilitator/site-monitoring-2.jpeg",
        caption: "Direct on-site verification of delivered materials ensuring strict compliance with Ministry technical standards."
      },
      {
        title: "Technical Guidance Workshop (BIMTEK) Session",
        url: "/portfolio/fasilitator/bimtek.jpeg",
        caption: "Leading technical guidance sessions for school construction committees covering quality control and budget administration."
      },
      {
        title: "Technical Review & Document Evaluation Form",
        url: "/portfolio/fasilitator/form-review.png",
        caption: "Formal audit checklist evaluating blueprint feasibility, BoQ calculations, and specification clarity prior to construction."
      },
      {
        title: "Technical Facilitator Periodic Progress Reporting",
        url: "/portfolio/fasilitator/laporan-fasilitator.png",
        caption: "Standardized reporting instrument recording physical milestones achieved and financial budget absorption."
      },
      {
        title: "Technical Reviewers Coordination Session",
        url: "/portfolio/fasilitator/reviewer.jpeg",
        caption: "Plenary coordination meeting with regional facilitator teams to review progress dossiers and verify compliance."
      }
    ]
  },
  {
    id: "qs-mulia-djasmine",
    title: "Quantity Surveying & MC-100 Re-Measurement — PT Perfetti Van Melle Indonesia",
    category: "Planning & QS",
    role: "Quantity Surveyor (Freelance)",
    period: "Sep 2025",
    clientOrInstitution: "PT Mulia Djasmine Sentosa (Subcontractor to PT Perfetti Van Melle Indonesia)",
    location: "Cikarang, West Java, Indonesia",
    summary:
      "Freelance Quantity Surveyor managing on-site re-measurement (Mutual Check 100 / MC-100) on a multinational manufacturing facility expansion for confectionery leader PT Perfetti Van Melle Indonesia. Formulated final cost recapitulations and commercial valuations based on verified physical quantities to underpin subcontractor payment claims, drafted structural Bar Bending Schedules (BBS), and formulated Contract Change Order (CCO) variance documentation.",
    architectureAndSolution: [
      "Conducted joint field opnames and actual physical re-measurements alongside main contractor representatives to establish agreed MC-100 values.",
      "Engineered comprehensive mathematical Backup Volume calculation sheets validating every cubic meter of concrete, formwork area, and rebar tonnage installed.",
      "Formulated valuation recapitulations for subcontractor progress billing claims grounded entirely in authentic field data.",
      "Drafted comprehensive Contract Change Order (CCO) variance registers complete with customized unit price analysis breakdowns.",
      "Engineered Bar Bending Schedules (BBS) to guide structural steel reinforcement fabrication."
    ],
    metrics: [
      { label: "Field Validation", value: "100% MC-100 Signed Off with Zero Disputes" },
      { label: "Contract Governance", value: "Verified Valuation Claims & CCO Dossiers" },
      { label: "Material Engineering", value: "Sub-Millimeter Bar Bending Schedules" }
    ],
    techStack: ["Quantity Surveying", "Mutual Check (MC-100)", "Contract Change Order (CCO)", "Bar Bending Schedule (BBS)", "Microsoft Excel"],
    deliverables: [
      "Installed Works MC-100 Backup Volume Dossier",
      "Subcontractor Valuation Claim Recapitulation Document",
      "Contract Change Order (CCO) Forms & Price Justifications",
      "Structural Steel Bar Bending Schedules (BBS)"
    ],
    featured: true,
    coverImage: "/portfolio/qs-mulia-djasmine/backup-vol.png",
    mediaGallery: [
      {
        title: "MC-100 Mathematical Backup Volume Sheets",
        url: "/portfolio/qs-mulia-djasmine/backup-vol.png",
        caption: "Mathematical quantity calculations proving installed works as definitive proof for subcontractor payment approvals."
      },
      {
        title: "Subcontractor Bar Bending Schedule (BBS)",
        url: "/portfolio/qs-mulia-djasmine/bbs.png",
        caption: "Rebar fabrication schedules specifying bar diameters, cut lengths, bend shapes, and unit weight totals."
      },
      {
        title: "Contract Change Order (CCO) Addendum Documentation",
        url: "/portfolio/qs-mulia-djasmine/cco.png",
        caption: "Comprehensive documentation of modified line items and scope variations with transparent unit price analyses."
      },
      {
        title: "Joint Clarification & Review Coordination Meeting",
        url: "/portfolio/qs-mulia-djasmine/meeting.jpeg",
        caption: "Technical review meeting with main contractor leadership to finalize and approve joint field measurement findings."
      }
    ]
  },
  {
    id: "revit-bim-modeling",
    title: "Integrated 3D Structural & Architectural BIM Modeling — Autodesk Revit",
    category: "BIM & CAD",
    role: "BIM Modeler & Digital Drafter",
    period: "2025",
    clientOrInstitution: "Arsisten Academy (Revit Masterclass for Beginners)",
    location: "Indonesia",
    summary:
      "Implementation of professional Building Information Modeling (BIM) workflows utilizing Autodesk Revit. Engineered parametric 3D structural reinforced concrete components (columns, beams, floor slabs, structural footings) and integrated architectural building elements (walls, interior partitions, window/door schedules, and finishes). Produced a clash-minimized digital twin capable of instant material takeoff schedule extraction.",
    architectureAndSolution: [
      "Constructed precise building grids and elevation datum levels based on architectural project coordinates.",
      "Modeled primary structural elements (columns, moment-resisting frame beams, and tie beams) with accurate node connections.",
      "Converted 2D CAD architectural and structural drawings into information-rich 3D parametric BIM models.",
      "Integrated architectural components (masonry walls, floor finishes, ceiling systems, and window/door schedules).",
      "Utilized native Revit Schedule capabilities for automated extraction of concrete volumes and material quantities."
    ],
    metrics: [
      { label: "Methodology", value: "Building Information Modeling (BIM)" },
      { label: "Credential", value: "Arsisten Academy Revit Completion Certificate" },
      { label: "Design Integration", value: "Unified Structural & Architectural Model" }
    ],
    techStack: ["Autodesk Revit", "Building Information Modeling (BIM)", "Parametric Modeling", "Quantity Scheduling"],
    deliverables: [
      "Integrated 3D Revit Project Model (.rvt)",
      "Extracted 2D Architectural & Structural Plans and Sections",
      "Automated Material Take-Off & Quantity Extraction Schedules"
    ],
    featured: true,
    coverImage: "/portfolio/revit-bim/screenshot-2026-10-29-123810.png",
    mediaGallery: [
      {
        title: "3D Structural Beam & Column Revit Frame",
        url: "/portfolio/revit-bim/screenshot-2026-10-29-123810.png",
        caption: "Parametric 3D reinforced concrete structural framing configured with precise elevation datums and structural grids."
      },
      {
        title: "Geometric Node Intersection Detailing",
        url: "/portfolio/revit-bim/screenshot-2026-10-29-123739.png",
        caption: "Beam-column joint geometry configuration preventing duplicate volume calculation and clash issues."
      },
      {
        title: "Architectural Walls & Fenestration Modeling",
        url: "/portfolio/revit-bim/screenshot-2026-10-29-123825.png",
        caption: "Placement of layered wall assemblies, interior space partitions, and parametric door/window families."
      },
      {
        title: "Isometric 3D Perspective Building Massing",
        url: "/portfolio/revit-bim/screenshot-2026-10-29-123933.png",
        caption: "Complete visualization demonstrating integrated structural framework and architectural finishes in isometric 3D."
      }
    ],
    documents: [
      {
        name: "Arsisten Academy Revit Masterclass Certificate",
        url: "/portfolio/certificates/sertifikat-revit.pdf",
        format: "PDF",
        size: "440 KB"
      }
    ]
  },
  {
    id: "tugas-akhir-dprd-pasaman",
    title: "Senior Capstone Project: Construction Execution Plan for Pasaman Regency Parliament Building",
    category: "Planning & QS",
    role: "Lead Project Planner & Cost Estimator (Diploma III Capstone)",
    period: "2025",
    clientOrInstitution: "Politeknik Negeri Padang (Civil Engineering Department)",
    location: "Pasaman Regency, West Sumatra, Indonesia",
    summary:
      "Diploma III Civil Engineering capstone graduation thesis entitled 'Construction Execution Planning for the Pasaman Regency Regional Parliament (DPRD) Building'. Formulated a comprehensive Bill of Quantities (BoQ/RAB) estimate, advanced scheduling on Microsoft Project utilizing Critical Path Method (CPM), and mapped weighted progress curves into an S-Curve for time and cash-flow control.",
    architectureAndSolution: [
      "Computed detailed Quantity Take-Off (QTO) for substructure (footings, tie beams), superstructure (columns, beams, floor slabs, stairs), architectural finishes, and MEP systems.",
      "Engineered comprehensive Bill of Quantities (BoQ/RAB) applying standardized national SNI/AHSP unit price analyses.",
      "Built comprehensive Microsoft Project schedule utilizing Critical Path Method (CPM) to determine driving activities and schedule float.",
      "Formulated weighted weekly progress S-Curve as an executive instrument for schedule monitoring and project cash-flow forecasting."
    ],
    metrics: [
      { label: "Graduation GPA", value: "3.72 / 4.00 (Cum Laude)" },
      { label: "Scheduling Software", value: "Microsoft Project CPM & S-Curve" },
      { label: "Case Study", value: "Multi-Story Government Building" }
    ],
    techStack: ["Microsoft Project", "Microsoft Excel", "AutoCAD", "Cost Estimating (BoQ)", "Critical Path Method (CPM)"],
    deliverables: [
      "Complete Senior Capstone Final Thesis Book",
      "Detailed Bill of Quantities (BoQ/RAB) Calculation Dossier",
      "Master CPM Schedule on Microsoft Project & S-Curve Chart"
    ],
    featured: true,
    coverImage: "/portfolio/final-project-dprd/kurva-s.png",
    mediaGallery: [
      {
        title: "Project Execution S-Curve Chart",
        url: "/portfolio/final-project-dprd/kurva-s.png",
        caption: "Cumulative weighted weekly progress curve serving as benchmark for schedule control and progress deviation analysis."
      },
      {
        title: "Microsoft Project Schedule & Gantt Chart",
        url: "/portfolio/final-project-dprd/schedule-ms-project.png",
        caption: "Activity sequencing, duration estimation, and Critical Path Method (CPM) analysis modeled in MS Project."
      },
      {
        title: "Bill of Quantities (BoQ/RAB) Calculation Spreadsheet",
        url: "/portfolio/final-project-dprd/rab.png",
        caption: "Structured cost modeling per construction division calculated through standard unit price analyses."
      }
    ],
    documents: [
      {
        name: "Official Civil Engineering Academic Transcript (GPA 3.72)",
        url: "/portfolio/certificates/transkrip-nilai.pdf",
        format: "PDF",
        size: "755 KB"
      }
    ]
  },
  {
    id: "tender-fondasi-days-uns",
    title: "National Construction Tender Competition 'Fondasi Days 2025' — UNS",
    category: "Tender & Research",
    role: "Cost Estimator, 3D Modeler & Pitch Presenter (Jaya Jaya Team)",
    period: "2025",
    clientOrInstitution: "Universitas Sebelas Maret (UNS) Surakarta",
    location: "National Level / Surakarta, Indonesia",
    summary:
      "Competed in the prestigious national construction tender competition 'Fondasi Days 2025' at Universitas Sebelas Maret. Directed technical and commercial proposal authoring: 3D construction phasing in SketchUp, site logistics and mobile crane placement strategy, competitive cost bidding (BoQ), MS Project scheduling & S-Curve formulation, technical poster design, and pitching presentation delivery.",
    architectureAndSolution: [
      "Formulated detailed quantity calculations and competitive commercial bidding with contingency margin modeling.",
      "Modeled 3D construction staging visualizations in SketchUp illustrating site logistics, crane coverage radiuses, and traffic flow.",
      "Engineered Master Time Schedule in Microsoft Project and derived weighted progress S-Curves.",
      "Crafted presentation decks and comprehensive technical posters communicating value engineering and sustainable construction innovations."
    ],
    metrics: [
      { label: "Competition Scale", value: "National Level (UNS Fondasi Days)" },
      { label: "3D Phasing", value: "SketchUp Staging & Site Logistics" },
      { label: "Submission Dossier", value: "Tender Proposal, S-Curve, & Technical Poster" }
    ],
    techStack: ["SketchUp 3D", "Microsoft Project", "Microsoft Excel", "Tender Estimation", "PowerPoint Pitching"],
    deliverables: [
      "Commercial & Technical Tender Bidding Proposal Document",
      "3D Method Statement Phasing Models (SketchUp)",
      "MS Project Master Time Schedule & Bidding S-Curve",
      "Competition Technical Infographic Poster & Pitch Deck"
    ],
    featured: false,
    coverImage: "/portfolio/tender-uns/render-uns-2.jpg",
    mediaGallery: [
      {
        title: "3D Construction Method Statement Rendering (SketchUp)",
        url: "/portfolio/tender-uns/render-uns-2.jpg",
        caption: "3D visualization showing construction phasing, tower crane positioning, material laydown yards, and site safety perimeters."
      },
      {
        title: "Microsoft Project Execution Schedule",
        url: "/portfolio/tender-uns/ms-project.png",
        caption: "Gantt chart schedule incorporating predecessor relationships and critical milestones."
      },
      {
        title: "Competitive Tender Cost Estimate (Bidding BoQ)",
        url: "/portfolio/tender-uns/rab.png",
        caption: "Competitive bid pricing optimized through labor efficiency coefficients and heavy machinery scheduling."
      },
      {
        title: "Tender Pitch Presentation Slides",
        url: "/portfolio/tender-uns/ppt-penawaran.png",
        caption: "Slide deck presenting method statements, value engineering, and risk management to the board of expert judges."
      },
      {
        title: "Jaya Jaya Team Technical Infographic Poster",
        url: "/portfolio/tender-uns/poster-jaya-jaya-team.jpg",
        caption: "Comprehensive technical poster illustrating methodology, schedule, S-Curve, HSE safeguards, and green building innovations."
      }
    ]
  },
  {
    id: "pra-proyek-sap2000",
    title: "Finite Element Modeling & Seismic Response Spectrum Analysis — SAP2000",
    category: "BIM & CAD",
    role: "Structural Modeling & Dynamic Analysis Modeler",
    period: "2024",
    clientOrInstitution: "Building Design Studio (Politeknik Negeri Padang)",
    location: "Padang, West Sumatra, Indonesia",
    summary:
      "Conducted 3D structural frame modeling and finite element dynamic load analysis on a multi-story building using SAP2000. Applied load combinations of dead loads, live loads, and dynamic response spectrum seismic forces in accordance with Indonesian seismic code SNI 1726 to extract internal force envelopes (axial, shear, bending moment) and verify section member adequacy.",
    architectureAndSolution: [
      "Constructed 3D spatial frame model of reinforced concrete beams, columns, and slabs in SAP2000 software.",
      "Calculated preliminary dimensioning of structural frame sections prior to numerical finite element execution.",
      "Configured regional seismic response spectrum functions according to site geographical coordinates and soil class classification (SNI 1726).",
      "Extracted internal force envelopes (axial forces, shear diagrams, and bending moments) for flexural and shear reinforcement design.",
      "Verified inter-story drift limits against permissible seismic safety thresholds under SNI standards."
    ],
    metrics: [
      { label: "Analysis Engine", value: "SAP2000 Finite Element Method" },
      { label: "Seismic Code", value: "SNI 1726 Dynamic Response Spectrum" },
      { label: "Evaluation", value: "Internal Force Envelopes (Axial, Shear, Moment)" }
    ],
    techStack: ["SAP2000", "AutoCAD", "SNI Seismic Code 1726", "Reinforced Concrete Code (SNI 2847)"],
    deliverables: [
      "SAP2000 3D Structural Analysis Model File",
      "Axial, Bending Moment, and Shear Force Envelope Diagrams",
      "Dynamic Seismic Response Spectrum Acceleration Curves",
      "Preliminary Structural Member Sizing Calculation Report"
    ],
    featured: false,
    coverImage: "/portfolio/pra-proyek-sap2000/sap2000.png",
    mediaGallery: [
      {
        title: "SAP2000 3D Structural Portal Frame Model",
        url: "/portfolio/pra-proyek-sap2000/sap2000.png",
        caption: "3D reinforced concrete space frame modeled with node coordinates, element connectivity, and support constraints."
      },
      {
        title: "SNI Dynamic Response Spectrum Acceleration Curve",
        url: "/portfolio/pra-proyek-sap2000/beban-gempa.png",
        caption: "Seismic spectral acceleration input function tailored to regional seismic hazard zone and soil site class."
      },
      {
        title: "Bending Moment & Shear Envelope Diagrams",
        url: "/portfolio/pra-proyek-sap2000/momen-geser.png",
        caption: "Distribution of peak bending moments and shear forces used to determine longitudinal and tie reinforcement ratios."
      },
      {
        title: "Cumulative Axial Force Distribution in Columns",
        url: "/portfolio/pra-proyek-sap2000/axial.png",
        caption: "Stress visualization of cumulative compressive gravity and lateral loads transferring down to ground-level columns."
      },
      {
        title: "Preliminary Structural Sizing Calculations",
        url: "/portfolio/pra-proyek-sap2000/primary-design.png",
        caption: "Preliminary stiffness and cross-sectional sizing calculations for structural beams and columns before numerical simulation."
      },
      {
        title: "Inter-Story Drift & Lateral Deflection Assessment",
        url: "/portfolio/pra-proyek-sap2000/screenshot-2026-10-29-114714.png",
        caption: "Verification of lateral inelastic drift against code allowances to prevent structural pounding and collapse."
      }
    ]
  },
  {
    id: "artikel-ilmiah-scaffolding",
    title: "Scientific Research: Life-Cycle Cost Analysis of Scaffolding in Industrial EPC — PKM-AI",
    category: "Tender & Research",
    role: "Lead Author & Cost Engineering Researcher",
    period: "2025",
    clientOrInstitution: "Student Scientific Creativity Program (PKM-AI) — Ministry of Education & Culture",
    location: "National Level, Indonesia",
    summary:
      "Authored a scientific research paper entitled 'Cost Analysis of Modular Scaffolding on the Waste Gas Recovery Project at PT Indo-Bharat Rayon Purwakarta', funded under the national PKM-AI program. Investigated construction cost efficiency by evaluating capital expenditure (CapEx outright purchasing) versus operational expenditure (OpEx periodic leasing) based on empirical field utilization durations and turnover rates.",
    architectureAndSolution: [
      "Gathered empirical jobsite data regarding daily/monthly rental rates, freight logistics, mobilization/demobilization costs, and capital procurement pricing.",
      "Calculated comparative break-even points across project lifespans between leasing and purchasing models.",
      "Delivered key strategic conclusions: scaffolding cost efficiency is directly governed by site duration—long-term projects achieve superior ROI via capital purchase, whereas short-duration jobs maximize savings through leased systems.",
      "Formulated a financial decision-making matrix for industrial contractors to optimize temporary work equipment expenditures."
    ],
    metrics: [
      { label: "Research Grant", value: "PKM-AI National Research Program" },
      { label: "Study Focus", value: "Feasibility Analysis (CapEx Buy vs OpEx Rent)" },
      { label: "Empirical Site", value: "Waste Gas Recovery Project Purwakarta" }
    ],
    techStack: ["Cost Engineering Analysis", "Microsoft Excel", "Scientific Writing", "Life-Cycle Costing"],
    deliverables: [
      "Official PKM-AI Scientific Research Manuscript",
      "Scaffolding Financial Decision-Making Matrix Model"
    ],
    featured: false,
    coverImage: "/portfolio/artikel-ilmiah/screenshot-2026-10-29-120442.png",
    mediaGallery: [
      {
        title: "PKM-AI Scientific Manuscript Document",
        url: "/portfolio/artikel-ilmiah/screenshot-2026-10-29-120442.png",
        caption: "Published manuscript analyzing modular scaffolding cost efficiency in heavy industrial EPC environments."
      }
    ]
  }
];

export const workExperiences: Experience[] = [
  {
    id: "exp-site-inspector-sifa",
    role: "Site Inspector",
    company: "CV. SIFA DESIGN CONSULTANT",
    type: "Government Building Construction Supervision",
    period: "Sep 2026 – Present",
    location: "Padang Pariaman, West Sumatra, Indonesia",
    responsibilities: [
      "Conduct regular on-site inspections to verify that structural and architectural execution complies with approved Detailed Engineering Design (DED) drawings and quality standards.",
      "Direct field workers to implement immediate corrective actions whenever on-site deviations from technical drawings are identified, minimizing rework.",
      "Prepare weekly physical progress reports using verified field quantities to ensure accurate updates for project stakeholders.",
      "Prepare daily, weekly, and monthly site supervision reports and issue formal Site Instructions (SI) to maintain complete project administration records."
    ],
    keyImpacts: [
      "Enforced rigorous structural quality control on rebar reinforcement, stirrup spacing, and concrete cover across multiple building zones.",
      "Maintained zero-deviation compliance with approved DED blueprints through proactive Site Instruction (SI) issuances and Bappeda coordination."
    ],
    toolsUsed: ["Site Instruction (SI)", "Reinforcement Inspection", "Field Progress Logging", "Quality Control (QC)", "AutoCAD DED Verification"],
    mediaPreview: [
      { title: "Reinforcement Supervision", url: "/portfolio/site-inspector/pengerjaan-penulangan.jpeg" },
      { title: "Site Instruction (SI) Dossier", url: "/portfolio/site-inspector/si.jpeg" }
    ],
    documents: [
      { name: "Site Instruction (SI) Directive", url: "/portfolio/site-inspector/si.jpeg" }
    ]
  },
  {
    id: "exp-sdn19-kuamang",
    role: "Technical Planner & Quantity Surveyor (School Revitalization Consultant)",
    company: "School Revitalization Engineering Consultant",
    type: "SDN 19 Kuamang Revitalization Project",
    period: "Sep 2026",
    location: "Pasaman, West Sumatra, Indonesia",
    responsibilities: [
      "Calculated comprehensive Quantity Take-Off (QTO) and formulated Bill of Quantities (BoQ/RAB) for school facility revitalizations.",
      "Authored Technical Specifications & Requirements (RKS) defining material quality thresholds and on-site workmanship standards.",
      "Developed master construction timelines (Time Schedule) and distributed weekly weighting into an S-Curve for progress monitoring.",
      "Engineered architectural and structural Detailed Engineering Design (DED) blueprints in AutoCAD.",
      "Configured AutoCAD paper layout viewports to publish standardized, high-resolution PDF document sets ready for bidding and execution."
    ],
    keyImpacts: [
      "Delivered zero-redundancy DED blueprints and BoQs, successfully preventing cost overruns and material discrepancies during construction.",
      "Professional layout-to-PDF formatting streamlined client and municipal education department approvals without bureaucratic delays."
    ],
    toolsUsed: ["AutoCAD (Layout Viewports)", "Microsoft Excel", "Microsoft Project", "RKS Technical Specs", "S-Curve"],
    mediaPreview: [
      { title: "AutoCAD Layout System", url: "/portfolio/sdn-19-kuamang/menggunakan-layout-autocad.png" },
      { title: "Project S-Curve", url: "/portfolio/sdn-19-kuamang/kurva-s.pdf" }
    ],
    documents: [
      { name: "SDN 19 Kuamang S-Curve ", url: "/portfolio/sdn-19-kuamang/kurva-s.pdf" },
      { name: "Revitalization BoQ/RAB ", url: "/portfolio/sdn-19-kuamang/rab.pdf" }
    ]
  },
  {
    id: "exp-slbn2-pariaman",
    role: "Technical Planner & Quantity Surveyor (Special School Revitalization Consultant)",
    company: "School Revitalization Engineering Consultant",
    type: "SLBN 2 Pariaman Special School Revitalization Project",
    period: "Jul 2026",
    location: "Pariaman, West Sumatra, Indonesia",
    responsibilities: [
      "Engineered mathematical Quantity Take-Off (QTO) and detailed Bill of Quantities (BoQ/RAB) for universal accessible school facilities.",
      "Drafted specialized Technical Specifications (RKS) governing accessibility fixtures, non-slip surfaces, and sensory-friendly materials.",
      "Developed master Time Schedules and mapped task distribution into S-Curve progress tracking charts.",
      "Produced complete Detailed Engineering Design (DED) blueprints using standardized AutoCAD multi-sheet layout viewports.",
      "Formulated formal Contract Change Order (CCO) addenda reconciling design adjustments with actual verified jobsite conditions."
    ],
    keyImpacts: [
      "Rigorous CCO engineering maintained legal clarity and transparent unit pricing, averting contract disputes.",
      "Universal accessibility standards (ramps, handrails, accessible restrooms) achieved 100% compliance with safety regulations."
    ],
    toolsUsed: ["AutoCAD", "Contract Change Order (CCO)", "Microsoft Excel", "Time Schedule & S-Curve", "RKS Specifications"],
    mediaPreview: [
      { title: "AutoCAD DED Layout", url: "/portfolio/slbn-2-pariaman/layout-autocad.png" },
      { title: "CCO Addendum Document", url: "/portfolio/slbn-2-pariaman/cco.png" }
    ],
    documents: [
      { name: "Official Master Schedule ", url: "/portfolio/slbn-2-pariaman/ts.pdf" },
      { name: "Cost Budget Recapitulation ", url: "/portfolio/slbn-2-pariaman/rekap.pdf" }
    ]
  },
  {
    id: "exp-qs-freelance",
    role: "Quantity Surveyor (Freelance)",
    company: "PT Mulia Djasmine Sentosa",
    type: "Subcontractor to PT Perfetti Van Melle Indonesia Project",
    period: "Sep 2025",
    location: "Cikarang, West Java, Indonesia",
    responsibilities: [
      "Conducted physical on-site re-measurement (Mutual Check 100 / MC-100) across industrial manufacturing plant facilities.",
      "Formulated valuation recapitulations and commercial billing claims based strictly on verified installed field quantities.",
      "Drafted Contract Change Order (CCO) registers documenting scope adjustments and transparent unit price calculations.",
      "Engineered structural Bar Bending Schedules (BBS) to direct rebar cutting and bending fabrication for the subcontractor."
    ],
    keyImpacts: [
      "Subcontractor payment invoices achieved 100% main contractor approval without deductions thanks to verified Backup Volume proofs.",
      "All scope adjustments were cleanly recorded in CCO dossiers with transparent cost reconciliation."
    ],
    toolsUsed: ["Quantity Surveying (MC-100)", "Bar Bending Schedule (BBS)", "CCO Administration", "Microsoft Excel"],
    mediaPreview: [
      { title: "MC-100 Backup Volume", url: "/portfolio/qs-mulia-djasmine/backup-vol.png" },
      { title: "Fabrication BBS", url: "/portfolio/qs-mulia-djasmine/bbs.png" }
    ]
  },
  {
    id: "exp-kemendikdasmen",
    role: "Technical Facilitator — Primary School Revitalization Program",
    company: "Ministry of Primary and Secondary Education (Kemendikdasmen)",
    type: "Government School Infrastructure Revitalization Initiative",
    period: "Jun 2025 – Dec 2025",
    location: "West Sumatra, Indonesia",
    responsibilities: [
      "Audited administrative and engineering dossiers (DED blueprints, BoQ budgets, and RKS specs) for grant recipient schools.",
      "Conducted on-site monitoring inspections across participating schools to enforce construction quality and adherence to schedules.",
      "Verified completeness and authenticity of physical milestone reports as mandatory prerequisites for state funding disbursements.",
      "Conducted Technical Guidance Workshops (BIMTEK) for school construction committees regarding budget governance and building codes."
    ],
    keyImpacts: [
      "Ensured 100% of state grant fund disbursements were backed by legitimate, verified physical site milestones.",
      "Averted structural quality defects and material substandard substitutions across all assigned schools."
    ],
    toolsUsed: ["DED / RAB Technical Audit", "Field Monitoring & Quality Inspection", "Disbursement Verification", "BIMTEK Facilitation"],
    mediaPreview: [
      { title: "Site Monitoring", url: "/portfolio/fasilitator/site-monitoring.jpeg" },
      { title: "Review Form Dossier", url: "/portfolio/fasilitator/form-review.png" }
    ]
  },
  {
    id: "exp-magang-sie",
    role: "Quality Control & Quantity Surveyor Intern",
    company: "PT Solusi Industri Energi",
    type: "Waste Gas Recovery EPC Project (PT Indo-Bharat Rayon Plant)",
    period: "Aug 2024 – Dec 2024",
    location: "Purwakarta, West Java, Indonesia",
    responsibilities: [
      "Engineered Bar Bending Schedules (BBS) to optimize rebar cutting, bending, and placement on structural foundations.",
      "Computed installed structural Backup Volumes as verified mathematical proof for monthly Progress Billing applications.",
      "Quantified re-measurement volumes and cost impacts arising from structural field modifications (QTO Rework).",
      "Conducted quality control field inspections: fresh concrete Slump Testing, pre-pour rebar clearance audits, and checklist sign-offs.",
      "Conducted spatial jobsite mapping (Site Mapping) and assembled detailed Punch Lists for zone handovers.",
      "Compiled Daily Progress logs, Weekly Reports, and Monthly Progress dossiers for multi-stakeholder project coordination."
    ],
    keyImpacts: [
      "Aggressively minimized rebar scrap through optimized Bar Bending Schedules (BBS).",
      "Verified 100% of concrete batches met slump workability and strength thresholds required in high-hazard chemical facilities.",
      "Maintained audit-ready Backup Volume documentation, securing on-time milestone Progress Billing approvals with zero deductions."
    ],
    toolsUsed: ["Bar Bending Schedule (BBS)", "Slump Testing", "AutoCAD", "Punch List Resolution", "Progress Billing Backup", "Site Mapping"],
    mediaPreview: [
      { title: "On-Site Slump Test", url: "/portfolio/magang-sie/slump-test.jpg" },
      { title: "BoQ Rework Costing", url: "/portfolio/magang-sie/bill-of-quantity-rework.png" },
      { title: "Handover Punch List", url: "/portfolio/magang-sie/punch-list.png" }
    ],
    documents: [
      { name: "PT Solusi Industri Energi Official Internship Certificate (PDF)", url: "/portfolio/certificates/sertifikat-magang-sie.pdf" }
    ]
  }
];

export const educationHistory: Education[] = [
  {
    institution: "Politeknik Negeri Padang",
    degree: "Diploma IV (D4)",
    field: "Manajemen Rekayasa Konstruksi",
    period: "Aug 2026 – Present",
    location: "Padang, Indonesia",
    status: "CURRENTLY ACTIVE / IN PROGRESS (ONGOING)",
    isOngoing: true,
    details: [
      "Currently pursuing an advanced vocational degree in Construction Engineering Management (D4) focusing on advanced construction project management, government public procurement regulations, engineering risk governance, and integrated multi-dimensional BIM implementation."
    ]
  },
  {
    institution: "Politeknik Negeri Padang",
    degree: "Diploma III (D3)",
    field: "Civil Engineering",
    period: "Sep 2022 – Jul 2025",
    location: "Padang, Indonesia",
    status: "GRADUATED (PREDIKAT: PUJIAN / CUM LAUDE)",
    isOngoing: false,
    gpa: "3.72 / 4.00",
    details: [
      "Senior Capstone Thesis: Engineered comprehensive Cost Budgeting (BoQ) and CPM project scheduling (Time Schedule & S-Curve) on the 'Construction Execution Planning of Pasaman Regency DPRD Building'.",
      "National Tender Competition 'Fondasi Days 2025' at Universitas Sebelas Maret (UNS): Commercial tender dossier, 3D SketchUp method statements, and competitive cost modeling.",
      "National Student Scientific Creativity Program (PKM-AI) Grantee: Lead author of 'Analisa Biaya Scaffolding pada Proyek Waste Gas Recovery IBR Purwakarta'.",
      "Building Design Studio: Finite element 3D frame modeling and dynamic seismic response spectrum analysis using SAP2000 under SNI codes."
    ],
    transcriptUrl: "/portfolio/certificates/transkrip-nilai.pdf"
  },
  {
    institution: "SMA Negeri 1 Padang",
    degree: "Senior High School Diploma",
    field: "Natural Sciences & Mathematics (MIPA)",
    period: "2019 – 2022",
    location: "Padang, Indonesia",
    status: "GRADUATED",
    isOngoing: false
  }
];

export const certifications: Certification[] = [
  {
    name: "Sertifikat Kompetensi Kerja (SKK) — Pelaksana Lapangan Pekerjaan Gedung Madya / Implementing Intermediate Building Works",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP) — LSP Tenaga Konstruksi Nasional & LPJK",
    levelOrScore: "KKNI Jenjang 5 (Teknisi / Analis) • Reg. F7472118",
    year: "Berlaku s.d. 04 Juli 2030 (Masa Berlaku 5 Tahun)",
    verificationFile: "/portfolio/certificates/skk-bnsp-jenjang5.pdf",
    description: "Sertifikat resmi kompetensi kerja yang diterbitkan atas nama Badan Nasional Sertifikasi Profesi (BNSP) oleh LSP Tenaga Konstruksi Nasional dan tercatat pada Lembaga Pengembangan Jasa Konstruksi (LPJK), mengesahkan kompetensi legal formal pengawasan dan pelaksanaan lapangan pekerjaan konstruksi gedung bertingkat."
  },
  {
    name: "Certificate of Completion: Revit Masterclass for Beginners",
    issuer: "Arsisten Academy",
    levelOrScore: "Total Durasi: 32 Jam 16 Menit (32hrs 16min 0sec)",
    year: "23 Juli 2026",
    verificationFile: "/portfolio/certificates/sertifikat-revit.pdf",
    description: "Sertifikat kelulusan resmi kursus Revit Masterclass for Beginners yang diselenggarakan oleh Arsisten Academy (durasi 32 jam 16 menit), memverifikasi kemampuan pemodelan 3D komponen struktur dan arsitektur gedung."
  },
  {
    name: "Specified skills evaluation exam for Construction Industry: Civil engineering (i)",
    issuer: "Japan Association for Construction Human Resources (JAC)",
    levelOrScore: "Pass (合格) • Reg Number: 40563425",
    year: "11 Juli 2026",
    verificationFile: "/portfolio/certificates/ssw-japan.pdf",
    description: "Surat pemberitahuan hasil ujian (建設分野特定技能評価試験結果通知書) kelulusan evaluasi keahlian pekerja berketerampilan spesifik bidang konstruksi rekayasa sipil dari JAC Jepang."
  },
  {
    name: "Japan Foundation Test for Basic Japanese (JFT-Basic) & JLPT N4",
    issuer: "The Japan Foundation (国際交流基金) & JEES",
    levelOrScore: "JFT-Basic: 250 / 250 (Skor Sempurna) • JLPT N4: 165 / 180 (Passed / 合格)",
    year: " Juli & Agustus 2026",
    description: "Hasil resmi kemahiran bahasa Jepang: JFT-Basic skor total 250 poin (Reg. 40558178, ujian 14 Juli 2026) dan sertifikat resmi JLPT Level N4 skor 165/180 dengan listening 60/60 sempurna dan persentil 99.2% (No. Sertifikat: N4A499511A, Reg. 26A2010601-40410).",
    files: [
      {
        name: "JFT-BASIC CERTIFICATE (PDF)",
        url: "/portfolio/certificates/jft-basic.pdf",
        score: "Score: 250 / 250 (Max)"
      },
      {
        name: "JLPT N4 CERTIFICATE (PDF)",
        url: "/portfolio/certificates/jlpt-n4.pdf",
        score: "Score: 165 / 180 (Passed)"
      }
    ]
  },
  {
    name: "Sertifikat Praktik Kerja Lapangan (PKL)",
    issuer: "PT Solusi Industri Energi (SOLINER)",
    levelOrScore: "Proyek Pembangunan Waste Gas Recovery Project IBR Purwakarta",
    year: "7 Agustus 2024 – 21 Desember 2024",
    verificationFile: "/portfolio/certificates/sertifikat-magang-sie.pdf",
    description: "Sertifikat resmi penyelesaian Praktik Kerja Lapangan (PKL) pada proyek industri Waste Gas Recovery IBR Purwakarta yang ditandatangani oleh Project Manager Iman Sukiman. Terverifikasi dengan perolehan Nilai A (14 SKS, Sangat Cemerlang) pada Transkrip Akademik PNP (Mata Kuliah SIP3232)."
  },
  {
    name: "Notification Letter Prediction Test Score for TOEIC® Test",
    issuer: "UPT Bahasa Politeknik Negeri Padang",
    levelOrScore: "Score: 640 (Listening: 400 | Reading: 240)",
    year: "19 Maret 2023",
    verificationFile: "/portfolio/certificates/toeic-640.pdf",
    description: "Surat keterangan resmi hasil uji prediksi (Prediction Test) TOEIC® No. 002/PL9.13/KM/2023 dari UPT Bahasa Politeknik Negeri Padang dengan skor Listening 400, Reading 240, dan Total Skor 640."
  },
  {
    name: "Transkrip Akademik Resmi — Diploma III Teknik Sipil",
    issuer: "Politeknik Negeri Padang",
    levelOrScore: "IPK 3.72 / 4.00 (Predikat: Pujian / Cum Laude)",
    year: "11 September 2025",
    verificationFile: "/portfolio/certificates/transkrip-nilai.pdf",
    description: "Transkrip akademik kelulusan resmi Program Studi D-3 Teknik Sipil Politeknik Negeri Padang (NIM 2201022034) dengan IPK 3.72, Predikat Pujian (Cum Laude), dan total 115 SKS."
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Core Engineering & Quantity Surveying",
    description: "Foundational mastery in quantity takeoff, construction cost engineering, contract administration, and site quality assurance.",
    items: [
      { name: "Quantity Take-Off (QTO)", level: "Advanced", categoryTag: "Estimation" },
      { name: "Cost Estimation & BoQ/RAB", level: "Advanced", categoryTag: "Cost Engineering" },
      { name: "Technical Specifications (RKS)", level: "Advanced", categoryTag: "Specifications" },
      { name: "Time Schedule & S-Curve", level: "Advanced", categoryTag: "Scheduling" },
      { name: "Bar Bending Schedule (BBS)", level: "Advanced", categoryTag: "Rebar Detailing" },
      { name: "Detailed Engineering Design (DED)", level: "Advanced", categoryTag: "Working Drawings" },
      { name: "Contract Change Orders (CCO)", level: "Proficient", categoryTag: "Contracts & Variations" },
      { name: "Field Quality Control (Slump & Rebar)", level: "Proficient", categoryTag: "Site QC & Inspection" }
    ]
  },
  {
    category: "Software & Digital BIM / CAD Suite",
    description: "Industry-standard software tools for Building Information Modeling, finite element structural analysis, and construction scheduling.",
    items: [
      { name: "Autodesk Revit (BIM)", level: "Certified", details: "Certified BIM Modeler Arsisten Academy (Structural & Architectural Modeling)", categoryTag: "BIM" },
      { name: "AutoCAD", level: "Advanced", details: "2D DED, rebar detailing, shop drawings, standardized multi-sheet layout viewports to PDF", categoryTag: "CAD" },
      { name: "SketchUp", level: "Advanced", details: "3D construction staging visualizations & tender site logistics modeling", categoryTag: "3D Modeling" },
      { name: "SAP2000", level: "Proficient", details: "Finite element modeling & dynamic seismic response spectrum analysis under SNI codes", categoryTag: "Structural Analysis" },
      { name: "Microsoft Project", level: "Advanced", details: "Critical Path Method (CPM), resource allocation & weighted S-Curve derivation", categoryTag: "Scheduling" },
      { name: "Microsoft Excel", level: "Expert", details: "Advanced QTO modeling, unit price analysis formulas, BoQ automation, and backup volume registers", categoryTag: "Data & Modeling" }
    ]
  },
  {
    category: "Languages & Global Communication",
    description: "Certified multi-lingual communication for local jobsite leadership and international expat collaboration.",
    items: [
      { name: "Indonesian (Bahasa Indonesia)", level: "Native", details: "Native command in engineering reporting, government liaison, and site workforce leadership", categoryTag: "Native" },
      { name: "Japanese (日本語)", level: "Intermediate (Bilingual)", details: "JFT-Basic Score: 250 & JLPT N4 Score: 165 (JAC SSW Certified for Japan Construction)", categoryTag: "Certified" },
      { name: "English", level: "Working Proficiency", details: "TOEIC Score: 640 — Technical engineering documentation, tender proposals, and international collaboration", categoryTag: "Certified" }
    ]
  },
  {
    category: "Professional Discipline & Jobsite Leadership",
    description: "Work ethic, uncompromising precision, and field-tested leadership developed on high-demand construction sites.",
    items: [
      { name: "Field Adaptability & Problem Solving", details: "Swiftly resolving discrepancies between blueprint drawings and actual ground conditions with sound engineering solutions", categoryTag: "Mindset" },
      { name: "Meticulous Precision & Zero Defect", details: "Zero tolerance for quantity calculation errors, accounting for rebar cuts down to millimeters", categoryTag: "Precision" },
      { name: "Technical Integrity & Accountability", details: "Strict compliance with safety checklists, SNI engineering codes, and jobsite HSE regulations", categoryTag: "Integrity" },
      { name: "Cross-Disciplinary Team Collaboration", details: "Articulate communicator effectively bridging foremen, specialty trades, consultant engineers, and project owners", categoryTag: "Collaboration" }
    ]
  }
];

export const projects = featuredProjects;
