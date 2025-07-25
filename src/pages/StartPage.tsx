import { useTranslation } from 'react-i18next';
import { NavigationButton } from '../components/NavigationButton';
import { Logo } from '../components/Logo';
import { UtilityBar } from '../components/UtilityBar';
import { KEY } from '../i18n/constants';

export default function StartPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#f2f3f5] px-6 py-10">
      <UtilityBar />

      <div className="mt-16 w-full flex flex-col items-center">
        <div className="w-[80%] max-w-md text-center">
          <div className="flex justify-center mb-8">
            <Logo />
          </div>

          <h2 className="text-3xl font-light leading-snug text-[#002c54] mb-6">
            {t(KEY.main_question)}
          </h2>

          <div className="flex flex-col gap-4 mt-16">
            <NavigationButton label={t(KEY.servicedesk)} to="/servicedesk" />
            <NavigationButton label={t(KEY.brukerstotte)} to="/brukerstøtte" />
          </div>
        </div>
      </div>
    </div>
  );
}
