import { logoLight } from "../assets";
import { Moon, Globe } from "lucide-react";

export function StartPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#f2f3f5] px-6 py-10">

      {/* Top-right toggles */}
      <div className="w-full flex justify-end mb-6">
      <button
        aria-label="Toggle dark mode"
        className="p-2 rounded-md hover:bg-gray-200 transition"
      >
        <Moon className="w-6 h-6 text-gray-700" />
      </button>
      <button
        aria-label="Change language"
        className="p-2 rounded-md hover:bg-gray-200 transition"
      >
        <Globe className="w-6 h-6 text-gray-700" />
      </button>
    </div>

      {/* Logo */}
      <img
        src={logoLight}
        alt="desKI logo"
        className="mb-10 w-48 md:w-64 lg:w-72"
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