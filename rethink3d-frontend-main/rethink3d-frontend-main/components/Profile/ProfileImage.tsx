import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

interface ProfileHeaderProps {
  imageUri: string;
  name: string;
  email: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  imageUri,
  name,
  email,
}) => (
  <View style={styles.profileContainer}>
    <Image source={{ uri: imageUri }} style={styles.profileImage} />
    <Text style={styles.profileName}>{name}</Text>
    <Text style={styles.profileEmail}>{email}</Text>
  </View>
);

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  profileEmail: {
    fontSize: 16,
    color: "#777",
  },
});

export default ProfileHeader;
