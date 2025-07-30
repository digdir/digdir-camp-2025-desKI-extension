import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@navikt/aksel-icons';
import { Button } from '@digdir/designsystemet-react';
import './BackButton.css';

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
      className="back-button"
    >
      <ArrowLeftIcon className="back-button-icon" aria-hidden />
    </Button>
  );
}
