import { UtilityBar } from "../components/UtilityBar";
import { Logo } from "../components/Logo";

export function StartPage() {
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

      {/* Buttons */}
      <div className="flex flex-col gap-5 w-full max-w-md">
        <button className="bg-[#f6d5a0] flex items-center justify-between px-6 py-3 rounded-full text-black font-medium shadow-md hover:bg-[#e4b870] transition">
          <span>Servicedesk</span>
          <span className="text-xl font-bold">→</span>
        </button>

        <button className="bg-[#f6d5a0] flex items-center justify-between px-6 py-3 rounded-full text-black font-medium shadow-md hover:bg-[#e4b870] transition">
          <span>Brukerstøtte</span>
          <span className="text-xl font-bold">→</span>
        </button>
      </div>
    </div>

  );
};