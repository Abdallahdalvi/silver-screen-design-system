/**
 * Single source of truth for Ubiqedge site content.
 * All copy, metrics, contact details and links are taken verbatim from the live
 * ubiqedge.com site (scraped 2026-10-26). Do not invent stats, customers or claims.
 */
import { assets } from "@/assets";

export const company = {
  name: "Ubiqedge",
  legalName: "Ubiqedge Technology Private Limited",
  address: "107, 109, A-Wing, Solaris 1, Saki Vihar Road, Powai, Mumbai, Maharashtra 400072",
  mapsUrl: "https://maps.app.goo.gl/7nfyxx117QDasd3o7",
  hours: "Mon - Sat, 9:30 - 18:30",
  sales: { email: "sales@ubiqedge.com", phone: "(+91) 9004181827" },
  support: { email: "support@ubiqedge.com", phone: "(+91) 9136767226" },
  whatsapp: "(+91) 9987229246",
  careers: { email: "careers@ubiqedge.com" },
  site: "https://www.ubiqedge.com",
};

export const nav = {
  primary: [
    {
      label: "Products",
      items: [
        { label: "KLEON — IoT Hardware Platform", to: "/kleon", description: "Rugged gateways, dongles, sensors & edge devices" },
        { label: "SAMASTH — Cloud Platform", to: "/samasth", description: "Monitoring, control & analytics in the cloud" },
      ],
    },
    {
      label: "Solutions",
      items: [
        { label: "Smart Water Management", to: "/solutions/water-management" },
        { label: "Solar PV Remote Monitoring & Control", to: "/solutions/energy-management" },
        { label: "Smart Concrete Management", to: "/solutions/concrete-management" },
        { label: "Air Quality Monitoring", to: "/solutions/environmental-monitoring" },
      ],
    },
    {
      label: "Resources",
      items: [
        { label: "Blog", to: "/blogs" },
        { label: "Whitepaper", to: "/whitepaper" },
        { label: "Careers", to: "/career" },
      ],
    },
    { label: "About Us", to: "/about-us" },
  ],
  cta: { label: "Talk to Our Experts", to: "/contact-us" },
};

export const hero = {
  eyebrow: "Industrial AIoT Platform",
  headline: "Full-Stack AIoT Platform",
  headlineGradient: "For Smart Infrastructure",
  sub: "At Ubiqedge, we help modernize and manage your IT and edge infrastructure, solving smart connectivity and system challenges with AI- and IoT-driven solutions.",
  ctaPrimary: { label: "Book a Demo", to: "/contact-us" },
  ctaSecondary: { label: "Explore Solutions", href: "#solutions" },
  image: assets.heroGenerated,
};

export const intro = {
  label: "Who We Are",
  text: "Ubiqedge is the trusted partner for forward-thinking enterprises. We help businesses grow through AI- and IoT-powered solutions, smart product design, custom dashboard development.",
  trustedBy: "Trusted by leading enterprises, EPCs, and infrastructure teams across India.",
};

export const metrics = [
  { value: 15, suffix: "K+", label: "Devices Deployed across India" },
  { value: 6, suffix: "K+", label: "Active Users monitoring operations daily" },
  { value: 1, suffix: "M+", label: "m³ Water Conserved through IoT-enabled monitoring" },
];

export const customers = {
  heading: "More than 5000 Customers trust and choose Ubiqedge",
  logos: [
    { name: "Adani", img: assets.adani },
    { name: "Ansys", img: assets.ansys },
    { name: "Vodafone Idea", img: assets.dl1 },
    { name: "IndianOil", img: assets.dl2 },
    { name: "HCL", img: assets.hcl },
    { name: "Jio-BP", img: assets.jiobp },
    { name: "KEC International", img: assets.kec },
    { name: "L&T", img: assets.lt },
    { name: "Reliance Industries", img: assets.reliance },
    { name: "Schneider Electric", img: assets.schneider },
    { name: "Ultratech", img: assets.ultratech },
    { name: "UPC", img: assets.upc },
  ],
};

export const kleon = {
  name: "KLEON",
  tagline: "IoT Hardware Platform",
  description:
    "KLEON is Ubiqedge's industrial IoT hardware platform comprising rugged gateways, dongles, sensors, and edge devices built for continuous real-time data capture from field assets. Designed for harsh operating environments, KLEON enables secure connectivity and reliable performance across water networks, solar systems, air quality monitoring, construction sites, and industrial infrastructure.",
  features: [
    "Multi-network compatibility: 4G, Wi-Fi, LAN, LoRa",
    "Supports diverse sensors and edge computing",
    "Highly configurable and remotely manageable",
    "Durability and reliability in harsh environments",
  ],
  url: `${company.site}/kleon/`,
  image: assets.kleonV3,
};

