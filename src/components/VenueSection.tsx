import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';
import { INVITATION_CONFIG } from '../config/invitationConfig';

export const VenueSection: React.FC = () => {
  return (
    <section className="relative w-full max-w-xl mx-auto py-10 px-6 text-center z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        {/* Section Header */}
        <span className="font-cinzel text-xs sm:text-sm tracking-[0.3em] text-gold-700 uppercase font-semibold mb-3 flex items-center space-x-3">
          <span className="w-6 h-[1px] bg-gold-400/40" />
          <span>Məkan</span>
          <span className="w-6 h-[1px] bg-gold-400/40" />
        </span>

        {/* Venue Box */}
        <div className="w-full bg-white/70 backdrop-blur-sm border border-gold-300/50 rounded-xl p-6 sm:p-8 shadow-card gold-accent-border relative flex flex-col items-center">
          
          <div className="w-12 h-12 rounded-full bg-gold-50 border border-gold-300 flex items-center justify-center text-gold-600 mb-4 shadow-sm">
            <MapPin className="w-6 h-6 stroke-[1.5]" />
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal tracking-wide uppercase mb-1">
            {INVITATION_CONFIG.venue.name}
          </h2>

          <p className="font-sans text-sm sm:text-base text-charcoal-muted tracking-wider mb-6 font-medium">
            {INVITATION_CONFIG.venue.city}, {INVITATION_CONFIG.venue.country}
          </p>

          {/* Google Maps Button */}
          <motion.a
            href={INVITATION_CONFIG.venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-charcoal font-sans text-xs sm:text-sm tracking-widest font-semibold uppercase shadow-md hover:shadow-lg transition-all duration-300 border border-gold-200"
          >
            <MapPin className="w-4 h-4 text-charcoal group-hover:animate-bounce" />
            <span>Google Maps-də Aç</span>
            <ExternalLink className="w-3.5 h-3.5 text-charcoal/70 opacity-80 group-hover:opacity-100 transition-opacity" />
          </motion.a>

        </div>
      </motion.div>
    </section>
  );
};
