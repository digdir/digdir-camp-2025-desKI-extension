import { useState } from "react";
import { TabsIcon, CheckmarkIcon } from "@navikt/aksel-icons";
import { Button, Tooltip } from "@digdir/designsystemet-react";
import "./MessageEditor.css";

interface MessageEditorProps {
  initialText: string;
}

export function MessageEditor({ initialText }: MessageEditorProps) {
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
    <div className="message-editor-container">
      <Tooltip content={copied ? "Kopiert!" : "Kopier tekst"} placement="top">
        <Button
          variant="tertiary"
          aria-label={copied ? "Kopiert!" : "Kopier tekst"}
          className={`copy-button ${copied ? "copied" : ""}`}
          onClick={handleCopy}
        >
          {copied ? (
            <CheckmarkIcon className="icon" />
          ) : (
            <TabsIcon className="icon" />
          )}
        </Button>
      </Tooltip>
    </div>
  );
}

