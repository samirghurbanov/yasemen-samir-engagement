import React from 'react';
import { motion } from 'framer-motion';
import { INVITATION_CONFIG } from '../config/invitationConfig';

export const FinalMessage: React.FC = () => {
  return (
    <footer className="relative w-full max-w-xl mx-auto pt-8 pb-16 px-6 text-center z-10 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="flex flex-col items-center space-y-6"
      >
        {/* Heart Divider Line */}
        <div className="flex items-center space-x-3 w-full max-w-xs">
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-gold-400/40 to-gold-400/80" />
          <span className="text-gold-500 text-sm">♡</span>
          <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-gold-400/40 to-gold-400/80" />
        </div>

        {/* Final Quote */}
        <p className="font-serif text-lg sm:text-xl text-charcoal/90 leading-relaxed italic max-w-md">
          "{INVITATION_CONFIG.messages.finalMessage}"
        </p>

        {/* Signature */}
        <div className="pt-4 flex flex-col items-center space-y-1">
          <span className="font-cinzel text-xs tracking-[0.25em] text-gold-700 uppercase">
            {INVITATION_CONFIG.messages.withLove}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-medium tracking-wide">
            {INVITATION_CONFIG.couple.displayNames} <span className="text-gold-500 text-2xl font-normal">♡</span>
          </h2>
        </div>

        {/* Watermark Monogram Emblem */}
        <div className="pt-6 opacity-60 hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 rounded-full border border-gold-400/40 flex items-center justify-center bg-gold-50/50 shadow-sm">
            <span className="font-cinzel text-xs font-bold tracking-widest text-gold-700">
              {INVITATION_CONFIG.couple.monogram}
            </span>
          </div>
        </div>

      </motion.div>
    </footer>
  );
};
