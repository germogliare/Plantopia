export type Plant = {
  id: number;

  name: string;
  scientificName: string;

  family: string;
  origin: string;

  description: string;

  light: string;
  difficulty: string;
  water: string;

  temperature: string;
  humidity: string;

  soil: string;
  fertilization: string;

  pruning: string;
  repotting: string;

  problems: string[];
  remedies: string[];

  icon: string;
  image: string;
};


export const plants: Plant[] = [

  {
    id: 1,

    name: "Monstera",
    scientificName: "Monstera deliciosa",

    family: "Araceae",
    origin: "Foreste tropicali dell'America Centrale",

    description:
      "Pianta tropicale famosa per le sue grandi foglie verdi con incisioni naturali.",

    light:
      "Luce indiretta brillante",

    difficulty:
      "Facile",

    water:
      "Annaffiare quando il terreno in superficie è asciutto",

    temperature:
      "18°C - 27°C",

    humidity:
      "Ama ambienti umidi",

    soil:
      "Terriccio drenante con fibra di cocco e corteccia",

    fertilization:
      "Ogni 3-4 settimane in primavera ed estate",

    pruning:
      "Eliminare foglie rovinate e guidare la crescita",

    repotting:
      "Ogni 1-2 anni quando le radici occupano il vaso",

    problems: [
      "Foglie gialle per troppa acqua",
      "Foglie marroni per aria secca",
      "Cocciniglia"
    ],

    remedies: [
      "Pulizia delicata delle foglie",
      "Cannella sui piccoli tagli come pratica tradizionale",
      "Controllo manuale dei parassiti"
    ],

    icon:
      "🌿",

    image:
      "/plants/monstera.jpg",
  }

];
