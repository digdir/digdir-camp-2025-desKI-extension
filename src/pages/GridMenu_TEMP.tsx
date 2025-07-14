import Grid from "../components/grid";
import { solutions } from "../data/solutions";

export function GridMenu() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h2 className="text-xl font-semibold mb-6">
        Hei, hvilken løsning vil du ha hjelp med i dag?
      </h2>
     
        <Grid solutions={solutions} />
     
    </div>
  );
}
