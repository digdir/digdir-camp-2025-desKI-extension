import { XMarkIcon } from '@navikt/aksel-icons';

type Props = {
  logs: string[];
  onRemove?: () => void;
  compact?: boolean;
};

export function LogResult({ logs, onRemove, compact = false }: Props) {
  if (!logs.length) return null;

  return (
    <div
      className="relative w-full bg-[var(--ds-color-surface-neutral-subtle)]
                 border border-[var(--ds-color-border-subtle)] rounded-lg
                 p-4 text-sm text-[var(--ds-color-text-default)] shadow-sm
                 max-h-48 overflow-y-auto"
    >
      <div className="flex justify-between items-center mb-2">
        <div className="font-semibold text-[var(--ds-color-text-subtle)]">
          Logginnslag ({logs.length})
        </div>
        {onRemove && (
          <button
            type="button"
            onClick={onRemove}
            aria-label="Fjern alle logginnslag"
            className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-[var(--ds-color-surface-hover)] cursor-pointer"
          >
            <XMarkIcon className="w-4 h-4 text-[var(--ds-color-text-subtle)]" />
          </button>
        )}
      </div>

      <pre
        className="whitespace-pre-wrap break-words leading-snug"
      >
        {logs.join('\n\n')}
      </pre>
    </div>
  );
}
``
