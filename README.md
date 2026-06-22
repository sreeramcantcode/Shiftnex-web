# Shiftnex — React + Tailwind Site

This project recreates the Shiftnex landing page layout (logo, hero, sections,
footer) using React + Vite + Tailwind CSS, fully responsive for mobile,
tablet, and desktop.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To build for production:

```bash
npm run build
```

## Adding your real images

All photos are currently gray placeholder SVGs at the exact aspect ratio
used in the design, located in `public/images/`. Replace them with your
real images using the same filenames below (you can use `.jpg`, `.png`, or
keep `.svg` — just update the `src` path's extension in the matching
component if you change the file type):

| File in `public/images/`     | Used in component        | Where it appears                  |
|-------------------------------|---------------------------|------------------------------------|
| `hero-car.svg`                | `Hero.jsx`                | Full-bleed hero car image          |
| `classic-car.svg`             | `WeAreShiftnex.jsx`       | Green classic car                  |
| `yellow-porsche.svg`          | `WhatWeCreate.jsx`       | Yellow Porsche                     |
| `fri-car.svg`                 | `FridaySection.jsx`      | Blue Porsche rear (FRI section)    |
| `grid-f1.svg`                 | `ImageGrid.jsx`          | Grid image 1 (F1 car)              |
| `grid-gt3.svg`                | `ImageGrid.jsx`          | Grid image 2 (green GT3)           |
| `grid-hypercar.svg`           | `ImageGrid.jsx`          | Grid image 3 (red hypercar)        |
| `manor.svg`                   | `ManorSection.jsx`       | Manor / garage building            |
| `logo-mark.svg`               | `Navbar.jsx`, `Footer.jsx`| "S" logo mark                      |

To switch a placeholder to a photo, e.g. for the hero:

1. Drop your file in `public/images/`, e.g. `hero-car.jpg`.
2. Open `src/components/Hero.jsx` and change:
   ```jsx
   src="/images/hero-car.svg"
   ```
   to:
   ```jsx
   src="/images/hero-car.jpg"
   ```

## Fonts

- **Jost** and **Bebas Neue** are loaded from Google Fonts (see `index.html`).
- **Leelawadee UI** is set as the body font with Jost as a fallback, since
  Leelawadee UI is a Microsoft system font without an open web-font version.
  It will render natively on Windows devices and fall back to Jost elsewhere.

## Structure

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    Tagline.jsx
    Stats.jsx
    WeAreShiftnex.jsx
    WhatWeCreate.jsx
    Digital.jsx
    FridaySection.jsx
    FridayQuote.jsx
    ProcessVision.jsx
    ImageGrid.jsx
    CoverEveryAngle.jsx
    ManorSection.jsx
    Footer.jsx
  App.jsx
  index.css
public/
  images/   <- replace placeholders here
```
