import { logoLight } from "../assets";

export function StartPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#f2f3f5] px-6 py-10">

      {/* Placeholder for top-right toggles */}
      <div className="w-full flex justify-end space-x-4 mb-6">
        <button aria-label="Toggle dark mode" className="p-2 rounded-md hover:bg-gray-300 transition">🌙</button>
        <button aria-label="Change language" className="p-2 rounded-md hover:bg-gray-300 transition">🌍</button>
      </div>

      {/* Logo */}
      <img
        src={logoLight}
        alt="desKI logo"
        className="mb-10 w-40 md:w-56 lg:w-64"
      />

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