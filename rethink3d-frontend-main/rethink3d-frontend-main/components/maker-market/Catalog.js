import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AddIcon from "@/assets/images/maker-market/AddIcon.svg";

import { Link } from "expo-router";

export default function Catalog() {
  return (
    <View style={style.catalogo}>
      <View style={style.tituloWrapper}>
        <Text style={style.tituloCatalogo}>
          Catálogo <Text style={style.sobDemanda}>sob demanda</Text>
        </Text>
        <TouchableOpacity>
          <Link href="./add-product" relativeToDirectory={true}>
            <Text>
              <AddIcon style={style.icon} />
            </Text>
          </Link>
        </TouchableOpacity>
      </View>
      <View style={style.itensCatalogo}>
        {[...Array(4)].map((_, index) => (
          <View key={index} style={style.cartaoCatalogo}>
            <Text style={style.seloPromocao}>Promoção</Text>
            <View style={style.imagemCatalogo}></View>
            <Text style={style.tituloItem}>
              Escultura Estrutura Molecular em metal
            </Text>
            <Text style={style.precoAntigo}>R$ 49,99</Text>
            <Text style={style.precoNovo}>R$ 39,99 em até 6x</Text>
            <Text style={style.desconto}>20% de desconto</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export const style = StyleSheet.create({
  catalogo: { paddingHorizontal: 20 },
  tituloWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  tituloCatalogo: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  sobDemanda: { fontSize: 14, color: "#aaa" },
  itensCatalogo: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cartaoCatalogo: {
    width: "48%",
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  seloPromocao: {
    position: "absolute",
    top: 30,
    left: 15,
    backgroundColor: "#000",
    color: "#fff",
    fontSize: 12,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
    overflow: "hidden",
    zIndex: 1,
    fontWeight: "bold",
  },
  imagemCatalogo: {
    height: 120,
    backgroundColor: "#ccc",
    borderRadius: 2,
    marginVertical: 20,
  },
  tituloItem: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  precoAntigo: {
    fontSize: 12,
    textDecorationLine: "line-through",
    color: "#aaa",
    textAlign: "center",
  },
  precoNovo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#27ae60",
    textAlign: "center",
  },
  desconto: {
    fontSize: 12,
    color: "#27ae60",
    marginTop: 5,
    textAlign: "center",
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: "#999",
    marginRight: 10,
  },
});
