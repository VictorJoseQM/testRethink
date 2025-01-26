import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ProductDescriptionProps {
  description: string;
}

export default function ProductDescription({
  description,
}: ProductDescriptionProps) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Descrição do Produto</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    marginBottom: 10,
    marginTop: 0,
    backgroundColor: "#E5E5E5",
    borderRadius: 8,
    overflow: "hidden",
  },
  titleContainer: {
    backgroundColor: "#000",
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    padding: 12,
    fontSize: 14,
    color: "#000",
    lineHeight: 20,
  },
});
