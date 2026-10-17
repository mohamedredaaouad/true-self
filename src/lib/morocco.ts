export interface MoroccanCity {
  nameFr: string;
  nameAr: string;
  delayFr: string;
  delayAr: string;
}

export const MOROCCAN_CITIES: MoroccanCity[] = [
  { nameFr: "Casablanca", nameAr: "الدار البيضاء", delayFr: "Livraison 24h", delayAr: "توصيل خلال 24 ساعة" },
  { nameFr: "Rabat", nameAr: "الرباط", delayFr: "Livraison 24h", delayAr: "توصيل خلال 24 ساعة" },
  { nameFr: "Marrakech", nameAr: "مراكش", delayFr: "Livraison 24h - 48h", delayAr: "توصيل 24 إلى 48 ساعة" },
  { nameFr: "Tanger", nameAr: "طنجة", delayFr: "Livraison 24h - 48h", delayAr: "توصيل 24 إلى 48 ساعة" },
  { nameFr: "Fès", nameAr: "فاس", delayFr: "Livraison 24h - 48h", delayAr: "توصيل 24 إلى 48 ساعة" },
  { nameFr: "Agadir", nameAr: "أكادير", delayFr: "Livraison 48h", delayAr: "توصيل خلال 48 ساعة" },
  { nameFr: "Salé", nameAr: "سلا", delayFr: "Livraison 24h", delayAr: "توصيل خلال 24 ساعة" },
  { nameFr: "Meknès", nameAr: "مكناس", delayFr: "Livraison 24h - 48h", delayAr: "توصيل 24 إلى 48 ساعة" },
  { nameFr: "Kénitra", nameAr: "القنيطرة", delayFr: "Livraison 24h - 48h", delayAr: "توصيل 24 إلى 48 ساعة" },
  { nameFr: "Tétouan", nameAr: "تطوان", delayFr: "Livraison 48h", delayAr: "توصيل خلال 48 ساعة" },
  { nameFr: "Oujda", nameAr: "وجدة", delayFr: "Livraison 48h - 72h", delayAr: "توصيل 48 إلى 72 ساعة" },
  { nameFr: "Mohammédia", nameAr: "المحمدية", delayFr: "Livraison 24h", delayAr: "توصيل خلال 24 ساعة" },
  { nameFr: "El Jadida", nameAr: "الجديدة", delayFr: "Livraison 24h - 48h", delayAr: "توصيل 24 إلى 48 ساعة" },
  { nameFr: "Safi", nameAr: "آسفي", delayFr: "Livraison 48h", delayAr: "توصيل خلال 48 ساعة" },
  { nameFr: "Nador", nameAr: "الناظور", delayFr: "Livraison 48h - 72h", delayAr: "توصيل 48 إلى 72 ساعة" },
  { nameFr: "Beni Mellal", nameAr: "بني ملال", delayFr: "Livraison 48h", delayAr: "توصيل خلال 48 ساعة" },
  { nameFr: "Témara", nameAr: "تمارة", delayFr: "Livraison 24h", delayAr: "توصيل خلال 24 ساعة" },
  { nameFr: "Khémisset", nameAr: "الخميسات", delayFr: "Livraison 48h", delayAr: "توصيل خلال 48 ساعة" },
  { nameFr: "Berrechid", nameAr: "برشيد", delayFr: "Livraison 24h", delayAr: "توصيل خلال 24 ساعة" },
  { nameFr: "Dakhla", nameAr: "الداخلة", delayFr: "Livraison 3 - 5 jours", delayAr: "توصيل 3 إلى 5 أيام" },
  { nameFr: "Laâyoune", nameAr: "العيون", delayFr: "Livraison 3 - 5 jours", delayAr: "توصيل 3 إلى 5 أيام" },
  { nameFr: "Autre ville", nameAr: "مدينة أخرى", delayFr: "Livraison 48h - 72h", delayAr: "توصيل 48 إلى 72 ساعة" },
];

/**
 * Clean & format a Moroccan phone number for display and storage
 */
export function formatMoroccanPhone(raw: string): string {
  const digits = raw.replace(/[^0-9]/g, "");
  if (digits.startsWith("212")) {
    return "0" + digits.slice(3);
  }
  return digits;
}

/**
 * Validate that phone number is a valid Moroccan mobile number (starts with 06, 07, or international equivalent)
 */
export function isValidMoroccanPhone(phone: string): boolean {
  const clean = phone.replace(/[^0-9]/g, "");
  if (clean.length === 10 && (clean.startsWith("06") || clean.startsWith("07") || clean.startsWith("05"))) {
    return true;
  }
  if (clean.length === 12 && clean.startsWith("212") && (clean.startsWith("2126") || clean.startsWith("2127"))) {
    return true;
  }
  return clean.length >= 9;
}
