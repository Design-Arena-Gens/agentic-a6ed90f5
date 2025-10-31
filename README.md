## Wallpaper Type Curator

Curate interior wallpaper concepts with a responsive, filterable library of designer-inspired surface treatments. The app showcases each wallpaper type with imagery, palette swatches, finish and care metadata, and tailored styling notes.

### ✨ Features

- Filter by mood, room type, and material finish
- Instant search across names and descriptions
- Palette visualization with hex references
- Detail sidebar with finish, care, and styling guidance
- Responsive, Vercel-ready Next.js (App Router + Tailwind CSS)

### 🚀 Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to explore the catalog locally.

### 🧱 Project Structure

- `src/app/page.tsx` – main experience with filters, gallery, and detail view
- `src/data/wallpapers.ts` – curated wallpaper dataset and metadata helpers
- `src/components/` – presentation components for filters, cards, palettes, and details

### 🛠️ Available Scripts

- `npm run dev` – development server with hot reload
- `npm run build` – production build
- `npm run start` – start production server locally
- `npm run lint` – lint with Next.js + ESLint defaults

### 📦 Deployment

The project is optimized for Vercel deployment. Run:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-a6ed90f5
```

After deployment propagates, verify with:

```bash
curl https://agentic-a6ed90f5.vercel.app
```
