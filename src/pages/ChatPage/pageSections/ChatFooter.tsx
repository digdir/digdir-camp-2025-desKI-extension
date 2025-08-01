import { ImageUpload } from "../../../components/ImageUpload";
import { LogResult } from "../../../components/LogResult";
import { ChatInputField } from "../../../components/ChatInputField";
import { RefObject } from "react";

interface ChatFooterProps {
  inputValue: string;
  onInputChange: (value: string) => void;
  onSend: () => void;
  uploadedImages: string[];
  imageError: string | null;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveImage: (index: number) => void;
  fileInputRef: RefObject<HTMLInputElement | null>;
  logResults: string[];
  onRemoveLogResult: () => void;
  onAddLogResults: (results: string[]) => void;
  includeAllLogs: boolean;
  setIncludeAllLogs: (value: boolean) => void;
}

export function ChatFooter({
  inputValue,
  onInputChange,
  onSend,
  uploadedImages,
  imageError,
  onImageUpload,
  onRemoveImage,
  fileInputRef,
  logResults,
  onRemoveLogResult,
  onAddLogResults,
  includeAllLogs,
  setIncludeAllLogs,
}: ChatFooterProps) {
  return (
    <div className="w-full p-2 flex flex-col gap-3 bg-[var(--ds-color-surface-neutral-subtle)] shadow-sm">
      <div className="ml-2">
        <ImageUpload
          uploadedImages={uploadedImages}
          imageError={imageError}
          onImageUpload={onImageUpload}
          onRemoveImage={onRemoveImage}
          fileInputRef={fileInputRef}
        />

        {logResults.length > 0 && (
          <div className="mb-2">
            <LogResult logs={logResults} onRemove={onRemoveLogResult} compact />
          </div>
        )}
      </div>

      <div className="relative mt-2">
        <ChatInputField
          inputValue={inputValue}
          onInputChange={onInputChange}
          onSend={onSend}
          fileInputRef={fileInputRef}
          onAddLogResults={onAddLogResults}
          onIncludeAllLogsToggle={setIncludeAllLogs}
          includeAllLogs={includeAllLogs}
        />
      </div>
    </div>
  );
}
