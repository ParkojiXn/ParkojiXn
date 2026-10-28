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
  status: "AVAILABLE FOR ROLES & CONSULTANCIES",
  bioSummary:
    "Civil Engineering graduate from Politeknik Negeri Padang (GPA 3.72/4.00) and certified BNSP Level 5 Construction Supervisor. Specializing in Quantity Surveying (QS), Detailed Engineering Design (DED), Cost Budgeting (BoQ/RAB), and S-Curve project scheduling. Experienced in bridging digital modeling (Autodesk Revit BIM, AutoCAD, SketchUp, SAP2000) with on-site quality control, rebar optimization, and contract change administration—with certified Japanese and English communication.",
  personalStatement:
    "I believe great civil engineering isn't just about drawing lines in CAD or running structural formulas—it's about making sure that what's designed gets built safely, on schedule, and without wasted capital or materials. Whether I'm optimizing rebar cutting schedules on high-stakes industrial sites, auditing government school revitalizations, or modeling dynamic structures, I bring an honest field-first mindset and meticulous accountability to every project.",
  keyStats: [
    {
      value: "3.72",
      label: "GRADUATION GPA / 4.00",
      description: "Politeknik Negeri Padang — D3 Civil Engineering (Graduated with High Honors)",
    },
    {
      value: "LEVEL 5",
      label: "BNSP ACCREDITATION",
      description: "Intermediate Building Construction Supervisor (Ministry of Public Works)",
    },
    {
      value: "5+",
      label: "REAL-WORLD PROJECTS",
      description: "School Revitalizations, Industrial Waste Gas Recovery, Tenders, & Commercial QS",
    },
    {
      value: "3 LANGUAGES",
      label: "GLOBAL COMMUNICATION",
      description: "Indonesian (Native), Japanese (JLPT N4 / SSW Certified), English (TOEIC 640)",
    },
  ],
  coreValues: [
    {
      title: "Field-First Practicality",
      subtitle: "Bridging Drawings & Ground Realities",
      description: "Blueprints and schedules only matter if they can be executed smoothly on-site. I spend time understanding actual ground conditions, constructability, and labor workflows before locking in estimates."
    },
    {
      title: "Respect for Every Dollar & Metric",
      subtitle: "Zero-Waste Cost & Material Governance",
      description: "From precision Bar Bending Schedules (BBS) that curb expensive scrap steel to airtight Bill of Quantities (BoQ), I treat client and public budgets with meticulous care."
    },
    {
      title: "Transparent, Human Communication",
      subtitle: "Alignment Across Owners, Engineers & Trades",
      description: "Smooth construction hinges on shared clarity. I bridge technical specifications with honest daily reporting, substantiated progress billings, and constructive conflict resolution."
    },
    {
      title: "Relentless Craft & Lifelong Learning",
      subtitle: "Continuing Advanced Studies & Global Standards",
      description: "Currently pursuing an advanced D4 in Construction Engineering Management, mastering Revit BIM workflows, and certified to Japanese construction industry standards (SSW)."
    }
  ]
};

