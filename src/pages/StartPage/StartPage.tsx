import { NavigationButton } from '../../components/NavigationButton/NavigationButton';
import { Logo } from '../../components/Logo';
import { UtilityBar } from '../../components/UtilityBar/UtilityBar';
import './StartPage.css';

export default function StartPage() {
  return (
    <div className="start-page">
      <UtilityBar />

      <div className="start-page-content">
        <div className="start-page-inner">
          <div className="start-page-logo">
            <Logo />
          </div>

          <h2 className="start-page-heading">
            Hva kan jeg hjelpe deg med i dag?
          </h2>

          <div className="start-page-buttons">
            <NavigationButton label="Servicedesk" to="/servicedesk" />
            <NavigationButton label="Brukerstøtte" to="/brukerstøtte" />
          </div>
        </div>
      </div>
    </div>
  );
}
