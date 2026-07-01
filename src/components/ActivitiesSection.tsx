"use client";

import { motion } from "framer-motion";
import { activities } from "@/data/activities";
import ActivityCard from "./ActivityCard";

export default function ActivitiesSection() {
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
            Nos services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nos activités, vos besoins.
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Six besoins récurrents des maîtres d&apos;ouvrage, bureaux
            d&apos;études et bailleurs. Une réponse opérationnelle adossée à 9 ans
            de terrain.
          </p>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ActivityCard activity={activity} index={index} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-secondary-600 mb-6">
            Besoin d&apos;un accompagnement sur mesure ?
          </p>
          <Link
            href="/contact"
            className="btn btn-primary px-8 py-3 text-lg font-semibold inline-flex items-center"
          >
            Nous contacter
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
