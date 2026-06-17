export const company = {
  name: "KEMMAX",
  legalName: "Clean Room Projects (OPC) Pvt Ltd",
  tagline: "Design • Engineering • Commissioning • HVAC",
  phone: "+91 9042676645",
  phoneRaw: "919042676645",
  email: "Kemmaxcpl@gmail.com",
  address:
    "Plot No.16, Kuppusamy Nagar, Thirumazhisai Poonamalle, Chennai - 600 124",
  whatsapp: "https://wa.me/919042676645",
  mapEmbed:
    "https://maps.google.com/maps?q=Plot+No.16+Kuppusamy+Nagar+Thirumazhisai+Poonamalle+Chennai&output=embed",
  yearEstablished: "2010",
  yearsExperience: "15+",
  projectsCompleted: "100+",
  industriesServed: "5+",
};

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Contact", path: "/contact" },
];

export const hero = {
  headline: "Your Vision. Our Clean Room Engineering.",
  subheadline:
    "KEMMAX — End-to-end design, engineering, commissioning & HVAC for controlled environments.",
  cta: "Get Started",
  stats: [
    { value: "ISO", label: "Aligned Standards" },
    { value: "100+", label: "Projects Delivered" },
    { value: "24/7", label: "Technical Support" },
  ],
  backgroundImage:
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80",
};

export const services = [
  {
    title: "Design",
    subtitle: "Concept to Blueprint",
    description:
      "Comprehensive clean room layout design aligned with ISO and GMP standards for optimal workflow and contamination control.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
    path: "/about",
  },
  {
    title: "Engineering",
    subtitle: "Precision Systems",
    description:
      "Advanced HVAC, filtration, and pressure cascade engineering for pharmaceutical, semiconductor, and healthcare facilities.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
    path: "/about",
  },
  {
    title: "Commissioning",
    subtitle: "Validation Ready",
    description:
      "Full IQ/OQ/PQ commissioning and performance qualification to ensure your clean room meets regulatory requirements.",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9db0281ae?w=600&q=80",
    path: "/about",
  },
  {
    title: "HVAC",
    subtitle: "Climate Control",
    description:
      "Specialized air handling systems with HEPA filtration, temperature control, and humidity management for critical environments.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
    path: "/products",
  },
];

export const companyIntro = {
  title: "Engineering Controlled Environments",
  description:
    "KEMMAX is a Chennai-based clean room specialist delivering turnkey solutions for industries that demand the highest standards of environmental control. From initial concept through design, engineering, and commissioning, we partner with you to create spaces where precision matters most.",
  highlights: [
    `${company.yearsExperience} years of industry experience`,
    "Turnkey clean room solutions",
    "ISO & GMP compliant designs",
    "Pan-India project delivery",
  ],
};

export const industries = [
  {
    name: "Pharmaceutical",
    description:
      "GMP-compliant clean rooms for drug manufacturing, sterile processing, and quality control laboratories.",
    icon: "pill",
    image:
      "https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&q=80",
  },
  {
    name: "Semiconductor",
    description:
      "Ultra-clean environments with precise particle control for wafer fabrication and microelectronics assembly.",
    icon: "cpu",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
  },
  {
    name: "Automotive",
    description:
      "Controlled environments for precision component manufacturing, painting booths, and quality inspection areas.",
    icon: "car",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80",
  },
  {
    name: "Healthcare",
    description:
      "Sterile processing areas, isolation rooms, and specialized medical device manufacturing facilities.",
    icon: "heart-pulse",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80",
  },
  {
    name: "Operation Theatre",
    description:
      "Hospital-grade OT suites with laminar airflow, HEPA filtration, and infection control systems.",
    icon: "stethoscope",
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80",
  },
];

export const featuredProducts = [
  {
    id: "modular-panels",
    name: "Modular Clean Room Panels",
    description:
      "Prefabricated sandwich panels with seamless joints, antimicrobial coatings, and integrated cable management for rapid deployment.",
    category: "Panels",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd87a?w=600&q=80",
  },
  {
    id: "hepa-filtration",
    name: "HEPA Filtration Systems",
    description:
      "High-efficiency particulate air filtration units achieving 99.97% efficiency at 0.3 microns for critical clean room zones.",
    category: "Filtration",
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80",
  },
  {
    id: "ahu-systems",
    name: "HVAC Air Handling Units",
    description:
      "Custom-engineered AHU systems with precise temperature, humidity, and pressure control for validated environments.",
    category: "HVAC",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
  },
];

