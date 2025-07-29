export const searchInLog = async (query: string) => {
  try {
    const res = await fetch("/data/log1.txt");
    const text = await res.text();

    const matches = text
      .split("\n")
      .filter((line) => line.toLowerCase().includes(query.toLowerCase()));

    return matches.length
      ? `Fant ${matches.length} treff:\n${matches.join("\n")}`
      : "Ingen treff i logg.";
  } catch (err) {
    return "Kunne ikke lese loggfilen.";
  }
};
