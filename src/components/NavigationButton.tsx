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
      className={`w-full bg-[#FCD48A] text-[#1E2B3C] font-medium px-4 py-3 rounded-full shadow-sm hover:bg-[#f9c76a] transition flex items-center justify-between ${className || ''}`}
    >
      <span>{label}</span>
      {icon ?? <ArrowRightIcon className="w-5 h-5" />}
    </button>
  );
}

