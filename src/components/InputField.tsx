import { Button, Input } from '@digdir/designsystemet-react';
import { PaperplaneIcon } from '@navikt/aksel-icons';
import { useState } from 'react';

type InputFieldProps = {
  onSend: (message: string) => void;
};

export function InputField({ onSend }: InputFieldProps) {
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (!inputValue.trim()) return;
    onSend(inputValue);
    setInputValue('');
  };

  return (
    <div className="relative w-full h-full">
      <Input
        placeholder="Spør et spørsmål"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        className="w-full h-full rounded-[20px] pr-14 px-5 py-4 border-none shadow-md focus:outline-none focus:shadow-lg"
      />
      <Button
        variant="primary"
        onClick={handleSend}
        className="absolute top-1/2 right-2 -translate-y-1/2 h-[70%] aspect-square rounded-full bg-transparent p-0 m-0 text-lg text-[var(--ds-color-neutral-text-default)] hover:text-[var(--ds-color-neutral-text-subtle)] flex items-center justify-center"
      >
        <PaperplaneIcon className="w-5 h-5" />
      </Button>
    </div>
  );
}
