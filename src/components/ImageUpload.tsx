
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
