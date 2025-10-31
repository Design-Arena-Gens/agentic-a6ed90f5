type PaletteSwatchProps = {
  colors: string[];
};

export function PaletteSwatch({ colors }: PaletteSwatchProps) {
  return (
    <div className="flex overflow-hidden rounded-full border border-white/60 shadow-inner shadow-slate-900/5">
      {colors.map((color) => (
        <div
          key={color}
          className="h-8 flex-1"
          style={{ backgroundColor: color }}
          aria-label={`Palette color ${color}`}
        />
      ))}
    </div>
  );
}
