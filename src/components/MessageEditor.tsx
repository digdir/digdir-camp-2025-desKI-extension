import { useState } from "react";
import { TabsIcon, PencilIcon, CheckmarkIcon } from "@navikt/aksel-icons";
import { Button, Tooltip } from "@digdir/designsystemet-react";

interface MessageEditor {
  initialText: string;
  onSave?: (newText: string) => void;
}

export function MessageEditor({ initialText, onSave }: MessageEditor) {
  const [text] = useState(initialText);
  const [copied, setCopied] = useState(false);
  const [edited, setEdited] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Tilbakestill etter 2 sekunder
  };

  const handleEdit = () => {
    setEdited(true); // Sett edited til true når man trykker på rediger
    if (onSave) onSave(text);
    console.log("Redigeringsmodus her...");
    // Du kan evt. også sette edited til false igjen her etter lagring
  };

  return (
    <div className="flex gap-1">
      <Tooltip content={copied ? "Kopiert!" : "Kopier tekst"} placement="bottom">
        <Button
          variant="tertiary"
          aria-label={copied ? "Tekst kopiert!" : "Kopier tekst"}
          disabled={copied}
          className={`p-0 w-5 h-5 min-w-0 min-h-0 rounded ${
            copied ? "cursor-default opacity-70" : "hover:bg-[var(--ds-color-neutral-surface-hover)]"
          }`}
          onClick={handleCopy}
        >
          {copied ? <CheckmarkIcon className="w-4 h-4" /> : <TabsIcon className="w-4 h-4" />}
        </Button>
      </Tooltip>

      <Tooltip content={edited ? "Redigert!" : "Rediger tekst"} placement="bottom">
        <Button
          variant="tertiary"
          aria-label={edited ? "Tekst redigert!" : "Rediger tekst"}
          className={`p-0 w-5 h-5 min-w-0 min-h-0 rounded ${
            edited ? "cursor-default opacity-70" : "hover:bg-[var(--ds-color-neutral-surface-hover)]"
          }`}
          onClick={handleEdit}
          disabled={edited}
        >
          {edited ? <CheckmarkIcon className="w-4 h-4" /> : <PencilIcon className="w-4 h-4" />}
        </Button>
      </Tooltip>
    </div>
  );
}