export const kleonDevices = [
  {
    name: "KLEON 4G Dongle",
    blurb: "MNRE-Compliant Solar Inverter Communication Gateway",
    img: assets.kleonDongle,
    url: `${company.site}/kleon/Kleon-dongle/`,
  },
  {
    name: "KLEON Air",
    blurb: "Plug-and-play outdoor air quality monitoring device",
    img: assets.kleonAir,
    url: `${company.site}/kleon/KLEON-Air/`,
  },
  {
    name: "KLEON V3",
    blurb: "Powerful industrial IoT gateway for demanding applications",
    img: assets.kleonV3,
    url: `${company.site}/kleon/KLEON-V3/`,
  },
  {
    name: "KLEON V2",
    blurb: "Industry 4.0 gateway with LAN connectivity",
    img: assets.kleonV2,
    url: `${company.site}/kleon/KLEON-V2/`,
  },
  {
    name: "KLEON V1",
    blurb: "Robust Industry 4.0 IoT gateway",
    img: assets.kleonV1,
    url: `${company.site}/kleon/KLEON-V1/`,
  },
  {
    name: "KLEON B1",
    blurb: "Battery-powered 4G-LTE telemetry device",
    img: assets.kleonB1,
    url: `${company.site}/kleon/KLEON-B1/`,
  },
];

export const samasth = {
  name: "SAMASTH",
  tagline: "Cloud Platform",
  description:
    "SAMASTH is Ubiqedge's centralized cloud platform for monitoring, control, and analytics that transforms raw field data into live dashboards, alerts, reports, and actionable insights. It empowers teams to monitor assets, remotely control systems, optimize performance, ensure compliance, and make faster decisions through a secure and scalable interface.",
  features: [
    "Hierarchical Access Management",
    "Dynamic Data Dashboards",
    "Multi-Tenant Architecture",
    "Custom Branding",
    "Real-Time Monitoring",
    "Advanced Analytics",
    "Automated Alerts",
    "Automated Reporting",
    "Secure & Scalable",
  ],
  howItWorks: [
    { step: "01", title: "Data Collection", text: "KLEON devices capture real-time readings from assets and sensors in the field." },
    { step: "02", title: "Data Transmission", text: "Encrypted, reliable transfer of data over secure channels into SAMASTH." },
    { step: "03", title: "Processing & Analysis", text: "Edge intelligence and cloud analytics turn raw data into meaningful signals." },
    { step: "04", title: "Visualization & Alerts", text: "Live dashboards, automated alerts, reports, and remote control." },
  ],
  image: assets.samasthDashboard,
  image2: assets.samasth2,
  url: `${company.site}/samasth/`,
};

export const solutions = [
  {
    id: "water",
    index: "01",
    title: "Smart Water Management",
    blurb:
      "Optimize water networks end to end — flow, pressure, level and quality monitoring with leak detection, and conservation across the distribution chain.",
    img: assets.solutionWater,
    to: "/solutions/water-management",
    bullets: ["Flow & pressure monitoring", "Leak detection & NRW reduction", "Automated water audits", "Real-time dashboards & alerts"],
  },
  {
    id: "solar",
    index: "02",
    title: "Solar PV Remote Monitoring & Control",
    blurb:
      "Monitor and control solar PV plants remotely with KLEON's MNRE-compliant communication gateways and live performance analytics on SAMASTH.",
    img: assets.solutionSolar,
    to: "/solutions/energy-management",
    bullets: ["Plant-level performance monitoring", "Remote inverter control", "MNRE-compliant data logging", "Performance ratio tracking"],
  },
  {
    id: "concrete",
    index: "03",
    title: "Smart Concrete Management",
    blurb:
      "Bring transparency to concrete operations — from batching to delivery and placement — with continuous monitoring of mixers, schedules and quality.",
    img: assets.solutionConcrete,
    to: "/solutions/concrete-management",
    bullets: ["Mixer & transit tracking", "Batch quality visibility", "Utilization analytics", "Operational alerts"],
  },
  {
    id: "air",
    index: "04",
    title: "Air Quality Monitoring",
    blurb:
      "Real-time ambient air quality data with plug-and-play KLEON Air devices, turning environmental readings into actionable insights and compliance reports.",
    img: assets.solutionAir,
    to: "/solutions/environmental-monitoring",
    bullets: ["Real-time air quality data", "Multi-site environmental dashboards", "Automated compliance reports", "Alerts on threshold breaches"],
  },
];

