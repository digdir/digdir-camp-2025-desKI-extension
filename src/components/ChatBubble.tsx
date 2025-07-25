import { useState } from 'react';
import { MessageEditor } from "./MessageEditor";

type Props = {
  message: string;
  sender: 'user' | 'bot';
  imageUrls?: string[];
};

export function ChatBubble({ message, sender, imageUrls }: Props) {
  const isUser = sender === 'user';
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  return (
    <>
      <div className={`flex flex-col ${isUser ? 'items-end mr-8' : 'items-start ml-5'} mb-3`}>
        {/* Bilder i chat-boblen */}
        {Array.isArray(imageUrls) && imageUrls.length > 0 && (
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
        )}

        {/* Selve boblen */}
        {message.trim() !== '' && (
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

        {/* Editor under meldingen */}
        <div className={`mt-1 ${isUser ? 'mr-0' : 'ml-4'}`}>
          <MessageEditor initialText={message} />
        </div>
      </div>

      {/* Fullskjermsvisning av bilde */}
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
