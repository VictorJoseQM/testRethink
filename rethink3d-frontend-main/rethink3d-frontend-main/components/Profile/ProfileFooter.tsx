import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

interface ProfileFooterProps {
  onLogoutPress: () => void;
  onDeletePress: () => void;
}

const ProfileFooter: React.FC<ProfileFooterProps> = ({
  onLogoutPress,
  onDeletePress,
}) => (
  <View style={styles.footer}>
    <TouchableOpacity>
      <Text style={styles.makerText}>
        Quero ser um <Text style={{ fontWeight: "bold" }}>Maker!</Text>
      </Text>
    </TouchableOpacity>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.actionButton} onPress={onLogoutPress}>
        <Text style={styles.actionButtonText}>Sair</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.actionButtonDelete}
        onPress={onDeletePress}
      >
        <Text style={styles.actionButtonTextDelete}>Excluir conta</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 15,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  makerText: {
    fontSize: 18,
    fontWeight: "400",
    color: "#000",
    marginBottom: 100,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  actionButton: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "45%",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#000",
  },
  actionButtonDelete: {
    padding: 15,
    backgroundColor: "#000",
    borderRadius: 10,
    width: "45%",
    alignItems: "center",
    borderColor: "#000",
    borderWidth: 2,
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  actionButtonTextDelete: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default ProfileFooter;
