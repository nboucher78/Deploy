"use client";

import { motion } from "framer-motion";
import { expertiseStats } from "@/data/stats";

export default function ExpertiseSection() {
  const expertiseItems = [
    {
      number: "i.",
      title: "Senior dès le 1er jour",
      description:
        "9 ans d'expérience opérationnelle, en France comme à l'international.",
    },
    {
      number: "ii.",
      title: "Bilingue & mobile",
      description:
        "Français (C2), anglais opérationnel, arabe natif. Sur site ou à distance.",
    },
    {
      number: "iii.",
      title: "Tarif compétitif",
      description:
        "750 € HT/jour, 15 à 20 % sous le marché senior, sans compromis qualité.",
    },
    {
      number: "iv.",
      title: "Niche bailleurs",
      description:
        "Procédures AFD, UE, Banque mondiale, BAD. Plus de 10 pays d'intervention.",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Notre valeur ajoutée
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Expertise senior, mobilisable à la mission.
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Nous arrivons avec 9 années d&apos;expérience et sommes opérationnels
            dès le premier jour — sur des phases d&apos;études comme sur le terrain.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {expertiseStats.map((stat, index) => (
              <div
                key={index}
                className="bg-secondary-50 p-6 rounded-xl text-center"
              >
                <p className="text-3xl font-bold text-primary-500">{stat.value}</p>
                <p className="text-secondary-600 mt-2">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Right Side - Expertise Items */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {expertiseItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                className="p-6 bg-secondary-50 rounded-xl border-l-4 border-primary-500"
              >
                <div className="flex items-start space-x-4">
                  <span className="text-primary-500 font-bold text-xl mt-1">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-secondary-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-secondary-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Implantation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Une présence de terrain, du Sahel aux Grands Lacs.
          </h3>
          <p className="text-secondary-600 max-w-2xl mx-auto mb-8">
            Des missions menées sur le terrain en Afrique de l&apos;Ouest, en Afrique
            centrale, dans la région des Grands Lacs et au Maghreb — pilotées
            depuis Paris et Tunis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <span className="badge badge-primary">Paris · HQ</span>
            <span className="badge badge-primary">Tunis · HQ</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
