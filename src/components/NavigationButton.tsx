import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from '@navikt/aksel-icons';

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
      className={`nav-button ${className || ''}`}
    >
      <span>{label}</span>
      {icon ?? <ArrowRightIcon className="utility-button-icon-size" />}
    </button>
  );
}