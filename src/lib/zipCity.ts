const ZIP_TO_CITY: Record<string, string> = {
  // Rocklin
  "95765": "Rocklin",
  "95677": "Rocklin",
  // Roseville
  "95661": "Roseville",
  "95678": "Roseville",
  "95747": "Roseville",
  // Loomis
  "95650": "Loomis",
  // Granite Bay
  "95746": "Granite Bay",
  // Folsom
  "95630": "Folsom",
  // Lincoln
  "95648": "Lincoln",
  // Auburn
  "95602": "Auburn",
  "95603": "Auburn",
}

export function getCityFromZip(zip?: string | null): string | undefined {
  if (!zip) return undefined
  const key = String(zip).slice(0, 5)
  return ZIP_TO_CITY[key]
} 