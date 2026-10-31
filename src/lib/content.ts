// Everything on the site comes from Charmae's brief (Costelo, Charmae M.docx), her
// certificate PDFs, and the project screenshots she supplied.

export const profile = {
  name: "Charmae Costelo",
  fullName: "Charmae M. Costelo",
  role: "Software Developer",
  degree: "BS Computer Science",
  degreeLong: "Bachelor of Science in Computer Science",
  school: "Biliran Province State University",
  email: "charmaecostelo11@gmail.com",
  phone: "0915 394 6164",
  phoneHref: "tel:+639153946164",
  photo: "/profile.jpg",
  resumePdf: "/resume/Charmae-Costelo-Resume.pdf",
  statement: "I like solving problems through code and turning ideas into working apps and websites.",
  careerGoal:
    "I want to become a Software Developer because I like solving problems through code and turning ideas into working apps and websites. I aim to build practical, user-friendly solutions while learning new technologies and improving my skills every day.",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
] as const;

export type Screen = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const camoteLens = {
  id: "camotelens",
  kind: "Mobile app · Machine learning",
  name: "CamoteLens",
  subtitle: "Sweet potato variety classification through leaf image analysis using CNNs",
  summary:
    "An image-based app that identifies sweet potato (camote) varieties by analyzing photos of their leaves, using a Convolutional Neural Network (CNN) to classify the variety.",
  steps: [
    { title: "Capture a leaf", text: "Take a photo with the camera or choose one from the gallery, then crop it." },
    { title: "Analyze with a CNN", text: "The trained model studies the leaf's shape, color and veins." },
    { title: "Read the result", text: "See the predicted variety, its confidence, and the score for every class." },
  ],
  extras: ["Saved history and favorites", "Works offline, syncs later", "Classification statistics"],
  tags: ["Python", "CNN", "Image classification", "Mobile app"],
  screens: [
    {
      src: "/projects/camotelens-home.jpg",
      alt: "CamoteLens home screen with options to capture a leaf or choose one from the gallery.",
      caption: "Home",
      width: 960,
      height: 2078,
    },
    {
      src: "/projects/camotelens-preview.jpg",
      alt: "Leaf preview screen showing a purple sweet potato leaf with Analyze, Crop and Retake buttons.",
      caption: "Leaf preview",
      width: 982,
      height: 2030,
    },
    {
      src: "/projects/camotelens-result.jpg",
      alt: "Classification result: Stoke Purple at 99.9% confidence, with probabilities for four varieties.",
      caption: "Result",
      width: 880,
      height: 2030,
    },
    {
      src: "/projects/camotelens-profile.jpg",
      alt: "Profile screen with classification statistics, history sync and offline-ready records.",
      caption: "Statistics",
      width: 1232,
      height: 2736,
    },
  ] satisfies Screen[],
};

export const sliceAndSip = {
  id: "slice-and-sip",
  kind: "Website · Web design",
  name: "Slice and Sip Pizza House",
  subtitle: "A website for a pizza house",
  summary:
    "A website for a pizza house that shows its pizzas, drinks, and other offerings, so customers can browse the menu and find the store.",
  features: [
    "Menu of pizzas, drinks, sides and desserts",
    "Store information and contact details",
    "Admin dashboard for orders, sales and menu items",
  ],
  tags: ["HTML & CSS", "JavaScript", "Responsive web design"],
  screens: [
    {
      src: "/projects/sliceandsip-website.jpg",
      alt: "Slice and Sip Pizza House home page with a pizza hero, menu categories and featured pizzas.",
      caption: "Customer website",
      width: 1604,
      height: 1990,
    },
    {
      src: "/projects/sliceandsip-dashboard.jpg",
      alt: "Slice and Sip admin dashboard with order totals, weekly sales chart, popular menu and recent orders.",
      caption: "Admin dashboard",
      width: 1356,
      height: 1756,
    },
  ] satisfies Screen[],
};

