"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExpertiseSection from "@/components/ExpertiseSection";
import { motion } from "framer-motion";
import { tools, partners } from "@/data/partners";

export default function AProposPage() {
  const founder = {
    name: "Malek Belkhir",
    title: "Fondateur & Ing\u00e9nieur G\u00e9nie Civil",
    experience: "9 ans d'exp\u00e9rience",
    education: [
      "M2 Transports, R\u00e9seaux et Territoires \u2013 ENTPE Lyon",
      "Ing\u00e9nieur G\u00e9nie Civil \u2013 ESPRIT Tunis",
      "Master Pro Management QHSE \u2013 ISET Tunis",
    ],
    email: "malek.belkhir@tdme.fr",
  };

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              \u00c0 propos
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Un bureau d&apos;\u00e9tudes ind\u00e9pendant.
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              <strong>TDME \u2013 Transport Data & Mobility Engineering</strong> est un
              bureau d&apos;\u00e9tudes sp\u00e9cialis\u00e9 en ing\u00e9nierie des transports et en data
              mobilit\u00e9. Depuis 2016, nous intervenons sur des projets de transport,
              de mobilit\u00e9 et d&apos;am\u00e9nagement urbain dans plus de dix pays, en
              France, en Afrique et au Moyen-Orient.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Practice */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Notre pratique
            </h2>
            <p className="text-xl text-secondary-600 mb-8">
              Notre pratique associe les missions techniques \u2014 mod\u00e9lisation,
              \u00e9tudes d&apos;infrastructures, diagnostic mobilit\u00e9, \u00e9valuation \u00e9conomique
              \u2014 au pilotage qualit\u00e9 conforme aux standards internationaux.
            </p>
            <p className="text-lg text-secondary-600">
              Cette double exigence nous permet de livrer une donn\u00e9e fiable,
              d\u00e9fendable devant les d\u00e9cideurs et les financeurs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Le fondateur
            </h2>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-secondary-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="flex justify-center">
                  <div className="w-32 h-32 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-4xl">\ud83d\udc68\u200d\ud83d\udcbc</span>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-primary-500 font-medium mb-4">
                    {founder.title}
                  </p>
                  <p className="text-secondary-600 mb-4">
                    {founder.experience}
                  </p>
                  <div className="space-y-2 mb-6">
                    {founder.education.map((edu, index) => (
                      <p key={index} className="text-secondary-600 text-sm">
                        \u2022 {edu}
                      </p>
                    ))}
                  </div>
                  <a
                    href={`mailto:${founder.email}`}
                    className="btn btn-primary px-6 py-3 text-sm font-semibold inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    {founder.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <ExpertiseSection />

      {/* Tools & Methods */}
      <section id="outils" className="section bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              M\u00e9thodologie
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos outils de travail.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary-50 p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold text-secondary-900 mb-4">
                  {tool.category}
                </h3>
                <ul className="space-y-2">
                  {tool.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-secondary-600">
                      \u2022 {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              R\u00e9f\u00e9rences
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ils nous ont fait confiance.
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-secondary-100 flex items-center justify-center"
              >
                <div className="text-center">
                  <p className="font-medium text-secondary-700">{partner.name}</p>
                  <p className="text-xs text-secondary-500 mt-1">
                    {partner.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
