import { useEffect, useRef, useState } from "react";
import { DropDownMenu } from "../components/DropdownMenu";
import { servicedeskSolutions } from "../data/servicedeskSolutions";
import { UtilityBar } from "../components/UtilityBar";
import { ChatBubble } from "../components/ChatBubble";
import { Input } from "@digdir/designsystemet-react";
import { PaperplaneIcon } from "@navikt/aksel-icons";
import logo from "../../public/logo.svg"

export default function ChatPage() {
  const [messages, setMessages] = useState<{ sender: "user" | "bot"; message: string }[]>([]);
  const [inputValue, setInputValue] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages update
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = { sender: "user", message: inputValue } as const;
    const botReply = {
      sender: "bot",
      message: "Takk for spørsmålet! Dette er et standardsvar fra desKI 🤖.",
    } as const;

    setMessages((prev) => [...prev, userMessage, botReply]);
    setInputValue("");
  };

  return (
    <div className="relative bg-[var(--ds-color-neutral-background-subtle)] w-full h-screen flex flex-col justify-between items-center ">
      {/* Top */}
      <div className="flex items-center justify-between w-full px-2 mb-6 ">
      <div className="flex items-center gap-2 h-10 pt-6">
        <img src={logo} alt="desKI logo" className="w-[25px] object-contain" />
        <div className="flex items-center h-full">
      <DropDownMenu solutions={servicedeskSolutions} />
    </div>
    </div>
      <div className="flex items-center h-10 pt-8">
        <UtilityBar />
      </div>
  </div>


      {/* Messages */}
      <div className="flex-1 w-full overflow-y-auto px-2 py-4 space-y-4">
        {messages.map((msg, idx) => (
          <ChatBubble key={idx} sender={msg.sender} message={msg.message} />
        ))}
        <div ref={endRef} />
      </div>

      {/* Input */}
      <div className="w-full py-2 relative p-4">
        <Input
          placeholder="Spør et spørsmål"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="w-full h-full rounded-[20px] pr-14 px-5 py-4 border-none shadow-md focus:outline-none focus:shadow-lg"
        />
        <button
          onClick={handleSend}
          className="absolute top-1/2 right-2 -translate-y-1/2 h-[70%] aspect-square rounded-full bg-transparent p-0 m-0 text-lg text-[var(--ds-color-neutral-text-default)] hover:text-[var(--ds-color-neutral-text-subtle)] flex items-center justify-center"
        >
          <PaperplaneIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

