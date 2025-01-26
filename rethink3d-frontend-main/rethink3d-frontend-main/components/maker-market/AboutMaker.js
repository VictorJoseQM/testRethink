import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AboutMaker() {
  return (
    <View style={style.sobre}>
      <Text style={style.tituloSecao}>Sobre</Text>
      <Text style={style.textoSobre}>
        Sou um Maker especializado em impressão com metais. Faço desde modelagem
        até venda de itens e acessórios confeccionados para:
      </Text>
      <Text style={style.listaSobre}>• Casa</Text>
      <Text style={style.listaSobre}>• Escritório</Text>
      <Text style={style.listaSobre}>• Indústrias</Text>
    </View>
  );
}

const style = StyleSheet.create({
  sobre: { padding: 20, fontFamily: "Roboto" },
  tituloSecao: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  textoSobre: { fontSize: 14, lineHeight: 20, marginBottom: 10 },
  listaSobre: { fontSize: 14, lineHeight: 20 },
  botaoServico: {
    marginHorizontal: 20,
    padding: 15,
    backgroundColor: "#27ae60",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 20,
  },
});
