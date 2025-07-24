import { useTranslation } from "react-i18next";
import { CameraIcon } from "@navikt/aksel-icons";
import { Button } from "@digdir/designsystemet-react";

type Props = {
  uploadedImages: string[];
  imageError: string | null;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveImage: (index: number) => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
};

export function ImageUpload({
  uploadedImages,
  imageError,
  onImageUpload,
  onRemoveImage,
  fileInputRef,
}: Props) {

  const handleOpenFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      {uploadedImages.length > 0 && (
        <div className="mb-2 flex flex-wrap gap-2">
          {uploadedImages.map((url, index) => (
            <div key={index} className="relative inline-block">
              <img
                src={url}
                alt={`Bilde ${index + 1}`}
                className="w-20 h-20 object-cover rounded-md border border-yellow-600"
              />
              <button

                type="button"
                onClick={() => onRemoveImage(index)}
                aria-label={`Fjern bilde ${index + 1}`}
                className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full
                           text-xs leading-5 text-center bg-transparent hover:bg-gray-200
                           cursor-pointer"
              >
                ✖
              </button>
            </div>
          ))}
        </div>
      )}

      {imageError && (
        <p className="text-red-600 text-sm mt-1 mb-2">{imageError}</p>
      )}

      <Button
        type="button"
        onClick={handleOpenFileDialog}
        className="
            flex items-center justify-center gap-1 px-3 py-2 rounded-lg
            bg-[var(--brand1-12)] text-white
            border border-transparent shadow-sm
            hover:bg-[var(--brand1-13)]
            transition-colors duration-200
        "
        >
        <CameraIcon className="w-4 h-4" />
            Last opp bilde
        </Button>

      <input
        type="file"
        accept="image/*"
        multiple
        onChange={onImageUpload}
        ref={fileInputRef}
        className="hidden"
      />
    </div>
  );
}
