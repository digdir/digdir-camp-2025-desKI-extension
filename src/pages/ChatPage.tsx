import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { DropDownMenu } from "../components/DropdownMenu";
import { UtilityBar } from "../components/UtilityBar";
import { ChatBubble } from "../components/ChatBubble";
import { Input } from "@digdir/designsystemet-react";
import { PaperplaneIcon } from "@navikt/aksel-icons";
import { sendMessageToDeski } from "../api/chatApi";
import { BackButton } from "../components/BackButton";

export default function ChatPage() {
  const location = useLocation();
  const solutions = location.state?.solutions ?? [];
  const [messages, setMessages] = useState<{ sender: "user" | "bot"; message: string }[]>([]);
  const [inputValue, setInputValue] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = { sender: "user", message: inputValue } as const;
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    try {
      const reply = await sendMessageToDeski(inputValue);
      const botReply = { sender: "bot", message: reply } as const;
      setMessages((prev) => [...prev, botReply]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          message: "Beklager, noe gikk galt med forbindelsen til desKI 🤖.",
        },
      ]);
    }
  };

  const basePath = location.pathname.startsWith("/servicedesk")
    ? "/servicedesk"
    : "/brukerstøtte";

  return (
    <div className="chat-page-layout">
      {/* Header with z-index to stay on top */}
      <div className="flex-between w-full h-16 pt-4 relative z-10">
        <div className="flex-start gap-2">
          <BackButton to={basePath} />
          <DropDownMenu solutions={solutions} />
        </div>
        <div className="pt-1">
          <UtilityBar />
        </div>
      </div>

      {/* Messages list */}
      <div className="flex-1 w-full px-6 py-4 space-y-4 overflow-y-auto">
        {messages.map((msg, idx) => (
          <ChatBubble key={idx} sender={msg.sender} message={msg.message} />
        ))}
        <div ref={endRef} />
      </div>

      {/* Input field */}
      <div className="w-full py-4 relative p-4">
        <Input
          placeholder="Spør et spørsmål"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="input-with-button"
        />
        <button
          onClick={handleSend}
          className="input-button-position btn-icon btn-rounded text-theme-subtle hover:text-theme"
        >
          <PaperplaneIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}