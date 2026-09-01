import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { WaxSeal } from './WaxSeal';
import { INVITATION_CONFIG } from '../config/invitationConfig';

interface EnvelopeOpeningProps {
  onOpened: () => void;
  onSealClicked: () => void;
}

export const EnvelopeOpening: React.FC<EnvelopeOpeningProps> = ({ onOpened, onSealClicked }) => {
  const [isOpening, setIsOpening] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    onSealClicked();

    const animDuration = shouldReduceMotion ? 1200 : 3800;

    setTimeout(() => {
      onOpened();
    }, animDuration);
  };

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden z-20 select-none bg-[#3c4839] flex items-center justify-center">
      
      {/* Full Viewport Close-Up Camera Container */}
      <motion.div
        className="relative w-full h-full max-w-lg mx-auto overflow-hidden bg-sage-texture-ref shadow-2xl flex flex-col justify-between perspective-1200"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={
          isOpening
            ? {
                scale: shouldReduceMotion ? [1, 1] : [1, 1.08, 1.8, 3.2],
                opacity: [1, 1, 1, 0],
              }
            : { opacity: 1, scale: 1 }
        }
        transition={{ duration: shouldReduceMotion ? 1.2 : 3.6, ease: [0.16, 1, 0.3, 1] }}
      >
        
        {/* Inner Card Reveal Container (Positioned inside the envelope pocket behind flaps) */}
        <motion.div
          className="absolute inset-x-6 top-16 bottom-16 bg-[#fdfbf7] border border-gold-300/60 rounded-md shadow-2xl p-8 flex flex-col items-center justify-center text-center z-10"
          initial={{ y: 0 }}
          animate={
            isOpening
              ? {
                  scale: shouldReduceMotion ? 1 : 1.15,
                  boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
                }
              : { y: 0 }
          }
          transition={{ delay: shouldReduceMotion ? 0 : 1.1, duration: 2, ease: "easeInOut" }}
        >
          <div className="border border-gold-400/40 p-6 w-full h-full flex flex-col items-center justify-center rounded">
            <span className="font-cinzel text-xs tracking-[0.3em] text-gold-700 uppercase mb-3 font-semibold">
              Nişan Dəvətnaməsi
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-medium tracking-wide">
              {INVITATION_CONFIG.couple.displayNames}
            </h2>
            <div className="w-12 h-[1px] bg-gold-400/60 my-3" />
            <p className="font-serif italic text-sm text-charcoal-muted">
              {INVITATION_CONFIG.event.dateFormatted}
            </p>
          </div>
        </motion.div>

        {/* LEFT DIAGONAL OVERLAP FLAP (Matching Reference Image) */}
        <motion.div
          className="absolute inset-0 z-20 pointer-events-none transform-style-3d origin-left"
          animate={isOpening ? { x: '-100%', rotateY: -25 } : { x: '0%', rotateY: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.8 : 2.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <svg className="w-full h-full drop-shadow-[8px_0_20px_rgba(0,0,0,0.5)]" viewBox="0 0 500 800" preserveAspectRatio="none">
            {/* Left Diagonal Pocket Flap */}
            <polygon points="0,0 310,0 150,800 0,800" fill="#798a75" />
            <line x1="310" y1="0" x2="150" y2="800" stroke="#505e4d" strokeWidth="2.5" />
            <line x1="307" y1="0" x2="147" y2="800" stroke="#9bb097" strokeWidth="1.2" />

            {/* High-Relief 3D Embossed Botanical Sculptures on Left Flap (Exact Reference Match) */}
            <g className="embossed-high-relief" stroke="#536350" strokeWidth="2" fill="none" opacity="0.95">
              {/* Large 5-Petal Flower (Top Left) */}
              <path d="M 60 180 C 40 140, 90 110, 120 150 C 150 110, 190 140, 170 180 C 210 210, 180 260, 130 240 C 100 270, 50 240, 70 200 Z" fill="#798a75" />
              <circle cx="125" cy="185" r="14" fill="#677763" stroke="#485645" strokeWidth="1.5" />
              <circle cx="125" cy="185" r="8" fill="#586654" />

              {/* Curving Vines & Leaves along Left Seam */}
              <path d="M -20 50 C 60 120, 100 280, 60 480 C 30 600, -20 720, -50 780" strokeWidth="2.8" />
              
              {/* Leaves branching left & right */}
              <path d="M 70 290 C 120 270, 160 300, 140 340 C 90 340, 70 310, 70 290 Z" fill="#798a75" />
              <path d="M 50 380 C 100 360, 140 390, 120 430 C 70 430, 50 400, 50 380 Z" fill="#798a75" />
              <path d="M 30 480 C 80 460, 120 490, 90 530 C 50 530, 30 500, 30 480 Z" fill="#798a75" />

              {/* Lower 5-Petal Flower (Bottom Left) */}
              <path d="M 40 640 C 20 600, 70 570, 100 610 C 130 570, 170 600, 150 640 C 190 670, 160 720, 110 700 C 80 730, 30 700, 50 660 Z" fill="#798a75" />
              <circle cx="105" cy="645" r="12" fill="#677763" stroke="#485645" strokeWidth="1.5" />
            </g>
          </svg>
        </motion.div>

        {/* RIGHT DIAGONAL OVERLAP FLAP (Matching Reference Image) */}
        <motion.div
          className="absolute inset-0 z-20 pointer-events-none transform-style-3d origin-right"
          animate={isOpening ? { x: '100%', rotateY: 25 } : { x: '0%', rotateY: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.8 : 2.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <svg className="w-full h-full drop-shadow-[-8px_0_20px_rgba(0,0,0,0.5)]" viewBox="0 0 500 800" preserveAspectRatio="none">
            {/* Right Diagonal Pocket Flap */}
            <polygon points="310,0 500,0 500,800 150,800" fill="#758671" />
            <line x1="310" y1="0" x2="150" y2="800" stroke="#4b5847" strokeWidth="2" />

            {/* High-Relief 3D Embossed Botanical Sculptures on Right Flap (Exact Reference Match) */}
            <g className="embossed-high-relief" stroke="#50604d" strokeWidth="2" fill="none" opacity="0.95">
              {/* Top Right 5-Petal Flower */}
              <path d="M 370 100 C 350 60, 400 30, 430 70 C 460 30, 500 60, 480 100 C 520 130, 490 180, 440 160 C 410 190, 360 160, 380 120 Z" fill="#758671" />
              <circle cx="435" cy="105" r="13" fill="#647460" stroke="#455342" strokeWidth="1.5" />

              {/* Right Side Botanical Vine & Leaves */}
              <path d="M 520 10 C 420 120, 380 300, 430 520 C 460 660, 520 740, 540 800" strokeWidth="2.6" />
              
              <path d="M 390 220 C 340 200, 310 240, 330 280 C 380 270, 400 240, 390 220 Z" fill="#758671" />
              <path d="M 410 320 C 360 300, 330 340, 350 380 C 400 370, 420 340, 410 320 Z" fill="#758671" />

              {/* Lower Right Blossom */}
              <path d="M 380 500 C 360 460, 410 430, 440 470 C 470 430, 510 460, 490 500 C 530 530, 500 580, 450 560 C 420 590, 370 560, 390 520 Z" fill="#758671" />
              <circle cx="445" cy="505" r="12" fill="#647460" stroke="#455342" strokeWidth="1.5" />
            </g>
          </svg>
        </motion.div>

        {/* Centerpiece: Large Taupe-Champagne Wax Seal in Center */}
        <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 flex flex-col items-center">
          <WaxSeal onClick={handleOpen} isOpening={isOpening} />
          
          {/* Minimal Instruction beneath Seal */}
          <motion.div
            className="mt-6 flex items-center space-x-2 text-[#f5efe6]/90 font-sans text-xs tracking-[0.25em] uppercase font-light animate-breath drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]"
            animate={isOpening ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#d8cdbe] animate-ping" />
            <span>{INVITATION_CONFIG.messages.openingInstruction}</span>
          </motion.div>
        </div>

        {/* Subtle Couple Names near Bottom Margin */}
        <motion.div
          className="absolute bottom-6 inset-x-0 text-center z-30 pointer-events-none"
          animate={isOpening ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <p className="font-serif text-lg sm:text-xl text-[#f5efe6]/80 font-normal tracking-wide drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
            {INVITATION_CONFIG.couple.displayNames}
          </p>
        </motion.div>

      </motion.div>

    </div>
  );
};
