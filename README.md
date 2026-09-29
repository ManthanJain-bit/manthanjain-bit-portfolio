# Manthan Jain — 3D Portfolio World

An interactive, explorable 3D portfolio built with **Three.js**, styled as a cyberpunk/synthwave "world" instead of a traditional scrolling page. Visitors move through a 3D scene and interact with glowing cubes to open info panels for each section (About, Experience, Skills, Projects, Research, Contact).

**Live site:** https://manthanjain-bit.github.io/manthanjain-bit-portfolio/

## Features
- Fully 3D navigable scene (WASD + mouse look, or on-screen joysticks on mobile)
- Interactive cubes that open detailed info panels per section
- Day/Night mode toggle
- Resume viewer + direct PDF download
- Certificate viewer (NPTEL, Coursera, Alison)
- Ambient background music with toggle
- Responsive layout with dedicated mobile touch controls

## Tech Stack
- HTML5 / CSS3
- Vanilla JavaScript
- [Three.js](https://threejs.org/) (r128) for the 3D scene, loaded via CDN

## Project Structure
```
├── index.html          # Page markup
├── css/
│   └── style.css        # All styling (HUD, nav, panels, joysticks, etc.)
├── js/
│   └── main.js            # Scene setup, camera/movement, panel logic, UI interactions
└── assets/
    ├── profile-photo.png, welcome-photo.jpg
    ├── cube-*.jpg            # Textures for each interactive cube
    ├── resume.pdf, resume-page*.jpg
    └── certs/                 # Certification images
```

## Running Locally
Because the app loads assets via relative paths, open it through a local server rather than directly as a file:

```bash
git clone https://github.com/ManthanJain-bit/manthanjain-bit-portfolio.git
cd manthanjain-bit-portfolio
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## Controls
| Input | Action |
|---|---|
| W / A / S / D | Move |
| Mouse | Look around |
| E | Enter a cube / open its panel |
| Scroll | Scroll within an open panel |
| Enter | Exit panel (after reaching the end) |

On mobile, use the on-screen joysticks (left = move, right = look) and the **ENTER** button to interact.

## Author
**Manthan Jain (MJ)** — Computer Engineering student, Vidyalankar Institute of Technology, Mumbai.
