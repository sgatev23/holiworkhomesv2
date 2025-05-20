const baseShortTerm = [81, 108, 126]; // Studio, 1BR, 2BR
const baseLongTerm = [720, 900, 1350]; // Studio, 1BR, 2BR

const shortTermMultipliers: Record<string, number> = {
    // -------------------- City Centre --------------------
    "Odessos": 0.82,
    "Chataldzha": 0.81,
    "Red Square": 0.80,
    "Levski": 0.79,
  
    // -------------------- Wider Centre --------------------
    "Briz": 0.78,
    "Chaika": 0.77,
    "Trakata": 0.76,
    "Vinitsa": 0.75,
    "St. Nikola": 0.75,
    "Galata": 0.74,
  
    // -------------------- Suburbs --------------------
    "Asparuhovo": 0.73,
    "Mladost": 0.72,
    "Troshevo": 0.72,
    "Vladislavovo": 0.71,
    "Pobeda": 0.71,
    "Vazrazhdane": 0.70,
    "Golden Sands": 0.69,
    "Saints Constantine and Helena": 0.69,
  };
  

  const longTermMultipliers: Record<string, number> = {
    // -------------------- City Centre --------------------
    "Odessos": 1.00,
    "Chataldzha": 0.99,
    "Red Square": 0.98,
    "Levski": 0.97,
  
    // -------------------- Wider Centre --------------------
    "Briz": 0.96,
    "Chaika": 0.95,
    "Trakata": 0.94,
    "Vinitsa": 0.93,
    "St. Nikola": 0.93,
    "Galata": 0.92,
  
    // -------------------- Suburbs --------------------
    "Asparuhovo": 0.91,
    "Mladost": 0.90,
    "Troshevo": 0.89,
    "Vladislavovo": 0.88,
    "Pobeda": 0.88,
    "Vazrazhdane": 0.87,
    "Golden Sands": 0.86,
    "Saints Constantine and Helena": 0.86,
  };
  

export const getVarnaShortTermRate = (neighborhood: string, bedrooms: string | number): number => {
  const index = parseInt(bedrooms as string);
  const base = baseShortTerm[index] ?? 100;
  const multiplier = shortTermMultipliers[neighborhood] ?? 1.0;
  return base * multiplier;
};

export const getVarnaLongTermRate = (neighborhood: string, bedrooms: string | number): number => {
  const index = parseInt(bedrooms as string);
  const base = baseLongTerm[index] ?? 1000;
  const multiplier = longTermMultipliers[neighborhood] ?? 1.0;
  return base * multiplier;
};
