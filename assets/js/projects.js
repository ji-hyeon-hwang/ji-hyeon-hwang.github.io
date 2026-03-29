async function renderProjects() {
  const container = document.getElementById('proj-grid');
  if (!container) return;

  let projects;
  try {
    const res = await fetch('data/projects.json');
    projects = await res.json();
  } catch (e) {
    container.innerHTML = '<p style="color:var(--text-muted)">Failed to load projects.</p>';
    return;
  }

  projects.forEach(proj => {
    const href = proj.page || proj.external_link || '#';
    const isExternal = !proj.page && proj.external_link;

    const card = document.createElement('a');
    card.className = 'proj-card';
    card.href = href;
    if (isExternal) { card.target = '_blank'; card.rel = 'noopener'; }

    // Thumbnail
    let thumbHtml = '';
    if (proj.thumbnail) {
      if (proj.thumbnail_type === 'video') {
        thumbHtml = `<video src="${proj.thumbnail}" autoplay muted loop playsinline></video>`;
      } else {
        thumbHtml = `<img src="${proj.thumbnail}" alt="${proj.title}" loading="lazy">`;
      }
    } else {
      thumbHtml = `<div class="proj-thumb-placeholder">No preview</div>`;
    }

    const tags = proj.tags.map(t => `<span class="proj-tag">${t}</span>`).join('');
    const arrowLabel = isExternal ? 'Visit →' : 'View Project →';

    card.innerHTML = `
      <div class="proj-thumb">${thumbHtml}</div>
      <div class="proj-body">
        <h3 class="proj-title">${proj.title}</h3>
        <p class="proj-desc">${proj.short_desc}</p>
        <div class="proj-tags">${tags}</div>
        <span class="proj-arrow">${arrowLabel}</span>
      </div>
    `;

    container.appendChild(card);
  });
}

renderProjects();
