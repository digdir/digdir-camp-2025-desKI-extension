import { NavigationButton } from '../components/NavigationButton';
import { Logo } from '../components/Logo';
import { UtilityBar } from '../components/UtilityBar';

export default function StartPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#f2f3f5] px-6 py-10">
      <UtilityBar />

      <div className="mt-16 w-full flex flex-col items-center">
        <div className="w-[80%] max-w-md text-center">
          <div className="flex justify-center mb-8">
            <Logo />
          </div>

          <h2 className="text-3xl font-light leading-snug text-[#002c54] mb-6">
            Hva kan jeg hjelpe deg med i dag?
          </h2>

          <div className="flex flex-col gap-4 mt-16">
            <NavigationButton label="Servicedesk" to="/servicedesk" />
            <NavigationButton label="Brukerstøtte" to="/brukerstøtte" />
          </div>
        </div>
      </div>
    </div>
  );
}
