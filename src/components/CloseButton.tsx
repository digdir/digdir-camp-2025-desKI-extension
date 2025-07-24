import { Button } from '@digdir/designsystemet-react';

export function CloseButton() {
  const handleClose = () => {
    const frame = window.frameElement;
    if (frame && frame.parentNode) {
      frame.parentNode.removeChild(frame);
    }
  };

  return (
    <div className="flex-end p-2">
      <Button
        onClick={handleClose}
        className="text-sm text-theme-subtle hover:text-theme"
      >
        Lukk
      </Button>
    </div>
  );
}
