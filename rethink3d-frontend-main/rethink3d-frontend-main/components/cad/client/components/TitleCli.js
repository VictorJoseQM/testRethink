import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Title() {
  return (
    <View>
      <Text style={styles.title}>Perfil</Text>
      <Text style={styles.subtitle}>Cliente</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#000",
    fontSize: 36,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
  },
  subtitle: {
    color: "#000",
    fontSize: 64,
    fontWeight: "bold",
    marginLeft: 20,
  },
});
