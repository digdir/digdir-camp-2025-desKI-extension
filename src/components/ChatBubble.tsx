import { useState } from "react";
import { MessageEditor } from "./MessageEditor";

type Props = {
  message: string;
  sender: "user" | "bot";
  onEdit?: (newText: string) => void;
};

export function ChatBubble({ message, sender, onEdit }: Props) {
  const isUser = sender === "user";
  const [currentText, setCurrentText] = useState(message);

  const handleSave = (newText: string) => {
    setCurrentText(newText);
    if (onEdit) onEdit(newText);
  };

  return (
    <div className={`flex flex-col ${isUser ? "items-end mr-8" : "items-start ml-5"} mb-2`}>
      {/* Selve meldingsboblen */}
      <div
        className={`relative max-w-[60%] px-4 py-2 text-sm break-words ${
          isUser
            ? "bg-[var(--brand1-12)] text-white rounded-[20px_20px_4px_20px]"
            : "bg-[var(--ds-color-neutral-background-weak)] text-[var(--ds-color-text-default)] rounded-[20px_20px_20px_4px]"
        }`}
      >
        <span className={!isUser ? "text-[var(--ds-color-brand-base)]" : ""}>
          {currentText}
        </span>
      </div>

      {/* Verktøylinje: alltid kopier-knapp, men rediger bare for bruker */}
      <div className={`mt-1 ${isUser ? "mr-0" : "ml-4"}`}>
        <MessageEditor
          initialText={currentText}
          onSave={isUser ? handleSave : undefined} // Kun brukermeldinger kan redigeres
          canEdit={isUser}                   // Skjuler rediger-knapp for bot
        />
      </div>
    </div>
  );
}
