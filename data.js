// EXEET WEBSITE DATA
// 以後主要改這個檔案就好。
// 圖片請放到 assets/projects 或 assets/team，然後把路徑填進 cover / image。

const SITE = {
  instagram: 'https://www.instagram.com/exeet.studio?igsh=MXRycHR4bmkwanNkaA==',
  youtube: 'https://www.youtube.com/@ExEeT-wc4mg',
  email: 'exeet4711@gmail.com',
  lineId: '',
  showreelUrl: 'https://www.youtube.com/embed/PEM9ZOW5eig',
  showreelTitle: 'SHOWREEL',
  showreelDescription: 'A selected collection of EXEET works.'
};

const CATEGORIES = [
  { id: 'commercial', label: 'Commercial', zh: '商業' },
  { id: 'social', label: 'Social', zh: '社群短影音' },
  { id: 'mv', label: 'MV', zh: '音樂錄影帶' },
  { id: 'narrative', label: 'Narrative', zh: '劇情片' },
  { id: 'documentary', label: 'Documentary', zh: '紀錄片' },
  { id: 'government', label: 'Government', zh: '政府標案' },
  { id: 'event', label: 'Event', zh: '活動紀錄' }
];

const PROJECTS = [
 {
    slug: 'project-01',
    title: 'PROJECT 01',
    category: 'commercial',
    year: '2026',
    client: 'Client Name',
    cover: 'assets/projects/project-01.jpg',
    video: 'https://www.youtube.com/embed/wbYuImxpkhM',
    description: 'Project description goes here. You can edit this text in data.js.',
    credits: ['Director｜Name', 'Producer｜Name', 'Art Director｜Name', 'DOP｜Name', 'Editor｜Name']
  },
  {
  {
    slug: 'project-01',
    title: 'PROJECT 01',
    category: 'commercial',
    year: '2026',
    client: 'Client Name',
    cover: 'assets/projects/project-01.jpg',
    video: 'https://www.youtube.com/embed/wbYuImxpkhM',
    description: 'Project description goes here. You can edit this text in data.js.',
    credits: ['Director｜Name', 'Producer｜Name', 'Art Director｜Name', 'DOP｜Name', 'Editor｜Name']
  },
  {
    slug: 'project-02',
    title: 'PROJECT 02',
    category: 'mv',
    year: '2026',
    client: 'Artist / Label',
    cover: 'assets/projects/project-02.PNG',
    video: 'https://www.youtube.com/embed/yK1tvN3xrfA',
    description: 'Music video project description goes here.',
    credits: ['Director｜Name', 'Producer｜Name', 'Art Director｜Name']
  },
  {
    slug: 'project-002',
    title: 'PROJECT 002',
    category: 'mv',
    year: '2026',
    client: 'Artist / Label',
    cover: 'assets/projects/project-02.PNG',
    video: 'https://www.youtube.com/embed/yK1tvN3xrfA',
    description: 'Music video project description goes here.',
    credits: ['Director｜Name', 'Producer｜Name', 'Art Director｜Name']
  },
  {
    slug: '',
    title: '走進·重生校舍',
    category: '紀錄片',
    year: '2024-2025',
    client: '新北市教育局',
    cover: 'assets/projects/截圖 2026-06-11 凌晨1.43.05.png',
    video: 'https://www.youtube.com/embed/ZL73vfTy1e4',
    description: '走進·重生校舍',
    credits: ['Director｜KSW', 'Producer｜CHUN KAI', 'Camera｜CHUN KAI']
  },
  {
    slug: 'project-04',
    title: 'PROJECT 04',
    category: 'government',
    year: '2026',
    client: 'Government Project',
    cover: 'assets/projects/project-04.jpg',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Government project description goes here.',
    credits: ['Director｜Name', 'Producer｜Name', 'Editor｜Name']
  },
  {
    slug: 'project-05',
    title: 'PROJECT 05',
    category: 'social',
    year: '2026',
    client: 'Client Name',
    cover: 'assets/projects/project-05.jpg',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Social content project description goes here.',
    credits: ['Director｜Name', 'Producer｜Name', 'Editor｜Name']
  },
  {
    slug: 'project-06',
    title: 'PROJECT 06',
    category: 'narrative',
    year: '2026',
    client: 'Client Name',
    cover: 'assets/projects/project-06.jpg',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Narrative project description goes here.',
    credits: ['Director｜Name', 'Producer｜Name', 'DOP｜Name', 'Editor｜Name']
  },
  {
    slug: 'project-07',
    title: 'PROJECT 07',
    category: 'event',
    year: '2026',
    client: 'Client Name',
    cover: 'assets/projects/project-07.jpg',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Event coverage project description goes here.',
    credits: ['Director｜Name', 'Producer｜Name', 'Camera｜Name', 'Editor｜Name']
  }
];

const TEAM = [
  {
    slug: 'member-01',
    name: 'Member Name',
    role: 'Creative Director',
    image: 'assets/team/member-01.jpg',
    description: 'Team member introduction goes here. You can edit this in data.js.'
  },
  {
    slug: 'member-02',
    name: 'Member Name',
    role: 'Producer',
    image: 'assets/team/member-02.jpg',
    description: 'Team member introduction goes here. You can edit this in data.js.'
  }
];
