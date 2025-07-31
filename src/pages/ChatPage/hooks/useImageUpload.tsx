import { useCallback, useState } from "react";

export function useImageUpload() {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [imageError, setImageError] = useState<string | null>(null);

  const handleImageUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setImageError(null);

      if (e.target.files) {
        const files = Array.from(e.target.files);

        if (files.length + uploadedImages.length > 5) {
          setImageError("Du kan maks laste opp 5 bilder.");
          return;
        }

        const newUrls = files.map((file) => URL.createObjectURL(file));
        setUploadedImages((prev) => [...prev, ...newUrls]);
      }
    },
    [uploadedImages]
  );

  const handleRemoveImage = useCallback(
    (index: number) => {
      setUploadedImages((prev) => prev.filter((_, i) => i !== index));
      setImageError(null);
    },
    []
  );

  const clearImages = useCallback(() => {
    setUploadedImages([]);
    setImageError(null);
  }, []);

  return {
    uploadedImages,
    imageError,
    handleImageUpload,
    handleRemoveImage,
    clearImages,
  };
}