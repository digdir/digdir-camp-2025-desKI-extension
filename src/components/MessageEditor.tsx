import { useState } from "react";
import { TabsIcon, PencilIcon, CheckmarkIcon, XMarkIcon } from "@navikt/aksel-icons";
import { Button, Tooltip, Textarea } from "@digdir/designsystemet-react";

interface MessageEditorProps {
  initialText: string;
  onSave?: (newText: string) => void;
  canEdit?: boolean;
}

export function MessageEditor({ initialText, onSave, canEdit = true }: MessageEditorProps) {
  const [text, setText] = useState(initialText);
  const [isEditing, setIsEditing] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEditClick = () => setIsEditing(true);

  const handleSave = () => {
    setIsEditing(false);
    onSave && onSave(text);
  };

  const handleCancel = () => {
    setText(initialText);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="flex gap-1 items-center">
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
          rows={4}
        />
        <Button variant="tertiary" onClick={handleSave} aria-label="Lagre endringer">
          <CheckmarkIcon className="w-5 h-5" />
        </Button>
        <Button variant="tertiary" onClick={handleCancel} aria-label="Avbryt redigering">
          <XMarkIcon className="w-5 h-5" />
        </Button>
      </div>
    );
  }

  return (
    <div className="flex gap-1">
      <Tooltip content={copied ? "Kopiert!" : "Kopier tekst"} placement="bottom">
        <Button
          variant="tertiary"
          aria-label={copied ? "Tekst kopiert!" : "Kopier tekst"}
          disabled={copied}
          className={`p-0 w-6 h-6 min-w-0 min-h-0 rounded ${
            copied ? "cursor-default opacity-70" : "hover:bg-[var(--ds-color-neutral-surface-hover)]"
          }`}
          onClick={handleCopy}
        >
          {copied ? <CheckmarkIcon className="w-4 h-4" /> : <TabsIcon className="w-4 h-4" />}
        </Button>
      </Tooltip>

      {canEdit && (
        <Tooltip content="Rediger tekst" placement="bottom">
          <Button
            variant="tertiary"
            aria-label="Rediger tekst"
            className="p-0 w-6 h-6 min-w-0 min-h-0 rounded hover:bg-[var(--ds-color-neutral-surface-hover)]"
            onClick={handleEditClick}
          >
            <PencilIcon className="w-4 h-4" />
          </Button>
        </Tooltip>
      )}
    </div>
  );
}
