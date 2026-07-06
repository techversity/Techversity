export const COUNTRY_CODE = {
  Switzerland: "ch",
  "United States": "us",
  Malta: "mt",
  Spain: "es",
  "United Arab Emirates": "ae",
  Canada: "ca",
};

export function flagUrl(country, width = 80) {
  return `https://flagcdn.com/w${width}/${COUNTRY_CODE[country] || "un"}.png`;
}