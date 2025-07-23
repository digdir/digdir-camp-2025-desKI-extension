import Grid from "../components/Grid";
import { brukerstøtteSolutions } from "../data/brukerstøtteSolutions";
import { servicedeskSolutions } from "../data/servicedeskSolutions";
import { useLocation } from "react-router-dom";
import { Logo } from '../components/Logo';
import { UtilityBar } from '../components/UtilityBar';
import { BackButton } from '../components/BackButton';
import { Button } from "@digdir/designsystemet-react";
import { useNavigate } from 'react-router-dom';

export function GridMenu() {
  const location = useLocation();
  const navigate = useNavigate();

  // Dekod URL og hent basePath
  const pathParts = decodeURIComponent(location.pathname).split("/").filter(Boolean);
  const basePath = pathParts.includes("brukerstøtte")
    ? "brukerstøtte"
    : pathParts.includes("servicedesk")
      ? "servicedesk"
      : "";

  const title = basePath === "servicedesk"
    ? "Servicedesk"
    : basePath === "brukerstøtte"
      ? "Brukerstøtte"
      : "Ukjent";

  const solutions = basePath === "servicedesk"
    ? servicedeskSolutions
    : basePath === "brukerstøtte"
      ? brukerstøtteSolutions
      : [];

  const basePathUrl = basePath ? `/${basePath}` : "/";

  return (
    <div className="page-layout-primary">
      {/* Header */}
      <div className="flex-between w-full mb-4">
        <BackButton to="/"/>
        <UtilityBar />
      </div>

      {/* Logo Section */}
      <div className="flex-col-center mb-8">
        <Button variant="secondary" onClick={() => navigate(-1)}>
          <Logo />
        </Button>
        <span className="text-small text-theme mt-1">
          {title}
        </span>
      </div>

      {/* Grid Container */}
      <div className="content-wide">
        <Grid solutions={solutions} basePath={basePathUrl} />
      </div>
    </div>
  );
}