export const featuredProjects: Project[] = [
  {
    id: "dprd-pasaman",
    title: "Construction Planning & Cost Engineering for Pasaman Regency DPRD Legislative Complex",
    category: "Planning & QS",
    role: "Lead Project Planner & Cost Estimator (Final Capstone Project)",
    period: "2025",
    clientOrInstitution: "Politeknik Negeri Padang",
    location: "Pasaman Regency, West Sumatra",
    summary:
      "Comprehensive technical execution and cost engineering plan for a multi-story government legislative complex. Developed detailed Quantity Take-Offs (QTO), realistic Bill of Quantities (BoQ/RAB), and an integrated CPM project schedule linked to an S-Curve for progress governance.",
    architectureAndSolution: [
      "Calculated high-precision Quantity Take-Off (QTO) across reinforced concrete substructure, superstructure, architectural finishes, and MEP installations.",
      "Constructed Critical Path Method (CPM) project schedules and S-Curve cash-flow weighting in Microsoft Project to simulate realistic resource distribution.",
      "Authored comprehensive Technical Specifications (RKS) and procurement guidelines adhering to national public works standards (PUPR)."
    ],
    metrics: [
      { label: "Estimation Granularity", value: "Itemized Unit Cost Analysis" },
      { label: "Schedule Logic", value: "Integrated CPM & S-Curve" },
      { label: "Documentation", value: "Full DED, BoQ, & Spec Package" }
    ],
    techStack: ["Microsoft Project", "Microsoft Excel", "AutoCAD", "Cost Estimation (BoQ/RAB)", "S-Curve Tracking"],
    deliverables: ["Comprehensive BoQ/RAB Dossier", "Gantt Chart & S-Curve Baseline", "Standardized Unit Price Analysis (AHSP)"],
    featured: true
  },
  {
    id: "waste-gas-recovery",
    title: "Industrial Waste Gas Recovery Project — PT Indo-Bharat Rayon Plant",
    category: "Industrial & QC",
    role: "Quality Control & Quantity Surveyor Intern",
    period: "Aug 2024 – Dec 2024",
    clientOrInstitution: "PT Solusi Industri Energi (Main EPC Contractor)",
    location: "Purwakarta, West Java",
    summary:
      "On-site quality control and quantity surveying for a large-scale industrial facility within an active chemical manufacturing complex. Spearheaded rebar optimization to curb cutting waste, conducted daily fresh concrete slump inspections, and verified 100% of progress billing backup volume.",
    architectureAndSolution: [
      "Engineered detailed Bar Bending Schedules (BBS) to optimize rebar cutting lengths, reducing scrap steel and ensuring structural integrity.",
      "Calculated as-built backup volumes for installed physical works, providing the official mathematical basis for monthly progress billings without contractor disputes.",
      "Performed daily on-site Quality Control: slump testing fresh ready-mix batches and inspecting rebar cage spacing and formwork dimensions prior to pours.",
      "Mapped active work zones and administered comprehensive punch lists / snag lists for snag-free handover."
    ],
    metrics: [
      { label: "Concrete Testing", value: "100% Slump & Placement Compliance" },
      { label: "Steel Optimization", value: "Waste-Minimized BBS Deployment" },
      { label: "Billing Verification", value: "Zero Dispute Progress Approvals" }
    ],
    techStack: ["AutoCAD", "Bar Bending Schedule (BBS)", "Microsoft Excel", "Slump Cone QC", "Punch List Management"],
    deliverables: ["Field Bar Bending Schedules", "Backup Volume Progress Dossiers", "QC Inspection Logs & Sign-Offs"],
    featured: true
  },
  {
    id: "revitalisasi-sekolah",
    title: "Educational Facilities Revitalization: SDN 19 Kuamang & SLBN 2 Pariaman",
    category: "BIM & CAD",
    role: "Technical Planning Engineer (Planning Consultant)",
    period: "Jul 2026 – Sep 2026",
    clientOrInstitution: "School Infrastructure Planning Consultancy",
    location: "Pasaman & Pariaman, West Sumatra",
    summary:
      "Full lifecycle engineering design and cost planning for the comprehensive rehabilitation of standard primary and special needs (SLB) public schools. Delivered architectural and structural Detailed Engineering Designs (DED), local unit price budgeting, project schedules, and formal Contract Change Orders (CCO).",
    architectureAndSolution: [
      "Authored complete 2D Detailed Engineering Design (DED) blueprints in AutoCAD adhering strictly to national educational facility codes.",
      "Calculated rehabilitation work quantities and formulated official BoQs applying regional unit prices (AHSP).",
      "Drafted technical specification documents (RKS) detailing acceptable material grades and testing protocols.",
      "Structured legal Contract Change Order (CCO) variations to accommodate unexpected subsurface conditions discovered during site demolition."
    ],
    metrics: [
      { label: "Educational Facilities", value: "2 Schools (SDN 19 & SLBN 2)" },
      { label: "Engineering Scope", value: "Full Structural & Architectural DED" },
      { label: "Contract Governance", value: "Formal CCO Addendum Approved" }
    ],
    techStack: ["AutoCAD", "Microsoft Excel", "Microsoft Project", "Detailed Engineering Design (DED)", "Contract Change Order (CCO)", "S-Curve"],
    deliverables: ["2D Architectural & Structural Working Drawings", "BoQ/RAB & Technical Specs (RKS)", "Baseline S-Curve & CCO Addendum"],
    featured: true
  },
  {
    id: "tender-fondasi-days",
    title: "National Construction Tender Competition — 'Fondasi Days 2025'",
    category: "Tender & Research",
    role: "Cost Estimator & 3D Construction Modeler",
    period: "2025",
    clientOrInstitution: "Universitas Sebelas Maret (UNS)",
    location: "Surakarta / National Level",
    summary:
      "Competitive national tender simulation requiring rigorous technical bid preparation, value-engineered cost estimation, 3D construction phasing simulations, and strategic bidding analysis under strict competition deadlines.",
    architectureAndSolution: [
      "Modeled 3D construction phasing in SketchUp to visually articulate construction staging, site logistics, and crane placements.",
      "Analyzed technical execution methods to minimize critical path scheduling bottlenecks and worker safety risks.",
      "Compiled competitive tender price bid dossiers backed by unit price breakdowns and contingency margin modeling."
    ],
    metrics: [
      { label: "Competition Scope", value: "National Level (UNS)" },
      { label: "Method Visualization", value: "3D SketchUp Phasing Model" },
      { label: "Bid Submission", value: "Full Technical & Commercial Proposal" }
    ],
    techStack: ["SketchUp 3D", "Microsoft Excel", "Technical Methodology Analysis", "Tender Estimation"],
    deliverables: ["Full Commercial & Technical Tender Dossier", "3D Site Logistics & Method Simulation", "Custom Unit Price Breakdown (AHSP)"],
    featured: false
  },
  {
    id: "pkm-ai-scaffolding",
    title: "Scaffolding Cost-Benefit Analysis for Industrial Recovery — PKM-AI",
    category: "Tender & Research",
    role: "Lead Author & Cost Analyst",
    period: "2025",
    clientOrInstitution: "Ministry of Education & Culture (Student Scientific Research Program / PKM-AI)",
    location: "National Level",
    summary:
      "Case study and economic feasibility paper based on empirical site data from the Waste Gas Recovery project at IBR Purwakarta. Evaluated life-cycle capital expenditure comparing direct equipment purchase versus modular scaffolding leasing over various industrial maintenance cycles.",
    architectureAndSolution: [
      "Aggregated field data on lease terms, erection and dismantling labor volumes, and maintenance degradation costs.",
      "Formulated comparative life-cycle cost models contrasting capital expenditure (CapEx) against operational expenditure (OpEx).",
      "Derived actionable decision matrices for industrial contractors navigating medium-to-long term project horizons."
    ],
    metrics: [
      { label: "Research Initiative", value: "National PKM-AI Program" },
      { label: "Study Focus", value: "CapEx Purchase vs OpEx Rental" },
      { label: "Cost Strategy", value: "Optimized Lease Duration Models" }
    ],
    techStack: ["Cost Engineering Analysis", "Microsoft Excel", "Scientific Research & Writing"],
    deliverables: ["Peer-Reviewed Scientific Article (PKM-AI)", "Scaffolding Financial Decision Model"],
    featured: false
  },
  {
    id: "sap2000-structural",
    title: "Finite Element Modeling & Seismic Analysis for Multi-Story Frame — SAP2000",
    category: "BIM & CAD",
    role: "Structural Modeling Engineer",
    period: "2024",
    clientOrInstitution: "Politeknik Negeri Padang (Pre-Project Studio)",
    location: "Padang, Indonesia",
    summary:
      "3D finite element structural modeling and dynamic seismic load simulations for a multi-story reinforced concrete frame, conforming strictly to Indonesian earthquake-resistant building codes (SNI 1726 / SNI 2847).",
    architectureAndSolution: [
      "Engineered 3D geometric finite element models of reinforced concrete moment-resisting frames in SAP2000.",
      "Configured gravitational dead/live load combinations and applied dynamic response spectrum earthquake loading.",
      "Evaluated inter-story drift ratios, maximum lateral deflections, and internal force envelopes (moment, shear, axial) to verify section capacities."
    ],
    metrics: [
      { label: "FEA Software", value: "SAP2000 Finite Element" },
      { label: "Design Codes", value: "SNI Seismic & Concrete Codes" },
      { label: "Analysis Mode", value: "3D Dynamic Response Spectrum" }
    ],
    techStack: ["SAP2000", "AutoCAD", "Seismic Response Spectrum Analysis", "Reinforced Concrete SNI Standards"],
    deliverables: ["3D SAP2000 Structural Model", "Deformation & Internal Force Envelopes"],
    featured: false
  }
];

