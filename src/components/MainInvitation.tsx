import React from 'react';
import { motion } from 'framer-motion';
import { INVITATION_CONFIG } from '../config/invitationConfig';
import { AddToCalendar } from './AddToCalendar';

export const MainInvitation: React.FC = () => {
  return (
    <section className="relative w-full max-w-xl mx-auto pt-10 pb-8 px-6 text-center z-10 flex flex-col items-center">
      
      {/* Decorative Gold Leaf Top Flourish */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-6"
      >
        <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className="mx-auto">
          <path
            d="M20 0C18 6 12 10 0 12C12 14 18 18 20 24C22 18 28 14 40 12C28 10 22 6 20 0Z"
            fill="url(#goldFlourish)"
          />
          <defs>
            <linearGradient id="goldFlourish" x1="0" y1="0" x2="40" y2="24">
              <stop offset="0%" stopColor="#f5e8cf" />
              <stop offset="50%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#c59b27" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Main Names - Centerpiece */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-charcoal leading-tight uppercase mb-2"
      >
        <span className="block sm:inline">{INVITATION_CONFIG.couple.groom}</span>
        <span className="block sm:inline font-serif italic text-gold-600 font-normal mx-2 sm:mx-3 lowercase text-3xl sm:text-4xl md:text-5xl">&amp;</span>
        <span className="block sm:inline">{INVITATION_CONFIG.couple.bride}</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="flex items-center space-x-3 my-4"
      >
        <div className="w-8 h-[1px] bg-gold-400/40" />
        <span className="font-cinzel text-xs sm:text-sm tracking-[0.3em] text-gold-700 uppercase font-semibold">
          {INVITATION_CONFIG.couple.subtitle}
        </span>
        <div className="w-8 h-[1px] bg-gold-400/40" />
      </motion.div>

      {/* Romantic Invitation Quote */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.45 }}
        className="my-8 max-w-lg px-4"
      >
        <p className="font-serif text-lg sm:text-xl md:text-2xl text-charcoal/90 leading-relaxed italic whitespace-pre-line font-light">
          "{INVITATION_CONFIG.messages.invitationQuote}"
        </p>
      </motion.div>

      {/* Event Date & Time Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.55 }}
        className="w-full max-w-sm my-4 bg-white/60 backdrop-blur-sm border border-gold-300/50 rounded-lg p-6 shadow-card gold-accent-border"
      >
        <div className="flex flex-col items-center space-y-4">
          
          <div className="font-cinzel text-xs tracking-[0.25em] text-gold-700 uppercase">
            {INVITATION_CONFIG.event.dayFormatted}
          </div>

          <div className="w-full flex items-center justify-center space-x-4 border-y border-gold-300/40 py-3">
            <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-wider text-charcoal">
              {INVITATION_CONFIG.event.dateFormatted}
            </span>
          </div>

          <div className="flex items-center space-x-2 text-charcoal-muted text-sm font-sans tracking-widest font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{INVITATION_CONFIG.event.timeFormatted}</span>
          </div>

          {/* Add to Calendar Button */}
          <AddToCalendar />

        </div>
      </motion.div>

    </section>
  );
};
