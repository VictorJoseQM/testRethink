import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import useSelectImage from "@/hooks/add-product/useSelectImage";

type ImageProps = ImagePicker.ImagePickerAsset;

type InputData = {
  images: ImageProps[];
  name: string;
  desc: string;
  fixedDimensions: boolean;
  height?: number;
  width?: number;
  weight: number;
  categories: string[];
  price: number;
};

export function ImageGrid({
  onChange,
}: {
  onChange: (images: ImageProps[]) => void;
}): React.JSX.Element {
  const { images, selectImage, removeImage } = useSelectImage();

  return (
    <View style={styles.grid}>
      {[...images].map((image, index) => {
        return (
          <TouchableOpacity
            key={image.fileName}
            style={styles.cell}
            onPress={() => {
              const newImages = removeImage(image.fileName!);
              onChange(newImages);
            }}
          >
            <Image
              style={[styles.cell, { width: "100%" }]}
              source={{
                uri: image.uri,
              }}
            />
          </TouchableOpacity>
        );
      })}
      {images.length < 6 && (
        <TouchableOpacity
          style={[styles.cell]}
          onPress={async () => {
            try {
              const newImages = await selectImage();
              onChange(newImages);
            } catch (e) {
              if (e instanceof Error) alert(e.message);
            }
          }}
        >
          <Ionicons name="camera" size={36} style={styles.cameraIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 10,
    rowGap: 2,
  },
  cell: {
    display: "flex",
    backgroundColor: "lightgray",
    width: "32%",
    height: "auto",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: "1 / 1",
    borderRadius: 10,
    margin: 2,
  },
  cameraIcon: {
    opacity: 10,
  },
  horizontalInputs: {
    display: "flex",
    flexDirection: "row",
    width: "30%",
    gap: 10,
  },
  inactiveCell: {
    opacity: 0.1,
  },
});
