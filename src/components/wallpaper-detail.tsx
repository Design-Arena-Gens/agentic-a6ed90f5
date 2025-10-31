import { WallpaperType, moodLabels, useCaseLabels } from "@/data/wallpapers";
import { PaletteSwatch } from "@/components/palette-swatch";
import Image from "next/image";

type WallpaperDetailProps = {
  wallpaper: WallpaperType | null;
};

export function WallpaperDetail({ wallpaper }: WallpaperDetailProps) {
  if (!wallpaper) {
    return (
      <aside className="sticky top-6 h-fit rounded-3xl border border-dashed border-slate-300 bg-white/60 p-10 text-center text-slate-500">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Select a wallpaper</p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-700">See material insights here</h2>
        <p className="mt-3 text-sm leading-relaxed">
          Choose a wallpaper style to view finish details, recommended pairings, and installation tips tailored to that
          aesthetic.
        </p>
      </aside>
    );
  }

  return (
    <aside className="sticky top-6 flex h-fit flex-col gap-6 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-xl shadow-slate-900/5 backdrop-blur-md">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Material spec</p>
        <h2 className="text-3xl font-semibold text-slate-900">{wallpaper.name}</h2>
        <p className="text-sm leading-relaxed text-slate-600">{wallpaper.description}</p>
      </div>

      <div className="overflow-hidden rounded-2xl">
        <Image
          src={wallpaper.image}
          alt={wallpaper.name}
          width={640}
          height={420}
          className="h-auto w-full rounded-2xl object-cover"
        />
      </div>

      <div className="space-y-3">
        <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Palette</h3>
        <PaletteSwatch colors={wallpaper.palette} />
        <div className="grid grid-cols-2 gap-2 text-sm text-slate-600">
          {wallpaper.palette.map((color) => (
            <div key={color} className="rounded-xl border border-slate-200 bg-white/80 p-2">
              <div className="h-10 rounded-lg" style={{ backgroundColor: color }} />
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em]">{color}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Finish</p>
          <p className="mt-2 text-lg font-semibold capitalize text-slate-900">{wallpaper.finish}</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Care</p>
          <p className="mt-2 text-lg font-semibold capitalize text-slate-900">{wallpaper.care}</p>
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Mood + Rooms</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {wallpaper.moods.map((mood) => (
            <span
              key={mood}
              className="rounded-full bg-slate-900/90 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white"
            >
              {moodLabels[mood]}
            </span>
          ))}
          {wallpaper.useCases.map((useCase) => (
            <span
              key={useCase}
              className="rounded-full bg-slate-200 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-700"
            >
              {useCaseLabels[useCase]}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Styling notes</h3>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-600">
          {wallpaper.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3">
              <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-500" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
