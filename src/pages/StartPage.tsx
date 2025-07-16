import { UtilityBar } from "../components/UtilityBar";
import { Logo } from "../components/Logo";
import { ActionButton } from "../components/ActionButton";

export function StartPage() {
  const handleServicedeskClick = () => {
    console.log('Navigating to Servicedesk');
    // Add your navigation logic here
  };

  const handleBrukerstotteClick = () => {
    console.log('Navigating to Brukerstøtte');
    // Add your navigation logic here
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#f2f3f5] px-6 py-10">
      {/* Utility Bar */}
      <UtilityBar />

      {/* Logo */}
      <Logo />

      {/* Question text */}
      <h1 className="text-center text-[#152f5d] font-roboto text-lg md:text-xl mb-14 leading-snug">
        Hva kan jeg hjelpe deg med i dag?
      </h1>

      {/* Navigation Buttons */}
      <div className="flex flex-col gap-5 w-full max-w-md">
        <ActionButton
          label="Servicedesk"
          onClick={handleServicedeskClick}
        />

        <ActionButton
          label="Brukerstøtte"
          onClick={handleBrukerstotteClick}
        />
      </div>
    </div>
  );
}