export const workExperiences: Experience[] = [
  {
    id: "exp-revitalisasi-sd",
    role: "Technical Planning Engineer (Elementary School Revitalization)",
    company: "School Infrastructure Planning Consultancy",
    type: "SDN 19 Kuamang Revitalization Project",
    period: "Sep 2026",
    location: "Pasaman, Indonesia",
    responsibilities: [
      "Conducted comprehensive Quantity Take-Off (QTO) and authored detailed Bill of Quantities (BoQ/RAB) for the physical revitalization of primary school structures.",
      "Authored detailed Technical Specifications & Terms of Reference (RKS) defining material quality benchmarks, testing standards, and compliance guidelines.",
      "Built master construction schedules (Time Schedule) and mapped milestone weightings into visual S-Curves for progress governance.",
      "Drafted complete 2D Detailed Engineering Design (DED) architectural and structural blueprints in AutoCAD."
    ],
    keyImpacts: [
      "Delivered airtight DED and BoQ packages serving as the official legal and physical baseline for contractor execution.",
      "Prevented budget overruns by establishing standardized, locally benchmarked material specifications prior to groundbreaking."
    ],
    toolsUsed: ["AutoCAD", "Microsoft Excel", "Microsoft Project", "Technical Specifications (RKS)", "S-Curve Tracking"]
  },
  {
    id: "exp-revitalisasi-slb",
    role: "Technical Planning Engineer (Special Needs School Revitalization)",
    company: "School Infrastructure Planning Consultancy",
    type: "SLBN 2 Pariaman Special Education School Project",
    period: "Jul 2026",
    location: "Pariaman, Indonesia",
    responsibilities: [
      "Prepared detailed work quantity calculations and cost estimates (BoQ/RAB) tailored to accessibility standards for special education facilities.",
      "Drafted Technical Specifications (RKS) ensuring disability-friendly material durability, non-slip surfaces, and structural safety.",
      "Developed project timelines and progress S-Curves to coordinate multi-trade execution.",
      "Produced comprehensive 2D AutoCAD Detailed Engineering Design (DED) drawings.",
      "Structured and drafted official Contract Change Order (CCO) documentation to re-align contract quantities with uncovered on-site conditions."
    ],
    keyImpacts: [
      "Executed administrative and technical Contract Change Orders (CCO) seamlessly to keep work moving without contractual disputes.",
      "Guaranteed that specialized architectural accessibility requirements were fully met to high safety standards."
    ],
    toolsUsed: ["AutoCAD", "Microsoft Excel", "Contract Change Order (CCO)", "S-Curve Tracking", "Accessibility Codes"]
  },
  {
    id: "exp-qs-freelance",
    role: "Freelance Quantity Surveyor",
    company: "PT Mulia Djasmine Sentosa",
    type: "Subcontractor for PT Perfetti Van Melle Indonesia Project",
    period: "Sep 2025",
    location: "Indonesia",
    responsibilities: [
      "Conducted rigorous on-site as-built re-measurements to verify actual installed work quantities against approved construction drawings.",
      "Compiled cost reconciliations and itemized price valuations based on verified physical measurements to substantiate subcontractor payment claims."
    ],
    keyImpacts: [
      "Secured subcontractor payment claims backed by verifiable field data, eliminating friction with the main contractor.",
      "Minimized billing variance and ensured all claimed variations were documented with audit-ready calculations."
    ],
    toolsUsed: ["Quantity Surveying", "Microsoft Excel", "As-Built Re-Measurement", "Cost Valuation"]
  },
  {
    id: "exp-kemendikdasmen",
    role: "Technical Facilitator — Primary School Revitalization Program",
    company: "Ministry of Primary and Secondary Education (Kemendikdasmen)",
    type: "Government Grant School Infrastructure Revitalization",
    period: "Jun 2025 – Dec 2025",
    location: "West Sumatra, Indonesia",
    responsibilities: [
      "Reviewed and audited administrative and technical dossiers (DED blueprints, BoQ/RAB budgets, and RKS specs) for grant recipient schools.",
      "Conducted periodic on-site field monitoring and inspections to verify that physical construction progress aligned with approved schedules and quality codes.",
      "Audited and verified milestone completion documentation as statutory prerequisites for government grant disbursement tranches."
    ],
    keyImpacts: [
      "Enforced rigorous technical compliance and financial accountability across community school committees under ministry regulations.",
      "Kept physical progress in lockstep with planned disbursement curves, preventing stalled construction."
    ],
    toolsUsed: ["DED / BoQ Technical Audit", "Field Quality Monitoring", "Disbursement Milestone Verification", "Site Quality Inspection"]
  },
  {
    id: "exp-magang-sie",
    role: "Quality Control & Quantity Surveyor Intern",
    company: "PT Solusi Industri Energi",
    type: "Waste Gas Recovery Project (PT Indo-Bharat Rayon Plant)",
    period: "Aug 2024 – Dec 2024",
    location: "Purwakarta, Indonesia",
    responsibilities: [
      "Engineered detailed Bar Bending Schedules (BBS) to optimize rebar cutting lengths and minimize scrap steel.",
      "Calculated as-built backup volumes of completed works to provide airtight substantiation for monthly Progress Billing.",
      "Conducted daily on-site Quality Control inspections: fresh concrete slump testing, rebar spacing checks, and pre-pour structural checklists.",
      "Conducted site mapping and maintained actionable Punch Lists / Snag Lists before and after area handovers.",
      "Drafted daily, weekly, and monthly progress reports to support multi-stakeholder project coordination."
    ],
    keyImpacts: [
      "Ensured 100% of concrete pours met standard slump specifications and steel was placed true to approved shop drawings.",
      "Provided audit-proof backup volume calculations that cleared client progress billings without dispute or payment delays."
    ],
    toolsUsed: ["Bar Bending Schedule (BBS)", "Slump Test Kit", "AutoCAD", "Punch List Resolution", "Backup Volume Calculations"]
  }
];

