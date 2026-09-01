import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarPlus, Download, ExternalLink } from 'lucide-react';
import { INVITATION_CONFIG } from '../config/invitationConfig';

export const AddToCalendar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const eventTitle = `${INVITATION_CONFIG.couple.groom} & ${INVITATION_CONFIG.couple.bride} — ${INVITATION_CONFIG.couple.subtitle}`;
  const eventDetails = `Böyük fərəh və sevinclə sizi bu özəl günümüzü bizimlə qeyd etməyə dəvət edirik.\n\nMəkan: ${INVITATION_CONFIG.venue.name}, ${INVITATION_CONFIG.venue.city}`;
  const eventLocation = `${INVITATION_CONFIG.venue.name}, ${INVITATION_CONFIG.venue.city}, ${INVITATION_CONFIG.venue.country}`;
  
  // Dates in UTC format YYYYMMDDTHHMMSSZ (18 Oct 2026 18:00 Baku time / UTC+4 is 14:00 UTC)
  const startUtc = "20261018T140000Z";
  const endUtc = "20261018T180000Z";

  // Google Calendar URL
  const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${startUtc}/${endUtc}&details=${encodeURIComponent(eventDetails)}&location=${encodeURIComponent(eventLocation)}`;

  // Outlook Web URL
  const outlookUrl = `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject=${encodeURIComponent(eventTitle)}&startdt=2026-10-18T14:00:00Z&enddt=2026-10-18T18:00:00Z&location=${encodeURIComponent(eventLocation)}&body=${encodeURIComponent(eventDetails)}`;

  // Download .ics file for Apple Calendar / Outlook / iCal
  const handleDownloadIcs = () => {
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Samir & Yasemen Engagement//AZ',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `SUMMARY:${eventTitle}`,
      `DESCRIPTION:${eventDetails.replace(/\n/g, '\\n')}`,
      `LOCATION:${eventLocation}`,
      `DTSTART:${startUtc}`,
      `DTEND:${endUtc}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'samir-yasemen-nisan.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left mt-3" ref={dropdownRef}>
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setIsOpen(!isOpen)}
        className="group relative inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold-500/15 via-gold-400/25 to-gold-500/15 hover:from-gold-500/25 hover:via-gold-400/35 hover:to-gold-500/25 text-charcoal border border-gold-400/70 shadow-sm text-xs sm:text-sm font-sans font-medium tracking-wide transition-all duration-300"
      >
        <CalendarPlus className="w-4 h-4 text-gold-700 group-hover:scale-110 transition-transform duration-200" />
        <span>Təqvimə əlavə et</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 rounded-xl bg-white/95 backdrop-blur-md border border-gold-300/80 shadow-xl z-50 p-1.5 space-y-1"
          >
            <a
              href={googleUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-3 w-full px-3 py-2.5 text-xs text-charcoal hover:bg-gold-50/80 rounded-lg transition-colors text-left"
            >
              <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-[10px]">
                G
              </div>
              <span className="font-medium flex-1">Google Calendar</span>
              <ExternalLink className="w-3 h-3 text-charcoal-muted" />
            </a>

            <button
              onClick={handleDownloadIcs}
              className="flex items-center space-x-3 w-full px-3 py-2.5 text-xs text-charcoal hover:bg-gold-50/80 rounded-lg transition-colors text-left"
            >
              <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center font-bold text-[10px]">
                
              </div>
              <span className="font-medium flex-1">Apple / iCal (.ics)</span>
              <Download className="w-3 h-3 text-charcoal-muted" />
            </button>

            <a
              href={outlookUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-3 w-full px-3 py-2.5 text-xs text-charcoal hover:bg-gold-50/80 rounded-lg transition-colors text-left"
            >
              <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center font-bold text-[10px]">
                O
              </div>
              <span className="font-medium flex-1">Outlook Calendar</span>
              <ExternalLink className="w-3 h-3 text-charcoal-muted" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
