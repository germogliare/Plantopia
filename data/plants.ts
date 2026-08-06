export type Plant = {
  id: number;
  name: string;
  scientificName: string;
  description: string;
  light: string;
  difficulty: string;
  water: string;
  icon: string;
  image: string;
};


export const plants: Plant[] = [

  {
    id: 1,
    name: "Monstera",
    scientificName: "Monstera deliciosa",
    description:
      "Pianta tropicale famosa per le sue grandi foglie con incisioni naturali.",
    light:
      "Luce indiretta brillante",
    difficulty:
      "Facile",
    water:
      "Quando il terreno è asciutto nei primi centimetri",
    icon: "🌿",
image: "/plants/monstera.jpg",
  },


  {
    id: 2,
    name: "Ficus lyrata",
    scientificName:
      "Ficus lyrata",
    description:
      "Pianta elegante con grandi foglie verdi a forma di violino.",
    light:
      "Molto luminosa ma senza sole diretto",
    difficulty:
      "Media",
    water:
      "Moderata, evitando ristagni",
    icon: "🍃",
image: "/plants/ficus.jpg",
  },


  {
    id: 3,
    name: "Pothos",
    scientificName:
      "Epipremnum aureum",
    description:
      "Una delle piante più resistenti, perfetta anche per principianti.",
    light:
      "Mezz'ombra o luce indiretta",
    difficulty:
      "Facile",
    water:
      "Lasciare asciugare leggermente il terreno",
   icon: "🌱",
image: "/plants/pothos.jpg",
  },

];
