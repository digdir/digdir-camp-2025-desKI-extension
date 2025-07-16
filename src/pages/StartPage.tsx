import { UtilityBar } from "../components/UtilityBar";
import { Logo } from "../components/Logo";
import { ActionButton } from "../components/actionButton";
import { useNavigate } from "react-router-dom";

export function StartPage() {
  const navigate = useNavigate();

  const handleGridNavigate = (section: string) => {
    navigate(`/grid/${section}`);
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
          onClick={() => handleGridNavigate('servicedesk')}
        />

        <ActionButton
          label="Brukerstøtte"
          onClick={() => handleGridNavigate('brukerstotte')}
        />
      </div>
    </div>
  );
}
