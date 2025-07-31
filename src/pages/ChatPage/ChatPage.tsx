import { useLocation } from "react-router-dom";
import { ChatHeader } from "./pageSections/ChatHeader";
import { ChatMessages } from "./pageSections/ChatMessages";
import { ChatFooter } from "./pageSections/ChatFooter";
import { useChat } from "./hooks/useChat";
import { useChatPageState } from "./hooks/useChatPageState";

export default function ChatPage() {
  const location = useLocation();
  const { solutions, basePath } = useChatPageState(location);

  const {
    fileInputRef,
    inputValue,
    handleInputChange,
    uploadedImages,
    imageError,
    handleImageUpload,
    handleRemoveImage,
    logResults,
    handleAddLogResults,
    handleRemoveLogResult,
    includeAllLogs,
    setIncludeAllLogs,
    messages,
    endRef,
    handleSend,
  } = useChat();

  return (
    <div className="relative bg-[var(--ds-color-neutral-background-subtle)] w-full h-screen flex flex-col justify-between items-center">
      <ChatHeader basePath={basePath} solutions={solutions} />

      <ChatMessages
        messages={messages}
        endRef={endRef}
      />

      <ChatFooter
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onSend={handleSend}
        uploadedImages={uploadedImages}
        imageError={imageError}
        onImageUpload={handleImageUpload}
        onRemoveImage={handleRemoveImage}
        fileInputRef={fileInputRef}
        logResults={logResults}
        onRemoveLogResult={handleRemoveLogResult}
        onAddLogResults={handleAddLogResults}
        includeAllLogs={includeAllLogs}
        setIncludeAllLogs={setIncludeAllLogs}
      />
    </div>
  );
}
