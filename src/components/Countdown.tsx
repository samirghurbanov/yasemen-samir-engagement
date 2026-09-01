import React from 'react';
import { motion } from 'framer-motion';
import { useCountdown } from '../hooks/useCountdown';
import { INVITATION_CONFIG } from '../config/invitationConfig';

export const Countdown: React.FC = () => {
  const { days, hours, minutes, seconds, isPast } = useCountdown(
    INVITATION_CONFIG.event.isoDate
  );

  const formatUnit = (value: number): string => {
    return value < 10 ? `0${value}` : `${value}`;
  };

  const counterItems = [
    { label: 'GÜN', value: formatUnit(days) },
    { label: 'SAAT', value: formatUnit(hours) },
    { label: 'DƏQİQƏ', value: formatUnit(minutes) },
    { label: 'SANİYƏ', value: formatUnit(seconds) },
  ];

  return (
    <section className="relative w-full max-w-xl mx-auto py-8 px-4 text-center z-10">
      
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        {/* Header Title */}
        <h3 className="font-cinzel text-xs sm:text-sm tracking-[0.3em] text-gold-700 uppercase font-semibold mb-6 flex items-center space-x-3">
          <span className="w-6 h-[1px] bg-gold-400/40" />
          <span>Geri Sayım</span>
          <span className="w-6 h-[1px] bg-gold-400/40" />
        </h3>

        {/* Counter Cards */}
        {isPast ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-6 bg-white/70 backdrop-blur-sm border border-gold-300 rounded-lg shadow-card text-center"
          >
            <p className="font-serif text-2xl sm:text-3xl text-gold-600 font-medium italic">
              {INVITATION_CONFIG.messages.todaySpecialDay}
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-4 gap-2 sm:gap-4 w-full max-w-md">
            {counterItems.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center p-3 sm:p-4 bg-white/70 backdrop-blur-sm border border-gold-300/40 rounded-lg shadow-sm gold-accent-border relative overflow-hidden"
              >
                {/* Number */}
                <motion.span
                  key={item.value}
                  initial={{ opacity: 0.5, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-charcoal tracking-tight"
                >
                  {item.value}
                </motion.span>
                
                {/* Separator Line */}
                <div className="w-6 h-[1px] bg-gold-400/30 my-1.5" />

                {/* Label */}
                <span className="font-sans text-[10px] sm:text-xs tracking-widest text-charcoal-soft uppercase font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </motion.div>

    </section>
  );
};
