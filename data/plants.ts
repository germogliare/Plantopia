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
