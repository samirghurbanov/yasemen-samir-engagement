import React, { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AmbientBackground } from './components/AmbientBackground';
import { EnvelopeOpening } from './components/EnvelopeOpening';
import { MainInvitation } from './components/MainInvitation';
import { Countdown } from './components/Countdown';
import { VenueSection } from './components/VenueSection';
import { FinalMessage } from './components/FinalMessage';
import { MusicPlayer, MusicPlayerRef } from './components/MusicPlayer';

export function App() {
  const [isOpened, setIsOpened] = useState(false);
  const musicRef = useRef<MusicPlayerRef>(null);

  const handleSealClicked = () => {
    // Start music on user touch gesture
    musicRef.current?.playMusic();
  };
  
  const handleOpened = () => {
    setIsOpened(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden text-charcoal bg-paper-texture selection:bg-gold-200">
      {/* GPU Canvas ambient gold particles & light leak background */}
      <AmbientBackground />

      {/* Discreet floating music player */}
      <MusicPlayer ref={musicRef} />

      {/* Main Screen Flow */}
      <AnimatePresence mode="wait">
        {!isOpened ? (
          <motion.div
            key="envelope-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="w-full min-h-screen flex items-center justify-center"
          >
            <EnvelopeOpening onOpened={handleOpened} onSealClicked={handleSealClicked} />
          </motion.div>
        ) : (
          <motion.main
            key="invitation-screen"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full min-h-screen flex flex-col items-center justify-between py-6 space-y-4"
          >
            {/* Main Luxury Invitation Hero Block */}
            <MainInvitation />

            {/* Live Baku-time Countdown */}
            <Countdown />

            {/* Refined Venue Section with Google Maps Link */}
            <VenueSection />

            {/* Final Romantic Closing & Signature */}
            <FinalMessage />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
