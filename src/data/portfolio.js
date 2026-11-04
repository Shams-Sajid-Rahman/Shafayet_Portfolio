/**
 * ============================================================
 *  PORTFOLIO CONTENT
 *  Edit this file to update anything shown on the website.
 *  Components read from here, so no JSX changes are needed
 *  to add a skill, experience entry or publication.
 * ============================================================
 */
import {
  Dna,
  FlaskConical,
  Microscope,
  Cpu,
  ShieldCheck,
  Hospital,
  Rat,
  Atom,
  Activity,
  Code,
  TestTubes,
  Mic,
  GraduationCap,
  HeartHandshake,
  Droplet,
  Recycle,
} from 'lucide-react';

/* ---------------- Personal info ---------------- */
export const profile = {
  name: 'Md Shafayet Ullah',
  shortName: 'Shafayet Ullah',
  title: 'Biochemistry and Molecular Biology Researcher',
  focus: 'In Vivo Pharmacology & In Silico Drug Discovery',
  roles: ['Biochemist', 'In Silico Drug Discovery Researcher', 'Molecular Biology Graduate'],
  tagline:
    'Bridging wet-lab pharmacology with computational bioinformatics, from rodent models and immunoassays to molecular docking and ADMET prediction, to accelerate the path from molecule to medicine.',
  location: 'Pallabi, Dhaka, Bangladesh',
  locationShort: 'Dhaka, Bangladesh',
  email: 'arikshafaet@gmail.com',
  phone: '+880 1922 289602',
  phoneHref: 'tel:+8801922289602',
  linkedin: 'https://www.linkedin.com/in/md-shafayet-ullah-01a017413/',
  linkedinLabel: 'linkedin.com/in/md-shafayet-ullah-01a017413',
  // Place your CV PDF at /public/Md_Shafayet_Ullah_CV.pdf
  resumeUrl: '/Md_Shafayet_Ullah_CV.pdf',
  // Profile photo shown in the About section (stored in /public/images)
  photo: '/images/shafayet-ullah.jpg',
};

/* ---------------- Navigation ---------------- */
export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'publications', label: 'Publications' },
  { id: 'contact', label: 'Contact' },
];

/* ---------------- Hero quick stats ---------------- */
export const stats = [
  { value: '3.76', suffix: '/4.00', label: 'CGPA, BMB' },
  { value: '2', suffix: '', label: 'Peer-reviewed publications' },
  { value: '4', suffix: '+', label: 'Research projects' },
  { value: '40', suffix: '+', label: 'Students mentored' },
];

/* ---------------- About ---------------- */
export const about = {
  bio: [
    'I am a Biochemistry & Molecular Biology student at Gopalganj Science and Technology University (GSTU), driven by a simple question: how do we move a promising molecule from a computer screen to a validated therapeutic effect in a living system?',
    'My research sits at the intersection of in vivo pharmacology and computational drug discovery. I have designed and executed rodent studies on metabolic disease and hepatotoxicity, run ELISA and chemiluminescence assays in clinical settings, and screened drug candidates through molecular docking and ADMET modelling.',
  ],
  highlights: [
    {
      icon: GraduationCap,
      label: 'Education',
      title: 'B.Sc. in Biochemistry & Molecular Biology',
      detail: 'Gopalganj Science and Technology University',
      metric: 'CGPA 3.76 / 4.00',
    },
    {
      icon: FlaskConical,
      label: 'Wet-Lab',
      title: 'Hands-on bench expertise',
      detail: 'Rodent models, histology, ELISA, PCR, Western blotting and GLP-compliant workflows.',
    },
    {
      icon: Cpu,
      label: 'Dry-Lab',
      title: 'Computational screening',
      detail: 'RNA-seq transcriptomics, molecular docking, MD simulations, DFT and ADMET prediction.',
    },
    {
      icon: Atom,
      label: 'Goals',
      title: 'Biopharmaceutical sciences',
      detail:
        'Pursuing a research-focused Master’s and R&D roles in drug discovery, translational pharmacology and biopharmaceutical development.',
    },
  ],
};