export const process = {
  heading: "How the Ubiqedge Platform Works",
  sub: "From the field to the cloud — a continuous, secure data journey.",
  stages: [
    {
      step: "Stage 01",
      title: "Data Collection with KLEON",
      text: "Rugged field devices capture real-time data from industrial and remote assets — supporting multiple connectivity options and diverse sensors, with edge computing built for harsh conditions.",
      img: assets.processCollection,
    },
    {
      step: "Stage 02",
      title: "Secure Data Transmission",
      text: "Data moves over encrypted, reliable channels into the cloud — with secure device authentication, timestamped audit logs, and machine-to-machine SIM connectivity for uninterrupted transfer.",
      img: assets.processTransmission,
    },
    {
      step: "Stage 03",
      title: "Insights on SAMASTH",
      text: "Custom dashboards, real-time monitoring, predictive alerts, and automated reporting give teams the visibility they need to act fast and operate efficiently.",
      img: assets.processInsights,
    },
  ],
};

export const why = {
  heading: "Why Ubiqedge?",
  text: "Ubiqedge is the trusted partner for forward-thinking enterprises. We help businesses grow through AI- and IoT-powered solutions, smart product design, and custom dashboard development — with hardware and software engineered together.",
  points: [
    { title: "Hardware + Software, One Stack", text: "KLEON devices and the SAMASTH platform are engineered together, so field data flows reliably from sensor to dashboard." },
    { title: "Built for Harsh Environments", text: "Rugged field devices designed for water networks, solar plants, construction sites, and industrial infrastructure." },
    { title: "Secure by Design", text: "Encrypted transmission, device authentication, and audit-ready reporting on every connection." },
    { title: "AI- and IoT-Driven", text: "Edge intelligence, smart notifications, and advanced analytics that turn raw data into action." },
  ],
};

export const trust = {
  title: "Proud member of the NVIDIA Inception Program",
  text: "Ubiqedge is part of the NVIDIA Inception Program, gaining access to advanced technology, expert guidance, and a strong innovation network to accelerate AI solutions and drive meaningful impact.",
  img: assets.nvidia,
};

export const blogs = [
  {
    title: "Ubiqedge Industry Insights: July 2026 Update",
    category: "Insights",
    img: "https://cms.ubiqedge.com/images/blog2.png",
    url: `${company.site}/blogs/Insights/Industry-Insights-july2026/`,
  },
  {
    title: "Ubiqedge Secures ₹10 Crore Seed Funding",
    category: "News",
    img: "https://cms.ubiqedge.com/images/blog1.png",
    url: `${company.site}/blogs/undefined/Ubiqedge-Secures-10-Crore-seed-Funding/`,
  },
  {
    title: "How KLEON 4G Solar Dongle Eliminates Unnecessary Site Visits",
    category: "Solar",
    img: "https://cms.ubiqedge.com/images/4g-dongle.png",
    url: `${company.site}/blogs/Solar Energy/Eliminates-Unnecessary-Site-Visits/`,
  },
  {
    title: "Is Your Solar Plant Performing at Its Best? Understanding Performance Ratio (PR)",
    category: "Solar",
    img: "https://cms.ubiqedge.com/images/solar-panel-tracking-solar-performace-ratio.png",
    url: `${company.site}/blogs/Solar Monitoring/solar-performance-ratio-pr/`,
  },
  {
    title: "From Invisible to Actionable: Turn Real-Time Air Data into Smarter Decisions",
    category: "Environmental",
    img: "https://cms.ubiqedge.com/images/air monitoring.png",
    url: `${company.site}/blogs/Environmental Managment/airmonitoring/`,
  },
  {
    title: "Breathing Better Starts Here: How Our Smart Air Monitoring System Is Changing the Game",
    category: "Environmental",
    img: "https://cms.ubiqedge.com/images/Air1.png",
    url: `${company.site}/blogs/Environmental Managment/environmentalmonitoring/`,
  },
  {
    title: "The Challenge of Urban Water Supply – and the Opportunity for Smarter Solutions",
    category: "Water",
    img: "https://cms.ubiqedge.com/images/Urban Water Supply.png",
    url: `${company.site}/blogs/water managment/watercrisismanagement/`,
  },
  {
    title: "Ubiqedge: Pioneering Solutions for India's Water Crisis",
    category: "Water",
    img: "https://cms.ubiqedge.com/images/Water Crisis.png",
    url: `${company.site}/blogs/water managment/Water-Crisis/`,
  },
  {
    title: "How IoT can simplify CGWA compliance through automated reporting",
    category: "Water",
    img: "https://cms.ubiqedge.com/images/cgwa-compliance.png",
    url: `${company.site}/blogs/undefined/cgwa-compliance/`,
  },
  {
    title: "India's Tech is Building a Sustainable Tomorrow",
    category: "Technology",
    img: "https://cms.ubiqedge.com/images/national-technology-day.png",
    url: `${company.site}/blogs/undefined/national-technology-day/`,
  },
  {
    title: "Ubiqedge's Battery Powered 4G-LTE Telemetry Device KLEON-B1",
    category: "Product",
    img: "https://cms.ubiqedge.com/images/kleon-b1-blog.png",
    url: `${company.site}/blogs/undefined/KLEON-B1/`,
  },
];

