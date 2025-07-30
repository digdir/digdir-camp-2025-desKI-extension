export const searchInLog = async (query: string): Promise<string[]> => {
  try {
    const res = await fetch("/data/log1.txt");
    const text = await res.text();

    // Del opp i blokker per loggobjekt
    const objectChunks = text
      .split(/\n\s*{\s*"_index"\s*:/)
      .filter(Boolean)
      .map((chunk) => `{ "_index":${chunk.trim().replace(/,$/, "")}`);

    // Filtrer på søkeord
    const matches = objectChunks.filter((obj) =>
      obj.toLowerCase().includes(query.toLowerCase())
    );

    return matches;
  } catch (err) {
    console.error("Feil under loggsøk:", err);
    return [];
  }
};
