export interface Partner {
  name: string;
  category: string;
  logo?: string;
}

export const partners: Partner[] = [
  // Métropoles
  { name: "Aix-Marseille", category: "Métropole" },
  
  // Bureaux d'études
  { name: "Ingerop", category: "Bureau d'études" },
  { name: "SCET", category: "Bureau d'études" },
  { name: "CIRA-SAS", category: "Bureau d'études" },
  { name: "ITMD", category: "Bureau d'études" },
  
  // Partenariats visés
  { name: "Egis", category: "Partenaire" },
  { name: "Setec", category: "Partenaire" },
  { name: "Systra", category: "Partenaire" },
  { name: "Artelia", category: "Partenaire" },
  { name: "WSP", category: "Partenaire" },
  { name: "STUDIA", category: "Partenaire" },
  
  // Bailleurs
  { name: "FDB", category: "Bailleur" },
  { name: "Banque mondiale", category: "Bailleur" },
  { name: "BAD", category: "Bailleur" },
  { name: "Union européenne", category: "Bailleur" },
];

export const tools = [
  {
    category: "Modélisation & trafic",
    items: ["TransCAD", "HDM-4", "SYNCHRO", "Modèles 4 étapes", "Prévision de la demande"],
  },
  {
    category: "SIG & cartographie",
    items: ["QGIS", "ArcGIS", "AutoCAD", "Cartographie thématique", "Jumeaux numériques"],
  },
  {
    category: "Normes & qualité",
    items: ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "ISO 19011:2018"],
  },
];