export const about = {
  vision: "Simplify Sustainability & Data For All.",
  mission: "Simplify IoT & AI adoption for everyone.",
  values: [
    { title: "Innovation", text: "We embrace emerging technology and continuous improvement to deliver IoT solutions that redefine efficiency." },
    { title: "Client Focus", text: "We listen and adapt to client needs — delivering tailored solutions that help them succeed." },
    { title: "Sustainability", text: "We build technology that supports environmental responsibility and resource efficiency." },
    { title: "Trust & Reliability", text: "We stand behind secure, dependable systems built for mission-critical use cases." },
  ],
  whatWeDo: [
    { name: "KLEON", role: "Rugged Field Devices", text: "KLEON devices collect real-time data from industrial and remote assets. Built for harsh conditions, they support multiple connectivity options, diverse sensors, and edge computing — ideal for water, energy, environmental, and infrastructure projects." },
    { name: "SAMASTH", role: "Monitoring & Analytics Platform", text: "SAMASTH consolidates data from KLEON devices into custom dashboards, alerts, and advanced analytics. With edge intelligence, smart notifications, role-based access, and automated reporting, SAMASTH gives your teams the visibility they need to act fast and operate efficiently." },
  ],
  leaders: [
    { name: "Visat Patel", role: "CEO & Co-Founder", img: "https://www.ubiqedge.com/assets/img/team/Visat%20Patel.jpeg" },
    { name: "Akhilesh Thorat", role: "CTO & Co-Founder", img: "https://www.ubiqedge.com/assets/img/team/Akhilesh.jpeg" },
    { name: "Hetvi Shah", role: "COO & Co-Founder", img: "https://www.ubiqedge.com/assets/img/team/Hetvi%20Shah.jpeg" },
    { name: "Archit Khandelwal", role: "CSO & Co-Founder", img: "https://www.ubiqedge.com/assets/img/team/Archit.jpeg" },
  ],
};

export const career = {
  perks: [
    { title: "Innovation Driven", text: "Work on cutting-edge IoT technologies that shape the future of industry." },
    { title: "Work-Life Balance", text: "We believe in a sustainable pace and provide flexible working arrangements." },
    { title: "Growth Opportunities", text: "Continuous learning and career development are core to our culture." },
    { title: "Impactful Work", text: "See your contributions directly improving industrial efficiency and sustainability." },
    { title: "Medical Insurance", text: "Comprehensive health coverage for you and your family." },
    { title: "Annual Celebrations", text: "Celebrate success together with team outings and annual events." },
    { title: "Well-Planned Leave Policy", text: "Enjoy generous paid time off and holidays to recharge and relax." },
    { title: "Loaded Pantry", text: "Enjoy snacks, beverages, and pantry essentials to keep you energized throughout the day." },
  ],
  openings: [
    {
      title: "Sr. Sales Engineer/Executive",
      type: "Full-time",
      location: "Powai, Mumbai, Maharashtra, India",
      experience: "3+ Years",
      summary:
        "B2B sales role in IoT, water, automation, or industrial solutions: identify new business opportunities, build strong client relationships, promote solution-based selling, and coordinate with technical and support teams.",
    },
    {
      title: "Vice President – Sales",
      type: "Full-time",
      location: "Powai, Mumbai (Headquarters)",
      experience: "10+ Years",
      summary:
        "Lead sales for one of India's fastest-growing AIoT companies — combining IoT hardware, cloud software, connectivity, and AI to help enterprises digitize, monitor, and manage critical infrastructure.",
    },
    {
      title: "Financial Reporting Manager",
      type: "Full-time",
      location: "Powai, Mumbai",
      experience: "4–6 Years",
      summary:
        "Hands-on finance & accounts professional: financial reporting, month-end closing, GST/TDS/Income-tax compliance, manufacturing & cost accounting, inventory accounting, and audit coordination.",
    },
    {
      title: "Senior Hardware Design Engineer",
      type: "Full-time",
      location: "Powai, Mumbai",
      experience: "3–8+ Years",
      summary:
        "End-to-end hardware design for IoT/IIoT gateways and industrial controllers — schematics, PCB layout, prototyping, validation, EMC/EMI and certifications, using Altium/OrCAD.",
    },
    {
      title: "Production Technician",
      type: "Full-time",
      location: "Powai, Mumbai",
      experience: "1+ Year",
      summary:
        "Assembly, testing, packaging, and installation of hardware products — SMD soldering, panel fabrication, testing records, and on-site installation support.",
    },
  ],
};

