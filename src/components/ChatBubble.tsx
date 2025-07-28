import { useState, useRef } from "react";
import { MessageEditor } from "./MessageEditor";

type Props = {
  id: number;
  message: string;
  sender: "user" | "bot";
  onEdit?: (newText: string, id: number) => void;
};

export function ChatBubble({ id, message, sender, onEdit }: Props) {
  const isUser = sender === "user";
  const [editing, setEditing] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  const handleSave = () => {
    const newText = textRef.current?.innerText || message;
    setEditing(false);
    

    // ❗️Send meldingen på nytt, uten å oppdatere meldingsboblen
    if (onEdit) onEdit(newText, id);
  };

  const handleCancel = () => {
    if (textRef.current) {
      textRef.current.innerText = message; // Tilbakestill tekst hvis redigering avbrytes
    }
    setEditing(false);
    
  };

  return (
    <div className={`flex flex-col ${isUser ? "items-end mr-8" : "items-start ml-5"} mb-2`}>
      <div
        ref={textRef}
        contentEditable={editing}
        suppressContentEditableWarning={true}
        className={`relative max-w-[60%] px-4 py-2 text-sm break-words outline-none ${
          isUser
            ? editing
              ? "bg-red-400 text-white"
              : "bg-[var(--brand1-12)] text-white"
            : "bg-[var(--ds-color-neutral-background-weak)] text-[var(--ds-color-text-default)]"
        } rounded-[20px_20px_4px_20px]`}
      >
        {message}
      </div>

      <div className={`mt-1 ${isUser ? "mr-0" : "ml-4"}`}>
        <MessageEditor
          onEditStart={() => {
            if (textRef.current) textRef.current.innerText = message;
            setEditing(true);
          }}
          onSave={handleSave}
          onCancel={handleCancel}
          isEditing={editing}
          canEdit={isUser}
          textToCopy={message}
        />
      </div>
    </div>
  );
}
