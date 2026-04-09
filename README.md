# Vastu Chitra Interactive

![Vastu Chitra Interactive](https://img.shields.io/badge/Vastu_Chitra-ArchViz_%26_Engine-E85D27?style=for-the-badge) ![Next.js](https://img.shields.io/badge/Next.js_14-black?style=for-the-badge&logo=next.js&logoColor=white) ![Three.js](https://img.shields.io/badge/three.js-black?style=for-the-badge&logo=three.js&logoColor=white) ![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)

A high-end architectural visualization and spatial storytelling studio platform. Specializing in Unreal Engine, 3D modeling, real-time rendering, and interactive installations.

---

## 📖 Summary

Vastu Chitra Interactive is a production-grade single-page application and interactive presentation platform built for conveying complex design concepts, spatial architecture, and game mechanics to high-end clients.

Powered by a seamlessly isolated **Next.js 14** App Router system, the site actively splits the marketing landing page (ArchViz, Unreal Engine capabilities) from the interactive deep-dive concept modules (Powerpoint-style WebGL wrappers).

Unlike traditional static portfolios, Vastu Chitra operates heavily on high-performance JavaScript animation stacks (GSAP) rather than CSS/Framer Motion, ensuring complex timing triggers and intersection-based storytelling are tightly controlled. The 3D mechanics are delivered through a bespoke raw `three.js` implementation, achieving complex particle mapping without the heavy overhead of fiber wrappers. 

---

## ✨ Features

### 🎮 Core Experiences
| Feature | Description |
|---------|-------------|
| **Interactive Concept Hub** | Dynamic `[slug]`-based presentation runner isolated from the main SPA, avoiding bundle-bloat. |
| **Three.js Particle Mesh** | A custom WebGL rotating particle mesh powering the Hero section with dynamic floating embers. |
| **GSAP Scroll Handlers** | High-performance intersection observers tied directly to timeline tweens for staggering components. |
| **Responsive Typography** | Fluid display clamping via CSS custom properties using *Space Grotesk* and *DM Sans*. |

### 🛠 Architecture & Management
| Feature | Description |
|---------|-------------|
| **Next.js Static Generation** | Concept viewers leverage `export const dynamicParams = false` to guarantee isolated SSG HTML rendering. |
| **Vanilla CSS Theming** | Extremely fast raw CSS data-attribute system removing the need for heavy Tailwind class bloat during runtime. |
| **Modular Slide Registry** | Presentations are lazily loaded via `React.lazy`, ensuring a 21-slide presentation pulls zero idle resources. |
| **Custom Hooks** | Abstracted interaction mechanisms via `useScrollReveal` and `useAnimatedCounter`. |

---

## 🏗 Architecture

### 🛠 Tech Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Framework** | Next.js 14 (App Router) | Unified static site generation and component server tree |
| **3D Rendering** | Three.js | Vanilla WebGL rendering for dynamic meshes |
| **Animation Core** | GSAP 3 | Dedicated timelines, scrollytelling, and staggered element reveals |
| **Styling** | Vanilla CSS Variable Injection | Extreme performance dark-mode styling with zero preflight overhead |
| **Typing** | TypeScript | Strict module boundaries matching presentation payloads |

---

## 📂 Project Structure

```text
VastuChitraInteractive/
│
├── public/
│   └── images/                       # ─── Static Assets ───
│       └── slides/                   # Exported deck frames for rendering
│
├── src/
│   ├── app/                          # ─── Next.js 14 Routing ───
│   │   ├── page.tsx                  # Landing (Hero → About → Work → Studio)
│   │   ├── layout.tsx                # App shell, Font injection (Space Grotesk)
│   │   └── concept/                  # Concept Hub Route
│   │       ├── page.tsx              # Card Grid Launcher
│   │       └── [slug]/page.tsx       # SSG dynamic SlideViewer runner
│   │
│   ├── components/                   # ─── Shared UI Primitives ───
│   │   ├── SlideViewer.tsx           # Interactive deck layout and engine
│   │   ├── Navbar.tsx                # Context-aware floating glass navigation
│   │   ├── ThemeToggle.tsx           # Global localStorage boundary switch
│   │   └── AnimatedCounter.tsx       # GSAP-driven requestAnimationFrame numbers
│   │
│   ├── hooks/                        # ─── Core Interaction Logic ───
│   │   └── useScrollReveal.ts        # Intersection observers for triggers
│   │
│   ├── lib/                          # ─── WebGL Integrations ───
│   │   └── three-scene.ts            # Vanilla canvas mesh particle builder
│   │
│   ├── sections/                     # ─── Homepage Modules ───
│   │   └── [Hero, About, Work]       # Segmented structural React components
│   │
│   ├── slides/                       # ─── Database ───
│   │   ├── game/                     # The Game presentation logic layers
│   │   └── projection/               # Projection Mapping slide payloads
│   │
│   └── styles/                       # ─── CSS Custom Properties ───
│       ├── globals.css               # Resets and baseline system variables
│       ├── theme.css                 # Dark / Light color token dictionaries
│       └── typography.css            # Fluid scale clamping mechanics
│
└── package.json                      # Dependency graph and build pipelines
```

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18+

### 2. Setup

```bash
# Clone repository
git clone https://github.com/YumiNoona/VastuChitraInteractive.git
cd VastuChitraInteractive

# Install dependencies
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

The application will be accessible at `http://localhost:3000`.

- **Landing Architecture:** `http://localhost:3000`
- **Concept Hub:** `http://localhost:3000/concept`

### 4. Build for Production

```bash
npm run build
npm start
```
*Note: Next.js will execute SSG functions during the build phase via internal Turpopack configurations to guarantee lightning-fast slide traversal.*

---

## 📝 License

License: **MIT**

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
