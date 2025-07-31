import { useMemo } from "react";
import { Location } from "react-router-dom";

export function useChatPageState(location: Location) {
  const solutions = location.state?.solutions ?? [];

  const basePath = useMemo(() => {
    return location.pathname.startsWith("/servicedesk")
      ? "/servicedesk"
      : "/brukerstøtte";
  }, [location.pathname]);

  return {
    solutions,
    basePath,
  };
}