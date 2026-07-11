"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects, projectTypes, countries } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function RealisationsSection() {
  const [selectedType, setSelectedType] = useState("Tous");
  const [selectedCountry, setSelectedCountry] = useState("Tous");

  const filteredProjects = projects.filter((project) => {
    const matchType = selectedType === "Tous" || project.type === selectedType;
    const matchCountry =
      selectedCountry === "Tous" || project.country === selectedCountry;
    return matchType && matchCountry;
  });

  return (
    <section className="section-light">
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
            Nos projets
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nos réalisations, du diagnostic à la décision.
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Évaluation économique, études de trafic, mobilité urbaine et transport
            lacustre. Des projets menés en Afrique subsaharienne et au Maghreb.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-4 mb-12"
        >
          <div className="flex-1">
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Type de projet
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full"
            >
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Pays
            </label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full"
            >
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="realizations-grid">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={project.featured ? "md:col-span-2" : ""}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            <p className="text-secondary-500 text-xl">
              Aucun projet trouvé avec ces filtres.
            </p>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-secondary-600 mb-6">
            Vous avez un projet similaire ?
          </p>
          <Link
            href="/contact"
            className="btn btn-primary px-8 py-3 text-lg font-semibold inline-flex items-center"
          >
            Parlons-en
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
