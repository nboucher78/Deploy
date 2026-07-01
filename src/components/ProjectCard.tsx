"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className={`card overflow-hidden ${
        project.featured ? "card-featured" : ""
      }`}
    >
      <div className="relative h-48 md:h-56">
        {/* Placeholder image with gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200"
          style={{
            backgroundImage: project.image
              ? `url(${project.image})`
              : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>

          {/* Country Badge */}
          <div className="absolute top-4 left-4">
            <span className="badge badge-primary">
              {project.country}
            </span>
          </div>

          {/* Year Badge */}
          <div className="absolute top-4 right-4">
            <span className="badge bg-white/90 text-secondary-700">
              {project.year}
            </span>
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute bottom-4 left-4">
              <span className="badge bg-accent-yellow text-primary-900">
                Projet phare
              </span>
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <span className="text-primary-500 font-bold text-lg">
                {project.number}
              </span>
              <span className="text-secondary-500 text-sm">{project.type}</span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-500 transition-colors line-clamp-1">
            {project.title}
          </h3>

          <p className="text-secondary-600 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span key={index} className="badge badge-secondary">
                {tag}
              </span>
            ))}
          </div>

          <Link
            href={`/realisations/${project.id}`}
            className="text-primary-500 font-medium hover:text-primary-600 transition-colors inline-flex items-center"
          >
            Lire l&apos;étude
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
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
        </div>
      </motion.div>
  );
}
