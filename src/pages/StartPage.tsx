import { Logo } from "../components/Logo";
import { InputField } from "../components/InputField";

function StartPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#f2f3f5] px-6 py-10">
      <Logo />
      <h1>Welcome to the Start Menu</h1>

    </div>

  );
}

export default StartPage;
