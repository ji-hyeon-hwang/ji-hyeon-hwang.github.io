# Jihyeon Hwang — Personal Site

Pure HTML/CSS/JS academic portfolio. No build step required.

## Structure

```
index.html           → Home (about, news, selected publications)
publications.html    → Full publication list (rendered from data/publications.json)
projects.html        → Project card grid (rendered from data/projects.json)
experience.html      → Research experience, education, awards
cv.html              → CV (PDF embed)

assets/css/main.css  → All styles
assets/js/main.js    → Navbar, dark mode
assets/js/publications.js → Renders publication list from JSON
assets/js/projects.js     → Renders project cards from JSON
assets/img/          → Images (avatar.jpg, pub/, proj/)
assets/pdf/          → PDF files (resume.pdf)

data/publications.json → Publication data
data/projects.json     → Project data

projects/            → Individual project pages
  bevsa/index.html
  point-cloud-seg/index.html
```

## How to update

### Add a publication
1. Edit `data/publications.json` — add a new entry following the existing format
2. Add a thumbnail image to `assets/img/pub/` (optional)
3. Push to `main`

### Add a project
1. Edit `data/projects.json` — add a new entry
2. Create `projects/your-project/index.html` (copy from an existing one)
3. Add thumbnail to `assets/img/proj/`
4. Push to `main`

### Update CV
- Replace `assets/pdf/resume.pdf`, OR
- In `cv.html`, update the iframe `src` to your Overleaf PDF URL:
  `https://www.overleaf.com/download/project/YOUR_PROJECT_ID/output/output.pdf`

### Connect Overleaf CV
1. Overleaf → Share → Turn on link sharing (Anyone with link can view)
2. Copy your project ID from the URL
3. In `cv.html`, change iframe src to:
   `https://www.overleaf.com/download/project/YOUR_PROJECT_ID/output/output.pdf`

## Deployment
Push to `main` → GitHub Actions deploys to `gh-pages` branch automatically.

**GitHub Pages settings** (one-time): Settings → Pages → Source: gh-pages branch / root
