import { Button } from '@digdir/designsystemet-react';

export function CloseButton(){
    const handleClose = () => {
    const frame = window.frameElement;
    if (frame && frame.parentNode) {
      frame.parentNode.removeChild(frame);
    }
  };

  return (
    <div className="flex justify-end p-2">
      <Button onClick={handleClose} className="text-sm text-gray-600 hover:text-black">
        Lukk
      </Button>
    </div>
  );

}