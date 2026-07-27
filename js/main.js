function $(q) {
  return document.querySelector(q);
}

function $all(q) {
  return [...document.querySelectorAll(q)];
}

function getParam(name) {
  return new URLSearchParams(location.search).get(name);
}


/* =========================
   ICONS
   ========================= */

function icon(name) {
  const icons = {
    ig: `
      <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8">
        <rect x="4" y="4" width="16" height="16" rx="5"/>
        <circle cx="12" cy="12" r="3.5"/>
        <circle cx="17" cy="7" r=".7" fill="currentColor"/>
      </svg>
    `,

    mail: `
      <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8">
        <path d="M4 6h16v12H4z"/>
        <path d="m4 7 8 6 8-6"/>
      </svg>
    `,

    yt: `
      <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8">
        <rect x="3" y="6" width="18" height="12" rx="3"/>
        <path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none"/>
      </svg>
    `
  };

  return icons[name] || '';
}


/* =========================
   GLOBAL LAYOUT
   ========================= */

function layout(active = '') {
  document.body.classList.remove(
    'home-page',
    'projects-page',
    'team-page',
    'showreel-page',
    'contact-page'
  );

  document.body.classList.add(
    `${active || 'site'}-page`
  );

  document.body.insertAdjacentHTML(
    'afterbegin',
    `
      <header class="header">

        <a class="brand" href="index.html">
          <span class="brand-zh">非常口</span>
          <span class="brand-en">EXEET</span>
        </a>

        <button
          class="menu-toggle"
          type="button"
          aria-label="Open Menu"
        >
          ☰
        </button>

        <nav class="nav">
          <a href="projects.html">Projects</a>
          <a href="team.html">Team</a>
          <a href="showreel.html">Showreel</a>
          <a href="contact.html">Contact</a>
        </nav>

      </header>
    `
  );

  document.body.insertAdjacentHTML(
    'beforeend',
    `
      <div class="socials">

        <a
          href="${SITE.instagram}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          ${icon('ig')}
        </a>

        <a
          href="mailto:${SITE.email}"
          aria-label="Email"
        >
          ${icon('mail')}
        </a>

        <a
          href="${SITE.youtube}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          ${icon('yt')}
        </a>

      </div>
    `
  );

  const menuToggle = $('.menu-toggle');
  const nav = $('.nav');

  menuToggle?.addEventListener('click', () => {
    nav?.classList.toggle('open');
  });
}


/* =========================
   IMAGE FALLBACK
   ========================= */

function fallbackImage(img) {
  img.onerror = () => {
    const fallback = document.createElement('div');

    fallback.className = 'thumb';
    fallback.textContent = 'IMAGE';

    img.replaceWith(fallback);
  };
}


/* =========================
   CATEGORY HELPERS
   ========================= */

function getProjectCategoryLabel(categoryId) {
  return (
    CATEGORIES.find(category => category.id === categoryId)?.label ||
    categoryId ||
    ''
  );
}

function getWorkCategoryLabel(categoryId) {
  if (
    typeof WORK_CATEGORIES !== 'undefined' &&
    WORK_CATEGORIES[categoryId]
  ) {
    return WORK_CATEGORIES[categoryId];
  }

  return categoryId || '';
}


/* =========================
   PROJECT CARDS
   ========================= */

function renderProjects(container, list) {
  if (!container) {
    return;
  }

  container.innerHTML = list
    .map(project => {
      return `
        <a
          class="card"
          href="project.html?slug=${encodeURIComponent(project.slug)}"
        >

          <div class="thumb">
            <img
              src="${project.cover}"
              alt="${project.title}"
            >
          </div>

          <div class="card-info">
            <h3>${project.title}</h3>

            <div class="meta">
              ${getProjectCategoryLabel(project.category)}
              ${project.year ? ` / ${project.year}` : ''}
            </div>
          </div>

        </a>
      `;
    })
    .join('');

  $all('.thumb img').forEach(fallbackImage);
}


