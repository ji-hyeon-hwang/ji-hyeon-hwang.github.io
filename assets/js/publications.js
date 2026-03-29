const BUTTON_LABELS = {
  paper: 'Paper',
  code: 'Code',
  poster: 'Poster',
  website: 'Website',
};

async function renderPublications() {
  const container = document.getElementById('pub-list');
  if (!container) return;

  let pubs;
  try {
    const res = await fetch('data/publications.json');
    pubs = await res.json();
  } catch (e) {
    container.innerHTML = '<p style="color:var(--text-muted)">Failed to load publications.</p>';
    return;
  }

  // Sort by date descending
  pubs.sort((a, b) => new Date(b.date) - new Date(a.date));

  const list = document.createElement('ul');
  list.className = 'pub-list';

  pubs.forEach(pub => {
    const item = document.createElement('li');
    item.className = 'pub-item';

    // Thumbnail
    const thumbDiv = document.createElement('div');
    thumbDiv.className = 'pub-thumb';
    if (pub.thumbnail) {
      if (pub.thumbnail_type === 'video') {
        thumbDiv.innerHTML = `<video src="${pub.thumbnail}" autoplay muted loop playsinline></video>`;
      } else {
        thumbDiv.innerHTML = `<img src="${pub.thumbnail}" alt="${pub.title}" loading="lazy">`;
      }
    } else {
      thumbDiv.innerHTML = `<div class="pub-thumb-placeholder">No image</div>`;
    }

    // Content
    const content = document.createElement('div');
    content.className = 'pub-content';

    // Title
    const title = document.createElement('h3');
    title.className = 'pub-title';
    title.textContent = pub.title;

    // Authors
    const authors = document.createElement('p');
    authors.className = 'pub-authors';
    authors.innerHTML = pub.authors.map(a =>
      a === pub.highlight_author ? `<span class="me">${a}</span>` : a
    ).join(', ');

    // Venue + award
    const venue = document.createElement('p');
    venue.className = 'pub-venue';
    venue.textContent = pub.venue;
    if (pub.award) {
      const badge = document.createElement('span');
      badge.className = 'pub-award';
      badge.textContent = '🏆 ' + pub.award;
      venue.appendChild(badge);
    }

    // Links
    const links = document.createElement('div');
    links.className = 'pub-links';
    Object.entries(pub.links).forEach(([key, url]) => {
      if (!url) return;
      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.rel = 'noopener';
      a.className = 'btn';
      a.textContent = BUTTON_LABELS[key] || key;
      links.appendChild(a);
    });

    content.append(title, authors, venue, links);
    item.append(thumbDiv, content);
    list.appendChild(item);
  });

  container.appendChild(list);
}

renderPublications();
