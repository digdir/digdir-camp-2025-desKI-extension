import Grid from "../../components/Grid/Grid";
import { brukerstøtteSolutions } from "../../data/brukerstøtteSolutions";
import { servicedeskSolutions } from "../../data/servicedeskSolutions";
import { useLocation } from "react-router-dom";
import { Logo } from '../../components/Logo';
import { UtilityBar } from '../../components/UtilityBar/UtilityBar';
import { BackButton } from '../../components/BackButton/BackButton';
import { Button } from "@digdir/designsystemet-react";
import { useNavigate } from 'react-router-dom';

export function GridMenu() {
  const location = useLocation();
  const navigate = useNavigate();

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
    <div className="grid-menu">
      <div className="grid-menu-header">
        <BackButton to="/" />
        <UtilityBar />
      </div>

      <div className="grid-menu-logo">
        <Button variant="secondary" onClick={() => navigate("/")}>
          <Logo />
        </Button>
        <span className="grid-menu-title">{title}</span>
      </div>

      <div className="grid-menu-content">
        <Grid solutions={solutions} basePath={basePathUrl} />
      </div>
    </div>
  );
}