/* =========================
   HOME
   ========================= */

function initHome() {
  layout('home');
}


/* =========================
   PROJECTS
   ========================= */

function initProjects() {
  layout('projects');

  const category = getParam('category') || 'all';
  const filters = $('.filter');
  const projectsGrid = $('#projectsGrid');

  if (filters) {
    filters.innerHTML = `
      <a
        class="${category === 'all' ? 'active' : ''}"
        href="projects.html"
      >
        All
      </a>

      ${CATEGORIES.map(item => {
        return `
          <a
            class="${category === item.id ? 'active' : ''}"
            href="projects.html?category=${encodeURIComponent(item.id)}"
          >
            ${item.label}
          </a>
        `;
      }).join('')}
    `;
  }

  const filteredProjects =
    category === 'all'
      ? PROJECTS
      : PROJECTS.filter(project => {
          return project.category === category;
        });

  renderProjects(projectsGrid, filteredProjects);
}


/* =========================
   CATEGORIES
   ========================= */

function initCategories() {
  layout('projects');

  const categoryGrid = $('#categoryGrid');

  if (!categoryGrid) {
    return;
  }

  categoryGrid.innerHTML = CATEGORIES
    .map((category, index) => {
      return `
        <a
          class="category-card"
          href="projects.html?category=${encodeURIComponent(category.id)}"
        >

          <div class="num">
            ${String(index + 1).padStart(2, '0')}
          </div>

          <div>
            <h2>${category.label}</h2>
            <p class="muted">${category.zh}</p>
          </div>

          <div class="meta">
            View Projects →
          </div>

        </a>
      `;
    })
    .join('');
}


/* =========================
   PROJECT DETAIL
   ========================= */

