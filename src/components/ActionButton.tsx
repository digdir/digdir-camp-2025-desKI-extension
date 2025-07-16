import React from 'react';

interface ActionButtonProps {
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
  className?: string;
}


export function ActionButton({
  label,
  icon,
  onClick,
  className = ''
}: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#f6d5a0] flex items-center justify-between px-6 py-3 rounded-full text-black font-medium shadow-md hover:bg-[#e4b870] transition-colors duration-200 w-full ${className}`}
    >
      <div className="flex items-center gap-3">
        {icon && <span className="text-lg">{icon}</span>}
        <span>{label}</span>
      </div>
      <span className="text-xl font-bold">→</span>
    </button>
  );
}