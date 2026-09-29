/* Données de démo : playlists par humeur, artistes, morceaux.
   Remplacer par de vraies données (ou des fichiers audio) plus tard. */

const ARTISTS = [
  { id: "nova-drive", name: "Nova Drive", genre: "Synthwave", ink: "blue" },
  { id: "lune-basse", name: "Lune Basse", genre: "Dream pop", ink: "violet" },
  { id: "kasper-vale", name: "Kasper Vale", genre: "Soft rock", ink: "orange" },
  { id: "mira-sol", name: "Mira Sol", genre: "Électro douce", ink: "yellow" },
  { id: "les-phares", name: "Les Phares", genre: "Indie", ink: "green" },
  { id: "halo-club", name: "Halo Club", genre: "House lente", ink: "pink" }
];

const PLAYLISTS = [
  {
    id: "red-line",
    title: ["RED", "LINE", "SESSION"],
    mood: "Nuit blanche",
    ink: "pink",
    tags: ["nuit", "route", "insomnie", "calme"],
    desc: "Autoroutes vides, feux arrière, basses qui traînent. Un mixtape pour les trajets de 2h du matin : soft rock ralenti sur pulse électronique.",
    tracks: [
      { title: "Another Day, Slowed", artist: "kasper-vale", duration: "4:12" },
      { title: "Glass Reverb", artist: "lune-basse", duration: "3:47" },
      { title: "Chase Lounge", artist: "nova-drive", duration: "5:03" },
      { title: "Neon, No Sleep", artist: "halo-club", duration: "3:58" }
    ]
  },
  {
    id: "slow-burn",
    title: ["SLOW", "BURN", "ANGER"],
    mood: "Colère froide",
    ink: "orange",
    tags: ["colère", "rage", "tension", "énergie"],
    desc: "Mâchoire serrée, pas rapides. Des guitares saturées qui ne crient jamais, juste assez pour évacuer.",
    tracks: [
      { title: "Clenched", artist: "les-phares", duration: "3:21" },
      { title: "Red Static", artist: "nova-drive", duration: "4:05" },
      { title: "No Reply", artist: "kasper-vale", duration: "3:34" },
      { title: "Heat Index", artist: "halo-club", duration: "4:48" }
    ]
  },
  {
    id: "salt-water",
    title: ["SALT", "WATER", "BLUES"],
    mood: "Mélancolie",
    ink: "blue",
    tags: ["triste", "mélancolie", "pluie", "nostalgie"],
    desc: "Pour les jours gris où l'on regarde la fenêtre plus que l'écran. Voix lointaines, pianos fatigués.",
    tracks: [
      { title: "Low Tide", artist: "lune-basse", duration: "4:40" },
      { title: "Postcards", artist: "les-phares", duration: "3:15" },
      { title: "Rain On Repeat", artist: "mira-sol", duration: "5:22" },
      { title: "Harbour Lights", artist: "kasper-vale", duration: "3:49" }
    ]
  },
  {
    id: "high-noon",
    title: ["HIGH", "NOON", "RUSH"],
    mood: "Euphorie",
    ink: "yellow",
    tags: ["joie", "euphorie", "fête", "énergie"],
    desc: "Soleil au zénith, volume au maximum. Des refrains qu'on chante faux et fort.",
    tracks: [
      { title: "Overexposed", artist: "halo-club", duration: "3:28" },
      { title: "Sugar Rush", artist: "mira-sol", duration: "3:02" },
      { title: "Golden Hour Club", artist: "nova-drive", duration: "4:16" },
      { title: "Jump The Line", artist: "les-phares", duration: "3:37" }
    ]
  },
  {
    id: "soft-static",
    title: ["SOFT", "STATIC", "ROOM"],
    mood: "Calme",
    ink: "green",
    tags: ["calme", "focus", "détente", "travail"],
    desc: "Un bruit blanc qui a du cœur. Pour travailler, lire ou ne rien faire du tout.",
    tracks: [
      { title: "Paper Walls", artist: "mira-sol", duration: "5:10" },
      { title: "Tape Hiss", artist: "lune-basse", duration: "4:24" },
      { title: "Idle Hands", artist: "halo-club", duration: "6:02" },
      { title: "Window Seat", artist: "kasper-vale", duration: "3:55" }
    ]
  },
  {
    id: "old-tapes",
    title: ["OLD", "TAPES", "FOREVER"],
    mood: "Nostalgie",
    ink: "violet",
    tags: ["nostalgie", "souvenir", "enfance", "mélancolie"],
    desc: "Cassettes retrouvées au fond d'un carton. Tout sonne un peu voilé, et c'est exactement ce qu'il faut.",
    tracks: [
      { title: "Side B", artist: "les-phares", duration: "3:44" },
      { title: "VHS Summer", artist: "nova-drive", duration: "4:31" },
      { title: "Polaroid Blur", artist: "lune-basse", duration: "3:18" },
      { title: "Rewind", artist: "mira-sol", duration: "4:09" }
    ]
  }
];

/* Slides du hero (les points en bas à droite) */
const HERO_SLIDES = [
  { lines: ["RED", "LINE"], inks: ["pink", "blue"], sub: "Les playlists qui te correspondent à 100%" },
  { lines: ["PICK", "A MOOD"], inks: ["orange", "violet"], sub: "Tape une émotion dans MOOD, on s'occupe du reste" },
  { lines: ["PLAY", "ON LOOP"], inks: ["green", "pink"], sub: "Red Line Session, la playlist la plus écoutée cette semaine", playlist: "red-line" }
];

/* Encres riso : couleur de l'encre et couleur du texte posé dessus */
const INKS = {
  pink:   { c: "#ff48b0", on: "#1f2a6b" },
  blue:   { c: "#0078bf", on: "#f0e9da" },
  yellow: { c: "#ffe800", on: "#1f2a6b" },
  green:  { c: "#00a95c", on: "#f0e9da" },
  orange: { c: "#ff6c2f", on: "#1f2a6b" },
  violet: { c: "#765ba7", on: "#f0e9da" }
};