/* ---------------- Skills ---------------- */
export const skillCategories = [
  {
    id: 'invivo',
    icon: Rat,
    title: 'Wet-Lab & In Vivo',
    blurb: 'Designing and running rodent efficacy & toxicity studies.',
    skills: [
      'Animal Handling and Acclimatization',
      'Drug Administration (Oral Gavage and Induction)',
      'Tissue Collection and Necropsy',
      'Histopathological Analysis (Liver Tissue)',
      'Biochemical Assays (Liver Function Tests: ALT, AST, ALP, Bilirubin)',
      'Plant Extract Preparation and Phytochemical Screening',
      'ELISA and Spectrophotometry',
      'In Vivo Study Design',
    ],
  },
  {
    id: 'transcriptomics',
    icon: Activity,
    title: 'Bioinformatics & Transcriptomics',
    blurb: 'Turning sequencing data into clinically relevant gene signatures.',
    skills: [
      'RNA-sequencing (RNA-seq) Data Analysis',
      'Differential Gene Expression Analysis',
      'Gene Set Enrichment Analysis (GSEA)',
      'Survival Analysis (Kaplan-Meier, Cox Regression)',
      'ROC Curve Analysis',
    ],
  },
  {
    id: 'cadd',
    icon: Cpu,
    title: 'Computational Drug Discovery & Structural Biology',
    blurb: 'Structure-based screening, simulation and binding energetics.',
    skills: [
      'Molecular Docking and Virtual Screening',
      'Protein-Ligand Interaction Analysis',
      'Binding Pocket Prediction',
      'Molecular Dynamics (MD) Simulations',
      'Trajectory Analysis (RMSD, RMSF, SASA, Rg)',
      'Principal Component Analysis (PCA)',
      'MM/PBSA Binding Free Energy Calculation',
      'Per-residue Energy Decomposition',
      'PyRx / AutoDock Vina',
      'BIOVIA Discovery Studio',
    ],
  },
  {
    id: 'quantum',
    icon: Atom,
    title: 'Quantum Chemistry & Pharmacokinetics',
    blurb: 'Electronic structure and drug-likeness of candidate molecules.',
    skills: [
      'Density Functional Theory (DFT) Analysis',
      'Frontier Molecular Orbital Analysis (HOMO-LUMO)',
      'Molecular Electrostatic Potential (MEP) Surface Analysis',
      'ADMET Prediction and Drug-likeness Evaluation',
      'In Silico Toxicity Prediction',
    ],
  },
  {
    id: 'programming',
    icon: Code,
    title: 'Programming & Data Visualization',
    blurb: 'Scripting analyses and publication-ready figures.',
    skills: ['Python (Pandas, NumPy, Matplotlib)'],
  },
  {
    id: 'molbio',
    icon: Dna,
    title: 'Molecular Biology',
    blurb: 'Nucleic-acid and protein workflows at the bench.',
    skills: ['PCR', 'Gel Electrophoresis', 'DNA Extraction', 'Western Blotting', 'Cloning (basic)'],
  },
  {
    id: 'clinical',
    icon: TestTubes,
    title: 'Clinical Immunoassays',
    blurb: 'Quantitative assays for diagnostics.',
    skills: [
      'ELISA (Sandwich & Competitive)',
      'Chemiluminescence Immunoassay',
      'Radioluminescence Immunoassay',
      'Diagnostic Reporting',
      'Radioisotope Safety',
    ],
  },
  {
    id: 'quality',
    icon: ShieldCheck,
    title: 'Quality & Compliance',
    blurb: 'Reproducible, safe and auditable lab practice.',
    skills: ['GLP', 'SOP Adherence', 'Lab Safety', 'Quality Control'],
  },
];

/* ---------------- Experience ----------------
 * type: 'clinical' | 'wetlab' | 'drylab'  (used for tab filtering)
 */
export const experienceFilters = [
  { id: 'all', label: 'All' },
  { id: 'wetlab', label: 'In Vivo' },
  { id: 'drylab', label: 'In Silico' },
  { id: 'clinical', label: 'Clinical' },
];

