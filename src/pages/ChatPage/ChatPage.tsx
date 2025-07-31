// File: ChatPage/ChatPage.tsx
import { useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import { ChatHeader } from "./ChatHeader";
import { ChatMessages } from "./ChatMessages";
import { ChatFooter } from "./ChatFooter";
import { useChatHandler } from "./hooks/useChatHandler";
import { ChatMessage } from "./types";

export default function ChatPage() {
  const location = useLocation();
  const solutions = location.state?.solutions ?? [];
  const fileInputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [imageError, setImageError] = useState<string | null>(null);
  const [logResults, setLogResults] = useState<string[]>([]);
  const [includeAllLogs, setIncludeAllLogs] = useState(false);

  const basePath = location.pathname.startsWith("/servicedesk")
    ? "/servicedesk"
    : "/brukerstøtte";

  const {
    handleImageUpload,
    handleRemoveImage,
    handleSend,
    handleRemoveLogResult,
  } = useChatHandler({
    inputValue,
    setInputValue,
    uploadedImages,
    setUploadedImages,
    logResults,
    setLogResults,
    includeAllLogs,
    setMessages,
    endRef,
  });

  return (
    <div className="relative bg-[var(--ds-color-neutral-background-subtle)] w-full h-screen flex flex-col justify-between items-center">
      <ChatHeader basePath={basePath} solutions={solutions} />

      <ChatMessages messages={messages} endRef={endRef} />

      <ChatFooter
        inputValue={inputValue}
        onInputChange={setInputValue}
        onSend={handleSend}
        uploadedImages={uploadedImages}
        imageError={imageError}
        onImageUpload={handleImageUpload}
        onRemoveImage={handleRemoveImage}
        fileInputRef={fileInputRef}
        logResults={logResults}
        onRemoveLogResult={handleRemoveLogResult}
        onAddLogResults={(results: string[]) => setLogResults(prev => [...prev, ...results])}
        includeAllLogs={includeAllLogs}
        setIncludeAllLogs={setIncludeAllLogs}
      />
    </div>
  );
}
