import { useState } from "react";
import { ImageProps } from "@/types/imageProps";
import * as ImagePicker from "expo-image-picker";

export default function useSelectImage() {
  const [images, setImages] = useState<ImageProps[]>([]);

  const selectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.canceled) {
      if (
        !images.find((image) => image.fileName === result.assets[0].fileName)
      ) {
        const newImages = [...images, { ...result.assets[0] }];
        setImages(newImages);
        return newImages;
      }
      return images;
    }
    return images;
  };

  const removeImage = (id: string) => {
    const newImages = images.filter((image) => image.fileName !== id);
    setImages(newImages);
    return newImages;
  };

  return { images, selectImage, removeImage };
}
