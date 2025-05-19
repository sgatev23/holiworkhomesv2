// zones.ts

export const plovdivZones = {
    "City Centre": "center",
    "Old Town": "center",
    "Kapana": "center",
    "Karshiyaka": "wider",
    "Marasha": "wider",
    "Mladezhki Halm": "wider",
    "Sadiyski": "wider",
    "Kamenitsa 1": "wider",
    "Kamenitsa 2": "wider",
    "Zaharna fabrika": "suburbs",
    "Gagarin": "suburbs",
    "Filipovo": "suburbs",
    "Zapaden": "suburbs",
    "Hristo Smirnenski": "suburbs",
    "Kyuchuk Parizh": "suburbs",
    "Trakiya": "suburbs",
    "Vastanicheski": "suburbs",
    "Komatevski vazel": "suburbs",
    "Yuzhen": "suburbs",
    "Ostromila": "suburbs",
    "Belomorski": "suburbs",
    "Proslav": "suburbs",
    "Peshtersko shose": "suburbs"
  };
  
  const baseRates = [100, 125, 150]; // Studio, 1BR, 2BR
  
  export const getPlovdivRate = (neighborhood: string, bedrooms: string | number) => {
    const zone = plovdivZones[neighborhood];
    const base = baseRates[parseInt(bedrooms as string)];
  
    if (zone === "center") return base;
    if (zone === "wider") return base * 0.95;
    if (zone === "suburbs") return base * 0.75;
  
    return base;
  };
  