import Grid from "../components/Grid";
import { brukerstøtteSolutions } from "../data/brukerstøtteSolutions";
import { servicedeskSolutions } from "../data/servicedeskSolutions";
import { useLocation } from "react-router-dom";

export function GridMenu() {
  const location = useLocation();
  const pathname = location.pathname;

  //check the current path to determine if it's for servicedesk or brukerstøtte
  const isServicedesk = pathname.startsWith("/servicedesk");
  const title = isServicedesk ? "Servicedesk" : "Brukerstøtte";
  const basePath = isServicedesk ? "/servicedesk" : "/brukerstøtte";
  const solutions = isServicedesk ? servicedeskSolutions : brukerstøtteSolutions;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-xl font-semibold mb-6">
        Hei, hva kan jeg hjelpe deg med i dag?
      </h1>
      <div className="max-w-[600px] mx-auto p-4">
        <Grid solutions={solutions} basePath={basePath} />
      </div>
    </div>
  );
}
