export type WallpaperMood = "calming" | "energizing" | "sophisticated" | "playful" | "grounding";

export type WallpaperUseCase = "living-room" | "bedroom" | "office" | "kitchen" | "bathroom" | "kids";

export interface WallpaperType {
  id: string;
  name: string;
  description: string;
  image: string;
  palette: string[];
  moods: WallpaperMood[];
  useCases: WallpaperUseCase[];
  finish: "matte" | "satin" | "gloss" | "textured";
  care: "wipeable" | "scrubbable" | "paintable" | "removable";
  highlights: string[];
}

export const wallpaperTypes: WallpaperType[] = [
  {
    id: "botanical-panorama",
    name: "Botanical Panorama",
    description:
      "Overscale botanical illustrations that wrap a room with lush greenery and depth, ideal for creating a biophilic statement.",
    image:
      "https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?auto=format&fit=crop&w=1200&q=80",
    palette: ["#2F5D50", "#A3B18A", "#DDE5B6", "#FEFAE0"],
    moods: ["calming", "grounding"],
    useCases: ["living-room", "bedroom", "office"],
    finish: "matte",
    care: "wipeable",
    highlights: [
      "Adds dimensional foliage without over-cluttering the space",
      "Pairs beautifully with natural fibers and organic shapes",
      "Low sheen finish keeps the look relaxed and sophisticated",
    ],
  },
  {
    id: "textured-plaster",
    name: "Textured Plaster",
    description:
      "A tactile, faux-plaster surface that mimics Venetian walls, delivering warmth and architectural elegance with minimal pattern.",
    image:
      "https://images.unsplash.com/photo-1523416373912-1d6e1c0b6f76?auto=format&fit=crop&w=1200&q=80",
    palette: ["#D4C2B9", "#F0E3D0", "#B8A798", "#8C7A6B"],
    moods: ["sophisticated", "grounding"],
    useCases: ["living-room", "bedroom", "office", "kitchen"],
    finish: "textured",
    care: "wipeable",
    highlights: [
      "Soft diffusion of light for a restful ambiance",
      "Subtle movement keeps neutrals from feeling flat",
      "Excellent backdrop for art without visual competition",
    ],
  },
  {
    id: "graphic-geometrics",
    name: "Graphic Geometrics",
    description:
      "Bold geometric repeats in contrasting tones that energize a space and create modern visual rhythm.",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
    palette: ["#3B3B98", "#FFC312", "#C4E538", "#F5F6FA"],
    moods: ["energizing"],
    useCases: ["office", "living-room"],
    finish: "satin",
    care: "scrubbable",
    highlights: [
      "High-contrast pattern amplifies architectural lines",
      "Ideal for accent walls and creative studios",
      "Durable finish stands up to high-traffic areas",
    ],
  },
  {
    id: "watercolor-ombre",
    name: "Watercolor Ombré",
    description:
      "Softly graduated washes of color that transition from light to saturated tones, bringing serenity and movement.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    palette: ["#A4C3B2", "#E7EFC5", "#F6FFF8", "#2A9D8F"],
    moods: ["calming"],
    useCases: ["bedroom", "living-room", "bathroom"],
    finish: "matte",
    care: "wipeable",
    highlights: [
      "Creates a spa-like atmosphere with gentle transitions",
      "Pairs with minimal furnishings and soft textiles",
      "Ideal for rooms that need visual height or width",
    ],
  },
  {
    id: "metallic-lattice",
    name: "Metallic Lattice",
    description:
      "Interlaced metallic threads over a tonal ground that bounce light and provide a luxe, jewelry-box effect.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    palette: ["#3D3A4B", "#E7D7C1", "#FFD166", "#F8F4EA"],
    moods: ["sophisticated", "energizing"],
    useCases: ["living-room", "office", "bedroom"],
    finish: "gloss",
    care: "wipeable",
    highlights: [
      "Metallic ink reflects ambient light for a glamorous glow",
      "Great for dining rooms, bar areas, or primary suites",
      "Combine with sculptural lighting for maximum drama",
    ],
  },
  {
    id: "playful-mural",
    name: "Playful Kids Mural",
    description:
      "A narrative mural with whimsical characters and landscapes that evolves with your child's imagination.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    palette: ["#FFABAB", "#FFC3A0", "#FF677D", "#D4A5A5"],
    moods: ["playful"],
    useCases: ["kids"],
    finish: "matte",
    care: "scrubbable",
    highlights: [
      "Low-VOC inks keep nurseries and playrooms safe",
      "Storytelling palette fosters creativity and wonder",
      "Easy-clean finish handles crayons and fingerprints",
    ],
  },
  {
    id: "modular-tiles",
    name: "Modular Peel & Stick Tiles",
    description:
      "Removable tile-inspired wallpaper featuring micro-patterned motifs perfect for renters and refresh projects.",
    image:
      "https://images.unsplash.com/photo-1505692794403-55b39e07c0b5?auto=format&fit=crop&w=1200&q=80",
    palette: ["#264653", "#2A9D8F", "#E9C46A", "#F4A261"],
    moods: ["playful", "energizing"],
    useCases: ["kitchen", "bathroom", "office"],
    finish: "satin",
    care: "removable",
    highlights: [
      "Peel-and-stick backing installs quickly without mess",
      "Great for rentals, backsplashes, and accent niches",
      "Moisture-resistant face holds up in kitchens and baths",
    ],
  },
];

export const useCaseLabels: Record<WallpaperUseCase, string> = {
  "living-room": "Living Room",
  bedroom: "Bedroom",
  office: "Home Office",
  kitchen: "Kitchen",
  bathroom: "Bathroom",
  kids: "Kids Space",
};

export const moodLabels: Record<WallpaperMood, string> = {
  calming: "Calming",
  energizing: "Energizing",
  sophisticated: "Sophisticated",
  playful: "Playful",
  grounding: "Grounding",
};