export const experiences = [
  {
    id: 'insilico-cox2',
    type: 'drylab',
    icon: Cpu,
    role: 'In Silico Drug Discovery Study',
    org: 'Gopalganj Science and Technology University (GSTU)',
    period: '2025',
    summary:
      'Structure-based virtual screening of candidate COX-2 inhibitors to prioritise compounds with favourable binding and drug-likeness.',
    points: [
      'Performed molecular docking of ligand libraries against COX-2 using PyRx / AutoDock Vina.',
      'Visualised and interpreted protein–ligand interactions in BIOVIA Discovery Studio.',
      'Ran ADMET prediction to assess pharmacokinetics, drug-likeness and toxicity risk.',
    ],
    tags: ['PyRx', 'AutoDock Vina', 'BIOVIA DS', 'ADMET', 'Published'],
  },
  {
    id: 'invivo-hepato',
    type: 'wetlab',
    icon: Microscope,
    role: 'In Vivo Pharmacology Collaborations',
    org: 'Gopalganj Science and Technology University (GSTU)',
    period: '2023',
    summary:
      'Collaborative hepatoprotective study evaluating a plant extract against drug-induced liver injury, published in Chemistry & Biodiversity.',
    points: [
      'Contributed to a paracetamol-induced hepatotoxicity model in Swiss albino mice.',
      'Supported dosing, tissue collection and biochemical / histological evaluation.',
      'Co-authored the resulting peer-reviewed publication.',
    ],
    tags: ['Swiss Albino Mice', 'Hepatotoxicity', 'Histology', 'Published'],
  },
  {
    id: 'invivo-tudca',
    type: 'wetlab',
    icon: Rat,
    role: 'In Vivo Pharmacology Research',
    org: 'Gopalganj Science and Technology University (GSTU)',
    period: '2024',
    summary:
      'Anti-diabetic and anti-obesogenic evaluation of tauroursodeoxycholic acid (TUDCA) in rat models.',
    points: [
      'Induced diabetes through streptozotocin (STZ) administration and monitored disease progression.',
      'Performed serum isolation and quantified biomarkers via ELISA.',
      'Conducted tissue collection and histological analysis of target organs.',
    ],
    tags: ['TUDCA', 'STZ Model', 'ELISA', 'Histology'],
  },
  {
    id: 'inmas',
    type: 'clinical',
    icon: Hospital,
    role: 'Clinical Laboratory Trainee',
    org: 'Institute of Nuclear Medicine and Allied Sciences (INMAS)',
    period: '2026',
    summary:
      'Clinical training in nuclear-medicine diagnostics with exposure to immunoassay platforms and radiation safety.',
    points: [
      'Performed radioluminescence and chemiluminescence immunoassays on patient samples.',
      'Assisted with diagnostic result interpretation and reporting.',
      'Followed radioisotope handling and radiation-safety protocols.',
    ],
    tags: ['CLIA', 'RIA', 'Diagnostics', 'Radiation Safety'],
  },
];

/* ---------------- Publications ----------------
 * status: 'published' | 'review' | 'preparation'
 */
export const publications = [
  {
    id: 'cbdv-2025',
    status: 'published',
    title:
      'Uncovering the Efficacy of Cinnamomum tamala Leaf Extract Against Paracetamol-Induced Hepatotoxicity in Swiss Albino Mice',
    venue: 'Chemistry & Biodiversity',
    year: '2025',
    doi: '10.1002/cbdv.202500753',
    keywords: ['Hepatoprotection', 'Phytochemistry', 'In Vivo'],
  },
  {
    id: 'insi-2026',
    status: 'published',
    title:
      'Integrated transcriptomic analysis and computational evaluation of flavonoid-based PTGS2 inhibitors for potential therapeutic application in hepatocellular carcinoma',
    venue: 'In Silico Research in Biomedicine',
    year: '2026',
    doi: '10.1016/j.insi.2026.100700',
    keywords: ['Transcriptomics', 'PTGS2 / COX-2', 'Molecular Docking', 'HCC'],
  },
  {
    id: 'zinc-review',
    status: 'preparation',
    title: 'Zinc-Mediated Tissue Regeneration: A Mechanistic Review',
    venue: 'Review article · Lead author',
    keywords: ['Zinc', 'Regeneration', 'Mechanisms'],
  },
];

export const publicationStatus = {
  published: { label: 'Published', tone: 'emerald' },
  review: { label: 'Under Review', tone: 'amber' },
  preparation: { label: 'In Preparation', tone: 'sky' },
};

/* ---------------- Leadership ---------------- */
export const leadership = [
  {
    icon: Mic,
    role: 'President',
    org: 'BMB Debating Club, GSTU',
    detail: 'Led a 20+ member delegation, organising training sessions and inter-university debates.',
    metric: '20+ members',
  },
  {
    icon: GraduationCap,
    role: 'Academic Mentor',
    org: 'STEM Initiative',
    detail: 'Mentored students in science fundamentals, study strategy and university preparation.',
    metric: '40+ students',
  },
  {
    icon: HeartHandshake,
    role: 'Field Organizer',
    org: 'Volunteer for Bangladesh',
    detail: 'Coordinated on-ground community service and youth volunteering activities.',
  },
  {
    icon: Droplet,
    role: 'Logistics Coordinator',
    org: 'Badhon Blood Movement',
    detail: 'Managed donor coordination and logistics for voluntary blood donation drives.',
  },
  {
    icon: Recycle,
    role: 'Instructor',
    org: 'Waste To Resource (W2R)',
    detail:
      'Instructed waste sorting on campus and educated local communities on the importance of recycling and sustainability.',
  },
];
