import { useState } from 'react';
import { MessageEditor } from "./MessageEditor";
import { LogResult } from "./LogResult";

type Props = {
  message: string;
  sender: 'user' | 'bot';
  imageUrls?: string[];
  logResults?: string[];
};

export function ChatBubble({ message, sender, imageUrls, logResults }: Props) {
  const isUser = sender === 'user';
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [showLogs, setShowLogs] = useState(false);

  return (
    <>
      <div className={`flex flex-col ${isUser ? 'items-end mr-8' : 'items-start ml-5'} mb-3`}>
        {/* Knapper for loggvisning */}
        {logResults?.length ? (
          <div className={`mt-2 ${isUser ? 'text-right' : 'text-left'} max-w-[60%]`}>
            <button
              type="button"
              onClick={() => setShowLogs((prev) => !prev)}
              className="text-xs text-blue-500 hover:underline"
            >
              {showLogs ? 'Skjul logg' : `Vis ${logResults.length} logginnslag`}
            </button>

            {showLogs && (
              <div className="mt-2 border border-gray-300 rounded-md p-2 bg-gray-50">
                <LogResult logs={logResults} compact />
              </div>
            )}
          </div>
        ) : null}

        {/* Bilder */}
        {imageUrls?.length ? (
          <div className="flex flex-wrap gap-2 mb-2">
            {imageUrls.map((url, i) => (
              <button
                key={i}
                type="button"
                className="p-0 m-0 border-none cursor-pointer"
                onClick={() => setFullscreenImage(url)}
              >
                <img
                  src={url}
                  alt={`Bilde ${i + 1}`}
                  className="w-48 h-auto rounded-lg object-cover border border-gray-300 hover:opacity-90 transition"
                />
              </button>
            ))}
          </div>
        ) : null}

        {/* Chat-boble */}
        {message.trim() && (
          <div
            className={`max-w-[60%] px-4 py-2 text-sm break-words ${
              isUser
                ? 'bg-[var(--brand1-12)] text-white rounded-[20px_20px_4px_20px]'
                : 'text-[var(--neutral-11)] bg-transparent dark:text-[var(--ds-color-text-default)]'
            }`}
          >
            {message}
          </div>
        )}

        {/* Inline editor */}
        <div className={`mt-1 ${isUser ? 'mr-0' : 'ml-4'}`}>
          <MessageEditor initialText={message} />
        </div>
      </div>

      {/* Fullscreen bildevisning */}
      {fullscreenImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            type="button"
            className="absolute top-4 right-4 text-white text-3xl font-bold"
            onClick={() => setFullscreenImage(null)}
          >
            ✕
          </button>
          <img
            src={fullscreenImage}
            alt="Fullskjerm bilde"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </>
  );
}