export const educationHistory: Education[] = [
  {
    institution: "Politeknik Negeri Padang (Padang State Polytechnic)",
    degree: "Bachelor of Applied Science (D4)",
    field: "Construction Engineering & Project Management",
    period: "Aug 2026 – Present",
    location: "Padang, Indonesia",
    details: [
      "Advanced coursework emphasizing integrated construction project management, engineering risk analysis, public procurement governance, and advanced BIM implementation."
    ]
  },
  {
    institution: "Politeknik Negeri Padang (Padang State Polytechnic)",
    degree: "Associate Degree in Engineering (D3)",
    field: "Civil Engineering",
    period: "Sep 2022 – Jul 2025",
    location: "Padang, Indonesia",
    gpa: "3.72 / 4.00",
    details: [
      "Final Capstone Project: Detailed construction planning, Bill of Quantities (BoQ/RAB) estimation, and CPM/S-Curve scheduling for the Pasaman Regency DPRD Legislative Building.",
      "Competitor in the National Construction Tender Competition 'Fondasi Days 2025' at Universitas Sebelas Maret (UNS).",
      "Lead Author in National Student Scientific Research Program (PKM-AI) funded by Kemendikbudristek: Scaffolding Cost Feasibility Analysis.",
      "Pre-Project Studio: 3D finite element structural modeling and seismic response spectrum analysis in SAP2000."
    ]
  },
  {
    institution: "SMA Negeri 1 Padang",
    degree: "High School Diploma",
    field: "Natural Sciences (Mathematics & Physics)",
    period: "2019 – 2022",
    location: "Padang, Indonesia"
  }
];