export const legal = {
  terms: {
    updated: "June 2026",
    sections: [
      { title: "Website Usage", text: "Users agree to use this website only for lawful purposes and in accordance with applicable laws and regulations. Any misuse of the website, including attempts to gain unauthorized access, disrupt services, or interfere with operations, is prohibited." },
      { title: "Intellectual Property", text: "All content on this website, including text, graphics, images, logos, product information, software, designs, and trademarks, is the property of UBIQEDGE TECHNOLOGY PRIVATE LIMITED unless otherwise stated. Unauthorized reproduction, distribution, modification, or commercial use is prohibited." },
      { title: "Products and Services", text: "Information regarding products, solutions, and services is provided for informational purposes only. Ubiqedge reserves the right to modify, update, discontinue, or change products, specifications, and services without prior notice." },
      { title: "Disclaimer", text: "While we strive to ensure accuracy, we do not guarantee that all website content is complete, accurate, or current at all times." },
      { title: "Limitation of Liability", text: "UBIQEDGE TECHNOLOGY PRIVATE LIMITED shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from the use of this website." },
      { title: "Third-Party Links", text: "This website may contain links to external websites. We are not responsible for the content or privacy practices of third-party websites." },
      { title: "Governing Law", text: "These Terms & Conditions shall be governed by the laws of India. Any disputes arising from the use of this website shall be subject to the jurisdiction of the courts of Mumbai, Maharashtra." },
    ],
  },
  privacy: {
    updated: "June 2026",
    intro: "UBIQEDGE TECHNOLOGY PRIVATE LIMITED (\"Ubiqedge\", \"we\", \"our\", or \"us\") is committed to protecting the privacy of visitors, customers, and business partners.",
    sections: [
      { title: "Information We Collect", text: "Name, company name, email address, phone number, business information, inquiry details submitted through contact forms, IP address, browser and device information, and website usage statistics." },
      { title: "How We Use Your Information", text: "To respond to inquiries and support requests, provide product information and demonstrations, improve our website and services, analyze website performance and visitor behavior, communicate important updates, maintain security and prevent fraud, and comply with legal requirements." },
      { title: "Cookies Policy", text: "Our website may use cookies and analytics technologies to improve user experience and website performance. Users may disable cookies through browser settings; however, some website features may not function properly." },
      { title: "Information Sharing", text: "We do not sell, rent, or trade personal information. Information may be shared with trusted service providers, professional advisors, and government authorities where required by law." },
      { title: "Data Security", text: "We implement reasonable technical and organizational safeguards to protect personal information against unauthorized access, disclosure, or misuse." },
      { title: "Third-Party Websites", text: "Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or policies of external websites." },
      { title: "Policy Updates", text: "We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page." },
    ],
  },
};

export const footer = {
  tagline: "Simplify IoT Adoption For All",
  columns: [
    {
      heading: "Products",
      links: [
        { label: "Kleon Hardware", to: "/kleon" },
        { label: "Samasth Software", to: "/samasth" },
      ],
    },
    {
      heading: "Solutions",
      links: [
        { label: "Smart Water Management", to: "/solutions/water-management" },
        { label: "Solar PV Monitoring & Control", to: "/solutions/energy-management" },
        { label: "Smart Concrete Management", to: "/solutions/concrete-management" },
        { label: "Air Quality Monitoring", to: "/solutions/environmental-monitoring" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { label: "Blog", to: "/blogs" },
        { label: "Career", to: "/career" },
        { label: "Whitepaper", to: "/whitepaper" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About Us", to: "/about-us" },
        { label: "Contact", to: "/contact-us" },
        { label: "Terms & Conditions", to: "/terms-conditions" },
        { label: "Privacy Policy", to: "/privacy-policy" },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} Ubiqedge Technology Pvt. Ltd. All Rights Reserved.`,
};

export const finalCta = {
  heading: "Assess Your Business Potentials Now & Find Opportunities For Bigger Success",
  cta: { label: "Contact Sales", to: "/contact-us" },
};
