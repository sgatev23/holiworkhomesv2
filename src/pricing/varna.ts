const baseShortTerm = [81, 108, 126]; // Studio, 1BR, 2BR
const baseLongTerm = [720, 900, 1350]; // Studio, 1BR, 2BR

export const shortTermMultipliers: Record<string, number> = {
  "Odessos": 0.80, "Chataldzha": 0.79, "Red Square": 0.78, "Levski": 0.77,
  "Briz": 0.76, "Chaika": 0.75, "Trakata": 0.74, "Vinitsa": 0.73, "St. Nikola": 0.73, "Galata": 0.72,
  "Asparuhovo": 0.71, "Mladost": 0.70, "Troshevo": 0.70, "Vladislavovo": 0.69,
  "Pobeda": 0.69, "Vazrazhdane": 0.68, "Golden Sands": 0.67, "Saints Constantine and Helena": 0.67,
};

export const longTermMultipliers: Record<string, number> = {
  "Odessos": 1.00, "Chataldzha": 0.99, "Red Square": 0.98, "Levski": 0.97,
  "Briz": 0.96, "Chaika": 0.95, "Trakata": 0.94, "Vinitsa": 0.93, "St. Nikola": 0.93, "Galata": 0.92,
  "Asparuhovo": 0.91, "Mladost": 0.90, "Troshevo": 0.89, "Vladislavovo": 0.88,
  "Pobeda": 0.88, "Vazrazhdane": 0.87, "Golden Sands": 0.86, "Saints Constantine and Helena": 0.86,
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
