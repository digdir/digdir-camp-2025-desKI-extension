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
      variant="secondary"
      onClick={handleClick}
      className="flex items-center gap-1 px-3 py-2 rounded-full"
    >
      <ArrowLeftIcon className="w-6 h-6" aria-hidden />
    </Button>
  );
}
