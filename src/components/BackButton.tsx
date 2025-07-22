import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@navikt/aksel-icons';
import { Button } from '@digdir/designsystemet-react';

export function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      variant="secondary"
      onClick={() => navigate(-1)}
      className="flex items-center gap-1 px-3 py-2 rounded-full"
    >
      <ArrowLeftIcon className="w-6 h-6" aria-hidden />
    </Button>
  );
}
