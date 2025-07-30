import { Button, Input } from '@digdir/designsystemet-react';
import { PaperplaneIcon } from '@navikt/aksel-icons';
import { useState } from 'react';
import './InputField.css';

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
    <div className="input-field-container">
      <Input
        placeholder="Spør et spørsmål"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        className="input-field-input"
      />
      <Button
        variant="primary"
        onClick={handleSend}
        className="input-field-button"
      >
        <PaperplaneIcon className="input-field-icon" />
      </Button>
    </div>
  );
}
