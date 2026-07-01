"use client";

import { motion } from "framer-motion";
import { Activity } from "@/data/activities";

export default function ActivityCard({
  activity,
  index,
}: {
  activity: Activity;
  index: number;
}) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="card p-8 group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center group-hover:bg-primary-100 transition-colors">
            <span className="text-2xl">{activity.icon}</span>
          </div>
          <div>
            <span className="text-primary-500 font-bold text-lg">
              {activity.number}
            </span>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-500 transition-colors">
        {activity.title}
      </h3>

      <p className="text-secondary-600 mb-6">{activity.description}</p>

      <div className="flex flex-wrap gap-2">
        {activity.tags.map((tag, tagIndex) => (
          <motion.span
            key={tagIndex}
            whileHover={{ scale: 1.05 }}
            className="badge badge-primary"
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
