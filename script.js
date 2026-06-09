const projects = [
  { title: 'ROG LUGGAGE', category: 'Commercial' },
  { title: 'TECH TRAIN', category: 'Art Direction' },
  { title: 'MUSIC VIDEO 01', category: 'Music Video' },
  { title: 'BRAND FILM', category: 'Commercial' },
  { title: 'DOCUMENTARY', category: 'Film' },
  { title: 'EVENT VISUAL', category: 'Event' }
]

const team = [
  { name: '廖宜宣', role: 'Creative / Art Direction' },
  { name: 'Team Member', role: 'Producer / Director' }
]

const projectGrid = document.querySelector('#projectGrid')
projectGrid.innerHTML = projects.map(project => `
  <article class="project-card">
    <div class="project-cover"></div>
    <h3>${project.title}</h3>
    <p>${project.category}</p>
  </article>
`).join('')

const teamGrid = document.querySelector('#teamGrid')
teamGrid.innerHTML = team.map(member => `
  <article class="team-card">
    <h3>${member.name}</h3>
    <p>${member.role}</p>
  </article>
`).join('')