export const skillGroups = [
  {
    key: "ml",
    title: "Machine learning",
    skills: ["Python", "Machine Learning (CNN)", "Image Classification"],
    usedIn: { label: "CamoteLens", href: "#camotelens" },
  },
  {
    key: "web",
    title: "Web development",
    skills: ["HTML & CSS", "JavaScript", "Responsive Web Design", "Basic UI/UX Design"],
    usedIn: { label: "Slice and Sip", href: "#slice-and-sip" },
  },
  {
    key: "work",
    title: "How I work",
    skills: ["Problem-Solving", "Teamwork"],
    usedIn: null,
  },
] as const;

export type Certificate = {
  title: string;
  issuer: string;
  type: string;
  date: string;
  dateTime: string;
  image: string;
  pdf: string;
  width: number;
  height: number;
};

// Newest first.
export const certificates: Certificate[] = [
  {
    title: "Introduction to AI Literacy and Responsible Use",
    issuer: "CHED ACHIEVE · Mapúa University",
    type: "Micro-credential",
    date: "Sep 2026",
    dateTime: "2026-09-14",
    image: "/certificates/ai-literacy.jpg",
    pdf: "/certificates/ai-literacy.pdf",
    width: 3200,
    height: 2265,
  },
  {
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    type: "Course completion",
    date: "May 2026",
    dateTime: "2026-05-15",
    image: "/certificates/networking-basics.jpg",
    pdf: "/certificates/networking-basics.pdf",
    width: 3200,
    height: 2168,
  },
  {
    title: "Integrated OS: Be More Digi-TALINO",
    issuer: "Integrated Office Solutions, Inc.",
    type: "Webinar participation",
    date: "Sep 2025",
    dateTime: "2025-09-05",
    image: "/certificates/digi-talino.jpg",
    pdf: "/certificates/digi-talino.pdf",
    width: 3200,
    height: 2262,
  },
];

export const resume = {
  headline: "Aspiring Software Developer",
  summary:
    "BS Computer Science student at Biliran Province State University seeking a Software Developer role. Enjoys solving problems through code and turning ideas into working apps and websites. Built a CNN-based mobile app that classifies sweet potato varieties from leaf images, and a website for a pizza house. Skilled in Python, JavaScript, HTML and CSS, and responsive web design.",
  skills: [
    { label: "Programming", items: "Python, JavaScript, HTML & CSS" },
    { label: "Machine Learning", items: "Convolutional Neural Networks (CNN), Image Classification" },
    { label: "Web", items: "Responsive Web Design, Basic UI/UX Design" },
    { label: "Soft Skills", items: "Problem-Solving, Teamwork" },
  ],
  projects: [
    {
      name: "CamoteLens",
      subtitle: "Sweet Potato Variety Classification Through Leaf Image Analysis Using CNNs",
      bullets: [
        "Developed an image-based mobile app that identifies sweet potato (camote) varieties from photos of their leaves.",
        "Used a Convolutional Neural Network (CNN) to classify the variety and show confidence scores for each class.",
        "Included camera and gallery capture, cropping, saved history, favorites, and offline records.",
      ],
    },
    {
      name: "Slice and Sip Pizza House",
      subtitle: "Pizza House Website",
      bullets: [
        "Developed a website showing the pizza house's pizzas, drinks, and other offerings.",
        "Included a menu, store information, and contact details for customers.",
        "Designed an admin dashboard for orders, sales, and menu items.",
      ],
    },
  ],
  certifications: [
    { name: "Introduction to AI Literacy and Responsible Use", issuer: "CHED ACHIEVE, Mapúa University", date: "September 2026" },
    { name: "Networking Basics", issuer: "Cisco Networking Academy", date: "May 2026" },
    { name: "Integrated OS: Be More Digi-TALINO", issuer: "Integrated Office Solutions, Inc.", date: "September 2025" },
  ],
};
