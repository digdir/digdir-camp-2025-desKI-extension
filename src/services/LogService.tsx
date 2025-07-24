// Ny hjelpefunksjon for å søke i logg (legges inne i ChatPage)
const searchInLog = async (query: string) => {
  try {
    const res = await fetch("/logs/app.log"); // sørg for at loggen ligger i public/logs/
    const text = await res.text();

    const matches = text
      .split("\n")
      .filter((line) => line.toLowerCase().includes(query.toLowerCase()));

    return matches.length
      ? `Fant ${matches.length} treff:\n${matches.slice(0, 5).join("\n")}`
      : "Ingen treff i logg.";
  } catch (err) {
    return "Kunne ikke lese loggfilen.";
  }
};
