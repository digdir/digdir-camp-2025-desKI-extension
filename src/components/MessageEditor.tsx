import { TabsIcon, PencilIcon, XMarkIcon, BedIcon } from "@navikt/aksel-icons";
import { Button, Tooltip } from "@digdir/designsystemet-react";
import { PaperplaneIcon } from "@navikt/aksel-icons";

interface MessageEditorProps {
  onEditStart?: () => void;
  onSave?: () => void;
  onCancel?: () => void;
  isEditing?: boolean;
  canEdit?: boolean;
  showCopy?: boolean;
  textToCopy: string;
}

export function MessageEditor({
  onEditStart,
  onSave,
  onCancel,
  isEditing = false,
  canEdit = true,
  showCopy = true,
  textToCopy,
}: MessageEditorProps) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
    } catch (e) {
      console.error("Kunne ikke kopiere til utklippstavle", e);
    }
  };

  return (
    <div className="flex gap-2 items-center text-xs text-gray-500">
      {showCopy && (
        <Tooltip content="Kopier tekst" placement="bottom">
          <Button
            variant="tertiary"
            aria-label="Kopier tekst"
            className="p-0 w-5 h-5 min-w-0 min-h-0"
            onClick={handleCopy}
          >
            <TabsIcon className="w-4 h-4" />
          </Button>
        </Tooltip>
      )}

      {canEdit && !isEditing && (
        <Tooltip content="Rediger i meldingsboblen" placement="bottom">
          <Button
            variant="tertiary"
            aria-label="Rediger tekst"
            className="p-0 w-5 h-5 min-w-0 min-h-0"
            onClick={onEditStart}
          >
            <PencilIcon className="w-4 h-4" />
          </Button>
        </Tooltip>
      )}

      {canEdit && isEditing && (
        <>
          <Tooltip content="Send redigert melding" placement="bottom">
          <Button
            variant="tertiary"
            aria-label="Send"
            onClick={onSave}
            className="p-0 w-5 h-5 min-w-0 min-h-0 text-[var(--ds-color-neutral-text-default)] hover:text-[var(--ds-color-neutral-text-subtle)]"
          >
            <PaperplaneIcon className="w-4 h-4" />
          </Button>
        </Tooltip>

          <Tooltip content="Avbryt redigering" placement="bottom">
            <Button
              variant="secondary"
              aria-label="Avbryt"
              onClick={onCancel}
              className="w-5 h-5 p-0 min-w-0 min-h-0"
            >
              <XMarkIcon className="w-4 h-4" />
            </Button>
          </Tooltip>
        </>
      )}
    </div>
  );
}
