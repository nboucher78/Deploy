export interface Stat {
  value: string;
  label: string;
  description?: string;
}

export const stats: Stat[] = [
  {
    value: "9+",
    label: "ans d'expertise",
    description: "En ingénierie des transports et data mobilité",
  },
  {
    value: "11",
    label: "réalisations de référence",
    description: "Projets menés avec succès",
  },
  {
    value: "8",
    label: "pays d'intervention",
    description: "France, Afrique, Moyen-Orient",
  },
  {
    value: "5+",
    label: "bailleurs internationaux",
    description: "AFD, Banque mondiale, BAD, UE, etc.",
  },
];

export const expertiseStats = [
  {
    value: "100%",
    label: "Opérationnel dès le 1er jour",
  },
  {
    value: "24h",
    label: "Réponse sous 24h ouvrées",
  },
  {
    value: "750€",
    label: "Tarif compétitif HT/jour",
  },
  {
    value: "10+",
    label: "Pays d'intervention",
  },
];
