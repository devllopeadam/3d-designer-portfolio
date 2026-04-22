import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import {
  SiAdobeaftereffects,
  SiArchicad,
  SiAutocad,
  SiAutodesk,
  SiAutodeskmaya,
  SiBehance,
  SiDassaultsystemes,
  SiUnity,
} from "react-icons/si";

const ProjectsLinks = ({ live }: { live: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
          View Case Study
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </button>
      </Link>
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const toolBadge = (title: string, icon: ReactNode): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon,
});

const textBadge = (title: string, shortLabel: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: (
    <span className="text-[9px] md:text-[10px] font-semibold tracking-wide uppercase">
      {shortLabel}
    </span>
  ),
});

const PROJECT_SKILLS = {
  solidworks: toolBadge("SolidWorks", <SiDassaultsystemes />),
  maya: toolBadge("Autodesk Maya", <SiAutodeskmaya />),
  autocad: toolBadge("AutoCAD", <SiAutocad />),
  autodesk: toolBadge("Autodesk Suite", <SiAutodesk />),
  unity: toolBadge("Unity", <SiUnity />),
  afterEffects: toolBadge("After Effects", <SiAdobeaftereffects />),
  behance: toolBadge("Behance", <SiBehance />),
  architecture: toolBadge("Architecture", <SiArchicad />),
  product: textBadge("Product Visualization", "PV"),
  rendering: textBadge("Rendering", "RND"),
  concept: textBadge("Concept Design", "CD"),
  interior: textBadge("Interior", "INT"),
  mechanical: textBadge("Mechanical", "ME"),
  prototype: textBadge("Prototype", "PR"),
  presentation: toolBadge("Presentation", <AceTernityLogo />),
  cad: textBadge("CAD", "CAD"),
};

const toProjectImages = (projectId: string, fileNames: string[]) =>
  fileNames.map(
    (fileName) => `/assets/projects-screenshots/${projectId}/${fileName}`
  );

