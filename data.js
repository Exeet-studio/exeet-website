/*
  EXEET WEBSITE DATA
  之後你主要只改這個檔案。
  圖片放到 assets/projects 或 assets/team，再把路徑填進來。
*/

const SITE = {
  brand: "EXEET",
  email: "hello@exeet.tw",
  lineId: "@exeet",
  instagramUrl: "https://www.instagram.com/",
  youtubeUrl: "https://www.youtube.com/",
  showreelUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  contactText: "For commercial films, music videos, documentary projects, art direction and visual development."
};

const PROJECTS = [
  {
    id: "project-01",
    title: "PROJECT 01",
    category: "Commercial",
    year: "2026",
    cover: "assets/projects/project-01.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Write your project description here.",
    credits: [
      "Director｜EXEET",
      "Producer｜EXEET",
      "Art Direction｜EXEET",
      "Director of Photography｜EXEET",
      "Editor｜EXEET"
    ],
    gallery: []
  },
  {
    id: "project-02",
    title: "PROJECT 02",
    category: "Music Video",
    year: "2026",
    cover: "assets/projects/project-02.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Write your project description here.",
    credits: ["Director｜EXEET", "Production｜EXEET"],
    gallery: []
  },
  {
    id: "project-03",
    title: "PROJECT 03",
    category: "Documentary",
    year: "2026",
    cover: "assets/projects/project-03.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Write your project description here.",
    credits: ["Director｜EXEET", "Production｜EXEET"],
    gallery: []
  },
  {
    id: "project-04",
    title: "PROJECT 04",
    category: "Government",
    year: "2026",
    cover: "assets/projects/project-04.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Write your project description here.",
    credits: ["Director｜EXEET", "Production｜EXEET"],
    gallery: []
  }
];

const TEAM = [
  {
    id: "member-01",
    name: "MEMBER 01",
    role: "Creative Director",
    photo: "assets/team/member-01.jpg",
    bio: "Write team member introduction here.",
    works: ["Commercial", "Music Video", "Art Direction"]
  },
  {
    id: "member-02",
    name: "MEMBER 02",
    role: "Producer",
    photo: "assets/team/member-02.jpg",
    bio: "Write team member introduction here.",
    works: ["Production", "Project Management"]
  }
];
