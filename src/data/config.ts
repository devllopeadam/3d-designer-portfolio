const publicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

const config = {
  title: "Adam Barwick | 3D Expert Portfolio",
  profileTitle:
    "3D Expert | 3D Design | 3D Modeling | 3D Rendering | 3D Animation",
  description: {
    long:
      "Explore the portfolio of Adam Barwick, a 3D expert focused on modeling, rendering, animation, architectural visualization, and manufacturing-ready design work across SolidWorks, Autodesk tools, and Unity.",
    short:
      "Professional 3D portfolio featuring product visualization, mechanical design, architectural rendering, and animation work by Adam Barwick.",
  },
  keywords: [
    "Adam Barwick",
    "3D portfolio",
    "3D design",
    "3D modeling",
    "3D rendering",
    "3D animation",
    "SolidWorks",
    "Unity",
    "Autodesk Maya",
    "Fusion 360",
    "AutoCAD",
    "architectural visualization",
    "mechanical design",
    "product rendering",
  ],
  author: "Adam Barwick",
  email: "",
  site: publicSiteUrl || "https://www.behance.net/3dexp",
  featuredLink: {
    label: "Behance Profile",
    href: "https://www.behance.net/3dexp",
  },
  githubUsername: "",
  githubRepo: "",
  get ogImg() {
    return publicSiteUrl
      ? `${publicSiteUrl}/assets/seo/og-image.png`
      : "/assets/seo/og-image.png";
  },
  social: {
    behance: "https://www.behance.net/3dexp",
    linkedin: "",
    github: "",
    email: "",
  },
};

export { config };