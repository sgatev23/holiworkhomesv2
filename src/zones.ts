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
  
export const sofiaZones = {
    // Center
    "Oborishte": "center",
    "Sredets": "center",
    "Triaditsa": "center",
    "Vazrazhdane": "center",
    "Lower Lozenets": "center",
    "Zona B-5": "center",
    "Yavorov": "center",

    // Wider Center
    "Upper Lozenets": "wider",
    "Krasno Selo": "wider",
    "Slatina": "wider",
    "Poduyane": "wider",
    "Geo Milev": "wider",
    "Reduta": "wider",
    "Hladilnika": "wider",
    "Iztok": "wider",
    "Ivan Vazov": "wider",

    // Suburbs
    "Mladost": "suburbs",
    "Studentski Grad": "suburbs",
    "Dianabad": "suburbs",
    "Druzhba": "suburbs",
    "Ovcha Kupel": "suburbs",
    "Lyulin": "suburbs",
    "Nadezhda": "suburbs",
    "Boyana": "suburbs",
    "Dragalevtsi": "suburbs",
    "Simeonovo": "suburbs",
    "Gorni Lozen": "suburbs",
    "Bankya": "suburbs"
};

export const varnaZones = {
    // Center
    "Greek Quarter": "center",
    "Sea Garden": "center",
    "City Center": "center",
    "Chataldzha": "center",

    // Wider Center
    "Levski": "wider",
    "Briz": "wider",
    "Mladost": "wider",
    "Tsveten Kvartal": "wider",
    "Pobeda": "wider",

    // Suburbs
    "Asparuhovo": "suburbs",
    "Vladislavovo": "suburbs",
    "Vinitsa": "suburbs",
    "Galata": "suburbs",
    "Trakata": "suburbs",
    "Kamenar": "suburbs",
    "Zvezditsa": "suburbs"
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
  