function initProjectDetail() {
  layout('projects');

  const projectSlug = getParam('slug');

  const project =
    PROJECTS.find(item => item.slug === projectSlug) ||
    PROJECTS[0];

  if (!project) {
    document.querySelector('.page').innerHTML = `
      <h1 class="title">Project Not Found</h1>
      <a class="eyebrow" href="projects.html">Back →</a>
    `;
    return;
  }

  document.title = `${project.title} / EXEET`;

  const projectTitle = $('#projectTitle');
  const projectMeta = $('#projectMeta');
  const projectDesc = $('#projectDesc');
  const projectInfo = $('#projectInfo');

  if (projectTitle) {
    projectTitle.textContent = project.title || '';
  }

  if (projectMeta) {
    projectMeta.textContent = [
      getProjectCategoryLabel(project.category),
      project.year
    ]
      .filter(Boolean)
      .join(' / ');
  }

  if (projectDesc) {
    projectDesc.innerHTML = project.description || '';
  }

  if (projectInfo) {
    projectInfo.innerHTML = `
      <p>
        <span class="meta">Client</span><br>
        ${project.client || ''}
      </p>

      <p>
        <span class="meta">Year</span><br>
        ${project.year || ''}
      </p>

      <p>
        <span class="meta">Category</span><br>
        ${getProjectCategoryLabel(project.category)}
      </p>
    `;
  }

  // ========= Media =========

  const videoSection = document.getElementById(
    'projectVideoSection'
  );

  const videoIframe = document.getElementById(
    'projectVideo'
  );

  const imageSection = document.getElementById(
    'projectImageSection'
  );

  const imageElement = document.getElementById(
    'projectImage'
  );

  if (
    videoSection &&
    videoIframe &&
    imageSection &&
    imageElement
  ) {
    videoSection.hidden = true;
    imageSection.hidden = true;

    videoIframe.src = '';
    imageElement.src = '';
    imageElement.alt = '';

    if (project.media) {

      if (
        project.media.type === 'video' &&
        project.media.url
      ) {
        videoSection.hidden = false;
        videoIframe.src = project.media.url;
      }

      if (
        project.media.type === 'image' &&
        project.media.url
      ) {
        imageSection.hidden = false;

        imageElement.src = project.media.url;
        imageElement.alt = project.title || '';

        fallbackImage(imageElement);
      }

    }
  }

  // ========= Credits =========

  const creditContainer =
    document.getElementById('projectCredits');

  if (creditContainer) {

    if (
      project.credits &&
      project.credits.length
    ) {

      creditContainer.innerHTML = `
        <div class="eyebrow">
          Credits
        </div>

        <div class="member-project-credit-list">
          ${project.credits
            .map(item => `<div>${item}</div>`)
            .join('')}
        </div>
      `;

    } else {

      creditContainer.style.display = 'none';

    }

  }

 // ========= Gallery =========

const gallerySection = document.getElementById(
  'projectGallerySection'
);

const galleryContainer = document.getElementById(
  'projectGallery'
);

if (gallerySection && galleryContainer) {
  galleryContainer.innerHTML = '';

  const galleryImages = Array.isArray(project.gallery)
    ? project.gallery
    : [];

  console.log('目前作品：', project.title);
  console.log('Gallery 圖片：', galleryImages);

  if (galleryImages.length > 0) {
    // 強制解除隱藏
    gallerySection.hidden = false;
    gallerySection.style.display = 'block';

    galleryImages.forEach((imagePath, index) => {
      const figure = document.createElement('figure');

      figure.className = 'member-project-gallery-item';

      const image = document.createElement('img');

      image.src = imagePath;
      image.alt = `${project.title || 'Project'} ${index + 1}`;
      image.loading = 'lazy';

      image.onload = function () {
        console.log('圖片載入成功：', imagePath);
      };

      image.onerror = function () {
        console.error('圖片載入失敗：', imagePath);

        figure.innerHTML = `
          <div style="
            min-height:200px;
            padding:30px;
            display:flex;
            align-items:center;
            justify-content:center;
            border:1px solid rgba(184,246,216,.22);
            color:rgba(184,246,216,.65);
            text-align:center;
          ">
            Image not found:<br>
            ${imagePath}
          </div>
        `;
      };

      figure.appendChild(image);
      galleryContainer.appendChild(figure);
    });
  } else {
    gallerySection.style.display = 'none';
  }
}

}


/* =========================
   TEAM
   ========================= */

function initTeam() {
  layout('team');

  const teamGrid = $('#teamGrid');

  if (!teamGrid) {
    return;
  }

  teamGrid.innerHTML = TEAM
    .map(member => {
      return `
        <a
          class="card"
          href="member.html?slug=${encodeURIComponent(member.slug)}"
        >

          <div class="thumb">
            <img
              src="${member.image}"
              alt="${member.name}"
            >
          </div>

          <div class="card-info">
            <h3>${member.name}</h3>
            <div class="meta">${member.role || ''}</div>
          </div>

        </a>
      `;
    })
    .join('');

  $all('.team-grid .thumb img').forEach(fallbackImage);
}


/* =========================
   MEMBER DETAIL
   ========================= */

