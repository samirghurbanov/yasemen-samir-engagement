import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { INVITATION_CONFIG } from "../config/invitationConfig";

interface EnvelopeOpeningProps {
  onOpened: () => void;
  onSealClicked: () => void;
}

const envelopeImage = `${import.meta.env.BASE_URL}photo-video/photo.jpg`;
const envelopeVideo = `${import.meta.env.BASE_URL}photo-video/video.mp4`;

export const EnvelopeOpening: React.FC<EnvelopeOpeningProps> = ({
  onOpened,
  onSealClicked,
}) => {
  const [isOpening, setIsOpening] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    onSealClicked();
  };

  const startOpeningVideo = () => {
    void videoRef.current?.play().catch(onOpened);
  };

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center overflow-hidden bg-[#b8aaa0] select-none">
      <motion.div
        className="relative h-full w-full max-w-lg overflow-hidden bg-[#f1ebe2] shadow-[0_35px_90px_rgba(65,45,35,0.4)]"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {!isOpening ? (
          <>
            <img
              src={envelopeImage}
              alt="Closed ivory invitation envelope with botanical embossing and wax seal"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <button
              type="button"
              onClick={handleOpen}
              aria-label="Tap the wax seal to open the invitation"
              className="absolute left-1/2 top-1/2 z-10 h-[18%] w-[38%] -translate-x-1/2 -translate-y-1/2 rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-[#8b2437]/50"
            />
            <div className="absolute bottom-7 inset-x-0 z-10 text-center font-sans text-xs uppercase tracking-[0.25em] text-[#6f584b]/80">
              <span className="mr-2 inline-block h-1.5 w-1.5 animate-ping rounded-full bg-[#8f7565]" />
              {INVITATION_CONFIG.messages.openingInstruction}
            </div>
          </>
        ) : (
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            controls={false}
            poster={envelopeImage}
            onLoadedData={startOpeningVideo}
            onEnded={onOpened}
            onError={onOpened}
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={envelopeVideo} type="video/mp4" />
            Your browser does not support the invitation opening video.
          </video>
        )}
      </motion.div>
    </div>
  );
};