export const allProducts = [
  ...featuredProducts,
  {
    id: "clean-room-doors",
    name: "Clean Room Doors",
    description:
      "Hermetically sealed doors with interlocking systems, vision panels, and automatic sliding mechanisms for contamination control.",
    category: "Doors",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  },
  {
    id: "pass-box",
    name: "Pass Box Systems",
    description:
      "Static and dynamic pass boxes with UV sterilization and interlock systems for safe material transfer between zones.",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80",
  },
  {
    id: "monitoring-system",
    name: "Environmental Monitoring",
    description:
      "Real-time particle counters, differential pressure monitors, and temperature/humidity logging for continuous compliance.",
    category: "Monitoring",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    id: "validation-services",
    name: "Validation Services",
    description:
      "Complete IQ/OQ/PQ documentation, airflow visualization, and recovery testing per ISO 14644 and EU GMP guidelines.",
    category: "Validation",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9db0281ae?w=600&q=80",
  },
  {
    id: "laminar-flow",
    name: "Laminar Flow Units",
    description:
      "Vertical and horizontal laminar airflow hoods for sterile work zones with integrated HEPA filtration and lighting.",
    category: "Filtration",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
  },
];

export const productCategories = [
  "All",
  "Panels",
  "HVAC",
  "Filtration",
  "Doors",
  "Monitoring",
  "Validation",
  "Accessories",
];

export const whyChooseUs = [
  {
    title: "Quality Standards",
    description:
      "Every project adheres to ISO 14644, EU GMP, and WHO guidelines with documented quality assurance processes.",
    icon: "shield-check",
    highlighted: true,
  },
  {
    title: "Industry Expertise",
    description:
      "Deep domain knowledge across pharmaceutical, semiconductor, healthcare, and automotive sectors.",
    icon: "award",
    highlighted: false,
  },
  {
    title: "Project Experience",
    description:
      "100+ successful clean room installations delivered on time and within budget across India.",
    icon: "building-2",
    highlighted: false,
  },
  {
    title: "Technical Capability",
    description:
      "In-house engineering team with expertise in HVAC design, CFD analysis, and validation protocols.",
    icon: "wrench",
    highlighted: false,
  },
  {
    title: "Customer Commitment",
    description:
      "Dedicated project managers and 24/7 post-commissioning support for long-term partnership.",
    icon: "users",
    highlighted: false,
  },
];

export const cta = {
  headline: "Let's Build Something Great Together",
  message:
    "Contact us today to discuss your clean room requirements.",
  button: "Contact Us",
  image:
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
};

export const about = {
  overview: [
    "Clean Room Projects (OPC) Pvt Ltd, operating under the brand KEMMAX, is a leading clean room engineering company based in Chennai, India. We specialize in the design, engineering, commissioning, and HVAC solutions for controlled environments across diverse industries.",
    "With over 15 years of experience, our team has delivered turnkey clean room projects for pharmaceutical manufacturers, semiconductor fabs, automotive plants, healthcare facilities, and hospital operation theatres. We combine technical excellence with a deep understanding of regulatory requirements to deliver spaces that meet the most stringent contamination control standards.",
    "From initial feasibility studies and conceptual design through detailed engineering, construction supervision, and performance qualification, KEMMAX provides end-to-end project management. Our commitment to quality, innovation, and customer satisfaction has made us a trusted partner for organizations that cannot compromise on environmental control.",
  ],
  vision:
    "To be India's most trusted clean room engineering partner, setting the benchmark for quality, innovation, and reliability in controlled environment solutions.",
  mission:
    "Delivering precision-controlled environments through innovative design, uncompromising quality, and collaborative partnerships that enable our clients to achieve their operational and regulatory goals.",
  values: [
    {
      title: "Integrity",
      description:
        "Transparent processes and honest communication in every client engagement.",
      icon: "scale",
    },
    {
      title: "Precision",
      description:
        "Meticulous attention to detail in design, engineering, and execution.",
      icon: "crosshair",
    },
    {
      title: "Innovation",
      description:
        "Continuous adoption of advanced technologies and best practices.",
      icon: "lightbulb",
    },
    {
      title: "Safety",
      description:
        "Uncompromising commitment to workplace safety and environmental compliance.",
      icon: "hard-hat",
    },
    {
      title: "Partnership",
      description:
        "Building long-term relationships through reliable delivery and support.",
      icon: "handshake",
    },
  ],
  stats: [
    { value: company.yearEstablished, label: "Year Established" },
    { value: company.projectsCompleted, label: "Projects Completed" },
    { value: company.industriesServed, label: "Industries Served" },
    { value: company.yearsExperience, label: "Years Experience" },
  ],
};

export const socialLinks = [
  { platform: "LinkedIn", url: "#", icon: "linkedin" },
  { platform: "Facebook", url: "#", icon: "facebook" },
  { platform: "Instagram", url: "#", icon: "instagram" },
];

export const contactForm = {
  title: "Send Us a Message",
  subtitle:
    "Fill out the form below and our team will get back to you within 24 hours.",
  productOptions: allProducts.map((p) => p.name),
};
