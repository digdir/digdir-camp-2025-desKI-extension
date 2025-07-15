import { DropDownMenu  } from "../components/DropdownMenu";
import { brukerstøtteSolutions } from "../data/brukerstøtteSolutions";

function StartPage() {
  return (
    <div>
      <h1>Welcome to the Start Menu</h1>
      <DropDownMenu solutions={brukerstøtteSolutions} />

    </div>
  );
}

export default StartPage;
