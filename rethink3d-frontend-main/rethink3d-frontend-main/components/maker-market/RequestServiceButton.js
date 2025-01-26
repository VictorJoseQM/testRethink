import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function RequestServiceButton() {
  return (
    <TouchableOpacity style={style.botaoServico}>
      <Text style={style.textoBotaoServico}>Solicitar serviço</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  botaoServico: {
    marginHorizontal: 20,
    padding: 15,
    backgroundColor: "#d9d9d9",
    alignItems: "center",
    borderRadius: 8,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: "#b3b3b3",
  },
  textoBotaoServico: { fontSize: 16, color: "#b3b3b3", fontFamily: "Roboto" },
});
