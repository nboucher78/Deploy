export interface Project {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  country: string;
  type: string;
  image: string;
  tags: string[];
  year: number;
  client?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "mobilite-urbaine-bamako",
    number: "01",
    title: "Mobilité urbaine multimodale – Bamako",
    shortTitle: "Mobilité urbaine à Bamako",
    description:
      "Modélisation multimodale sous TransCAD et schéma directeur de transport à l'horizon 2025 : VP, transport collectif, 2 & 3 roues, piétons et transport fluvial.",
    country: "Mali",
    type: "Mobilité urbaine",
    image: "/images/projects/project-1.jpg",
    tags: ["TransCAD", "Multimodal", "Schéma directeur"],
    year: 2023,
    client: "Collectivité locale",
    featured: true,
  },
  {
    id: "bretelles-autoroutieres-niari",
    number: "02",
    title: "Bretelles autoroutières – corridor Niari",
    shortTitle: "Corridor Niari",
    description:
      "Comptages et enquêtes O/D sur les bretelles RD25 et RD26 pour caractériser les flux et appuyer le bitumage du corridor Pointe-Noire / Brazzaville.",
    country: "Congo",
    type: "Étude de trafic",
    image: "/images/projects/project-2.jpg",
    tags: ["Enquêtes O/D", "Comptages", "Bitumage"],
    year: 2022,
    client: "Ministère des Travaux Publics",
    featured: true,
  },
  {
    id: "pont-rusizi",
    number: "03",
    title: "Pont sur la rivière Rusizi – Burundi / RDC",
    shortTitle: "Pont transfrontalier Rusizi",
    description:
      "Analyse coûts-avantages d'un pont transfrontalier Burundi-RDC : enquêtes O/D, calcul du TRI/VAN et impact sur le corridor régional.",
    country: "Burundi / RDC",
    type: "Évaluation économique",
    image: "/images/projects/project-3.jpg",
    tags: ["TRI/VAN", "Corridor régional", "Transfrontalier"],
    year: 2021,
    client: "Banque mondiale",
    featured: true,
  },
  {
    id: "bitumage-epana",
    number: "04",
    title: "Bitumage de la route d'Épana – Congo",
    shortTitle: "Route d'Épana",
    description:
      "Justification économique du bitumage dans la Likouala : étude socio-économique, prévisions de trafic et analyse coûts-avantages sous HDM-4.",
    country: "Congo",
    type: "Évaluation économique",
    image: "/images/projects/project-4.jpg",
    tags: ["Coûts-avantages", "TRI/VAN", "HDM-4"],
    year: 2020,
    client: "Gouvernement congolais",
    featured: false,
  },
  {
    id: "plan-circulation-raoued",
    number: "05",
    title: "APS Plan de circulation – Raoued / El Jem",
    shortTitle: "Plan de circulation Raoued",
    description:
      "8 postes O/D, comptages directionnels, enquêtes stationnement et d'opinion pour l'avant-projet sommaire du plan de circulation.",
    country: "Tunisie",
    type: "Plan de circulation",
    image: "/images/projects/project-5.jpg",
    tags: ["8 postes O/D", "APS", "PCR"],
    year: 2022,
    client: "Municipalité d'El Jem",
    featured: false,
  },
  {
    id: "lac-tanganyika",
    number: "06",
    title: "Lac Tanganyika – Port de Rumonge",
    shortTitle: "Port de Rumonge",
    description:
      "Étude sectorielle du transport lacustre pour 4 pays riverains : comparaison des corridors, enquêtes et dimensionnement du port de Rumonge.",
    country: "Burundi / RDC / Tanzanie / Zambie",
    type: "Transport lacustre",
    image: "/images/projects/project-6.jpg",
    tags: ["4 pays", "2 corridors", "Portuaire"],
    year: 2021,
    client: "Bailleur international",
    featured: true,
  },
  {
    id: "reconstruction-pont",
    number: "07",
    title: "Reconstruction d'un pont et des berges – Burundi",
    shortTitle: "Reconstruction de pont",
    description:
      "Évaluation socio-économique de la reconstruction d'un pont et de ses berges : prévisions de trafic, TRI/VAN et analyse de sensibilité ±10 %.",
    country: "Burundi",
    type: "Évaluation économique",
    image: "/images/projects/project-7.jpg",
    tags: ["TRI/VAN", "Sensibilité ±10 %"],
    year: 2020,
    client: "Gouvernement burundais",
    featured: false,
  },
  {
    id: "dedoublement-ouidah",
    number: "08",
    title: "Dédoublement route Ouidah-Hillacondji – Bénin",
    shortTitle: "Dédoublement Ouidah-Hillacondji",
    description:
      "Évaluation HDM-4 du dédoublement (58,5 km), des contre-allées (35,5 km) et des accès touristiques (21 km) sur le corridor Abidjan-Lagos.",
    country: "Bénin",
    type: "Évaluation HDM-4",
    image: "/images/projects/project-8.jpg",
    tags: ["HDM-4", "58,5 km", "Corridor Abidjan-Lagos"],
    year: 2023,
    client: "Banque africaine de développement",
    featured: false,
  },
  {
    id: "bitumage-liranga",
    number: "09",
    title: "Bitumage Liranga-Ngangania (277 km) – Likouala",
    shortTitle: "Bitumage Liranga-Ngangania",
    description:
      "277 km dans la zone la plus enclavée du Congo (3,3 hab/km²) : viabilité économique HDM-4 et valorisation des potentialités agricoles et forestières.",
    country: "Congo",
    type: "Désenclavement",
    image: "/images/projects/project-9.jpg",
    tags: ["277 km", "HDM-4", "Zone enclavée"],
    year: 2022,
    client: "Gouvernement congolais",
    featured: true,
  },
  {
    id: "pdu-el-jem",
    number: "10",
    title: "Plan de déplacements urbains El Jem – TADEEM",
    shortTitle: "PDU El Jem",
    description:
      "6 postes O/D (1 944 véhicules), 4 carrefours simulés sous SYNCHRO, enquêtes stationnement et d'opinion pour le PDU d'El Jem.",
    country: "Tunisie",
    type: "PDU · Mobilité",
    image: "/images/projects/project-10.jpg",
    tags: ["SYNCHRO", "PDU", "1 944 véhicules"],
    year: 2023,
    client: "TADEEM",
    featured: false,
  },
  {
    id: "route-kaga-bandoro",
    number: "11",
    title: "Route Kaga-Bandoro-Mbrès-Ndélé – RCA",
    shortTitle: "Route Kaga-Bandoro",
    description:
      "Étude Banque mondiale via UNOPS : faisabilité économique et technique d'une route desservant 3 préfectures et 351 335 habitants.",
    country: "Centrafrique",
    type: "Faisabilité · Banque mondiale",
    image: "/images/projects/project-11.jpg",
    tags: ["Banque mondiale", "UNOPS", "351 335 hab."],
    year: 2021,
    client: "Banque mondiale / UNOPS",
    featured: false,
  },
];

export const projectTypes = [
  "Tous",
  ...Array.from(new Set(projects.map((p) => p.type))),
];

export const countries = [
  "Tous",
  ...Array.from(new Set(projects.map((p) => p.country))),
];
