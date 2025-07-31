import { Button } from '@digdir/designsystemet-react';
import './CloseButton.css';

export function CloseButton() {
  const handleClose = () => {
    const frame = window.frameElement;
    if (frame && frame.parentNode) {
      frame.parentNode.removeChild(frame);
    }
  };

  return (
    <div className="close-button-container">
      <Button onClick={handleClose} className="close-button">
        Lukk
      </Button>
    </div>
  );
}
