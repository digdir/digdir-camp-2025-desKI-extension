import { useState } from "react";
import { TabsIcon, PencilIcon, CheckmarkIcon, XMarkIcon } from "@navikt/aksel-icons";
import { Button, Input, Tooltip } from "@digdir/designsystemet-react";

interface MessageEditorProps {
  initialText: string;
  onSave?: (newText: string) => void;
  canEdit?: boolean;
}

export function MessageEditor({ initialText, onSave, canEdit = true }: MessageEditorProps) {
  const [text, setText] = useState(initialText);
  const [copied, setCopied] = useState(false);
  const [editing, setEditing] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error("Kunne ikke kopiere til utklippstavle", e);
    }
  };

  const handleSave = () => {
    if (onSave) onSave(text);
    setEditing(false);
  };

  return (
    <div className="flex gap-2 items-center">
      {/* Kopier-knapp */}
      <Tooltip content={copied ? "Kopiert!" : "Kopier tekst"} placement="bottom">
        <Button
          variant="tertiary"
          aria-label={copied ? "Tekst kopiert!" : "Kopier tekst"}
          disabled={copied}
          className="p-0 w-5 h-5 min-w-0 min-h-0 rounded hover:bg-[var(--ds-color-neutral-surface-hover)]"
          onClick={handleCopy}
        >
          {copied ? <CheckmarkIcon className="w-4 h-4" /> : <TabsIcon className="w-4 h-4" />}
        </Button>
      </Tooltip>

      {/* Rediger-knapp eller felt */}
      {canEdit && !editing && (
        <Tooltip content="Rediger tekst" placement="bottom">
          <Button
            variant="tertiary"
            aria-label="Rediger tekst"
            className="p-0 w-5 h-5 min-w-0 min-h-0 rounded hover:bg-[var(--ds-color-neutral-surface-hover)]"
            onClick={() => setEditing(true)}
          >
            <PencilIcon className="w-4 h-4" />
          </Button>
        </Tooltip>
      )}

      {editing && (
        <div className="flex items-center gap-2">
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-48 text-[var(--ds-color-brand-base)]"
          />
          <Button
            variant="primary"
            aria-label="Lagre endringer"
            onClick={handleSave}
          >
            <CheckmarkIcon className="w-4 h-4" />
          </Button>
          <Button
            variant="secondary"
            aria-label="Avbryt redigering"
            onClick={() => {
              setText(initialText); // tilbakestill
              setEditing(false);
            }}
          >
            <XMarkIcon className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
