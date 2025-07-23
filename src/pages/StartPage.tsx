import { NavigationButton } from '../components/NavigationButton';
import { Logo } from '../components/Logo';
import { UtilityBar } from '../components/UtilityBar';

export default function StartPage() {
  return (
    <div className="page-layout-primary">
      <UtilityBar />

      <div className="mt-16 w-full flex-col-center">
        <div className="content-container">
          {/* Logo */}
          <div className="flex-center mb-8">
            <Logo />
          </div>

          {/* Main Heading */}
          <h2 className="heading-primary text-[#002c54] dark:text-theme mb-6">
            Hva kan jeg hjelpe deg med i dag?
          </h2>

          {/* Navigation Buttons */}
          <div className="gap-elements mt-16">
            <NavigationButton label="Servicedesk" to="/servicedesk" />
            <NavigationButton label="Brukerstøtte" to="/brukerstøtte" />
          </div>
        </div>
      </div>
    </div>
  );
}