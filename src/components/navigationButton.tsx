interface ActionButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function ActionButton({ children, onClick, className = '' }: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#f6d5a0] flex items-center justify-between px-6 py-3 rounded-full text-black font-medium shadow-md hover:bg-[#e4b870] transition ${className}`}
    >
      <span>{children}</span>
      <span className="text-xl font-bold">→</span>
    </button>
  );
}