function initMember() {
  layout('team');

  const memberSlug = getParam('slug');

  const member = TEAM.find(item => {
    return item.slug === memberSlug;
  });

  if (!member) {
    document.querySelector('.page').innerHTML = `
      <h1 class="title">Member Not Found</h1>
      <a class="eyebrow" href="team.html">Back →</a>
    `;

    return;
  }

  document.title = `${member.name} / EXEET`;

  const memberRole = document.getElementById('memberRole');
  const memberName = document.getElementById('memberName');
  const memberImage = document.getElementById('memberImage');
  const memberDesc = document.getElementById('memberDesc');
  const worksContainer = document.getElementById('memberWorks');

  if (memberRole) {
    memberRole.textContent = member.role || '';
  }

  if (memberName) {
    memberName.textContent = member.name || '';
  }

  if (memberImage) {
    memberImage.src = member.image || '';
    memberImage.alt = member.name || 'Member';

    fallbackImage(memberImage);
  }

  if (memberDesc) {
    memberDesc.innerHTML = member.description || '';
  }

  if (!worksContainer) {
    return;
  }

  worksContainer.innerHTML = '';

  if (!member.works || member.works.length === 0) {
    worksContainer.innerHTML = `
      <p class="muted">No selected works yet.</p>
    `;

    return;
  }

  member.works.forEach(group => {
    if (!group.items || group.items.length === 0) {
      return;
    }

    const categorySection = document.createElement('section');

    categorySection.className = 'member-work-category';

    const categoryTitle = document.createElement('div');

    categoryTitle.className = 'member-work-category-title';

    categoryTitle.textContent =
      getWorkCategoryLabel(group.category);

    const categoryGrid = document.createElement('div');

    categoryGrid.className = 'member-work-category-grid';

    group.items.forEach(work => {
      const link = document.createElement('a');

      link.className = 'member-work-card';

      link.href =
        `member-project.html?member=${encodeURIComponent(member.slug)}` +
        `&work=${encodeURIComponent(work.slug)}`;

      const workMeta = [
        work.year,
        work.client
      ]
        .filter(Boolean)
        .join(' / ');

      link.innerHTML = `
        <div class="member-work-thumb">
          <img
            src="${work.image || ''}"
            alt="${work.title || 'Selected Work'}"
            loading="lazy"
          >
        </div>

        <div class="member-work-info">
          <h3>${work.title || ''}</h3>

          ${
            workMeta
              ? `<div class="meta">${workMeta}</div>`
              : ''
          }
        </div>
      `;

      categoryGrid.appendChild(link);
    });

    categorySection.appendChild(categoryTitle);
    categorySection.appendChild(categoryGrid);
    worksContainer.appendChild(categorySection);
  });

  $all('#memberWorks .member-work-thumb img').forEach(
    fallbackImage
  );
}


/* =========================
   SHOWREEL
   ========================= */

function initShowreel() {
  layout('showreel');

  const showreelFrame = $('#showreelFrame');
  const showreelTitle = $('#showreelTitle');
  const showreelDesc = $('#showreelDesc');

  if (showreelFrame) {
    showreelFrame.src = SITE.showreelUrl || '';
  }

  if (showreelTitle) {
    showreelTitle.textContent = SITE.showreelTitle || '';
  }

  if (showreelDesc) {
    showreelDesc.textContent =
      SITE.showreelDescription || '';
  }
}


/* =========================
   CONTACT
   ========================= */

function initContact() {
  layout('contact');

  const contactList = $('#contactList');

  if (!contactList) {
    return;
  }

  contactList.innerHTML = `
    <a
      class="contact-item"
      href="mailto:${SITE.email}"
    >
      <span>Email</span>
      <span>${SITE.email}</span>
    </a>

    <a
      class="contact-item"
      href="${SITE.instagram}"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>Instagram</span>
      <span>Open →</span>
    </a>

    <a
      class="contact-item"
      href="${SITE.youtube}"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>YouTube</span>
      <span>Open →</span>
    </a>

    <div class="contact-item">
      <span>Line ID</span>
      <span>${SITE.lineId}</span>
    </div>
  `;
}


/* =========================
   MEMBER PROJECT DETAIL
   ========================= */

