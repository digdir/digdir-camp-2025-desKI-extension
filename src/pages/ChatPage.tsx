import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { DropDownMenu } from "../components/DropdownMenu";
import { UtilityBar } from "../components/UtilityBar";
import { ChatBubble } from "../components/ChatBubble";
import { ChatInputField } from "../components/ChatInputField";
import { sendMessageToDeski } from "../api/chatApi";
import { BackButton } from "../components/BackButton";
import { searchInLog } from "../services/SearchInLog";
import { ColoredCheckbox } from "../components/ColoredCheckBox";
import { ImageUpload } from "../components/ImageUpload";

export default function ChatPage() {
  const location = useLocation();
  const solutions = location.state?.solutions ?? [];
  const [messages, setMessages] = useState<{ sender: "user" | "bot"; message: string; imageUrls?: string[] }[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [imageError, setImageError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const [searchLogs, setSearchLogs] = useState(false);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      if (files.length + uploadedImages.length > 5) {
        setImageError("Du kan maks laste opp 5 bilder.");
        return;
      }
      setImageError(null);
      const newUrls = files.map((file) => URL.createObjectURL(file));
      setUploadedImages((prev) => [...prev, ...newUrls]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSend = async () => {
    if (!inputValue.trim() && uploadedImages.length === 0) return;

    const userMessage = { sender: "user", message: inputValue, imageUrls: uploadedImages } as const;
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setUploadedImages([]);

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
      <div className="flex items-start justify-between w-full px-4 pt-4 mb-4 ">
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
        <ChatBubble key={idx} sender={msg.sender} message={msg.message} imageUrls={msg.imageUrls} />
      ))}

        <div ref={endRef} />
      </div>

      <div className="w-full p-2 flex flex-col gap-3 bg-[var(--ds-color-surface-neutral-subtle)] shadow-sm">

        {/* Rad med søk i logg og bildeopplasting */}
        <div className="ml-2 flex items-start justify-left gap-4">
          <ColoredCheckbox
          label="Søk i logg"
          checked={searchLogs}
          onChange={setSearchLogs}
          />
          <ImageUpload
            uploadedImages={uploadedImages}
            imageError={imageError}
            onImageUpload={handleImageUpload}
            onRemoveImage={handleRemoveImage}
            fileInputRef={fileInputRef}
          />

        </div>

        {/* Tekstinput + sendeknapp */}
        <div className="relative mt-2">
          <ChatInputField
            inputValue={inputValue}
            onInputChange={setInputValue}
            onSend={handleSend}
            fileInputRef={fileInputRef}
          />
        </div>
      </div>
    </div>
  );
}
