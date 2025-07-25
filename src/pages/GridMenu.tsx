import Grid from "../components/Grid";
import { brukerstøtteSolutions } from "../data/brukerstøtteSolutions";
import { servicedeskSolutions } from "../data/servicedeskSolutions";
import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Logo } from '../components/Logo';
import { UtilityBar } from '../components/UtilityBar';
import { BackButton } from '../components/BackButton';
import { Button } from "@digdir/designsystemet-react";
import { useNavigate } from 'react-router-dom';
import { KEY } from '../i18n/constants';

export function GridMenu() {
  const { t } = useTranslation();
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
    ? t(KEY.servicedesk)
    : basePath === "brukerstøtte"
      ? t(KEY.brukerstotte)
      : t(KEY.unknown);

  const solutions = basePath === "servicedesk"
    ? servicedeskSolutions
    : basePath === "brukerstøtte"
      ? brukerstøtteSolutions
      : [];

  const basePathUrl = basePath ? `/${basePath}` : "/";

  return (
    <div className="flex flex-col items-center justify-between min-h-screen px-4 pt-4 text-center">
      <div className="w-full flex justify-between items-start mb-4">
        <BackButton to="/"/>
        <UtilityBar />
      </div>

      <div className="flex flex-col items-center mb-8">
        <Button variant="secondary" onClick={() => navigate(-1)}>
          <Logo />
        </Button>
        <span className="text-xs sm:text-sm font-medium text-[var(--ds-color-text-default)] mt-1">
          {title}
        </span>
      </div>
      <div className="max-w-[600px] mx-auto w-full">
        <Grid solutions={solutions} basePath={basePathUrl} />
      </div>
    </div>
  );
}
