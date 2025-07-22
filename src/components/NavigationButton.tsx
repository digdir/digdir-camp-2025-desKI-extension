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
      className={`w-full text-[var(--ds-color-text-default)] font-medium px-4 py-3 rounded-full shadow-sm
        btn-theme
        transition flex items-center justify-between ${className || ''}`}
    >
      <span>{label}</span>
      {icon ?? <ArrowRightIcon className="w-5 h-5" />}
    </button>
  );
}
