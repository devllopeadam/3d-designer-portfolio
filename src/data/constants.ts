export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress",
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  AWS = "aws",
  GCP = "gcp",
  VIM = "vim",
  VERCEL = "vercel",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "SolidWorks",
    shortDescription:
      "Manufacturing-grade solid modeling for precise product development.",
    color: "#ef3d3a",
    icon: "https://cdn.simpleicons.org/dassaultsystemes/005386",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "Autodesk Maya",
    shortDescription:
      "Animation, rigging, and polished motion work for product and concept storytelling.",
    color: "#37a5cc",
    icon: "https://cdn.simpleicons.org/autodesk/0696d7",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "AutoCAD",
    shortDescription:
      "Accurate drafting and technical planning for architecture and engineering workflows.",
    color: "#e51050",
    icon: "https://cdn.simpleicons.org/autocad/e51050",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "Fusion 360",
    shortDescription:
      "Integrated product development from concept surfacing to mechanical refinement.",
    color: "#ff6a13",
    icon: "https://cdn.simpleicons.org/autodesk/ff6a13",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "Unity",
    shortDescription:
      "Interactive 3D environments for presentations, demos, and prototyping.",
    color: "#000000",
    icon: "https://cdn.simpleicons.org/unity/000000",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "3D Rendering",
    shortDescription:
      "High-fidelity lighting, materials, and visualization for premium presentations.",
    color: "#6b7280",
    icon: "https://cdn.simpleicons.org/blender/e87d0d",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "3D Animation",
    shortDescription:
      "Motion-driven sequences that communicate function, interaction, and product value.",
    color: "#ffffff",
    icon: "https://cdn.simpleicons.org/adobeaftereffects/9999ff",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Architectural Rendering",
    shortDescription:
      "Atmospheric spaces and presentation-ready interiors with strong composition.",
    color: "#4b5563",
    icon: "https://cdn.simpleicons.org/sketchup/005f9e",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Mechanical Design",
    shortDescription:
      "Engineering-led design thinking aligned with production constraints.",
    color: "#2f855a",
    icon: "https://cdn.simpleicons.org/dassaultsystemes/2f855a",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Product Visualization",
    shortDescription:
      "Marketing-grade product imagery built from accurate geometry and materials.",
    color: "#ffffff",
    icon: "https://cdn.simpleicons.org/keyshot/ffffff",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "CAD Workflow",
    shortDescription:
      "Clean geometry pipelines that stay reliable from concept to documentation.",
    color: "#1d4ed8",
    icon: "https://cdn.simpleicons.org/freecad/1d4ed8",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "Autodesk Suite",
    shortDescription:
      "A broad Autodesk pipeline spanning drafting, modeling, rendering, and visualization.",
    color: "#0f766e",
    icon: "https://cdn.simpleicons.org/autodesk/0f766e",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Architectural Diagrams",
    shortDescription:
      "Diagrammatic thinking that turns plans into clear visual communication.",
    color: "#f97316",
    icon: "https://cdn.simpleicons.org/archicad/f97316",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "Behance",
    shortDescription:
      "Curated project presentation with clear visual storytelling and portfolio polish.",
    color: "#1769ff",
    icon: "https://cdn.simpleicons.org/behance/1769ff",
  },
  [SkillNames.PRETTIER]: {
    id: 15,
    name: "prettier",
    label: "Visual Detailing",
    shortDescription:
      "Refined finishes, material tuning, and composition that raise perceived quality.",
    color: "#f59e0b",
    icon: "https://cdn.simpleicons.org/adobeillustrator/f59e0b",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "Adobe After Effects",
    shortDescription:
      "Motion graphics support for sharper product demos and concept presentations.",
    color: "#8b5cf6",
    icon: "https://cdn.simpleicons.org/adobeaftereffects/8b5cf6",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Manufacturing Visualization",
    shortDescription:
      "Visual assets built to support manufacturing review and stakeholder alignment.",
    color: "#facc15",
    icon: "https://cdn.simpleicons.org/siemens/facc15",
  },
  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "wordpress",
    label: "Design Theory",
    shortDescription:
      "Advanced design thinking applied to spatial, product, and presentation decisions.",
    color: "#2563eb",
    icon: "https://cdn.simpleicons.org/figma/2563eb",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Optimization",
    shortDescription:
      "Meshes, rigs, and scenes tuned for both performance and visual quality.",
    color: "#eab308",
    icon: "https://cdn.simpleicons.org/openscad/eab308",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Production Pipeline",
    shortDescription:
      "Structured end-to-end workflows from model creation to delivery-ready assets.",
    color: "#0284c7",
    icon: "https://cdn.simpleicons.org/autodesk/0284c7",
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: "nginx",
    label: "Presentation Design",
    shortDescription:
      "Clear composition and visual hierarchy that strengthen client-facing results.",
    color: "#059669",
    icon: "https://cdn.simpleicons.org/canva/059669",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "Concept Development",
    shortDescription:
      "Early-stage ideas translated into convincing, implementation-ready visuals.",
    color: "#dc2626",
    icon: "https://cdn.simpleicons.org/adobexd/dc2626",
  },
  [SkillNames.GCP]: {
    id: 25,
    name: "gcp",
    label: "Stanford MDes",
    shortDescription:
      "Graduate-level design education supporting strategic and aesthetic decision-making.",
    color: "#9333ea",
    icon: "https://cdn.simpleicons.org/academia/9333ea",
  },
  [SkillNames.VIM]: {
    id: 23,
    name: "vim",
    label: "Technical Accuracy",
    shortDescription:
      "Design execution grounded in dimensions, tolerances, and engineering logic.",
    color: "#dc2626",
    icon: "https://cdn.simpleicons.org/measure/dc2626",
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "Interactive Prototyping",
    shortDescription:
      "Real-time experiences that help teams review and validate ideas faster.",
    color: "#111827",
    icon: "https://cdn.simpleicons.org/unity/111827",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Jul 2013",
    endDate: "Dec 2025",
    title: "Senior 3D Expert",
    company: "Ursi Tech",
    description: [
      "Led end-to-end 3D design and visualization pipelines across technical and creative client work.",
      "Built complex mechanical models in SolidWorks and Fusion 360 with manufacturing-grade accuracy.",
      "Created architectural diagrams and high-end renderings that translated blueprints into persuasive visual narratives.",
      "Delivered rigging, animation, and real-time Unity assets for demos, storytelling, and digital prototyping.",
    ],
    skills: [
      SkillNames.JS,
      SkillNames.TS,
      SkillNames.HTML,
      SkillNames.CSS,
      SkillNames.REACT,
      SkillNames.NEXTJS,
      SkillNames.TAILWIND,
      SkillNames.NPM,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};