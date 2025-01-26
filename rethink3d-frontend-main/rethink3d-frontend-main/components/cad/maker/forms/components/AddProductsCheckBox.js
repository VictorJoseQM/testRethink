import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

export default function CheckBoxProducts() {
  const [adicionarProdutos, setAdicionarProdutos] = useState(false);

  return (
    <View style={styles.checkboxContainer}>
      <Switch value={adicionarProdutos} onValueChange={setAdicionarProdutos} />
      <Text style={styles.checkboxLabel}>
        Quero adicionar produtos/serviços agora!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 14,
    color: "#000",
  },
});
