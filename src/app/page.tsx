'use client';

import { useMemo, useState } from "react";
import { FilterToolbar } from "@/components/filter-toolbar";
import { WallpaperCard } from "@/components/wallpaper-card";
import { WallpaperDetail } from "@/components/wallpaper-detail";
import {
  WallpaperType,
  wallpaperTypes,
  WallpaperMood,
  WallpaperUseCase,
} from "@/data/wallpapers";

export default function Home() {
  const [selectedWallpaper, setSelectedWallpaper] = useState<WallpaperType | null>(wallpaperTypes[0]);
  const [selectedMood, setSelectedMood] = useState<WallpaperMood | "any">("any");
  const [selectedUseCase, setSelectedUseCase] = useState<WallpaperUseCase | "any">("any");
  const [selectedFinish, setSelectedFinish] = useState<string>("any");
  const [searchTerm, setSearchTerm] = useState("");

  const finishOptions = useMemo(
    () => Array.from(new Set(wallpaperTypes.map((wallpaper) => wallpaper.finish))),
    [],
  );

  const filteredWallpapers = useMemo(() => {
    return wallpaperTypes.filter((wallpaper) => {
      const matchesMood = selectedMood === "any" || wallpaper.moods.includes(selectedMood);
      const matchesUseCase = selectedUseCase === "any" || wallpaper.useCases.includes(selectedUseCase);
      const matchesFinish = selectedFinish === "any" || wallpaper.finish === selectedFinish;
      const matchesSearch =
        searchTerm.trim().length === 0 ||
        wallpaper.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        wallpaper.description.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesMood && matchesUseCase && matchesFinish && matchesSearch;
    });
  }, [selectedMood, selectedUseCase, selectedFinish, searchTerm]);

  const activeWallpaper =
    selectedWallpaper && filteredWallpapers.includes(selectedWallpaper)
      ? selectedWallpaper
      : filteredWallpapers[0] ?? null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-200 via-slate-100 to-white">
      <header className="relative overflow-hidden px-6 pb-16 pt-24 sm:px-12 lg:px-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#cbd5f5,_#e2e8f0_60%,_#f8fafc)] opacity-70" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">Wallpaper Atelier</p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold text-slate-900 sm:text-5xl">
            Curate the perfect wallpaper type for every room, mood, and material requirement.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Discover designer-approved finishes, explore tactile palettes, and understand how each wallpaper behaves in
            the real world. Filter by experience, compare textures, and save your shortlist for your next project.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-slate-900/30 transition hover:bg-slate-800">
              Explore collections
            </button>
            <button className="rounded-full border border-slate-400/60 px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-700 transition hover:border-slate-500 hover:bg-white/70">
              Download spec sheet
            </button>
          </div>
        </div>
      </header>

      <main className="relative -mt-12 pb-24">
        <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 sm:px-12 lg:px-24">
          <FilterToolbar
            selectedMood={selectedMood}
            selectedUseCase={selectedUseCase}
            selectedFinish={selectedFinish}
            onMoodChange={setSelectedMood}
            onUseCaseChange={setSelectedUseCase}
            onFinishChange={setSelectedFinish}
            finishOptions={finishOptions}
          />

          <div className="grid gap-8 lg:grid-cols-[1.75fr_1fr]">
            <div className="space-y-6">
              <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur">
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Search the library
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Search by name, description, or color story..."
                    className="mt-3 w-full rounded-2xl border border-transparent bg-slate-100 px-4 py-3 text-sm text-slate-700 shadow-inner shadow-white focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
                  />
                </label>
                <div className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  <span>{filteredWallpapers.length} wallpaper types</span>
                  {selectedMood !== "any" && <span>• Mood: {selectedMood}</span>}
                  {selectedUseCase !== "any" && <span>• Room: {selectedUseCase}</span>}
                  {selectedFinish !== "any" && <span>• Finish: {selectedFinish}</span>}
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {filteredWallpapers.map((wallpaper) => (
                  <WallpaperCard
                    key={wallpaper.id}
                    wallpaper={wallpaper}
                    onSelect={setSelectedWallpaper}
                    isSelected={activeWallpaper?.id === wallpaper.id}
                  />
                ))}
                {filteredWallpapers.length === 0 && (
                  <div className="col-span-full rounded-3xl border border-dashed border-slate-300 bg-white/60 p-12 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">No matches found</p>
                    <p className="mt-3 text-base text-slate-600">
                      Adjust your filters or search phrase to reveal new wallpaper directions.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <WallpaperDetail wallpaper={activeWallpaper ?? null} />
          </div>
        </section>
      </main>
    </div>
  );
}
