import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Profile({
  nome,
  etiquetas,
  dataAdesao,
  avaliacao,
  SvgImagem,
}) {
  return (
    <View style={styles.perfil}>
      {/* Imagem de Perfil */}
      <View style={styles.imagemPerfilContainer}>
        {SvgImagem ? (
          <SvgImagem width={80} height={80} style={styles.imagemPerfil} />
        ) : (
          <View style={styles.imagemPlaceholder}></View>
        )}
      </View>
      <Text style={styles.nomePerfil}>{nome}</Text>
      <View style={styles.etiquetas}>
        {etiquetas.map((etiqueta, index) => (
          <Text
            key={etiqueta}
            style={[
              styles.etiqueta,
              index < 2 ? styles.etiquetaPreta : styles.etiquetaCinza,
            ]}
          >
            {etiqueta}
          </Text>
        ))}
      </View>
      <Text style={styles.dataAdesao}>{dataAdesao}</Text>
      <View style={styles.avaliacao}>
        {[...Array(avaliacao)].map((_, index) => (
          <Text key={index} style={styles.estrela}>
            ★
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  perfil: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    margin: 16,
    marginTop: 0,
    borderWidth: 1,
    borderColor: "#dfe6e9",
    fontFamily: "300",
  },
  imagemPerfilContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: "hidden",
  },
  imagemPerfil: {
    width: "100%",
    height: "100%",
  },
  imagemPlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: "#ccc",
    borderRadius: 40,
  },
  nomePerfil: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
  etiquetas: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 10,
  },
  etiqueta: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    margin: 5,
  },
  etiquetaPreta: {
    backgroundColor: "#333",
    color: "#fff",
  },
  etiquetaCinza: {
    backgroundColor: "#dfe6e9",
    color: "#000",
  },
  dataAdesao: { fontSize: 12, color: "#aaa", marginVertical: 5 },
  avaliacao: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  estrela: {
    color: "#ffcc00",
    marginHorizontal: 2,
  },
});
