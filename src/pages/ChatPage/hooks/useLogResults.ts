import { useCallback, useState } from "react";
import { parseLogFile } from "../../../services/ParseLogFile";

export function useLogResults() {
  const [logResults, setLogResults] = useState<string[]>([]);
  const [includeAllLogs, setIncludeAllLogs] = useState(false);

  const handleAddLogResults = useCallback((results: string[]) => {
    setLogResults(prev => [...prev, ...results]);
  }, []);

  const handleRemoveLogResult = useCallback(() => {
    setLogResults([]);
  }, []);

  const getAllLogs = useCallback(async (): Promise<string[]> => {
    if (!includeAllLogs) return [];

    try {
      const res = await fetch("/data/log1.txt");
      const text = await res.text();
      return parseLogFile(text);
    } catch (err) {
      console.error("Kunne ikke laste hele loggen:", err);
      return [];
    }
  }, [includeAllLogs]);

  const clearLogResults = useCallback(() => {
    setLogResults([]);
  }, []);

  return {
    logResults,
    includeAllLogs,
    setIncludeAllLogs,
    handleAddLogResults,
    handleRemoveLogResult,
    getAllLogs,
    clearLogResults,
  };
}