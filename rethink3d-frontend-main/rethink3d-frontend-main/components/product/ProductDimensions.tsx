import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Dimension {
  label: string;
  value: string;
}

interface ProductDimensionsProps {
  dimensions: Dimension[];
}

export default function ProductDimensions({
  dimensions,
}: ProductDimensionsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📏 Dimensões</Text>
      <View style={styles.dimensionsContainer}>
        {dimensions.map((dimension, index) => (
          <View key={index} style={styles.dimensionBoxContainer}>
            <View style={styles.dimensionBox}>
              <Text style={styles.label}>{dimension.label}</Text>
            </View>
            <Text style={styles.value}>{dimension.value}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    padding: 16,
    marginTop: 15,
  },
  title: { color: "#fff", fontSize: 16, fontWeight: "bold", marginBottom: 8 },
  dimensionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  dimensionBoxContainer: {
    alignItems: "center",
    margin: 4,
  },
  dimensionBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  label: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  value: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
    marginTop: 4, // Espaçamento entre a caixa e o valor
  },
});
