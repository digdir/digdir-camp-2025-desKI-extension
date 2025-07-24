import { useState } from "react";
import { TabsIcon, PencilIcon} from "@navikt/aksel-icons";
import { Button } from "@digdir/designsystemet-react";

interface MessageEditor {
  initialText: string;
  onSave?: (newText: string) => void;
}

export function MessageEditor({ initialText, onSave}: MessageEditor) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);


  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Tekst kopiert!");
  };

  const handleEdit = () => {
    navigator.clipboard.writeText(text);
    alert("Tekst kopiert!");
  };

  return (
    <div className="flex gap-0">
           <Button
                aria-label="Kopier"
                className="w-3 h-3"
                onClick={handleCopy}
            >
                <TabsIcon className='w-3 h-3' />
            </Button>

            <Button
                aria-label="Rediger"
                className="w-3 h-3"
                onClick={handleEdit}
            >
                <PencilIcon className='w-3 h-3' />
            </Button>
        </div>
  );
}

