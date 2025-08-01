import { parseLogFile } from './ParseLogFile';

export const searchInLog = async (query: string): Promise<string[]> => {
  try {
    const res = await fetch("/data/log1.txt");
    const text = await res.text();

    const objectChunks = parseLogFile(text);

    const matches = objectChunks.filter((obj) =>
      obj.toLowerCase().includes(query.toLowerCase())
    );

    return matches;
  } catch (err) {
    console.error("Feil under loggsøk:", err);
    return [];
  }
};
