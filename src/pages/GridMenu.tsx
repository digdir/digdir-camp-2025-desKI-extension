import { useParams } from "react-router-dom";
import Grid from "../components/Grid";
import { solutions } from "../data/solutions";

export function GridMenu() {
  const { slug } = useParams<{ slug: string }>();

  // Map slug to display label
  const getLabelFromSlug = (slug: string) => {
    switch (slug) {
      case 'servicedesk':
        return 'Servicedesk';
      case 'brukerstotte':
        return 'Brukerstøtte';
      default:
        return 'Hjelp';
    }
  };

  const displayLabel = getLabelFromSlug(slug || '');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h2 className="text-xl font-semibold mb-6">
        Hei, hvilken løsning vil du ha hjelp med i dag? ({displayLabel})
      </h2>
      <div className="max-w-[600px] mx-auto p-4">
        <Grid solutions={solutions} />
      </div>
    </div>
  );
}