export const certifications: Certification[] = [
  {
    name: "National Certificate of Competency (SKK) — Intermediate Building Construction Supervisor (Level 5 KKNI)",
    issuer: "National Professional Certification Board (BNSP) & Ministry of Public Works (BJKW I Banda Aceh)",
    levelOrScore: "Level 5 (Intermediate Supervisor)",
    year: "Official BNSP Accredited"
  },
  {
    name: "Revit Masterclass for Beginners (Building Information Modeling)",
    issuer: "Arsisten Academy",
    levelOrScore: "Certificate of Completion",
    year: "BIM Certified"
  },
  {
    name: "Specified Skilled Worker (SSW) Evaluation Exam for Construction Industry",
    issuer: "Japan Association for Construction Human Resources (JAC)",
    levelOrScore: "Accredited Japanese Construction Standard",
    year: "Internationally Certified"
  },
  {
    name: "Japan Foundation Test for Basic Japanese (JFT-Basic) & JLPT N4",
    issuer: "The Japan Foundation",
    levelOrScore: "JFT-Basic Score: 250 / 250 | JLPT N4 Score: 165 / 180",
    year: "Intermediate Japanese Proficiency"
  },
  {
    name: "Test of English for International Communication (TOEIC)",
    issuer: "ETS (Educational Testing Service)",
    levelOrScore: "Score: 640",
    year: "Professional Working English"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Hard Skills & Engineering Practice",
    description: "Core technical workflows: quantity surveying, contractual documentation, cost budgeting, and structural detailing.",
    items: [
      { name: "Quantity Take-Off (QTO)", level: "Advanced", categoryTag: "Estimation" },
      { name: "Cost Estimation & BoQ/RAB", level: "Advanced", categoryTag: "Cost Engineering" },
      { name: "Technical Specifications (RKS)", level: "Advanced", categoryTag: "Specifications" },
      { name: "Time Schedule & S-Curve", level: "Advanced", categoryTag: "Scheduling" },
      { name: "Bar Bending Schedule (BBS)", level: "Advanced", categoryTag: "Rebar Detailing" },
      { name: "Detailed Engineering Design (DED)", level: "Advanced", categoryTag: "Technical Drawings" },
      { name: "Contract Change Orders (CCO)", level: "Proficient", categoryTag: "Contract Admin" },
      { name: "Field Quality Control (Slump & Rebar)", level: "Proficient", categoryTag: "Site QC" }
    ]
  },
  {
    category: "Software & BIM / CAD Suite",
    description: "Industry-standard computational and drafting tools for building information modeling, structural FEA, and cost spreadsheets.",
    items: [
      { name: "Autodesk Revit (BIM)", level: "Certified", details: "Arsisten Academy BIM Certified Modeler", categoryTag: "BIM" },
      { name: "AutoCAD", level: "Advanced", details: "2D DED, shop drawings & construction detailing", categoryTag: "CAD" },
      { name: "SketchUp", level: "Advanced", details: "3D construction staging & tender visualization", categoryTag: "3D Modeling" },
      { name: "SAP2000", level: "Proficient", details: "Finite element analysis & seismic dynamic response", categoryTag: "Structural" },
      { name: "Microsoft Project", level: "Advanced", details: "Critical Path Method (CPM), resource allocation & S-Curves", categoryTag: "Project Mgmt" },
      { name: "Microsoft Excel", level: "Expert", details: "Parametric QTO, unit price analysis (AHSP), BoQ, & billing models", categoryTag: "Data & Modeling" }
    ]
  },
  {
    category: "Language & Cross-Border Collaboration",
    description: "Certified multilingual communication capabilities for local site coordination and international engineering teams.",
    items: [
      { name: "Indonesian (Bahasa Indonesia)", level: "Native", details: "Professional engineering writing, contractor coordination, and official client reporting", categoryTag: "Native" },
      { name: "Japanese (日本語)", level: "Intermediate (Bilingual)", details: "JFT-Basic Score 250 & JLPT N4 Score 165 (JAC SSW Construction Certified)", categoryTag: "Certified" },
      { name: "English", level: "Professional Working", details: "TOEIC Score 640 — Technical documentation, tender dossiers, and global team collaboration", categoryTag: "Certified" }
    ]
  },
  {
    category: "Professional Work Ethic & Human Attributes",
    description: "Grounded field leadership traits, problem-solving mindset, and collaborative habits developed on-site.",
    items: [
      { name: "Agile Field Adaptability", details: "Quick to adjust schedules and methods when unexpected site realities or change orders arise", categoryTag: "Mindset" },
      { name: "Meticulous Accuracy", details: "Zero-tolerance for calculation oversights—verifying quantities and rebar down to the millimeter", categoryTag: "Precision" },
      { name: "Accountable Field Ownership", details: "Strict adherence to quality checklists, structural safety codes (SNI), and HSE compliance", categoryTag: "Integrity" },
      { name: "Multi-Disciplinary Teamwork", details: "Active, clear communicator who unites site trades, consulting architects, and project owners", categoryTag: "Collaboration" }
    ]
  }
];
