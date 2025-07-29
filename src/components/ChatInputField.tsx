import { Button, Textarea, Input } from '@digdir/designsystemet-react';
import { CameraIcon, PaperplaneIcon, ClipboardIcon } from '@navikt/aksel-icons';
import { useEffect, useRef, useState } from 'react';
import { searchInLog } from '../services/SearchInLog';

type Props = {
  inputValue: string;
  onInputChange: (value: string) => void;
  onSend: () => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  onAddLogResults: (results: string[]) => void;
};

export function ChatInputField({
  inputValue,
  onInputChange,
  onSend,
  fileInputRef,
  onAddLogResults,
}: Props) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [showLogSearch, setShowLogSearch] = useState(false);
  const [logSearchValue, setLogSearchValue] = useState("");
  const [logSearchResults, setLogSearchResults] = useState<string[]>([]);

  const [noResults, setNoResults] = useState(false);

  const handleLogSearch = async () => {
    if (!logSearchValue.trim()) return;

    try {
      const result = await searchInLog(logSearchValue);
      if (result !== "Ingen treff i logg." && result !== "Kunne ikke lese loggfilen.") {
        const lines = result.split('\n').slice(1);
        setLogSearchResults(lines);
        setNoResults(lines.length === 0);
      } else {
        setLogSearchResults([]);
        setNoResults(true);
      }
    } catch (error) {
      setLogSearchResults([]);
      setNoResults(true);
    }
};

  const handleAddLogResult = (result: string) => {
    onAddLogResults([result]);
    setLogSearchResults(prev => prev.filter(r => r !== result));
  };

  const handleSelectAll = () => {
    if (logSearchResults.length === 0) return;
    onAddLogResults(logSearchResults);
    setLogSearchResults([]);
    setShowLogSearch(false);
    setLogSearchValue("");
  };

  const handleCloseLogSearch = () => {
    setShowLogSearch(false);
    setLogSearchValue("");
    setLogSearchResults([]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onInputChange(e.target.value);
  };

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
        <div className="absolute bottom-full left-0 right-0 mb-2 bg-gray-100 border border-gray-300 rounded-lg shadow-lg p-4 ">
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

          <div className="flex gap-2 mb-3 ">
            <Input
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
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-0 bg-var(--ds-color-neutral-background-tinted) "
            />
            <Button
              onClick={handleLogSearch}
              className="px-4 py-2 bg-[#002c54] text-white text-sm rounded-md hover:bg-[#002c54]/80"
            >
              Søk
            </Button>
          </div>

          {logSearchResults.length > 0 && (
            <div className="max-h-40 overflow-y-auto">
              <div className="flex items-center gap-2 mb-2 text-xs text-gray-600">
                <span>
                  Fant {logSearchResults.length} treff - klikk for å legge til.
                </span>
                <Button
                  onClick={handleSelectAll}
                  className="px-4 py-2 bg-[#002c54] text-white text-sm rounded-md hover:bg-[#002c54]/80"
                  variant="tertiary"
                >
                  Velg alle
                </Button>
              </div>

            {logSearchResults.map((result, index) => (
              <div
                key={index}
                onClick={() => handleAddLogResult(result)}
                className="p-2 text-xs bg-[var(--ds-color-neutral-background-tinted)]
                          hover:bg-[#002c54] hover:text-white
                          border border-[#002c54] rounded mb-1 cursor-pointer transition"
              >
                {result}
              </div>
            ))}
            </div>
          )}

          {noResults && (
              <div className="text-sm text-text-gray-700 mt-2 justify-center">
                Fant ingen logginnslag for søket ditt.
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
          <ClipboardIcon className="w-5 h-5" />
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
