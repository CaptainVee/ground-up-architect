import p1Main from "@/assets/projects/project-1/project-1-01.jpeg";
import p1Gallery1 from "@/assets/projects/project-1/project-1-02.jpeg";
import p1Gallery2 from "@/assets/projects/project-1/project-1-03.jpeg";

import p2Main from "@/assets/projects/project-2/project-2-01.jpeg";
import p2Gallery1 from "@/assets/projects/project-2/project-2-02.jpeg";
import p2Gallery2 from "@/assets/projects/project-2/project-2-03.jpeg";
import p2Gallery3 from "@/assets/projects/project-2/project-2-04.jpeg";

import p3Main from "@/assets/projects/project-3/project-3-01.jpeg";
import p3Gallery1 from "@/assets/projects/project-3/project-3-02.jpeg";
import p3Gallery2 from "@/assets/projects/project-3/project-3-03.jpeg";
// import p3Gallery3 from "@/assets/projects/project-3/project-3-04.jpeg";

import p4Main from "@/assets/projects/project-4/project-4-01.jpeg";
import p4Gallery1 from "@/assets/projects/project-4/project-4-02.jpeg";
import p4Gallery2 from "@/assets/projects/project-4/project-4-03.mp4";
import p4Gallery3 from "@/assets/projects/project-4/project-4-04.jpeg";
import p4Gallery4 from "@/assets/projects/project-4/project-4-05.jpeg";
import p4Gallery5 from "@/assets/projects/project-4/project-4-06.jpeg";
import p4Gallery6 from "@/assets/projects/project-4/project-4-06.mp4";

import p5Main from "@/assets/projects/project-5/project-5-01.jpeg";
import p5Gallery1 from "@/assets/projects/project-5/project-5-02.jpeg";
import p5Gallery2 from "@/assets/projects/project-5/project-5-03.jpeg";
import p5Gallery3 from "@/assets/projects/project-5/project-5-04.jpeg";

import p6Main from "@/assets/projects/project-6/project-6-01.jpeg";
import p6Gallery1 from "@/assets/projects/project-6/project-6-02.jpeg";
import p6Gallery2 from "@/assets/projects/project-6/project-6-03.jpeg";
import p6Gallery3 from "@/assets/projects/project-6/project-6-04.mp4";

import p7Main from "@/assets/projects/project-7/project-7-01.jpeg";
import p7Gallery1 from "@/assets/projects/project-7/project-7-02.jpeg";

import p8Main from "@/assets/projects/project-8/project-8-01.jpeg";
import p8Gallery1 from "@/assets/projects/project-8/project-8-01.mp4";
import p8Gallery2 from "@/assets/projects/project-8/project-8-02.mp4";
import p8Gallery3 from "@/assets/projects/project-8/project-8-03.mp4";

