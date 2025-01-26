import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header({ title, onBack }) {
  const renderTitle = () => {
    const parts = title.split(/(Maker)/);
    return parts.map((part, index) =>
      part === "Maker" ? (
        <Text key={index} style={styles.bold}>
          {part}
        </Text>
      ) : (
        <Text key={index} style={styles.title}>
          {part}
        </Text>
      )
    );
  };

  return (
    <View style={styles.headerContainer}>
      {onBack && (
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      )}
      <Text
        style={[
          styles.container,
          { marginLeft: onBack ? 10 : 25 }, // Ajusta dinamicamente a margem
        ]}
      >
        {renderTitle()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  backButton: {
    marginLeft: 15,
    marginRight: 10,
  },
  container: {
    fontSize: 36,
    color: "#fff",
    fontWeight: "300",
  },
  bold: {
    fontWeight: "bold",
  },
  title: {
    fontWeight: "300",
  },
});
