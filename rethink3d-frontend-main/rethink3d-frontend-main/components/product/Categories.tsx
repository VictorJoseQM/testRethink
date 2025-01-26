import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface CategoriesProps {
  categories: string[];
}

export default function Categories({ categories }: CategoriesProps) {
  return (
    <View style={styles.container}>
      {categories.map((category, index) => (
        <TouchableOpacity key={index} style={styles.categoryButton}>
          <Text style={styles.categoryText}>{category}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 10,
    justifyContent: "flex-start",
  },
  categoryButton: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: "#000",
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
});
