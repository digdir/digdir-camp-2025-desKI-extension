import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { DropDownMenu } from "../components/DropdownMenu";
import { UtilityBar } from "../components/UtilityBar";
import { ChatBubble } from "../components/ChatBubble";
import { Input, Checkbox } from "@digdir/designsystemet-react";
import { PaperplaneIcon } from "@navikt/aksel-icons";
import { sendMessageToDeski } from "../api/chatApi";
import { BackButton } from "../components/BackButton";
import { searchInLog } from "../services/SearchInLog";

export default function ChatPage() {
  const location = useLocation();
  const solutions = location.state?.solutions ?? [];
  const [messages, setMessages] = useState<{ sender: "user" | "bot"; message: string }[]>([]);
  const [inputValue, setInputValue] = useState("");
  const endRef = useRef<HTMLDivElement>(null);
  const [searchLogs, setSearchLogs] = useState(false);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = { sender: "user", message: inputValue } as const;
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    try {
      let reply: string;

      if (searchLogs) {
        reply = await searchInLog(inputValue);
      } else {
        reply = await sendMessageToDeski(inputValue);
      }

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
    <div className="relative bg-[var(--ds-color-neutral-background-subtle)] w-full h-screen flex flex-col justify-between items-center">
      <div className="flex items-start justify-between w-full px-4 pt-4 mb-4">
        <div className="flex flex-row gap-1">
          <BackButton to={basePath} />
          <DropDownMenu solutions={solutions} />
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

      <div className="w-full p-4 flex flex-col gap-3 bg-[var(--ds-color-surface-neutral-subtle)] shadow-sm">
        <div className="flex items-center p-2 rounded-xl bg-[var(--ds-color-surface-neutral-default)] shadow-sm">
          <Checkbox
            checked={searchLogs}
            onChange={(e) => setSearchLogs(e.target.checked)}
            label="Søk i logg"
            className="checked:bg-[var(--brand1-12)]"
          />
        </div>


        <div className="relative">
          <Input
            placeholder="Spør et spørsmål"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="w-full rounded-[20px] pr-14 px-5 py-4 border-none shadow-md
                      focus:outline-none focus:shadow-lg"
          />
          <button
            onClick={handleSend}
            className="absolute top-1/2 right-4 -translate-y-1/2
                      h-8 w-8 rounded-full flex items-center justify-center
                      text-[var(--ds-color-neutral-text-default)] hover:text-[var(--ds-color-neutral-text-subtle)]"
          >
          <PaperplaneIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
