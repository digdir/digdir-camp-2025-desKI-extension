import { Button, Textarea } from '@digdir/designsystemet-react';
import { CameraIcon, PaperplaneIcon } from '@navikt/aksel-icons';
import { useEffect, useRef, useState } from 'react';
import { searchInLog } from '../services/SearchInLog';

type Props = {
  inputValue: string;
  onInputChange: (value: string) => void;
  onSend: () => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  onToggleSearchLogs: () => void;
  onAddLogResults: (results: string[]) => void;
};

export function ChatInputField({
  inputValue,
  onInputChange,
  onSend,
  fileInputRef,
  onToggleSearchLogs,
  onAddLogResults,
}: Props) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [showLogSearch, setShowLogSearch] = useState(false);
  const [logSearchValue, setLogSearchValue] = useState("");
  const [logSearchResults, setLogSearchResults] = useState<string[]>([]);

  const handleLogSearch = async () => {
    if (!logSearchValue.trim()) return;

    try {
      const result = await searchInLog(logSearchValue);
      if (result !== "Ingen treff i logg." && result !== "Kunne ikke lese loggfilen.") {
        const lines = result.split('\n').slice(1); // Hopp over "Fant X treff:"-linjen
        setLogSearchResults(lines);
      } else {
        setLogSearchResults([]);
      }
    } catch (error) {
      setLogSearchResults([]);
    }
  };

  const handleAddLogResult = (result: string) => {
    onAddLogResults([result]);
    setLogSearchResults(prev => prev.filter(r => r !== result));
  };

  const handleCloseLogSearch = () => {
    setShowLogSearch(false);
    setLogSearchValue("");
    setLogSearchResults([]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onInputChange(e.target.value);
  };

  // Auto-resize textarea
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;

    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  }, [inputValue]);

  return (
    <div className="relative w-full flex flex-col">
      {/* Log search overlay */}
      {showLogSearch && (
        <div className="absolute bottom-full left-0 right-0 mb-2 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-10">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-700">Søk i logg</h3>
            <button
              onClick={handleCloseLogSearch}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Lukk loggsøk"
            >
              ✖
            </button>
          </div>

          <div className="flex gap-2 mb-3">
            <input
              type="text"
              placeholder="Skriv søkeord..."
              value={logSearchValue}
              onChange={(e) => setLogSearchValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleLogSearch();
                }
              }}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button
              onClick={handleLogSearch}
              className="px-4 py-2 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600"
            >
              Søk
            </Button>
          </div>

          {logSearchResults.length > 0 && (
            <div className="max-h-40 overflow-y-auto">
              <div className="flex items-center gap-2 mb-2 text-xs text-gray-600">
                <span>
                  Fant {logSearchResults.length} treff - klikk for å legge til:
                </span>
                <Button
                  onClick={() => {
                    onAddLogResults(logSearchResults);
                    setLogSearchResults([]); // Tøm listen etter valg
                  }}
                  className="text-xs text-blue-600 hover:underline h-auto p-0 bg-transparent shadow-none"
                  variant="tertiary"
                >
                  Velg alle
                </Button>
              </div>

              {logSearchResults.map((result, index) => (
                <div
                  key={index}
                  onClick={() => handleAddLogResult(result)}
                  className="p-2 text-xs bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded mb-1 cursor-pointer"
                >
                  {result}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <Textarea
        ref={textareaRef}
        rows={1}
        placeholder="Skriv en melding..."
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            onSend();
          }
        }}
        aria-label="Chat-tekstfelt"
        className="rounded-2xl p-6 pb-16 w-full max-h-80 border-none shadow-md resize-none focus:outline-none focus:ring-0"
      />

      <div className="absolute bottom-3 right-4 flex gap-2 bg-[var(--ds-color-neutral-surface-default)] rounded-bl-2xl">
        <Button
          variant="primary"
          onClick={() => setShowLogSearch(!showLogSearch)}
          aria-label="Søk i logg"
          className="h-10 w-10 flex items-center justify-center bg-transparent text-[var(--ds-color-neutral-text-default)] hover:text-[var(--ds-color-neutral-text-subtle)] p-0 m-0"
        >
          📋
        </Button>
        <Button
          variant="primary"
          onClick={() => fileInputRef.current?.click()}
          aria-label="Last opp bilde"
          className="h-10 w-10 flex items-center justify-center bg-transparent text-[var(--ds-color-neutral-text-default)] hover:text-[var(--ds-color-neutral-text-subtle)] p-0 m-0"
        >
          <CameraIcon className="w-5 h-5" />
        </Button>
        <Button
          variant="primary"
          onClick={onSend}
          aria-label="Send melding"
          className="h-10 w-10 flex items-center justify-center bg-transparent text-[var(--ds-color-neutral-text-default)] hover:text-[var(--ds-color-neutral-text-subtle)] p-0 m-0"
        >
          <PaperplaneIcon className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