export const projectsData = [
  {
    id: 1,
    image: p1Main,
    title: "6 Units of 2 Bedroom Flats",
    category: "Commercial",
    location: "Villa Estate Ozalla Abor, Enugu North, Enugu State",
    description:
      "A commercial residential project featuring 6 units of modern 2-bedroom flats with contemporary amenities and efficient space utilization.",
    year: 2022,
    status: "Completed",
    details: {
      duration: "18 months",
      scope: "Design & Construction",
      features: [
        "6 spacious units",
        "Modern kitchen designs",
        "Adequate parking space",
        "24/7 security system",
      ],
      gallery: [p1Main,p1Gallery1, p1Gallery2],
    },
  },
  {
    id: 2,
    image: p2Main,
    title: "4 Bedroom Duplex",
    category: "Residential",
    location: "Amankpaka, Ugwogo Nike, Enugu East, Enugu State",
    description:
      "Luxury residential duplex featuring 4 bedrooms with premium finishes and modern architectural design.",
    year: 2021,
    status: "Completed",
    details: {
      duration: "12 months",
      scope: "Design & Construction",
      features: [
        "4 spacious bedrooms",
        "Swimming pool",
        "Home theater",
        "Smart home automation",
      ],
      gallery: [p2Main, p2Gallery1, p2Gallery2, p2Gallery3],
    },
  },
  {
    id: 3,
    image: p3Main,
    title: "2-Lane Asphalt Road Construction",
    category: "Infrastructure",
    location: "Mmaku, Awgu, Enugu State",
    description:
      "Complete road construction project featuring asphalt paving, drainage systems, and lane markings for improved transportation.",
    year: 2023,
    status: "Completed",
    details: {
      duration: "10 months",
      scope: "Design & Construction",
      features: [
        "2-lane asphalt paving",
        "Drainage infrastructure",
        "Road markings & signage",
        "Shoulder stabilization",
      ],
      gallery: [p3Main, p3Gallery1, p3Gallery2],
    },
  },
  {
    id: 4,
    image: p4Main,
    title: "10 Pens of a Modern Pig Farm",
    category: "Industrial",
    location: "Vannis Farms and Equipment, Odobudo Ubahu, Nkanu East, Enugu State",
    description:
      "Modern agricultural facility featuring 10 pens designed for optimal farming efficiency and animal welfare.",
    year: 2020,
    status: "Completed",
    details: {
      duration: "8 months",
      scope: "Design & Construction",
      features: [
        "10 modern pens",
        "Automated feeding system",
        "Waste management",
        "Proper ventilation",
      ],
      gallery: [p4Main, p4Gallery1, p4Gallery2, p4Gallery3, p4Gallery4, p4Gallery5, p4Gallery6],
    },
  },
  {
    id: 5,
    image: p5Main,
    title: "Soil Test for Geotechnical Properties",
    category: "Infrastructure",
    location: "Army Barracks, 82 Division, Abakpa Junction, Enugu",
    description:
      "Comprehensive geotechnical assessment and soil testing for infrastructure development.",
    year: 2023,
    status: "Completed",
    details: {
      duration: "3 months",
      scope: "Testing & Analysis",
      features: [
        "Soil sampling",
        "Laboratory analysis",
        "Detailed reports",
        "Engineering recommendations",
      ],
      gallery: [p5Main, p5Gallery1, p5Gallery2, p5Gallery3],
    },
  },
  {
    id: 6,
    image: p6Main,
    title: "Borehole and Construction of a Fish Pond",
    category: "Industrial",
    location: "Vannis Farms and Equipment, Odobudo Ubahu, Nkanu East, Enugu State",
    description:
      "Integrated water management project combining borehole drilling with fish pond construction.",
    year: 2021,
    status: "Completed",
    details: {
      duration: "6 months",
      scope: "Design & Construction",
      features: [
        "Deep borehole drilling",
        "Water testing",
        "Fish pond construction",
        "Water circulation system",
      ],
      gallery: [p6Main, p6Gallery1, p6Gallery2, p6Gallery3],
    },
  },
  {
    id: 7,
    image: p7Main,
    title: "4 Bedroom Bungalow",
    category: "Residential",
    location: "Enugu State",
    description:
      "Modern 4-bedroom bungalow with contemporary design and premium finishes for comfortable family living.",
    year: 2023,
    status: "Completed",
    details: {
      duration: "9 months",
      scope: "Design & Construction",
      features: [
        "4 spacious bedrooms",
        "Modern kitchen",
        "Elegant living areas",
        "Professional landscaping",
      ],
      gallery: [p7Main, p7Gallery1],
    },
  },
  {
    id: 8,
    image: p8Main,
    title: "Borehole Drilling Project",
    category: "Industrial",
    location: "Enugu State",
    description:
      "Professional borehole drilling and water resource management project with comprehensive documentation and video documentation.",
    year: 2024,
    status: "Completed",
    details: {
      duration: "2 months",
      scope: "Water Resource Management",
      features: [
        "Deep borehole drilling",
        "Water quality testing",
        "Pump installation",
        "System commissioning",
      ],
      gallery: [p8Main, p8Gallery1, p8Gallery2, p8Gallery3],
    },
  },
];

export const categories = [
  "All",
  "Commercial",
  "Residential",
  "Industrial",
  "Infrastructure",
];