const ProjectSummary = ({
  intro,
  highlights,
  live,
  images = [],
}: {
  intro: string;
  highlights: string[];
  live: string;
  images?: string[];
}) => {
  return (
    <div>
      <TypographyP className="font-mono text-xl md:text-2xl text-center mb-4">
        Professional 3D case study focused on clarity, material quality, and presentation impact.
      </TypographyP>
      <TypographyP className="font-mono mb-4">{intro}</TypographyP>
      <ProjectsLinks live={live} />
      <div className="space-y-3">
        {highlights.map((highlight) => (
          <TypographyP key={highlight} className="font-mono">
            {highlight}
          </TypographyP>
        ))}
      </div>
      {images.length > 0 && (
        <div className="mt-8">
          <SlideShow images={images} />
        </div>
      )}
    </div>
  );
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "earbud",
    category: "Product Visualization",
    title: "EarBud",
    src: "/assets/projects-screenshots/earbud/earbud1.gif",
    screenshots: [
      "earbud1.gif",
      "earbud3.gif",
      "earbud4.gif",
      "earbud5.gif",
      "earbud6.gif",
      "earbud7.gif",
      "earbud8.gif",
      "earbud9.gif",
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.solidworks,
        PROJECT_SKILLS.autodesk,
        PROJECT_SKILLS.product,
      ],
      backend: [
        PROJECT_SKILLS.rendering,
        PROJECT_SKILLS.concept,
        PROJECT_SKILLS.behance,
      ],
    },
    live: "https://www.behance.net/gallery/247958401/EarBud",
    content: (
      <ProjectSummary
        live="https://www.behance.net/gallery/247958401/EarBud"
        intro="A consumer product visualization centered on clean industrial form, refined materials, and presentation-ready realism for a compact audio device."
        highlights={[
          "Focused on believable product proportions and high-quality material definition for close-up presentation.",
          "Built to communicate both premium finish and manufacturing-aware geometry.",
          "Structured as a polished showcase asset suitable for portfolio, pitch, and product storytelling use.",
        ]}
        images={toProjectImages("earbud", [
          "earbud1.gif",
          "earbud3.gif",
          "earbud4.gif",
          "earbud5.gif",
          "earbud6.gif",
          "earbud7.gif",
          "earbud8.gif",
          "earbud9.gif",
        ])}
      />
    ),
  },
  {
    id: "g-racing-wheel",
    category: "Product Visualization",
    title: "G Racing Wheel",
    src: "/assets/projects-screenshots/g-racing-wheel/g-racing1.gif",
    screenshots: [
      "g-racing1.gif",
      "g-racing2.gif",
      "g-racing3.webp",
      "g-racing4.webp",
      "g-racing5.webp",
      "g-racing6.webp",
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.solidworks,
        PROJECT_SKILLS.autodesk,
        PROJECT_SKILLS.product,
      ],
      backend: [
        PROJECT_SKILLS.rendering,
        PROJECT_SKILLS.mechanical,
        PROJECT_SKILLS.behance,
      ],
    },
    live: "https://www.behance.net/gallery/247958221/G-Racing",
    content: (
      <ProjectSummary
        live="https://www.behance.net/gallery/247958221/G-Racing"
        intro="A hardware-focused racing wheel concept presented with strong mechanical character and a high-end commercial rendering approach."
        highlights={[
          "Balanced engineering cues with a sleek consumer-facing visual finish.",
          "Used precise surfacing and detailing to reinforce realism in the control assembly.",
          "Prepared as a strong visual asset for product showcase and concept validation.",
        ]}
        images={toProjectImages("g-racing-wheel", [
          "g-racing1.gif",
          "g-racing2.gif",
          "g-racing3.webp",
          "g-racing4.webp",
          "g-racing5.webp",
          "g-racing6.webp",
        ])}
      />
    ),
  },
  {
    id: "six-axis-robotic",
    category: "Mechanical Design",
    title: "6 Axis Robotic",
    src: "/assets/projects-screenshots/six-axis-robotic/six-axis-robotic1.gif",
    screenshots: [
      "six-axis-robotic1.gif",
      "six-axis-robotic2.webp",
      "six-axis-robotic3.webp",
      "six-axis-robotic4.webp",
      "six-axis-robotic5.webp",
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.solidworks,
        PROJECT_SKILLS.autocad,
        PROJECT_SKILLS.cad,
      ],
      backend: [
        PROJECT_SKILLS.mechanical,
        PROJECT_SKILLS.prototype,
        PROJECT_SKILLS.behance,
      ],
    },
    live: "https://www.behance.net/gallery/247958197/6-Axis-Robotic",
    content: (
      <ProjectSummary
        live="https://www.behance.net/gallery/247958197/6-Axis-Robotic"
        intro="An industrial robotics study developed to communicate motion logic, engineered assembly, and manufacturing-oriented structure."
        highlights={[
          "Modeling emphasized technical credibility and component hierarchy.",
          "The presentation supports both engineering review and visual storytelling needs.",
          "Designed to turn a complex robotic system into a clear, implementation-ready visual asset.",
        ]}
        images={toProjectImages("six-axis-robotic", [
          "six-axis-robotic1.gif",
          "six-axis-robotic2.webp",
          "six-axis-robotic3.webp",
          "six-axis-robotic4.webp",
          "six-axis-robotic5.webp",
        ])}
      />
    ),
  },
  {
    id: "zippo",
    category: "Product Rendering",
    title: "Zippo",
    src: "/assets/projects-screenshots/zippo/zippo01.webp",
    screenshots: [
      "zippo01.webp",
      "zippo02.webp",
      "zippo03.webp",
      "zippo04.webp",
      "zippo05.webp",
      "zippo06.webp",
      "zippo07.webp",
      "zippo08.webp",
      "zippo09.webp",
      "zippo10.webp",
      "zippo11.webp",
      "zippo12.webp",
      "zippo13.webp",
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.solidworks,
        PROJECT_SKILLS.autodesk,
        PROJECT_SKILLS.product,
      ],
      backend: [
        PROJECT_SKILLS.rendering,
        PROJECT_SKILLS.presentation,
        PROJECT_SKILLS.behance,
      ],
    },
    live: "https://www.behance.net/gallery/247957941/Zippo",
    content: (
      <ProjectSummary
        live="https://www.behance.net/gallery/247957941/Zippo"
        intro="A detailed lighter study highlighting reflective surfaces, mechanical form, and premium presentation aesthetics."
        highlights={[
          "Focused on material realism and visual clarity across a compact object.",
          "Presented with a clean, commercial look suited to product-led storytelling.",
          "Built to show precision in both geometry and rendered finish.",
        ]}
        images={toProjectImages("zippo", [
          "zippo01.webp",
          "zippo02.webp",
          "zippo03.webp",
          "zippo04.webp",
          "zippo05.webp",
          "zippo06.webp",
          "zippo07.webp",
          "zippo08.webp",
          "zippo09.webp",
          "zippo10.webp",
          "zippo11.webp",
          "zippo12.webp",
          "zippo13.webp",
        ])}
      />
    ),
  },
  {
    id: "gear-pump",
    category: "Mechanical Visualization",
    title: "Gear Pump",
    src: "/assets/projects-screenshots/gear-pump/gear-pump1.gif",
    screenshots: [
      "gear-pump1.gif",
      "gear-pump2.webp",
      "gear-pump3.webp",
      "gear-pump4.webp",
      "gear-pump5.webp",
      "gear-pump6.webp",
      "gear-pump7.webp",
      "gear-pump8.webp",
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.solidworks,
        PROJECT_SKILLS.autocad,
        PROJECT_SKILLS.cad,
      ],
      backend: [
        PROJECT_SKILLS.mechanical,
        PROJECT_SKILLS.rendering,
        PROJECT_SKILLS.behance,
      ],
    },
    live: "https://www.behance.net/gallery/247957829/Gear-Pump",
    content: (
      <ProjectSummary
        live="https://www.behance.net/gallery/247957829/Gear-Pump"
        intro="A technical product visualization focused on clear part definition, engineering readability, and presentation-ready mechanical detail."
        highlights={[
          "Built to bridge technical communication and portfolio-quality visual polish.",
          "Emphasized functional understanding through clean component structure.",
          "Useful for stakeholder review, technical presentation, and concept communication.",
        ]}
        images={toProjectImages("gear-pump", [
          "gear-pump1.gif",
          "gear-pump2.webp",
          "gear-pump3.webp",
          "gear-pump4.webp",
          "gear-pump5.webp",
          "gear-pump6.webp",
          "gear-pump7.webp",
          "gear-pump8.webp",
        ])}
      />
    ),
  },
  {
    id: "wristwatch",
    category: "Luxury Product Visualization",
    title: "WristWatch",
    src: "/assets/projects-screenshots/wristwatch/wristwatch1.gif",
    screenshots: [
      "wristwatch1.gif",
      "wristwatch2.gif",
      "wristwatch3.gif",
      "wristwatch4.gif",
      "wristwatch5.gif",
      "wristwatch6.gif",
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.solidworks,
        PROJECT_SKILLS.autodesk,
        PROJECT_SKILLS.product,
      ],
      backend: [
        PROJECT_SKILLS.rendering,
        PROJECT_SKILLS.concept,
        PROJECT_SKILLS.behance,
      ],
    },
    live: "https://www.behance.net/gallery/247957503/Wristwatch",
    content: (
      <ProjectSummary
        live="https://www.behance.net/gallery/247957503/Wristwatch"
        intro="A watch visualization designed to showcase refinement, close-range detailing, and elevated product presentation."
        highlights={[
          "Strong attention to finish, material balance, and premium object composition.",
          "Built for visually rich storytelling around form and craftsmanship.",
          "Executed as a clean portfolio piece with luxury-oriented rendering cues.",
        ]}
        images={toProjectImages("wristwatch", [
          "wristwatch1.gif",
          "wristwatch2.gif",
          "wristwatch3.gif",
          "wristwatch4.gif",
          "wristwatch5.gif",
          "wristwatch6.gif",
        ])}
      />
    ),
  },
  {
    id: "home-design",
    category: "Architectural Visualization",
    title: "Home Design",
    src: "/assets/projects-screenshots/home-design/home-design1.webp",
    screenshots: [
      "home-design1.webp",
      "home-design2.webp",
      "home-design3.webp",
      "home-design4.webp",
      "home-design5.webp",
      "home-design6.webp",
      "home-design7.webp",
      "home-design8.webp",
      "home-design9.webp",
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.autocad,
        PROJECT_SKILLS.architecture,
        PROJECT_SKILLS.autodesk,
      ],
      backend: [
        PROJECT_SKILLS.rendering,
        PROJECT_SKILLS.interior,
        PROJECT_SKILLS.behance,
      ],
    },
    live: "https://www.behance.net/gallery/247958015/Home-Design",
    content: (
      <ProjectSummary
        live="https://www.behance.net/gallery/247958015/Home-Design"
        intro="An architectural design presentation translating spatial planning into polished, client-facing visual communication."
        highlights={[
          "Focused on readable composition, atmosphere, and presentation-ready clarity.",
          "Supports design review by making form, layout, and mood immediately understandable.",
          "Combines technical structure with refined rendering output for stronger storytelling.",
        ]}
        images={toProjectImages("home-design", [
          "home-design1.webp",
          "home-design2.webp",
          "home-design3.webp",
          "home-design4.webp",
          "home-design5.webp",
          "home-design6.webp",
          "home-design7.webp",
          "home-design8.webp",
          "home-design9.webp",
        ])}
      />
    ),
  },
  {
    id: "rooms-and-hall",
    category: "Interior Visualization",
    title: "Rooms and Hall",
    src: "/assets/projects-screenshots/rooms-and-hall/rooms-and-hall1.webp",
    screenshots: [
      "rooms-and-hall1.webp",
      "rooms-and-hall2.webp",
      "rooms-and-hall3.webp",
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.autocad,
        PROJECT_SKILLS.architecture,
        PROJECT_SKILLS.autodesk,
      ],
      backend: [
        PROJECT_SKILLS.rendering,
        PROJECT_SKILLS.interior,
        PROJECT_SKILLS.behance,
      ],
    },
    live: "https://www.behance.net/gallery/247958061/Rooms-and-Hall",
    content: (
      <ProjectSummary
        live="https://www.behance.net/gallery/247958061/Rooms-and-Hall"
        intro="A residential interior showcase built around spatial flow, material mood, and immersive room presentation."
        highlights={[
          "Developed to communicate interior atmosphere with stronger depth and lighting control.",
          "Balanced architecture, furnishing context, and presentation polish.",
          "Prepared as a clean visual narrative for clients and design stakeholders.",
        ]}
        images={toProjectImages("rooms-and-hall", [
          "rooms-and-hall1.webp",
          "rooms-and-hall2.webp",
          "rooms-and-hall3.webp",
        ])}
      />
    ),
  },
  {
    id: "rooms-interior",
    category: "Interior Rendering",
    title: "Rooms Interior",
    src: "/assets/projects-screenshots/rooms-interior/rooms-interior1.webp",
    screenshots: [
      "rooms-interior1.webp",
      "rooms-interior2.webp",
      "rooms-interior3.webp",
      "rooms-interior4.webp",
      "rooms-interior5.webp",
      "rooms-interior6.webp",
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.autocad,
        PROJECT_SKILLS.architecture,
        PROJECT_SKILLS.autodesk,
      ],
      backend: [
        PROJECT_SKILLS.rendering,
        PROJECT_SKILLS.interior,
        PROJECT_SKILLS.behance,
      ],
    },
    live: "https://www.behance.net/gallery/247958075/Rooms-Interior",
    content: (
      <ProjectSummary
        live="https://www.behance.net/gallery/247958075/Rooms-Interior"
        intro="A focused interior rendering study emphasizing material realism, proportion, and inviting residential atmosphere."
        highlights={[
          "Created to make interior concepts feel presentation-ready and commercially persuasive.",
          "Attention centered on mood, finish, and balanced composition across the scene.",
          "Designed as a polished visualization asset for portfolio and client-facing review.",
        ]}
        images={toProjectImages("rooms-interior", [
          "rooms-interior1.webp",
          "rooms-interior2.webp",
          "rooms-interior3.webp",
          "rooms-interior4.webp",
          "rooms-interior5.webp",
          "rooms-interior6.webp",
        ])}
      />
    ),
  },
];

export default projects;