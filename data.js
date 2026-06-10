// EXEET WEBSITE DATA
// 以後主要改這個檔案就好。
// 圖片請放到 assets/projects 或 assets/team，然後把路徑填進 cover / image。

const SITE = {
  instagram: 'https://instagram.com/',
  youtube: 'https://youtube.com/',
  email: 'hello@exeet.tw',
  lineId: '@exeet',
  showreelUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  showreelTitle: 'SHOWREEL',
  showreelDescription: 'A selected collection of EXEET works.'
};

const CATEGORIES = [
  { id: 'commercial', label: 'Commercial', zh: '商業' },
  { id: 'mv', label: 'MV', zh: 'MV' },
  { id: 'documentary', label: 'Documentary', zh: '紀錄片' },
  { id: 'government', label: 'Government', zh: '政府' }
  { id: 'event', label: 'Event', zh: '活動紀錄' }
  { id: 'social', label: 'Social', zh: '社群短影音' }
];

const PROJECTS = [
  {
    slug: 'project-01',
    title: 'PROJECT 01',
    category: 'commercial',
    year: '2026',
    client: 'Client Name',
    cover: 'assets/projects/project-01.jpg',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Project description goes here. You can edit this text in data.js.',
    credits: ['Director｜Name', 'Producer｜Name', 'Art Director｜Name', 'DOP｜Name', 'Editor｜Name']
  },
  {
    slug: 'project-02',
    title: 'PROJECT 02',
    category: 'mv',
    year: '2026',
    client: 'Artist / Label',
    cover: 'assets/projects/project-02.jpg',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Music video project description goes here.',
    credits: ['Director｜Name', 'Producer｜Name', 'Art Director｜Name']
  },
  {
    slug: 'project-03',
    title: 'PROJECT 03',
    category: 'documentary',
    year: '2026',
    client: 'Client Name',
    cover: 'assets/projects/project-03.jpg',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Documentary project description goes here.',
    credits: ['Director｜Name', 'Producer｜Name', 'Camera｜Name']
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
