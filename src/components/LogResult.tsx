import { XMarkIcon } from '@navikt/aksel-icons';

type Props = {
  logs: string[];
  onRemove?: (index: number) => void;
  compact?: boolean; // Used for input field (truncated)
};

export default function LogResult({ logs, onRemove, compact = false }: Props) {
  if (!logs.length) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {logs.map((log, index) => (
        <div
          key={index}
          className="relative max-w-xs bg-red-50 border border-red-300 rounded-lg p-3 text-xs text-red-800 shadow-sm"
        >
          <div className="font-semibold text-red-900 mb-1">Logginnslag {index + 1}:</div>
          <div className="break-words">
            {compact ? `${log.substring(0, 60)}...` : log}
          </div>
          {onRemove && (
            <button
              type="button"
              onClick={() => onRemove(index)}
              aria-label={`Fjern logginnslag ${index + 1}`}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 flex items-center justify-center
                         rounded-full text-xs leading-5 bg-transparent hover:bg-red-100 cursor-pointer"
            >
              <XMarkIcon className="w-4 h-4 text-red-600" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
