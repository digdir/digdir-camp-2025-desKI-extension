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
        className="input-with-button"
      />
      <Button
        variant="primary"
        onClick={handleSend}
        className="input-button-position btn-icon btn-rounded text-theme-subtle hover:text-theme"
      >
        <PaperplaneIcon className="w-5 h-5" />
      </Button>
    </div>
  );
}