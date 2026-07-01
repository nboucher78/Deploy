"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { stats } from "@/data/stats";

export default function HeroSection() {
  return (
    <section className="hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
              Bureau d&apos;études indépendant
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            De la{" "}
            <span className="text-primary-500">donnée terrain</span>
            <br />
            à la{" "}
            <span className="text-primary-500">décision</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-secondary-600 mb-10 max-w-2xl mx-auto"
          >
            Ingénierie des transports et data mobilité, en France et à
            l&apos;international.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link
              href="/realisations"
              className="btn btn-primary px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl"
            >
              Voir nos réalisations
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
            <Link
              href="/contact"
              className="btn btn-secondary px-8 py-4 text-lg font-semibold"
            >
              Discuter d&apos;un projet
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-secondary-100"
              >
                <p className="text-3xl md:text-4xl font-bold text-primary-500">
                  {stat.value}
                </p>
                <p className="text-secondary-600 mt-2 font-medium">
                  {stat.label}
                </p>
                <p className="text-secondary-500 text-sm mt-1">
                  {stat.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-64 h-64 bg-primary-100 rounded-full -translate-x-1/2 opacity-50 blur-3xl"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-64 h-64 bg-primary-200 rounded-full translate-x-1/2 opacity-50 blur-3xl"
      ></motion.div>
    </section>
  );
}
