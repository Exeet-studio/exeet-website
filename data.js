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

    media: {
      type: 'video',
      url: 'https://www.youtube.com/embed/wbYuImxpkhM'
    },

    description: '南山人壽路跑形象影片',

    credits: [
      'Director｜KSW',
      'Producer｜Strawberry',
      'DOP｜Chun Kai',
      'Editor｜KSW'
    ],

    gallery: ['assets/projects/南山人壽路跑形象影片.jpg',
             'assets/projects/南山人壽路跑形象影片.jpg']
  },

  {
    slug: 'HennessyXO',
    title: 'HennessyXO',
    category: 'commercial',
    year: '2026',
    client: '軒尼詩',
    cover: 'assets/projects/HennessyXO.png',

    media: {
      type: 'video',
      url: 'https://www.youtube.com/embed/7veq9G78u1Y'
    },

    description: 'HennessyXO',

    credits: [
      'Director｜Zao',
      'Art Director｜LYS',
      'DOP｜Chun Kai',
      'Editor｜Zao',
      'Colorist｜Chun Kai'
    ],

    gallery: ['assets/team/張恩ㄐㄩ/裙擺/VS--YouTube-53rollcard-YouTube-0’21”.jpg',
             'assets/team/張恩ㄐㄩ/裙擺/VS--YouTube-53rollcard-YouTube-0’21”.jpg']
  },

  {
    slug: '藏富滿滿見證影片',
    title: '藏富滿滿見證影片',
    category: 'commercial',
    year: '建案/2026',
    client: '藏富建設',
    cover: 'assets/projects/藏富滿滿見證影片.jpg',

    media: {
      type: 'video',
      url: 'https://www.youtube.com/embed/7veq9G78u1Y'
    },

    description: '藏富滿滿見證影片',

    credits: [
      'Director｜KSW',
      'DOP｜KSW',
      'Gaffer｜Andy Chang',
      'Editor｜KSW'
    ],

    gallery:['assets/team/張恩ㄐㄩ/裙擺/VS--YouTube-53rollcard-YouTube-0’21”.jpg',
             'assets/team/張恩ㄐㄩ/裙擺/VS--YouTube-53rollcard-YouTube-0’21”.jpg']
  },

  {
    slug: 'test-01',
    title: 'PROJECT 01',
    category: 'commercial',
    year: '2026',
    client: 'Client Name',
    cover: 'assets/projects/project-01.jpg',

    media: {
      type: 'video',
      url: 'https://www.youtube.com/embed/wbYuImxpkhM'
    },

    description: 'Project description goes here. You can edit this text in data.js.',

    credits: [
      'Director｜Name',
      'Producer｜Name',
      'Art Director｜Name',
      'DOP｜Name',
      'Editor｜Name'
    ],

    gallery: []
  },

  {
    slug: '走進重生校舍',
    title: '走進·重生校舍',
    category: '紀錄片',
    year: '2024-2025',
    client: '新北市教育局',
    cover: 'assets/projects/截圖 2026-06-11 凌晨1.43.05.png',

    media: {
      type: 'video',
      url: 'https://www.youtube.com/embed/ZL73vfTy1e4'
    },

    description: '走進·重生校舍',

    credits: [
      'Director｜KSW',
      'Producer｜CHUN KAI',
      'Camera｜CHUN KAI'
    ],

    gallery: ['assets/team/張恩ㄐㄩ/年夜/VS--YouTube-53-YouTube-23’31”.jpg',
             'assets/team/張恩ㄐㄩ/年夜/VS--YouTube-53-YouTube-23’31”.jpg']
  },

  {
    slug: 'project-002',
    title: 'PROJECT 002',
    category: 'mv',
    year: '2026',
    client: 'Artist / Label',
    cover: 'assets/projects/project-02.PNG',

    media: {
      type: 'video',
      url: 'https://www.youtube.com/embed/yK1tvN3xrfA'
    },

    description: 'Music video project description goes here.',

    credits: [
      'Director｜Name',
      'Producer｜Name',
      'Art Director｜Name'
    ],

    gallery: []
  },

  {
    slug: 'project-04',
    title: 'PROJECT 04',
    category: 'government',
    year: '2026',
    client: 'Government Project',
    cover: 'assets/projects/project-04.jpg',

    media: {
      type: 'video',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },

    description: 'Government project description goes here.',

    credits: [
      'Director｜Name',
      'Producer｜Name',
      'Editor｜Name'
    ],

    gallery: []
  },

  {
    slug: 'project-05',
    title: 'PROJECT 05',
    category: 'social',
    year: '2026',
    client: 'Client Name',
    cover: 'assets/projects/project-05.jpg',

    media: {
      type: 'video',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },

    description: 'Social content project description goes here.',

    credits: [
      'Director｜Name',
      'Producer｜Name',
      'Editor｜Name'
    ],

    gallery: []
  },

  {
    slug: 'project-06',
    title: 'PROJECT 06',
    category: 'narrative',
    year: '2026',
    client: 'Client Name',
    cover: 'assets/projects/project-06.jpg',

    media: {
      type: 'video',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },

    description: 'Narrative project description goes here.',

    credits: [
      'Director｜Name',
      'Producer｜Name',
      'DOP｜Name',
      'Editor｜Name'
    ],

    gallery: []
  },

  {
    slug: 'project-07',
    title: 'PROJECT 07',
    category: 'event',
    year: '2026',
    client: 'Client Name',
    cover: 'assets/projects/project-07.jpg',

    media: {
      type: 'video',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },

    description: 'Event coverage project description goes here.',

    credits: [
      'Director｜Name',
      'Producer｜Name',
      'Camera｜Name',
      'Editor｜Name'
    ],

    gallery: []
  }
];

