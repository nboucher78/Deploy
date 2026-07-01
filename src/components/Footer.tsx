"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { partners } from "@/data/partners";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "À propos", path: "/a-propos" },
      { name: "Notre expertise", path: "/a-propos#expertise" },
      { name: "Notre modèle", path: "/a-propos#modele" },
      { name: "Implantation", path: "/a-propos#implantation" },
    ],
    services: [
      { name: "Activités", path: "/activites" },
      { name: "Réalisations", path: "/realisations" },
      { name: "Outils & méthodes", path: "/a-propos#outils" },
    ],
    contact: [
      { name: "Contactez-nous", path: "/contact" },
      { name: "Devis", path: "/contact#devis" },
      { name: "Réponse sous 24h", path: "/contact" },
    ],
  };

  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: "🔗" },
    { name: "Email", href: "mailto:contact@tdme.fr", icon: "✉️" },
    { name: "Téléphone", href: "tel:+33751521724", icon: "📞" },
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">TD</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">TDME</h3>
                <p className="text-secondary-400 text-sm">
                  Transport Data & Mobility Engineering
                </p>
              </div>
            </div>
            <p className="text-secondary-400 text-sm mb-6">
              Bureau d&apos;études spécialisé en ingénierie des transports et en
              data mobilité. Depuis 2016, nous intervenons sur des projets de
              transport, de mobilité et d&apos;aménagement urbain.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center text-lg hover:bg-primary-500 transition-colors"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * Object.keys(footerLinks).indexOf(category) }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-lg mb-4 text-primary-400">
                {category === "company" && "Entreprise"}
                {category === "services" && "Services"}
                {category === "contact" && "Contact"}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="text-secondary-400 hover:text-primary-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-lg mb-4 text-primary-400">
              Coordonnées
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <span className="text-primary-400 mt-1">✉️</span>
                <div>
                  <p className="text-secondary-400">contact@tdme.fr</p>
                  <p className="text-secondary-400">malek.belkhir@tdme.fr</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-primary-400 mt-1">📞</span>
                <p className="text-secondary-400">+33 7 51 52 17 24</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-primary-400 mt-1">📍</span>
                <div className="text-secondary-400">
                  <p>Paris & Tunis</p>
                  <p>France & International</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-secondary-800"
        >
          <h4 className="font-bold text-lg mb-6 text-center text-primary-400">
            Partenaires & Clients
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {partners.slice(0, 8).map((partner) => (
              <div
                key={partner.name}
                className="px-4 py-2 bg-secondary-800 rounded-lg text-secondary-400 text-sm hover:bg-primary-500 hover:text-white transition-colors"
              >
                {partner.name}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-secondary-800 text-center text-secondary-500 text-sm"
        >
          <p>
            © {currentYear} TDME. Tous droits réservés. | Bureau d&apos;études
            indépendant.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
