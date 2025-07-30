import './ChatBubble.css';

type Props = {
  message: string;
  sender: 'user' | 'bot';
};

export function ChatBubble({ message, sender }: Props) {
  const isUser = sender === 'user';

  return (
    <div className={`chat-bubble-container ${sender}`}>
      <div className={`chat-bubble ${sender}`}>
        {message}
      </div>
    </div>
  );
}


