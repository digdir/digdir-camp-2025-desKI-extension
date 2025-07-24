import { MessageEditor } from "./MessageEditor";

type Props = {
  message: string;
  sender: 'user' | 'bot';
  onEdit?: (newMsg: string) => void;  // <-- Legger til onEdit som optional prop
};

export function ChatBubble({ message, sender, onEdit }: Props) {
  const isUser = sender === 'user';

  return (
    <div className={`flex flex-col ${isUser ? 'items-end mr-8' : 'items-start ml-5'} mb-2`}>
      {/* Chat bubble */}
      <div
        className={`max-w-[60%] px-4 py-2 text-sm break-words ${
          isUser
            ? 'bg-[var(--brand1-12)] text-white rounded-[20px_20px_4px_20px]'
            : 'text-[var(--neutral-11)] bg-transparent dark:text-[var(--ds-color-text-default)]'
        }`}
      >
        {message}
      </div>
      <div className={`mt-1 ${isUser ? 'mr-0' : 'ml-4'}`}>
        <MessageEditor
          initialText={message}
          onSave={isUser ? onEdit : undefined}
          canEdit={isUser}
        />
      </div>
    </div>
  );
}
