// EXEET WEBSITE DATA
// 以後主要改這個檔案就好。
// 圖片請放到 assets/projects 或 assets/team，然後把路徑填進 cover / image。

const SITE = {
  instagram: 'https://www.instagram.com/exeet.studio?igsh=MXRycHR4bmkwanNkaA==',
  youtube: 'https://www.youtube.com/@ExEeT-wc4mg',
  email: 'exeet4711@gmail.com',
  lineId: '',
  showreelUrl: 'https://www.youtube.com/embed/FNtNzLjPrT0',
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
    slug: '南山人壽路跑形象影片',
    title: '南山人壽路跑形象影片',
    category: 'commercial',
    year: '2026',
    client: '南山人壽、伏流創意',
    cover: 'assets/projects/南山人壽路跑形象影片.jpg',
    video: 'https://www.youtube.com/embed/wbYuImxpkhM',
    description: '南山人壽路跑形象影片',
    credits: ['Director｜KSW', 'Producer｜Strawberry', 'DOP｜Chun Kai', 'Editor｜KSW']
  },
  {
    slug: 'HennessyXO',
    title: 'HennessyXO',
    category: 'commercial',
    year: '2026',
    client: '軒尼詩',
    cover: 'assets/projects/HennessyXO.png',
    video: 'https://www.youtube.com/embed/7veq9G78u1Y',
    description: 'HennessyXO',
    credits: ['Director｜Zao',  'Art Director｜LYS', 'DOP｜Chun Kai', 'Editor｜Zao', 'Colorist｜Chun Kai']
  },
  {
    slug: '藏富滿滿見證影片',
    title: '藏富滿滿見證影片',
    category: 'commercial',
    year: '建案/2026',
    client: '藏富建設',
    cover: 'assets/projects/藏富滿滿見證影片.jpg',
    video: 'https://www.youtube.com/embed/7veq9G78u1Y',
    description: '藏富滿滿見證影片',
    credits: ['Director｜KSW', 'DOP｜KSW', 'Gaffer｜Andy Chang', 'Editor｜KSW']
  },
  {
    slug: 'test-01',
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
    slug: 'Kuan-Sheng-Wang',
    name: '王冠紳',
    role: 'Creative Director',
    image: 'assets/team/yihsuan.jpg',
    description: '非常口影像製作有限公司共同創辦人<br><br>Director / DOP',

    works: [
      {
        slug: 'qu-hong-gan-la',
        title: '去洪幹啦',
        image: 'assets/projects/rog.jpg',
        year: '2026',
        client: 'Client Name',

        media: {
          type: 'video',
          url: 'https://www.youtube.com/embed/影片ID'
        },

        description: '這裡填寫這支作品的介紹與王冠紳在作品中負責的內容。',

        credits: [
          'Director｜王冠紳',
          'DOP｜王冠紳'
        ],

        gallery: [
          'assets/team/works/qu-hong-gan-la-01.jpg',
          'assets/team/works/qu-hong-gan-la-02.jpg'
        ]
      },

      {
        slug: 'jian-sha-zui',
        title: '姦殺嘴',
        image: 'assets/projects/rog.jpg',
        year: '2025',
        client: '',

        media: {
          type: 'image',
          url: 'assets/team/works/jian-sha-zui-cover.jpg'
        },

        description: '這個作品不能公開影片，因此只放作品敘述和截圖。',

        credits: [
          'Director｜王冠紳'
        ],

        gallery: [
          'assets/team/works/jian-sha-zui-01.jpg',
          'assets/team/works/jian-sha-zui-02.jpg',
          'assets/team/works/jian-sha-zui-03.jpg'
        ]
      }
    ]
  },

  {
    slug: 'fan-chun-kai',
    name: '范峻愷 Fan Chun Kai',
    role: 'DOP',
    image: 'assets/team/刀盾.jpeg',
    description: '<br><br>非常口影像製作有限公司共同創辦人<br><br>DOP<br><br>紅姦百生<br><br>竹岡雙龍<br><br>義大顯謨<br><br>葡萄骷髏',

    works: [
      {
        slug: 'p-su',
        title: 'P蘇',
        image: 'assets/team/愷.jpg',
        year: '2026',
        client: '',

        media: {
          type: 'video',
          url: 'https://www.youtube.com/embed/Fios3qLinkk'
        },

        description: '這裡輸入 P蘇 的作品介紹，以及范峻愷負責的攝影內容。',

        credits: [
          'DOP｜范峻愷'
        ],

        gallery: [
          'assets/team/works/p-su-01.jpg',
          'assets/team/works/p-su-02.jpg'
        ]
      },

      {
        slug: 'he-zi',
        title: '禾子',
        image: 'assets/team/愷.jpg',
        year: '2026',
        client: '',

        media: {
          type: 'video',
          url: 'https://www.youtube.com/embed/A9ukncHNk1Q'
        },

        description: '這裡輸入禾子的作品介紹。',

        credits: [
          'DOP｜范峻愷'
        ],

        gallery: ['assets/team/愷.jpg']
      }
    ]
  },

  {
    slug: 'En-Chun-Chang',
    name: '張恩郡',
    role: 'Dop / Gaffer',
    image: 'assets/team/張恩郡頭貼.JPEG',
    description: '<br><br>DOP / Gaffer',

    works: [
      {
        slug: 'hong',
        title: '紅',
        image: 'assets/projects/rog.jpg',
        year: '2026',
        client: '',

        media: {
          type: 'image',
          url: 'assets/team/works/hong-cover.jpg'
        },

        description: '作品介紹。',

        credits: [
          'Creative Director｜渠你娘'
        ],

        gallery: [
          'assets/team/works/hong-01.jpg'
        ]
      }
    ]
  }

];
