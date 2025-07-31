export const parseLogFile = (logText: string): string[] => {
  return logText
    .split(/(?=\n\s*{\s*"_index"\s*:)/) // beholder starten på objektet
    .map(chunk => chunk.trim().replace(/,$/, ""));
};
