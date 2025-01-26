import React from "react";
import { Text, StyleSheet } from "react-native";

interface ProductTitleProps {
  title: string;
}

export default function ProductTitle({ title }: ProductTitleProps) {
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "400",
    color: "#333",
    marginVertical: 10,
    marginLeft: 15,
    textAlign: "left",
  },
});
