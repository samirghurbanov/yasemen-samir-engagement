import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { INVITATION_CONFIG } from "../config/invitationConfig";

export const DressCode: React.FC = () => {
  return (
    <section className="relative w-full max-w-xl mx-auto py-10 px-6 text-center z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full bg-burgundy-50/70 border border-burgundy-200/70 rounded-xl p-7 sm:p-9 shadow-card gold-accent-border"
      >
        <span className="font-cinzel text-xs sm:text-sm tracking-[0.3em] text-gold-700 uppercase font-semibold mb-3 flex items-center justify-center space-x-3">
          <span className="w-6 h-[1px] bg-gold-400/40" />
          <span>Geyim tərzi</span>
          <span className="w-6 h-[1px] bg-gold-400/40" />
        </span>
        <Sparkles className="w-6 h-6 text-gold-600 mx-auto my-4 stroke-[1.4]" />
        <h2 className="font-serif text-2xl sm:text-3xl text-charcoal mb-3">
          {INVITATION_CONFIG.dressCode.title}
        </h2>
        <p className="font-sans text-sm leading-relaxed text-charcoal-muted max-w-md mx-auto">
          {INVITATION_CONFIG.dressCode.description}
        </p>
        <div
          className="flex justify-center gap-3 mt-6"
          aria-label="Rəng palitrası"
        >
          {INVITATION_CONFIG.dressCode.colors.map((color) => (
            <span
              key={color}
              className="w-7 h-7 rounded-full border-2 border-white shadow-sm"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
