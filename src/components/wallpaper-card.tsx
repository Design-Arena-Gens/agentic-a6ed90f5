import Image from "next/image";
import { WallpaperType, moodLabels, useCaseLabels } from "@/data/wallpapers";
import { PaletteSwatch } from "@/components/palette-swatch";

type WallpaperCardProps = {
  wallpaper: WallpaperType;
  onSelect: (wallpaper: WallpaperType) => void;
  isSelected: boolean;
};

export function WallpaperCard({ wallpaper, onSelect, isSelected }: WallpaperCardProps) {
  return (
    <article
      className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white/80 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
        isSelected ? "ring-2 ring-slate-900/80" : "ring-1 ring-transparent"
      }`}
      onClick={() => onSelect(wallpaper)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={wallpaper.image}
          alt={wallpaper.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-transparent opacity-0 transition group-hover:opacity-100" />
        <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 shadow-sm">
          {wallpaper.finish} finish
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">{wallpaper.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{wallpaper.description}</p>
        </div>

        <div className="space-y-3">
          <PaletteSwatch colors={wallpaper.palette} />
          <div className="flex flex-wrap gap-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
            {wallpaper.useCases.map((useCase) => (
              <span key={useCase} className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">
                {useCaseLabels[useCase]}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {wallpaper.moods.map((mood) => (
              <span
                key={mood}
                className="rounded-full bg-slate-900/90 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white"
              >
                {moodLabels[mood]}
              </span>
            ))}
          </div>
        </div>

        <ul className="space-y-1 text-sm text-slate-600">
          {wallpaper.highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-slate-500">
            {wallpaper.care}
          </span>
          <span className="text-sm font-semibold text-slate-900">View specification</span>
        </div>
      </div>
    </article>
  );
}
