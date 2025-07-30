import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from '@navikt/aksel-icons';
import './NavigationButton.css';

type NavigationButtonProps = {
  label: string;
  to: string;
  icon?: React.ReactNode;
  className?: string;
};

export function NavigationButton({ label, to, icon, className }: NavigationButtonProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className={`navigation-button btn-theme ${className || ''}`}
    >
      <span>{label}</span>
      {icon ?? <ArrowRightIcon className="navigation-button-icon" />}
    </button>
  );
}
