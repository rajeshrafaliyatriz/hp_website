"use client";

import React from "react";
import { motion } from "framer-motion";

export function AnimatedArticle({ children }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full"
    >
      {children}
    </motion.article>
  );
}
