export interface Activity {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  icon?: string;
}

export const activities: Activity[] = [
  {
    id: "data-fiable",
    number: "01",
    title: "Des données mobilité fiables pour sécuriser vos décisions",
    description:
      "Nous concevons et pilotons vos enquêtes terrain, collectons et analysons les données pour produire des résultats fiables pour vos études et appels d'offres.",
    tags: ["Enquêtes O-D", "Comptages", "Analyse stat."],
    icon: "📊",
  },
  {
    id: "dimensionnement",
    number: "02",
    title: "Dimensionner un projet ou anticiper les trafics futurs",
    description:
      "Nous réalisons les modélisations et scénarios prospectifs qui éclairent vos décisions d'investissement à court et long terme.",
    tags: ["Prévisions de trafic", "Reports modaux", "Modèles"],
    icon: "🚦",
  },
  {
    id: "renfort-technique",
    number: "03",
    title: "Un renfort technique sur une étude d'infrastructure",
    description:
      "Nous intégrons rapidement vos équipes pour produire études de faisabilité, avant-projets et analyses techniques, dans le respect de vos délais.",
    tags: ["Faisabilité", "Avant-projets", "Technique"],
    icon: "🏗️",
  },
  {
    id: "pertinence-economique",
    number: "04",
    title: "Démontrer la pertinence économique et environnementale",
    description:
      "Nous réalisons les évaluations socio-économiques, analyses coûts-bénéfices et études d'impact attendues par les décideurs et les financeurs.",
    tags: ["Coûts-bénéfices", "HDM-4", "Impact"],
    icon: "💰",
  },
  {
    id: "strategie-mobilite",
    number: "05",
    title: "Élaborer une stratégie de mobilité durable",
    description:
      "Nous accompagnons collectivités et entreprises dans leurs plans de mobilité et la concertation avec les parties prenantes.",
    tags: ["Plans de mobilité", "Concertation"],
    icon: "🚲",
  },
  {
    id: "cartographie",
    number: "06",
    title: "Des cartographies et outils d'aide à la décision",
    description:
      "Nous développons cartographies SIG, tableaux de bord et supports de visualisation facilitant la compréhension des enjeux.",
    tags: ["SIG", "Tableaux de bord", "Dataviz"],
    icon: "🗺️",
  },
];
