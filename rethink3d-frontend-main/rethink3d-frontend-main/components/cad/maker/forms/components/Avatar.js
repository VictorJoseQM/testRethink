import React, { useState } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useFormData } from "../../../context/FormDataProvider";

export default function Avatar() {
  const { formData, updateFormData } = useFormData();
  const [localAvatarUri, setLocalAvatarUri] = useState(
    formData.makerDetails?.avatarUri || ""
  );

  const handleImagePick = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert("É necessário permitir o acesso à biblioteca de imagens!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (!result.canceled) {
      const { uri } = result.assets[0];
      setLocalAvatarUri(uri); // Atualiza o estado local para feedback visual
      updateFormData("makerDetails", {
        ...formData.makerDetails,
        avatarUri: uri,
      }); // Atualiza o estado global
    }
  };

  return (
    <View style={styles.avatarContainer}>
      <TouchableOpacity onPress={handleImagePick}>
        <Image
          style={styles.avatar}
          source={{
            uri: localAvatarUri || "https://via.placeholder.com/200",
          }}
        />
      </TouchableOpacity>
      <Text style={styles.avatarHint}>
        Clique na imagem para alterar (max. 200x200px)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#ddd",
  },
  avatarHint: {
    fontSize: 12,
    color: "#aaa",
    marginTop: 5,
  },
});
