import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@navikt/aksel-icons';
import { Button } from '@digdir/designsystemet-react';

interface BackButtonProps {
  to?: string;
}

export function BackButton({ to }: BackButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <Button
      variant="tertiary"
      onClick={handleClick}
      className="flex-center gap-2 back-button-position btn-transparent"
    >
      <ArrowLeftIcon className="w-6 h-6" aria-hidden />
    </Button>
  );
}