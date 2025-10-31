import { useMemo } from "react";
import { moodLabels, useCaseLabels, WallpaperMood, WallpaperUseCase } from "@/data/wallpapers";

type FilterToolbarProps = {
  selectedMood: WallpaperMood | "any";
  selectedUseCase: WallpaperUseCase | "any";
  finishOptions: string[];
  selectedFinish: string;
  onMoodChange: (mood: WallpaperMood | "any") => void;
  onUseCaseChange: (useCase: WallpaperUseCase | "any") => void;
  onFinishChange: (finish: string) => void;
};

export function FilterToolbar({
  selectedMood,
  selectedUseCase,
  finishOptions,
  selectedFinish,
  onMoodChange,
  onUseCaseChange,
  onFinishChange,
}: FilterToolbarProps) {
  const moodFilters = useMemo(() => ["any", ...Object.keys(moodLabels)] as (WallpaperMood | "any")[], []);
  const useCaseFilters = useMemo(
    () => ["any", ...Object.keys(useCaseLabels)] as (WallpaperUseCase | "any")[],
    [],
  );

  return (
    <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-sm">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Find Your Fit</p>
          <h2 className="text-2xl font-semibold text-slate-900">Filter by mood, room, and finish</h2>
        </div>
        <button
          className="w-full rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-400 hover:bg-slate-50 md:w-auto"
          onClick={() => {
            onMoodChange("any");
            onUseCaseChange("any");
            onFinishChange("any");
          }}
        >
          Reset filters
        </button>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        <fieldset className="space-y-3">
          <legend className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Mood</legend>
          <div className="flex flex-wrap gap-2">
            {moodFilters.map((mood) => (
              <button
                key={mood}
                onClick={() => onMoodChange(mood)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  selectedMood === mood
                    ? "bg-slate-900 text-white shadow-md shadow-slate-400/40"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {mood === "any" ? "Any mood" : moodLabels[mood]}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="space-y-3">
          <legend className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Room</legend>
          <div className="flex flex-wrap gap-2">
            {useCaseFilters.map((useCase) => (
              <button
                key={useCase}
                onClick={() => onUseCaseChange(useCase)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  selectedUseCase === useCase
                    ? "bg-slate-900 text-white shadow-md shadow-slate-400/40"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {useCase === "any" ? "Any room" : useCaseLabels[useCase]}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="space-y-3">
          <legend className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Finish</legend>
          <div className="flex flex-wrap gap-2">
            {["any", ...finishOptions].map((finish) => (
              <button
                key={finish}
                onClick={() => onFinishChange(finish)}
                className={`rounded-full px-4 py-2 text-sm font-medium capitalize transition ${
                  selectedFinish === finish
                    ? "bg-slate-900 text-white shadow-md shadow-slate-400/40"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {finish === "any" ? "Any finish" : finish}
              </button>
            ))}
          </div>
        </fieldset>
      </div>
    </div>
  );
}
