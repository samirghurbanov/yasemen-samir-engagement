import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { INVITATION_CONFIG } from "../config/invitationConfig";

export const StoryTimeline: React.FC = () => {
  return (
    <section className="relative w-full max-w-xl mx-auto py-10 px-6 text-center z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="font-cinzel text-xs sm:text-sm tracking-[0.3em] text-gold-700 uppercase font-semibold mb-3 flex items-center justify-center space-x-3">
          <span className="w-6 h-[1px] bg-gold-400/40" />
          <span>Hekayəmiz</span>
          <span className="w-6 h-[1px] bg-gold-400/40" />
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl text-charcoal mb-8">
          Birlikdə yazılan hekayə
        </h2>

        <div className="relative text-left pl-7 sm:pl-10">
          <div className="absolute left-[10px] sm:left-[18px] top-2 bottom-2 w-px bg-gold-300/70" />
          <div className="space-y-8">
            {INVITATION_CONFIG.story.map((moment, index) => (
              <motion.article
                key={moment.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="relative"
              >
                <div className="absolute -left-7 sm:-left-10 top-0.5 w-5 h-5 rounded-full bg-paper-texture border border-gold-500 flex items-center justify-center">
                  <Heart className="w-2.5 h-2.5 text-gold-600 fill-gold-500" />
                </div>
                <p className="font-cinzel text-xs tracking-[0.18em] uppercase text-gold-700 mb-1">
                  {moment.date}
                </p>
                <h3 className="font-serif text-xl sm:text-2xl text-charcoal mb-1">
                  {moment.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-charcoal-muted max-w-md">
                  {moment.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
