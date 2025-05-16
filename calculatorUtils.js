// calculatorUtils.js

const bigCities = ["Sofia", "Plovdiv"];
const seasonalCities = ["Sozopol", "St. Vlas", "Bansko"];
const smallCities = ["Gabrovo", "Ruse"];

const baseOccupancy = [0.45, 0.5, 0.5, 0.65, 0.65, 0.69, 0.69, 0.65, 0.65, 0.5, 0.45, 0.45];

export const getZone = (city, neighborhood, zones) => {
  return city === "Plovdiv" ? zones[neighborhood] || "suburbs" : "center";
};

export const getOccupancy = (monthIdx, city, zone, rentalType) => {
  if (rentalType === "long-term") return 1.0;

  if (seasonalCities.includes(city)) {
    return monthIdx >= 5 && monthIdx <= 7 ? 0.9 : 0.3;
  }

  if (bigCities.includes(city)) {
    return zone === "center" ? 0.8 : zone === "wider" ? 0.7 : 0.4;
  }

  if (smallCities.includes(city)) {
    return zone === "center" ? 0.5 : zone === "wider" ? 0.3 : 0.2;
  }

  return baseOccupancy[monthIdx];
};

export const getBaseRate = (city, bedrooms) => {
  const isBig = bigCities.includes(city);
  const isSmall = smallCities.includes(city);
  const isSeasonal = seasonalCities.includes(city);

  const baseRates = [90, 120, 140];
  let rate = baseRates[bedrooms];

  if (isSmall) rate *= 0.8;
  if (isSeasonal) rate *= 1.35;

  return rate;
};
