const baseShortTerm = [90, 120, 140]; // Studio, 1BR, 2BR
const baseLongTerm = [800, 1000, 1500]; // Studio, 1BR, 2BR

// -------------------- Center --------------------
const shortTermMultipliers: Record<string, number> = {
  "City Centre": 0.884,
  "Old Town": 0.89,
  "Kapana": 0.88,

// -------------------- Wider Center --------------------
  "Karshiyaka": 0.89,
  "Marasha": 0.87,
  "Mladezhki Halm": 0.878,
  "Sadiyski": 0.845,
  "Kamenitsa 1": 0.885,
  "Kamenitsa 2": 0.854,

// -------------------- Suburbs --------------------
  "Zaharna fabrika": 0.80,
  "Gagarin": 0.79,
  "Filipovo": 0.60,
  "Zapaden": 0.77,
  "Hristo Smirnenski": 0.77,
  "Kyuchuk Parizh": 0.78,
  "Trakiya": 0.76,
  "Vastanicheski": 0.74,
  "Komatevski vazel": 0.73,
  "Yuzhen": 0.74,
  "Ostromila": 0.74,
  "Belomorski": 0.74,
  "Proslav": 0.73,
  "Peshtersko shose": 0.73,
};

const longTermMultipliers: Record<string, number> = {
  // -------------------- Center --------------------
  "City Centre": 1.10,
  "Old Town": 1.08,
  "Kapana": 1.06,

  // -------------------- Wider Center --------------------
  "Karshiyaka": 0.95,
  "Marasha": 0.94,
  "Mladezhki Halm": 1.1,
  "Sadiyski": 0.93,
  "Kamenitsa 1": 0.93,
  "Kamenitsa 2": 0.93,

  // -------------------- Suburbs --------------------
  "Zaharna fabrika": 0.95,
  "Gagarin": 0.95,
  "Filipovo": 0.77,
  "Zapaden": 0.93,
  "Hristo Smirnenski": 0.921,
  "Kyuchuk Parizh": 0.94,
  "Trakiya": 0.942,
  "Vastanicheski": 0.912,
  "Komatevski vazel": 0.923,
  "Yuzhen": 0.913,
  "Ostromila": 0.912,
  "Belomorski": 0.912,
  "Proslav": 0.914,
  "Peshtersko shose": 0.914,
};

export const getPlovdivShortTermRate = (neighborhood: string, bedrooms: string | number): number => {
  const index = parseInt(bedrooms as string);
  const base = baseShortTerm[index] ?? 100;
  const multiplier = shortTermMultipliers[neighborhood] ?? 1.0;
  return base * multiplier;
};

export const getPlovdivLongTermRate = (neighborhood: string, bedrooms: string | number): number => {
  const index = parseInt(bedrooms as string);
  const base = baseLongTerm[index] ?? 1000;
  const multiplier = longTermMultipliers[neighborhood] ?? 1.0;
  return base * multiplier;
};
