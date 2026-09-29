/* Données de démo : playlists par humeur, artistes, morceaux.
   Remplacer par de vraies données (ou des fichiers audio) plus tard.

   Carte des humeurs : chaque playlist a une position
   x = luminosité (0 sombre, 1 lumineux), y = énergie (0 calme, 1 intense). */

const ARTISTS = [
  { id: "nova-drive", name: "Nova Drive", genre: "Synthwave" },
  { id: "lune-basse", name: "Lune Basse", genre: "Dream pop" },
  { id: "kasper-vale", name: "Kasper Vale", genre: "Soft rock" },
  { id: "mira-sol", name: "Mira Sol", genre: "Électro douce" },
  { id: "les-phares", name: "Les Phares", genre: "Indie" },
  { id: "halo-club", name: "Halo Club", genre: "House lente" }
];

const PLAYLISTS = [
  {
    id: "red-line",
    title: ["RED", "LINE", "SESSION"],
    mood: "Nuit blanche",
    pos: { x: 0.32, y: 0.42 },
    tags: ["nuit", "route", "insomnie", "calme"],
    desc: "Autoroutes vides, feux arrière, basses qui traînent. Un mixtape pour les trajets de 2h du matin : soft rock ralenti sur pulse électronique.",
    tracks: [
      { title: "Another Day, Slowed", artist: "kasper-vale", duration: "4:12", bpm: 72 },
      { title: "Glass Reverb", artist: "lune-basse", duration: "3:47", bpm: 68 },
      { title: "Chase Lounge", artist: "nova-drive", duration: "5:03", bpm: 84 },
      { title: "Neon, No Sleep", artist: "halo-club", duration: "3:58", bpm: 90 }
    ]
  },
  {
    id: "slow-burn",
    title: ["SLOW", "BURN", "ANGER"],
    mood: "Colère froide",
    pos: { x: 0.16, y: 0.82 },
    tags: ["colère", "rage", "tension", "énergie"],
    desc: "Mâchoire serrée, pas rapides. Des guitares saturées qui ne crient jamais, juste assez pour évacuer.",
    tracks: [
      { title: "Clenched", artist: "les-phares", duration: "3:21", bpm: 132 },
      { title: "Red Static", artist: "nova-drive", duration: "4:05", bpm: 124 },
      { title: "No Reply", artist: "kasper-vale", duration: "3:34", bpm: 118 },
      { title: "Heat Index", artist: "halo-club", duration: "4:48", bpm: 128 }
    ]
  },
  {
    id: "salt-water",
    title: ["SALT", "WATER", "BLUES"],
    mood: "Mélancolie",
    pos: { x: 0.2, y: 0.18 },
    tags: ["triste", "mélancolie", "pluie", "nostalgie"],
    desc: "Pour les jours gris où l'on regarde la fenêtre plus que l'écran. Voix lointaines, pianos fatigués.",
    tracks: [
      { title: "Low Tide", artist: "lune-basse", duration: "4:40", bpm: 64 },
      { title: "Postcards", artist: "les-phares", duration: "3:15", bpm: 76 },
      { title: "Rain On Repeat", artist: "mira-sol", duration: "5:22", bpm: 60 },
      { title: "Harbour Lights", artist: "kasper-vale", duration: "3:49", bpm: 70 }
    ]
  },
  {
    id: "high-noon",
    title: ["HIGH", "NOON", "RUSH"],
    mood: "Euphorie",
    pos: { x: 0.84, y: 0.86 },
    tags: ["joie", "euphorie", "fête", "énergie"],
    desc: "Soleil au zénith, volume au maximum. Des refrains qu'on chante faux et fort.",
    tracks: [
      { title: "Overexposed", artist: "halo-club", duration: "3:28", bpm: 126 },
      { title: "Sugar Rush", artist: "mira-sol", duration: "3:02", bpm: 138 },
      { title: "Golden Hour Club", artist: "nova-drive", duration: "4:16", bpm: 120 },
      { title: "Jump The Line", artist: "les-phares", duration: "3:37", bpm: 142 }
    ]
  },
  {
    id: "soft-static",
    title: ["SOFT", "STATIC", "ROOM"],
    mood: "Calme",
    pos: { x: 0.76, y: 0.2 },
    tags: ["calme", "focus", "détente", "travail"],
    desc: "Un bruit blanc qui a du cœur. Pour travailler, lire ou ne rien faire du tout.",
    tracks: [
      { title: "Paper Walls", artist: "mira-sol", duration: "5:10", bpm: 80 },
      { title: "Tape Hiss", artist: "lune-basse", duration: "4:24", bpm: 74 },
      { title: "Idle Hands", artist: "halo-club", duration: "6:02", bpm: 86 },
      { title: "Window Seat", artist: "kasper-vale", duration: "3:55", bpm: 78 }
    ]
  },
  {
    id: "old-tapes",
    title: ["OLD", "TAPES", "FOREVER"],
    mood: "Nostalgie",
    pos: { x: 0.56, y: 0.44 },
    tags: ["nostalgie", "souvenir", "enfance", "mélancolie"],
    desc: "Cassettes retrouvées au fond d'un carton. Tout sonne un peu voilé, et c'est exactement ce qu'il faut.",
    tracks: [
      { title: "Side B", artist: "les-phares", duration: "3:44", bpm: 96 },
      { title: "VHS Summer", artist: "nova-drive", duration: "4:31", bpm: 104 },
      { title: "Polaroid Blur", artist: "lune-basse", duration: "3:18", bpm: 88 },
      { title: "Rewind", artist: "mira-sol", duration: "4:09", bpm: 100 }
    ]
  }
];
