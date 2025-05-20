// -------------------- Sofia Base Rates --------------------
const baseShortTerm = [100, 130, 160]; // Studio, 1BR, 2BR
const baseLongTerm = [950, 1250, 1700]; // Studio, 1BR, 2BR

// -------------------- Center --------------------
const shortTermMultipliers = {
    "Oborishte": 0.91,
    "Sredets": 0.92,
    "Triaditsa": 0.91,
    "Vazrazhdane": 0.90,
    "Lower Lozenets": 0.90,
    "Zona B-5": 0.88,
    "Yavorov": 0.89,
  
    // -------------------- Wider Center --------------------
    "Upper Lozenets": 0.87,
    "Krasno Selo": 0.86,
    "Slatina": 0.85,
    "Poduyane": 0.85,
    "Geo Milev": 0.85,
    "Reduta": 0.84,
    "Hladilnika": 0.84,
    "Iztok": 0.84,
    "Ivan Vazov": 0.84,
  
    // -------------------- Suburbs --------------------
    "Mladost": 0.81,
    "Studentski Grad": 0.82,
    "Dianabad": 0.80,
    "Druzhba": 0.79,
    "Ovcha Kupel": 0.78,
    "Lyulin": 0.77,
    "Nadezhda": 0.76,
    "Boyana": 0.75,
    "Dragalevtsi": 0.75,
    "Simeonovo": 0.74,
    "Gorni Lozen": 0.73,
    "Bankya": 0.72
  };
  
const longTermMultipliers = {
  // -------------------- Center --------------------
  "Oborishte": 1.12,
  "Sredets": 1.13,
  "Triaditsa": 1.12,
  "Vazrazhdane": 1.11,
  "Lower Lozenets": 1.11,
  "Zona B-5": 1.09,
  "Yavorov": 1.1,

  // -------------------- Wider Center --------------------
  "Upper Lozenets": 1.08,
  "Krasno Selo": 1.07,
  "Slatina": 1.05,
  "Poduyane": 1.05,
  "Geo Milev": 1.05,
  "Reduta": 1.04,
  "Hladilnika": 1.04,
  "Iztok": 1.04,
  "Ivan Vazov": 1.04,

  // -------------------- Suburbs --------------------
  "Mladost": 0.98,
  "Studentski Grad": 0.97,
  "Dianabad": 0.96,
  "Druzhba": 0.95,
  "Ovcha Kupel": 0.94,
  "Lyulin": 0.93,
  "Nadezhda": 0.92,
  "Boyana": 0.91,
  "Dragalevtsi": 0.91,
  "Simeonovo": 0.90,
  "Gorni Lozen": 0.89,
  "Bankya": 0.88
};

export const getSofiaShortTermRate = (neighborhood, bedrooms) => {
  const index = parseInt(bedrooms);
  const base = baseShortTerm[index] ?? 100;
  const multiplier = shortTermMultipliers[neighborhood] ?? 1.0;
  return base * multiplier;
};

export const getSofiaLongTermRate = (neighborhood, bedrooms) => {
  const index = parseInt(bedrooms);
  const base = baseLongTerm[index] ?? 1000;
  const multiplier = longTermMultipliers[neighborhood] ?? 1.0;
  return base * multiplier;
};
