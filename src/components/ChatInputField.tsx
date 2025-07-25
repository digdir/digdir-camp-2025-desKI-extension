import { Button, Textarea } from '@digdir/designsystemet-react';
import { CameraIcon, PaperplaneIcon } from '@navikt/aksel-icons';
import { useEffect, useRef } from 'react';

type Props = {
  inputValue: string;
  onInputChange: (value: string) => void;
  onSend: () => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
};

export function ChatInputField({
  inputValue,
  onInputChange,
  onSend,
  fileInputRef,
}: Props) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onInputChange(e.target.value);
  };

  // Auto-resize textarea as user types
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;

    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  }, [inputValue]);

  return (
    <div className="relative w-full flex flex-col">
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
        className="rounded-2xl p-6 pb-16 w-full max-h-80 border-none shadow-md focus:shadow-lg resize-none"
      />

      <div className="absolute bottom-3 right-4 flex gap-2 bg-[var(--ds-color-neutral-surface-default)] rounded-bl-2xl">
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
