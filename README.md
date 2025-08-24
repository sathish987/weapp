# Modern Starter Website

A clean, responsive static site with dark mode and mobile navigation.

## Quick start

- Open `index.html` directly in your browser, or serve the folder locally.

### Serve locally (recommended)

From the project root (`/workspace`):

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Then visit `http://127.0.0.1:8000/` and open `index.html`.

## Features

- Responsive layout and grid
- Dark mode (system-aware + manual toggle)
- Accessible focus states and skip link
- Mobile nav with hamburger menu

## Customize

- Edit styles in `styles.css` (see CSS variables in `:root` and `.theme-dark`).
- Update content/sections in `index.html`.
- Tweak interactivity in `script.js`.

## Notes

- Theme preference is saved to `localStorage` under the `preferred-theme` key.
- No build tools required; this is plain HTML/CSS/JS.

# weapp