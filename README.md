# ATELIER VANCE — Fine Art & Editorial Photography

An editorial hero section built for a bespoke photography atelier. Crafted with authentic 35mm film aesthetics, natural directional lighting, real human emotion, and refined typography.

Live Repository: [https://github.com/ejiroekuruemu-ai/photography-work](https://github.com/ejiroekuruemu-ai/photography-work)

---

## 🎨 Visual Identity & Palette

- **General Background**: Soft, airy pale purple (`#F6EFF9` / `#EFE4F5`) with ambient radial glows.
- **Primary Buttons**: Regal dark purple (`#280C42` / hover `#19052C`) with subtle elevation.
- **Secondary Buttons**: Elegant lilac (`#D9B8E4` / hover `#CC9FDC`, text `#23083B`).
- **Typography**: Google Fonts via `googleapis` — *Playfair Display*, *Cormorant Garamond* (editorial italic display), and *Plus Jakarta Sans* (refined UI & body).

---

## ✦ Core Features & Interactivity

1. **Authentic & Non-AI Aesthetic**:
   - Zero AI watermarks, plastic sheen, or synthetic artifacts.
   - Real, authentic photography (curated from Unsplash).
   - Real camera EXIF metadata (Leica M6, Hasselblad 500C/M, Kodak Portra 400, Ilford HP5 400).
2. **Interactive 3D Mouse Parallax**:
   - Moving your cursor over the center showcase card subtly tilts the image in 3D perspective (`perspective(1000px) rotateX(...) rotateY(...)`).
3. **Interactive Category Filter Tabs**:
   - Seamlessly switch between *Editorial & Fashion*, *Intimate Portraits*, *35mm Film Stories*, and *Documentary Weddings* with a shutter flash transition.
4. **Photographer's Viewfinder HUD Mode**:
   - Toggle an authentic camera viewfinder with Rule-of-Thirds grid lines, focus brackets, crosshairs, camera metrics, and live exposure meter.
5. **Tactile Analog Film Grain Overlay**:
   - Toggle organic 35mm film grain on/off directly from the navigation bar.
6. **In-Browser Shutter Sound (Web Audio API)**:
   - Synthesizes an authentic mechanical leaf-shutter click using Web Audio API oscillators and noise buffers without any external audio dependencies.
7. **Full-Resolution Lightbox**:
   - Inspect full-screen master prints alongside detailed camera gear, film emulsion, exposure, and story notes.
8. **Interactive Booking / Commission Modal**:
   - Clean pale-purple inquiry modal with responsive form inputs and instant confirmation.
9. **Showreel Video Modal**:
   - High-definition analog film showreel preview.
10. **Fully Responsive**:
    - Mobile drawer navigation and optimized touch layouts across all device sizes.

---

## 🚀 Running Locally

You can run this project locally without any dependencies:

```bash
# Option 1: Using Node.js
node server.js
# Visit http://localhost:3000

# Option 2: Open directly
# Open index.html in any modern browser
```

---

## 🌐 Deploying to GitHub Pages

1. Go to your GitHub repository: [photography-work](https://github.com/ejiroekuruemu-ai/photography-work).
2. Click **Settings** > **Pages**.
3. Under **Branch**, select `main` and folder `/ (root)`.
4. Click **Save**. Your site will be live at `https://ejiroekuruemu-ai.github.io/photography-work/` in ~1-2 minutes!