const WORK_CATEGORIES = {
  commercial: 'Commercial',
  mv: 'Music Video',
  narrative: 'Narrative',
  documentary: 'Documentary',
  shortfilm: 'Short Film',
  fashion: 'Fashion',
  experimental: 'Experimental'
};


const TEAM = [

  {
    slug: 'Kuan-Sheng-Wang',
    name: '王冠紳',
    role: 'Creative Director',
    image: 'assets/team/yihsuan.jpg',

    description:
      '非常口影像製作有限公司共同創辦人<br><br>' +
      'Director / DOP',

    works: [

      {
        category: 'commercial',

        items: [

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

            description:
              '這裡填寫這支作品的介紹與王冠紳在作品中負責的內容。',

            credits: [
              'Director｜王冠紳',
              'DOP｜王冠紳'
            ],

            gallery: [
              'assets/team/works/qu-hong-gan-la-01.jpg',
              'assets/team/works/qu-hong-gan-la-02.jpg'
            ]
          }

        ]
      },


      {
        category: 'narrative',

        items: [

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

            description:
              '這個作品不能公開影片，因此只放作品敘述和截圖。',

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
      }

    ]
  },


  {
    slug: 'fan-chun-kai',
    name: '范峻愷 Fan Chun Kai',
    role: 'DOP / Colorist',
    image: 'assets/team/范峻愷頭貼.jpg',

    description: 
      '非常口影像製作有限公司共同創辦人<br><br>' +
      'DOP<br><br>' +
      'Colorist',

    works: [

      {
        category: 'narrative',

        items: [

          {
            slug: 'alive',
            title: '萬能修理舖',
            image: 'assets/team/愷/修理舖/第二屆校園鑫馬獎：萬能修理舖 Make me feel alive 4-44 screenshot.png',
            year: '2022',
            client: '國立臺灣藝術大學廣電系畢業製作',

            media: {
              type: 'image',
              url: 'assets/team/愷/修理舖/第二屆校園鑫馬獎：萬能修理舖 Make me feel alive 4-44 screenshot.png'
            },

            description:
              '國立臺灣藝術大學廣電系畢業製作',

            credits: [
              'Director｜謝銘鏗',
              'Dop｜范峻愷',
              'Colorist｜范峻愷'
            ],

            gallery: [
              'assets/team/愷/修理舖/第二屆校園鑫馬獎：萬能修理舖 Make me feel alive 3-59 screenshot.png',
              'assets/team/愷/修理舖/第二屆校園鑫馬獎：萬能修理舖 Make me feel alive 5-22 screenshot.png',
              'assets/team/愷/修理舖/第二屆校園鑫馬獎：萬能修理舖 Make me feel alive 5-53 screenshot.png',
              'assets/team/愷/修理舖/第二屆校園鑫馬獎：萬能修理舖 Make me feel alive 7-6 screenshot.png',
              'assets/team/愷/修理舖/第二屆校園鑫馬獎：萬能修理舖 Make me feel alive 11-51 screenshot.png',
              'assets/team/愷/修理舖/第二屆校園鑫馬獎：萬能修理舖 Make me feel alive 12-43 screenshot.png',
              'assets/team/愷/修理舖/第二屆校園鑫馬獎：萬能修理舖 Make me feel alive 12-56 screenshot.png',
              'assets/team/愷/修理舖/第二屆校園鑫馬獎：萬能修理舖 Make me feel alive 17-16 screenshot.png'
            ]
          },

          {
            slug: 'ahai',
            title: '阿海',
            image: 'assets/team/愷/啊海/《阿海》_ 正式預告 _ 國立臺灣藝術大學廣播電視學系日間部107級畢業製作 0-15 screenshot.png',
            year: '2022',
            client: '國立臺灣藝術大學廣電系畢業製作',

            media: {
              type: 'image',
              url: 'assets/team/愷/啊海/《阿海》_ 正式預告 _ 國立臺灣藝術大學廣播電視學系日間部107級畢業製作 0-15 screenshot.png'
            },

            description:
              '國立臺灣藝術大學廣電系畢業製作',

            credits: [
              'Director｜張兆翔',
              'Dop｜范峻愷',
              'Art Designer｜廖宜宣',
              'Colorist｜彭瑋淳'
            ],

            gallery: [
              'assets/team/愷/啊海/《阿海》 _ 國立臺灣藝術大學廣播電視學系日間部107級畢業製作 11-5 screenshot.png',
              'assets/team/愷/啊海/《阿海》 _ 國立臺灣藝術大學廣播電視學系日間部107級畢業製作 6-42 screenshot.png',
              'assets/team/愷/啊海/《阿海》 _ 國立臺灣藝術大學廣播電視學系日間部107級畢業製作 8-30 screenshot.png',
              'assets/team/愷/啊海/《阿海》 _ 國立臺灣藝術大學廣播電視學系日間部107級畢業製作 2-4 screenshot.png',
              'assets/team/愷/啊海/《阿海》 _ 國立臺灣藝術大學廣播電視學系日間部107級畢業製作 12-14 screenshot.png',
              'assets/team/愷/啊海/《阿海》 _ 國立臺灣藝術大學廣播電視學系日間部107級畢業製作 13-4 screenshot.png',
              'assets/team/愷/啊海/《阿海》 _ 國立臺灣藝術大學廣播電視學系日間部107級畢業製作 15-3 screenshot.png',
              'assets/team/愷/啊海/《阿海》 _ 國立臺灣藝術大學廣播電視學系日間部107級畢業製作 17-23 screenshot.png'
            ]
          }
        ]
      },

       {
        category: 'mv',

        items: [

          {
            slug: 'your voice',
            title: '你說話的聲音好細 (Official Music Video) ',
            image: 'assets/team/愷/你說話/VS--YouTube-65JOYCE-OfficialMusicVideo-YouTube-0’06”.jpg',
            year: '2025',
            client: 'JOYCE 就以斯',

            media: {
              type: 'video',
              url: 'https://www.youtube.com/embed/watch?v=Fios3qLinkk&list=RDFios3qLinkk&start_radio=1'
            },

            description:
              '',

            credits: [
              'Director｜saltting',
              'DOP｜范峻愷',
              'Producer｜Strawberry',
            ],

            gallery: [
              'assets/team/愷/你說話/VS--YouTube-65JOYCE-OfficialMusicVideo-YouTube-0’23”.jpg',
              'assets/team/愷/你說話/VS--YouTube-65JOYCE-OfficialMusicVideo-YouTube-1’42”.jpg',
               'assets/team/愷/你說話/VS--YouTube-65JOYCE-OfficialMusicVideo-YouTube-2’25”.jpg',
               'assets/team/愷/你說話/VS--YouTube-65JOYCE-OfficialMusicVideo-YouTube-3’18”.jpg',
               'assets/team/愷/你說話/VS--YouTube-65JOYCE-OfficialMusicVideo-YouTube-3’56”.jpg',
               'assets/team/愷/你說話/VS--YouTube-65JOYCE-OfficialMusicVideo-YouTube-4’40”.jpg',
               'assets/team/愷/你說話/VS--YouTube-65JOYCE-OfficialMusicVideo-YouTube-4’45”.jpg',
               'assets/team/愷/你說話/VS--YouTube-65JOYCE-OfficialMusicVideo-YouTube-5’26”.jpg'
            ]
          },

          {
            slug: 'Right Here',
            title: 'SherryZ 鄭雙雙 × 鄭宜農 Enno Cheng〈Right Here〉',
            image: 'assets/team/張恩ㄐㄩ/right here/VS--YouTube-53SherryZEnnoChengRightHere-YouTube-0’27”.jpg',
            year: '2025',
            client: '北流五週年音樂共創計畫',

            media: {
              type: 'video',
              url: 'https://www.youtube.com/embed/watch?v=hmP32hirkHE&list=RDhmP32hirkHE&start_radio=1'
            },

            description:
              '在電氣編制的襯托下，SherryZ 鄭雙雙以張力十足的嗓音，不僅展現對 R&B 轉音的駕馭，更以華語與英語交替演唱，唱出節奏分明、個性鮮明的都會女性韻味；鄭宜農則以爵士和弦鋪陳，結合溫潤細膩的臺語語感，詮釋內斂且深沉的情感層次。這首歌詮釋出兩種截然不同的女性氣質：一方憑直覺創作，展現靈魂樂的律動與當代 R&B 的前衛；另一方則以成人當代音樂的感性與哲思交織，描繪內在世界。',

            credits: [
              'Production Company｜',
              '眉角映像社',
              'Director｜Saltting',
              'DOP｜范峻愷',
              'B Cam｜施濬晨',
              'GAFFER｜張恩郡'
            ],

            gallery: [
              'assets/team/張恩ㄐㄩ/right here/VS--YouTube-53SherryZEnnoChengRightHere-YouTube-0’38”.jpg',
              'assets/team/張恩ㄐㄩ/right here/VS--YouTube-53SherryZEnnoChengRightHere-YouTube-0’57”.jpg',
              'assets/team/張恩ㄐㄩ/right here/VS--YouTube-53SherryZEnnoChengRightHere-YouTube-1’12”.jpg',
              'assets/team/張恩ㄐㄩ/right here/VS--YouTube-53SherryZEnnoChengRightHere-YouTube-1’28”.jpg',
              'assets/team/張恩ㄐㄩ/right here/VS--YouTube-53SherryZEnnoChengRightHere-YouTube-1’48”.jpg',
              'assets/team/張恩ㄐㄩ/right here/VS--YouTube-53SherryZEnnoChengRightHere-YouTube-1’59”.jpg',
              'assets/team/張恩ㄐㄩ/right here/VS--YouTube-53SherryZEnnoChengRightHere-YouTube-2’50”.jpg'             
            ]
          },

          {
            slug: 'Foggy',
            title: '林沛蕎 Lulu Lin《霧．忘我Foggy paradox 》Official Music Video',
            image: 'assets/team/張恩ㄐㄩ/霧忘我/VS--YouTube-53LuluLinFoggyparadoxOfficialMusicVideo-YouTube-0’13”.jpg',
            year: '2024',
            client: '林沛蕎',

            media: {
              type: 'video',
              url: 'https://www.youtube.com/embed/watch?v=PEM9ZOW5eig&list=RDPEM9ZOW5eig&start_radio=1'
            },

            description:
              'MV概念以夢為主軸，模糊、神秘又清晰，導演將世界觀設定是一個大意識體，而Deja Vu代表意識連結點，在時間軸上的某一刻人與人意識會相連，入境夢中探索進入潛意識挖掘，就像走進一個迴圈，永遠都是冰山一角，看不完也看不清，好似水中倒影，琉璃波光卻感受不了平靜，只有光影總是真實，追尋光影繞著，又回到原地，而旅程的意義，只是等待真實的他，將這張臉填滿，用Deja vu滿足期望預知未來的潛意識。',

            credits: [
              'Production Company｜',
              '非常口影像製作有限公司',
              'Director｜KSW',
              'DOP｜范峻愷',
              'GAFFER｜張恩郡'
            ],

            gallery: [
              'assets/team/張恩ㄐㄩ/霧忘我/VS--YouTube-53LuluLinFoggyparadoxOfficialMusicVideo-YouTube-0’33”.jpg',
              'assets/team/張恩ㄐㄩ/霧忘我/VS--YouTube-53LuluLinFoggyparadoxOfficialMusicVideo-YouTube-0’56”.jpg',
              'assets/team/張恩ㄐㄩ/霧忘我/VS--YouTube-53LuluLinFoggyparadoxOfficialMusicVideo-YouTube-1’17”.jpg',
              'assets/team/張恩ㄐㄩ/霧忘我/VS--YouTube-53LuluLinFoggyparadoxOfficialMusicVideo-YouTube-1’34”.jpg',
              'assets/team/張恩ㄐㄩ/霧忘我/VS--YouTube-53LuluLinFoggyparadoxOfficialMusicVideo-YouTube-1’56”.jpg',
              'assets/team/張恩ㄐㄩ/霧忘我/VS--YouTube-53LuluLinFoggyparadoxOfficialMusicVideo-YouTube-3’02”.jpg',
              'assets/team/張恩ㄐㄩ/霧忘我/VS--YouTube-53LuluLinFoggyparadoxOfficialMusicVideo-YouTube-3’05”.jpg',
              'assets/team/張恩ㄐㄩ/霧忘我/VS--YouTube-53LuluLinFoggyparadoxOfficialMusicVideo-YouTube-3’59”.jpg',
              'assets/team/張恩ㄐㄩ/霧忘我/VS--YouTube-53LuluLinFoggyparadoxOfficialMusicVideo-YouTube-4’03”.jpg'
            ]
          },

          {
            slug: 'Right Here',
            title: '你給過我的快樂 (Official Music Video)',
            image: 'assets/team/愷/你給過/VS--YouTube-65WhoCares-OfficialMusicVideo-YouTube-0’04”.jpg',
            year: '2022',
            client: 'Who Cares 胡凱兒',

            media: {
              type: 'video',
              url: 'https://www.youtube.com/embed/watch?v=9eoRMHQ2dyA&list=RD9eoRMHQ2dyA&start_radio=1'
            },

            description:
              '',

            credits: [
              'Director｜Saltting',
              'DOP｜范峻愷'
            ],

            gallery: [
              'assets/team/愷/你給過/VS--YouTube-65WhoCares-OfficialMusicVideo-YouTube-0’26”.jpg',
              'assets/team/愷/你給過/VS--YouTube-65WhoCares-OfficialMusicVideo-YouTube-1’01”.jpg',
              'assets/team/愷/你給過/VS--YouTube-65WhoCares-OfficialMusicVideo-YouTube-1’10”.jpg',
              'assets/team/愷/你給過/VS--YouTube-65WhoCares-OfficialMusicVideo-YouTube-1’19”.jpg',
              'assets/team/愷/你給過/VS--YouTube-65WhoCares-OfficialMusicVideo-YouTube-1’54”.jpg',
              'assets/team/愷/你給過/VS--YouTube-65WhoCares-OfficialMusicVideo-YouTube-1’58”.jpg',
              'assets/team/愷/你給過/VS--YouTube-65WhoCares-OfficialMusicVideo-YouTube-2’25”.jpg',
              'assets/team/愷/你給過/VS--YouTube-65WhoCares-OfficialMusicVideo-YouTube-3’08”.jpg',
              'assets/team/愷/你給過/VS--YouTube-65WhoCares-OfficialMusicVideo-YouTube-3’18” (1).jpg',
              'assets/team/愷/你給過/VS--YouTube-65WhoCares-OfficialMusicVideo-YouTube-4’35”.jpg'
            ]
          }
        ]
      }, 

      {
        category: 'commercial',

        items: [

          {
            slug: 'NSRUN',
            title: '2026 NSRUN南山人壽半程馬拉松 | 形象影片',
            image: 'assets/team/愷/商案/VS--YouTube-692026NSRUN-YouTube-0’25”.jpg',
            year: '2026',
            client: '南山人壽',

            media: {
              type: 'video',
              url: 'https://www.youtube.com/embed/watch?v=wbYuImxpkhM'
            },

            description:
              '',

            credits: [
              'Production Company｜',
              '伏流創意',
              'Director｜王冠紳',
              'DOP｜范峻愷'
            ],

            gallery: [
            ]
          },

          {
            slug: 'cpsh',
            title: '2025誠品生活週年慶｜Let's Go!氣場全開｜氣場全開篇10s',
            image: 'assets/team/愷/商案/VS--YouTube-692025LetsGo10s-YouTube-0’00”.jpg',
            year: '2025',
            client: '',

            media: {
              type: 'video',
              url: 'https://www.youtube.com/embed/watch?v=zr90Aa_sqN8'
            },

            description:
              '',

            credits: [
              'Production Company｜',
              '非常口影像製作有限公司',
              'Director｜王冠紳',
              'DOP｜范峻愷'
            ],

            gallery: [
            ]
          },

          {
            slug: 'cpsh2',
            title: '2025誠品生活週年慶｜ Let's Go!氣場全開｜氣場低迷篇10s',
            image: 'assets/team/愷/商案/VS--YouTube-692025LetsGo10s-YouTube-0’04” (2).jpg',
            year: '2025',
            client: '',

            media: {
              type: 'video',
              url: 'https://www.youtube.com/embed/watch?v=pe4pCwBKa3E'
            },

            description:
              '',

            credits: [
              'Production Company｜',
              '非常口影像製作有限公司',
              'Director｜王冠紳',
              'DOP｜范峻愷'
            ],

            gallery: [
            ]
          },

          {
            slug: 'line',
            title: 'HAND X Zhen Li【平行線】(Official Music Video )',
            image: 'assets/projects/rog.jpg',
            year: '2026',
            client: 'Client Name',

            media: {
              type: 'video',
              url: 'https://www.youtube.com/embed/影片ID'
            },

            description:
              '這裡填寫這支作品的介紹與王冠紳在作品中負責的內容。',

            credits: [
              'Director｜王冠紳',
              'DOP｜王冠紳'
            ],

            gallery: [
              'assets/team/works/qu-hong-gan-la-01.jpg',
              'assets/team/works/qu-hong-gan-la-02.jpg'
            ]
          }

        ]
      }

    ]
  },


  {
    slug: 'En-Chun-Chang',
    name: '張恩郡',
    role: 'DOP / Gaffer',
    image: 'assets/team/張恩郡頭貼.jpg',

    description:
      'DOP / Gaffer',

    works: [

      {
        category: 'narrative',

        items: [

          {
            slug: 'LNN',
            title: '一場年夜的剖析',
            image: 'assets/team/張恩ㄐㄩ/年夜/VS--YouTube-53-YouTube-23’31”.jpg',
            year: '2026',
            client: '世新大學廣電系畢業製作',

            media: {
              type: 'image',
              url: 'assets/team/張恩ㄐㄩ/年夜/VS--YouTube-53-YouTube-23’31”.jpg'
            },

            description:
              '世新大學廣電系畢業製作',

            credits: [
              'Director｜李寬九',
              'Poducer｜莊玉琳',
              'Dop｜張恩郡',
              'Gaffer｜胡建翔',
              'Colorist｜范峻愷',
            ],

            gallery: [
              'assets/team/張恩ㄐㄩ/年夜/VS--YouTube-53-YouTube-1’11”.jpg',
              'assets/team/張恩ㄐㄩ/年夜/VS--YouTube-53-YouTube-9’07”.jpg',
              'assets/team/張恩ㄐㄩ/年夜/VS--YouTube-53-YouTube-12’03”.jpg',
              'assets/team/張恩ㄐㄩ/年夜/VS--YouTube-53-YouTube-12’30”.jpg',
              'assets/team/張恩ㄐㄩ/年夜/VS--YouTube-53-YouTube-12’34”.jpg',
              'assets/team/張恩ㄐㄩ/年夜/VS--YouTube-53-YouTube-14’45”.jpg',
              'assets/team/張恩ㄐㄩ/年夜/VS--YouTube-53-YouTube-15’23”.jpg',
              'assets/team/張恩ㄐㄩ/年夜/VS--YouTube-53-YouTube-18’31”.jpg',
              'assets/team/張恩ㄐㄩ/年夜/VS--YouTube-53-YouTube-21’58”.jpg',
              'assets/team/張恩ㄐㄩ/年夜/VS--YouTube-53-YouTube-22’55”.jpg'
            ]
          },

          {
            slug: 'dress',
            title: '裙擺',
            image: 'assets/team/張恩ㄐㄩ/裙擺/VS--YouTube-53rollcard-YouTube-19’27”.jpg',
            year: '2024',
            client: '世新大學廣電系畢業製作',

            media: {
              type: 'image',
              url: 'assets/team/張恩ㄐㄩ/裙擺/VS--YouTube-53rollcard-YouTube-19’27”.jpg'
            },

            description:
              '世新大學廣電系畢業製作',

            credits: [
              'Director｜明明',
              'Poducer｜吳晨希',
              'Dop｜張恩郡',
              'Gaffer｜彭睦軒',
              'Colorist｜彭瑋淳',
            ],

            gallery: [
              'assets/team/張恩ㄐㄩ/裙擺/VS--YouTube-53rollcard-YouTube-0’21”.jpg',
              'assets/team/張恩ㄐㄩ/裙擺/VS--YouTube-53rollcard-YouTube-1’04”.jpg',
              'assets/team/張恩ㄐㄩ/裙擺/VS--YouTube-53rollcard-YouTube-1’15”.jpg',
              'assets/team/張恩ㄐㄩ/裙擺/VS--YouTube-53rollcard-YouTube-4’25”.jpg',
              'assets/team/張恩ㄐㄩ/裙擺/VS--YouTube-53rollcard-YouTube-13’59”.jpg',
              'assets/team/張恩ㄐㄩ/裙擺/VS--YouTube-53rollcard-YouTube-14’21”.jpg',
              'assets/team/張恩ㄐㄩ/裙擺/VS--YouTube-53rollcard-YouTube-15’23”.jpg',
              'assets/team/張恩ㄐㄩ/裙擺/VS--YouTube-53rollcard-YouTube-16’17”.jpg',
              'assets/team/張恩ㄐㄩ/裙擺/VS--YouTube-53rollcard-YouTube-16’33”.jpg',
              'assets/team/張恩ㄐㄩ/裙擺/VS--YouTube-53rollcard-YouTube-17’56”.jpg',
              'assets/team/張恩ㄐㄩ/裙擺/VS--YouTube-53rollcard-YouTube-19’32”.jpg',
              'assets/team/張恩ㄐㄩ/裙擺/VS--YouTube-53rollcard-YouTube-20’22”.jpg'
            ]
          },

{
            slug: 'destroy me',
            title: 'Destroy me',
            image: 'assets/team/張恩ㄐㄩ/destroy me/VS--YouTube-53DestroyMe2-YouTube-0’10”.jpg',
            year: '2020',
            client: '16釐米底片',

            media: {
              type: 'video',
              type: 'image',
              url: 'assets/team/張恩ㄐㄩ/destroy me/VS--YouTube-53DestroyMe2-YouTube-0’10”.jpg'
            },

            description:
              '',

            credits: [
              'Director｜張恩郡',
              'Dop｜張恩郡',
            ],

            gallery: [
              'assets/team/張恩ㄐㄩ/destroy me/VS--YouTube-53DestroyMe2-YouTube-0’47”.jpg',
              'assets/team/張恩ㄐㄩ/destroy me/VS--YouTube-53DestroyMe2-YouTube-1’33”.jpg',
              'assets/team/張恩ㄐㄩ/destroy me/VS--YouTube-53DestroyMe2-YouTube-1’37”.jpg',
              'assets/team/張恩ㄐㄩ/destroy me/VS--YouTube-53DestroyMe2-YouTube-1’41”.jpg',
              'assets/team/張恩ㄐㄩ/destroy me/VS--YouTube-53DestroyMe2-YouTube-1’44”.jpg'
            ]
          },

{
            slug: 'superman',
            title: '甲蟲超人',
            image: 'assets/team/張恩ㄐㄩ/甲蟲超人/IMG_0319.jpg',
            year: '2023',
            client: '台灣藝術大學電影系畢業製作',

            media: {
              type: 'image',
              url: 'assets/team/張恩ㄐㄩ/甲蟲超人/IMG_0319.jpg'
            },

            description:
              '台灣藝術大學電影系畢業製作',

            credits: [
              'Director｜劉昱均',
              'Dop｜林立軒',
              'Gaffer｜張恩郡'
            ],

            gallery: [
             'assets/team/張恩ㄐㄩ/甲蟲超人/IMG_0317.jpg',
              'assets/team/張恩ㄐㄩ/甲蟲超人/IMG_0318.jpg',
              'assets/team/張恩ㄐㄩ/甲蟲超人/IMG_0320.jpg',
              'assets/team/張恩ㄐㄩ/甲蟲超人/IMG_0321.jpg',
              'assets/team/張恩ㄐㄩ/甲蟲超人/IMG_0322.jpg',
              'assets/team/張恩ㄐㄩ/甲蟲超人/IMG_0323.jpg',
              'assets/team/張恩ㄐㄩ/甲蟲超人/IMG_0324.jpg',
              'assets/team/張恩ㄐㄩ/甲蟲超人/IMG_0325.jpg',
              'assets/team/張恩ㄐㄩ/甲蟲超人/IMG_0326.jpg'

            ]
          }
        ]
      },

       {
        category: 'mv',

        items: [

          {
            slug: 'line',
            title: 'HAND X Zhen Li【平行線】(Official Music Video )',
            image: 'assets/team/張恩ㄐㄩ/平行線/HAND X Zhen Li【平行線】(Official Music Video ) 0-0 screenshot.png',
            year: '2021',
            client: 'ZEALOTS ENTERTAINMENT',

            media: {
              type: 'video',
              url: 'https://www.youtube.com/embed/watch?v=ZVkFtNRa8oA&list=RDZVkFtNRa8oA&start_radio=1'
            },

            description:
              '',

            credits: [
              'Director｜張恩郡',
              'DOP｜林立軒，張恩郡',
              'GAFFER｜古乃元',
            ],

            gallery: [
              'assets/team/張恩ㄐㄩ/平行線/HAND X Zhen Li【平行線】(Official Music Video ) 0-0 screenshot.png',
              'assets/team/張恩ㄐㄩ/平行線/HAND X Zhen Li【平行線】(Official Music Video ) 0-3 screenshot.png',
              'assets/team/張恩ㄐㄩ/平行線/HAND X Zhen Li【平行線】(Official Music Video ) 0-30 screenshot.png',
              'assets/team/張恩ㄐㄩ/平行線/HAND X Zhen Li【平行線】(Official Music Video ) 1-5 screenshot.png',
              'assets/team/張恩ㄐㄩ/平行線/HAND X Zhen Li【平行線】(Official Music Video ) 1-43 screenshot.png',
              'assets/team/張恩ㄐㄩ/平行線/HAND X Zhen Li【平行線】(Official Music Video ) 1-57 screenshot.png',
              'assets/team/張恩ㄐㄩ/平行線/HAND X Zhen Li【平行線】(Official Music Video ) 2-6 screenshot.png'
            ]
          },

          {
            slug: 'Foggy',
            title: '林沛蕎 Lulu Lin《霧．忘我Foggy paradox 》Official Music Video',
            image: 'assets/team/張恩ㄐㄩ/霧忘我/VS--YouTube-53LuluLinFoggyparadoxOfficialMusicVideo-YouTube-0’13”.jpg',
            year: '2024',
            client: '林沛蕎',

            media: {
              type: 'video',
              url: 'https://www.youtube.com/embed/watch?v=PEM9ZOW5eig&list=RDPEM9ZOW5eig&start_radio=1'
            },

            description:
              'MV概念以夢為主軸，模糊、神秘又清晰，導演將世界觀設定是一個大意識體，而Deja Vu代表意識連結點，在時間軸上的某一刻人與人意識會相連，入境夢中探索進入潛意識挖掘，就像走進一個迴圈，永遠都是冰山一角，看不完也看不清，好似水中倒影，琉璃波光卻感受不了平靜，只有光影總是真實，追尋光影繞著，又回到原地，而旅程的意義，只是等待真實的他，將這張臉填滿，用Deja vu滿足期望預知未來的潛意識。',

            credits: [
              'Production Company｜',
              '非常口影像製作有限公司',
              'Director｜KSW',
              'DOP｜范峻愷',
              'GAFFER｜張恩郡'
            ],

            gallery: [
              'assets/team/張恩ㄐㄩ/霧忘我/VS--YouTube-53LuluLinFoggyparadoxOfficialMusicVideo-YouTube-0’33”.jpg',
              'assets/team/張恩ㄐㄩ/霧忘我/VS--YouTube-53LuluLinFoggyparadoxOfficialMusicVideo-YouTube-0’56”.jpg',
              'assets/team/張恩ㄐㄩ/霧忘我/VS--YouTube-53LuluLinFoggyparadoxOfficialMusicVideo-YouTube-1’17”.jpg',
              'assets/team/張恩ㄐㄩ/霧忘我/VS--YouTube-53LuluLinFoggyparadoxOfficialMusicVideo-YouTube-1’34”.jpg',
              'assets/team/張恩ㄐㄩ/霧忘我/VS--YouTube-53LuluLinFoggyparadoxOfficialMusicVideo-YouTube-1’56”.jpg',
              'assets/team/張恩ㄐㄩ/霧忘我/VS--YouTube-53LuluLinFoggyparadoxOfficialMusicVideo-YouTube-3’02”.jpg',
              'assets/team/張恩ㄐㄩ/霧忘我/VS--YouTube-53LuluLinFoggyparadoxOfficialMusicVideo-YouTube-3’05”.jpg',
              'assets/team/張恩ㄐㄩ/霧忘我/VS--YouTube-53LuluLinFoggyparadoxOfficialMusicVideo-YouTube-3’59”.jpg',
              'assets/team/張恩ㄐㄩ/霧忘我/VS--YouTube-53LuluLinFoggyparadoxOfficialMusicVideo-YouTube-4’03”.jpg'
            ]
          },

          {
            slug: 'Right Here',
            title: 'SherryZ 鄭雙雙 × 鄭宜農 Enno Cheng〈Right Here〉',
            image: 'assets/team/張恩ㄐㄩ/right here/VS--YouTube-53SherryZEnnoChengRightHere-YouTube-0’27”.jpg',
            year: '2025',
            client: '北流五週年音樂共創計畫',

            media: {
              type: 'video',
              url: 'https://www.youtube.com/embed/watch?v=hmP32hirkHE&list=RDhmP32hirkHE&start_radio=1'
            },

            description:
              '在電氣編制的襯托下，SherryZ 鄭雙雙以張力十足的嗓音，不僅展現對 R&B 轉音的駕馭，更以華語與英語交替演唱，唱出節奏分明、個性鮮明的都會女性韻味；鄭宜農則以爵士和弦鋪陳，結合溫潤細膩的臺語語感，詮釋內斂且深沉的情感層次。這首歌詮釋出兩種截然不同的女性氣質：一方憑直覺創作，展現靈魂樂的律動與當代 R&B 的前衛；另一方則以成人當代音樂的感性與哲思交織，描繪內在世界。',

            credits: [
              'Production Company｜',
              '眉角映像社',
              'Director｜Saltting',
              'DOP｜范峻愷',
              'B Cam｜施濬晨',
              'GAFFER｜張恩郡'
            ],

            gallery: [
              'assets/team/張恩ㄐㄩ/right here/VS--YouTube-53SherryZEnnoChengRightHere-YouTube-0’38”.jpg',
              'assets/team/張恩ㄐㄩ/right here/VS--YouTube-53SherryZEnnoChengRightHere-YouTube-0’57”.jpg',
              'assets/team/張恩ㄐㄩ/right here/VS--YouTube-53SherryZEnnoChengRightHere-YouTube-1’12”.jpg',
              'assets/team/張恩ㄐㄩ/right here/VS--YouTube-53SherryZEnnoChengRightHere-YouTube-1’28”.jpg',
              'assets/team/張恩ㄐㄩ/right here/VS--YouTube-53SherryZEnnoChengRightHere-YouTube-1’48”.jpg',
              'assets/team/張恩ㄐㄩ/right here/VS--YouTube-53SherryZEnnoChengRightHere-YouTube-1’59”.jpg',
              'assets/team/張恩ㄐㄩ/right here/VS--YouTube-53SherryZEnnoChengRightHere-YouTube-2’50”.jpg'             
            ]
          },

          {
            slug: 'fearless',
            title: '慣性成癮 Inertial Addiction - 餘生 Fearless feat.ann.dj0nt（Official Music Video）',
            image: 'assets/team/張恩ㄐㄩ/餘生/IMG_0280.jpg',
            year: '2022',
            client: '慣性成癮',

            media: {
              type: 'video',
              url: 'https://www.youtube.com/embed/watch?v=bZ4pPWiDIM0&list=RDbZ4pPWiDIM0&start_radio=1'
            },

            description:
              '',

            credits: [
              'Director｜Lusha Wang',
              'DOP｜范峻愷',
              'GAFFER｜張恩郡'
            ],

            gallery: [
              'assets/team/張恩ㄐㄩ/餘生/IMG_0274.jpg',
              'assets/team/張恩ㄐㄩ/餘生/IMG_0275.jpg',
              'assets/team/張恩ㄐㄩ/餘生/IMG_0277.jpg',
              'assets/team/張恩ㄐㄩ/餘生/IMG_0278.jpg',
              'assets/team/張恩ㄐㄩ/餘生/IMG_0279.jpg',
              'assets/team/張恩ㄐㄩ/餘生/IMG_0281.jpg',
              'assets/team/張恩ㄐㄩ/餘生/IMG_0282.jpg',
              'assets/team/張恩ㄐㄩ/餘生/IMG_0283.jpg'
              
            ]
          }


        ]
      },

      {
        category: 'commercial',

        items: [

          {
            slug: 'line',
            title: 'HAND X Zhen Li【平行線】(Official Music Video )',
            image: 'assets/projects/rog.jpg',
            year: '2026',
            client: 'Client Name',

            media: {
              type: 'video',
              url: 'https://www.youtube.com/embed/影片ID'
            },

            description:
              '這裡填寫這支作品的介紹與王冠紳在作品中負責的內容。',

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
            slug: 'line',
            title: 'HAND X Zhen Li【平行線】(Official Music Video )',
            image: 'assets/projects/rog.jpg',
            year: '2026',
            client: 'Client Name',

            media: {
              type: 'video',
              url: 'https://www.youtube.com/embed/影片ID'
            },

            description:
              '這裡填寫這支作品的介紹與王冠紳在作品中負責的內容。',

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
            slug: 'line',
            title: 'HAND X Zhen Li【平行線】(Official Music Video )',
            image: 'assets/projects/rog.jpg',
            year: '2026',
            client: 'Client Name',

            media: {
              type: 'video',
              url: 'https://www.youtube.com/embed/影片ID'
            },

            description:
              '這裡填寫這支作品的介紹與王冠紳在作品中負責的內容。',

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
            slug: 'line',
            title: 'HAND X Zhen Li【平行線】(Official Music Video )',
            image: 'assets/projects/rog.jpg',
            year: '2026',
            client: 'Client Name',

            media: {
              type: 'video',
              url: 'https://www.youtube.com/embed/影片ID'
            },

            description:
              '這裡填寫這支作品的介紹與王冠紳在作品中負責的內容。',

            credits: [
              'Director｜王冠紳',
              'DOP｜王冠紳'
            ],

            gallery: [
              'assets/team/works/qu-hong-gan-la-01.jpg',
              'assets/team/works/qu-hong-gan-la-02.jpg'
            ]
          }

        ]
      }

    ]
  }

];
