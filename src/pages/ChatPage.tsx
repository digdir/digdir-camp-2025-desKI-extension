import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { DropDownMenu } from "../components/DropdownMenu";
import { UtilityBar } from "../components/UtilityBar";
import { ChatBubble } from "../components/ChatBubble";
import { Input } from "@digdir/designsystemet-react";
import { PaperplaneIcon } from "@navikt/aksel-icons";
import { sendMessageToDeski } from "../api/chatApi";
import { BackButton } from "../components/BackButton";
import { KEY } from '../i18n/constants';
import { servicedeskSolutions } from "../data/servicedeskSolutions";
import { brukerstøtteSolutions } from "../data/brukerstøtteSolutions";

export default function ChatPage() {
  const { t } = useTranslation();
  const location = useLocation();
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
          message: t(KEY.api_connection_error),
        },
      ]);
    }
  };

  const basePath = location.pathname.startsWith("/servicedesk")
    ? "/servicedesk"
    : "/brukerstøtte";

  const isServicedesk = basePath === "/servicedesk";

  return (
    <div className="relative bg-[var(--ds-color-neutral-background-subtle)] w-full h-screen flex flex-col justify-between items-center">
      <div className="flex items-start justify-between w-full px-4 pt-4 mb-4">
        <div className="flex flex-row gap-1">
          <BackButton to={basePath} />
          <DropDownMenu solutions={isServicedesk ? servicedeskSolutions : brukerstøtteSolutions} />
        </div>
        <div className="pt-1">
          <UtilityBar />
        </div>
      </div>

      <div className="flex-1 w-full overflow-y-auto px-2 py-4 space-y-4">
        {messages.map((msg, idx) => (
          <ChatBubble key={idx} sender={msg.sender} message={msg.message} />
        ))}
        <div ref={endRef} />
      </div>

      <div className="w-full py-2 relative p-4">
        <Input
          placeholder={t(KEY.chat_placeholder)}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="w-full h-full rounded-[20px] pr-14 px-5 py-4 border-none shadow-md focus:outline-none focus:shadow-lg"
        />
        <button
          onClick={handleSend}
          className="absolute top-1/2 right-6 -translate-y-1/2 h-[70%] aspect-square rounded-full bg-transparent p-0 m-0 text-lg text-[var(--ds-color-neutral-text-default)] hover:text-[var(--ds-color-neutral-text-subtle)] flex items-center justify-center"
        >
          <PaperplaneIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
