/**
 * SAMİR & YASƏMƏN NİŞAN DƏVƏTNAMƏSİ KONFİQURASİYASI
 * 
 * Bütün məlumatları aşağıdakı hissədən asanlıqla yeniləyə bilərsiniz.
 */

export const INVITATION_CONFIG = {
  // Cütlük Məlumatları
  couple: {
    groom: "Samir",
    bride: "Yasəmən",
    displayNames: "Samir & Yasəmən",
    monogram: "SY",
    subtitle: "Nişan Mərasimimiz",
  },

  // Mərasim Tarixi və Vaxtı (Bakı vaxtı: UTC+4)
  event: {
    // ISO Tarix sətri (Bakı yerli vaxtı: 18 Oktyabr 2026, 18:00)
    isoDate: "2026-10-18T18:00:00+04:00",
    dateFormatted: "18 OKTYABR 2026",
    timeFormatted: "18:00",
    dayFormatted: "BAZAR GÜNÜ",
    timezoneLabel: "AZT (GMT+4)",
  },

  // Məkan Məlumatları
  venue: {
    name: "QORODOK RESTORANI",
    city: "Sumqayıt",
    country: "Azərbaycan",
    fullAddress: "Qorodok Restoranı, Sumqayıt, Azərbaycan",
    // Google Maps keçidi
    googleMapsUrl: "https://maps.google.com/?q=Qorodok+Restaurant+Sumgayit+Azerbaijan",
  },

  // Arxa Fon Musiqisi
  music: {
    url: "/yasemen-samir-engagement/music/engagement.mp3",
    title: "Romantik Atmosfer",
  },

  // Dəvətnamə Mətnləri
  messages: {
    openingInstruction: "Möhürə toxunun",
    invitationQuote: "Bəzi anlar xatirəyə, bəzi xatirələr isə əbədiliyin başlanğıcına çevrilir.\n\nBöyük fərəh və sevinclə sizi bu özəl günümüzü bizimlə qeyd etməyə dəvət edirik.",
    finalMessage: "Hekayəmizin bir hissəsi olduğunuz üçün təşəkkür edirik. Bu gözəl anı sizinlə bölüşməyi səbirsizliklə gözləyirik.",
    withLove: "Sevgi ilə,",
    todaySpecialDay: "Bu gün bizim özəl günümüzdür ♡",
  },

  // SEO və Sosial Paylaşımlar
  meta: {
    title: "Samir & Yasəmən — Nişan Dəvətnaməsi",
    description: "Siz 18 Oktyabr 2026 tarixində keçiriləcək Samir & Yasəmən cütlüyünün nişan mərasiminə dəvətlisiniz.",
  }
} as const;
