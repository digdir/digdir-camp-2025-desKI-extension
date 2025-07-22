import Grid from "../components/Grid";
import { brukerstøtteSolutions } from "../data/brukerstøtteSolutions";
import { servicedeskSolutions } from "../data/servicedeskSolutions";
import { useLocation } from "react-router-dom";
import { Logo } from '../components/Logo';
import { UtilityBar } from '../components/UtilityBar';

export function GridMenu() {
  const location = useLocation();
  const pathname = location.pathname;

  // Determine context based on URL
  const isServicedesk = pathname.startsWith("/servicedesk");
  const title = isServicedesk ? "Servicedesk" : "Brukerstøtte";
  const basePath = isServicedesk ? "/servicedesk" : "/brukerstøtte";
  const solutions = isServicedesk ? servicedeskSolutions : brukerstøtteSolutions;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center
                    bg-[#f2f3f5] dark:bg-[var(--ds-color-brand3-background-tinted)]">
      <UtilityBar />

      <div className="flex flex-col items-center mt-14 mb-10">
        <Logo />
        <span className="text-xs sm:text-sm font-medium text-[var(--ds-color-text-default)]
                         dark:text-white ml-28">
          {title}
        </span>
      </div>

      <div className="max-w-[600px] mx-auto">
        <Grid solutions={solutions} basePath={basePath} />
      </div>
    </div>
  );
}