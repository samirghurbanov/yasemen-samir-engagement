import React from "react";
import { motion } from "framer-motion";

interface WaxSealProps {
  onClick: () => void;
  isOpening: boolean;
  disabled?: boolean;
}

export const WaxSeal: React.FC<WaxSealProps> = ({
  onClick,
  isOpening,
  disabled,
}) => {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled || isOpening}
      aria-label="Tap wax seal to open invitation"
      className="relative group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-full select-none touch-manipulation z-40"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={
        isOpening
          ? {
              scale: [1, 1.15, 0.95, 1.08, 0],
              opacity: [1, 1, 0.9, 0.7, 0],
              rotate: [0, -3, 3, -2, 0],
            }
          : {}
      }
      transition={{ duration: isOpening ? 2.5 : 0.2, ease: "easeInOut" }}
    >
      {/* Warm glow around the burgundy wax seal */}
      <div className="absolute -inset-6 bg-[radial-gradient(circle,_rgba(126,26,45,0.28),_rgba(212,175,55,0.12),_transparent_70%)] rounded-full blur-xl opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 animate-pulse-slow pointer-events-none" />

      {/* Main Organic Gold Wax Seal Body */}
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-[48%] bg-[#721b2d] shadow-[0_18px_40px_rgba(55,10,18,0.55),inset_0_0_0_rgba(255,255,255,0),inset_0_-5px_10px_rgba(45,6,14,0.4)] flex items-center justify-center border border-[#4b0d1b]/80 transition-transform duration-300">
        {/* Organic Molten Edge Ridges */}
        <div className="absolute inset-1.5 rounded-[46%] border border-[#a94b5b]/70 pointer-events-none opacity-90" />
        <div className="absolute inset-3 rounded-[44%] border border-[#3f0917]/70 pointer-events-none shadow-inner" />

        {/* Inner Stamped Wax Impression Basin */}
        <div className="absolute inset-5 sm:inset-6 rounded-full bg-[#681426] shadow-inner flex items-center justify-center overflow-hidden border border-[#4b0d1b]">
          {/* Single gold tone only; no highlight sheen */}
          {isOpening && (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "100%", opacity: [0, 0.85, 0] }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/90 to-transparent pointer-events-none transform -skew-x-12"
            />
          )}

          {/* SY Monogram + Botanical Fern Branch Artwork SVG (Matching Reference Photo) */}
          <svg
            viewBox="0 0 100 100"
            className="w-18 h-18 sm:w-24 sm:h-24 md:w-28 md:h-28 drop-shadow-[0_2px_3px_rgba(60,50,40,0.6)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="goldSealMonogram"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#fff0a8" />
                <stop offset="25%" stopColor="#e4bd55" />
                <stop offset="50%" stopColor="#b98121" />
                <stop offset="75%" stopColor="#8d5b13" />
                <stop offset="100%" stopColor="#5d390d" />
              </linearGradient>
              <filter
                id="goldEmboss"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feDropShadow
                  dx="0"
                  dy="1.2"
                  stdDeviation="0.5"
                  floodColor="#fffef7"
                  floodOpacity="0.9"
                  result="light"
                />
                <feDropShadow
                  dx="0"
                  dy="-1.2"
                  stdDeviation="0.6"
                  floodColor="#6b4207"
                  floodOpacity="0.8"
                  result="shadow"
                />
              </filter>
            </defs>

            {/* SY Serif Monogram Typography Centered */}
            <g filter="url(#goldEmboss)" fill="url(#goldSealMonogram)">
              <text
                x="50"
                y="46"
                fontFamily="'Cormorant Garamond', 'Playfair Display', serif"
                fontSize="25"
                fontWeight="600"
                textAnchor="middle"
                letterSpacing="2"
              >
                SY
              </text>

              {/* Arching Twin Botanical Fern / Olive Leaves below Monogram (Exact Reference Match) */}
              <g
                stroke="url(#goldSealMonogram)"
                strokeWidth="1.2"
                fill="url(#goldSealMonogram)"
              >
                {/* Central Stem */}
                <path
                  d="M 50 53 L 50 78"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />

                {/* Left Branch Leaves */}
                <path d="M 50 60 C 44 56, 36 56, 30 60 C 37 63, 44 62, 50 60 Z" />
                <path d="M 50 66 C 42 63, 34 65, 26 70 C 34 72, 42 70, 50 66 Z" />
                <path d="M 50 72 C 43 70, 36 73, 30 78 C 37 79, 44 77, 50 72 Z" />

                {/* Right Branch Leaves */}
                <path d="M 50 60 C 56 56, 64 56, 70 60 C 63 63, 56 62, 50 60 Z" />
                <path d="M 50 66 C 58 63, 66 65, 74 70 C 66 72, 58 70, 50 66 Z" />
                <path d="M 50 72 C 57 70, 64 73, 70 78 C 63 79, 56 77, 50 72 Z" />
              </g>
            </g>
          </svg>
        </div>
      </div>

      {/* Fracture & Glow Burst effect on Tap */}
      {isOpening && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 1, 0], scale: [0.8, 1.5, 2.2] }}
          transition={{ duration: 1.8 }}
          className="absolute inset-0 rounded-full border border-white/90 bg-white/40 blur-md pointer-events-none"
        />
      )}
    </motion.button>
  );
};
