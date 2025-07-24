import { useState } from "react";
import { TabsIcon, PencilIcon, CheckmarkIcon, XMarkIcon } from "@navikt/aksel-icons";
import { Button, Tooltip, Textarea } from "@digdir/designsystemet-react";

interface MessageEditorProps {
  initialText: string;
}

export function MessageEditor({ initialText}: MessageEditorProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textarea = document.createElement("textarea");
    textarea.value = initialText;
    textarea.style.position = "fixed";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    try {
      const successful = document.execCommand("copy");
      if (successful) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        alert("Kopiering mislyktes.");
      }
      } catch (err) {
        alert("Kopiering støttes ikke.");
        console.error(err);
      }
      document.body.removeChild(textarea);
  };
  return (
    <div className="flex gap-1">
      <Tooltip content={copied ? "Kopiert!" : "Kopier tekst"} placement="top">
        <Button
          variant="tertiary"
          aria-label={copied ? "Kopiert!" : "Kopier tekst"}
          className={`p-0 w-6 h-6 min-w-0 min-h-0 rounded ${
            copied ? "cursor-default opacity-70" : "hover:bg-[var(--ds-color-neutral-surface-hover)]"
          }`}
          onClick={handleCopy}
        >
          {copied ? <CheckmarkIcon className="w-4 h-4" /> : <TabsIcon className="w-4 h-4" />}
        </Button>
      </Tooltip>
    </div>
  );
}