function initMemberProject() {
  layout('team');

  const memberSlug = getParam('member');
  const workSlug = getParam('work');

  const member = TEAM.find(item => {
    return item.slug === memberSlug;
  });

  let work = null;
  let workCategory = '';

  if (member && Array.isArray(member.works)) {
    for (const group of member.works) {
      const foundWork = (group.items || []).find(item => {
        return item.slug === workSlug;
      });

      if (foundWork) {
        work = foundWork;
        workCategory = group.category || '';
        break;
      }
    }
  }

  if (!member || !work) {
    document.querySelector('.page').innerHTML = `
      <h1 class="title">Work Not Found</h1>
      <a class="eyebrow" href="team.html">Back →</a>
    `;

    return;
  }

  document.title =
    `${work.title} / ${member.name} / EXEET`;

  const projectTitle =
    document.getElementById('memberProjectTitle');

  const projectMeta =
    document.getElementById('memberProjectMeta');

  const projectBack =
    document.getElementById('memberProjectBack');

  const projectDescription =
    document.getElementById('memberProjectDescription');

  if (projectTitle) {
    projectTitle.textContent = work.title || '';
  }

  if (projectMeta) {
    projectMeta.textContent = [
      member.name,
      getWorkCategoryLabel(workCategory),
      work.year,
      work.client
    ]
      .filter(Boolean)
      .join(' / ');
  }

  if (projectBack) {
    projectBack.href =
      `member.html?slug=${encodeURIComponent(member.slug)}`;
  }

  if (projectDescription) {
    projectDescription.innerHTML =
      work.description || '';
  }

  renderMemberProjectMedia(work);
  renderMemberProjectCredits(work);
  renderMemberProjectGallery(work);
}


/* =========================
   MEMBER PROJECT MEDIA
   ========================= */

function renderMemberProjectMedia(work) {
  const videoSection = document.getElementById(
    'memberProjectVideoSection'
  );

  const videoIframe = document.getElementById(
    'memberProjectVideo'
  );

  const imageSection = document.getElementById(
    'memberProjectImageSection'
  );

  const imageElement = document.getElementById(
    'memberProjectImage'
  );

  if (!videoSection || !videoIframe) {
    return;
  }

  if (!imageSection || !imageElement) {
    return;
  }

  videoSection.hidden = true;
  imageSection.hidden = true;

  videoIframe.src = '';

  imageElement.src = '';
  imageElement.alt = '';

  if (!work.media) {
    return;
  }

  if (
    work.media.type === 'video' &&
    work.media.url
  ) {
    videoSection.hidden = false;
    videoIframe.src = work.media.url;

    return;
  }

  if (
    work.media.type === 'image' &&
    work.media.url
  ) {
    imageSection.hidden = false;
    imageElement.src = work.media.url;
    imageElement.alt =
      work.title || 'Work Image';

    fallbackImage(imageElement);
  }
}


/* =========================
   MEMBER PROJECT CREDITS
   ========================= */

function renderMemberProjectCredits(work) {
  const container = document.getElementById(
    'memberProjectCredits'
  );

  if (!container) {
    return;
  }

  container.innerHTML = '';

  if (!work.credits || work.credits.length === 0) {
    container.style.display = 'none';
    return;
  }

  container.style.display = '';

  container.innerHTML = `
    <div class="eyebrow">Credits</div>

    <div class="member-project-credit-list">
      ${work.credits
        .map(credit => {
          return `<div>${credit}</div>`;
        })
        .join('')}
    </div>
  `;
}


/* =========================
   MEMBER PROJECT GALLERY
   ========================= */

function renderMemberProjectGallery(work) {
  const section = document.getElementById(
    'memberProjectGallerySection'
  );

  const container = document.getElementById(
    'memberProjectGallery'
  );

  if (!section || !container) {
    return;
  }

  container.innerHTML = '';

  if (!work.gallery || work.gallery.length === 0) {
    section.style.display = 'none';
    return;
  }

  section.style.display = '';

  work.gallery.forEach(imagePath => {
    const figure = document.createElement('figure');

    figure.className =
      'member-project-gallery-item';

    figure.innerHTML = `
      <img
        src="${imagePath}"
        alt="${work.title || 'Work Image'}"
        loading="lazy"
      >
    `;

    container.appendChild(figure);
  });

  $all(
    '#memberProjectGallery .member-project-gallery-item img'
  ).forEach(fallbackImage);
}
