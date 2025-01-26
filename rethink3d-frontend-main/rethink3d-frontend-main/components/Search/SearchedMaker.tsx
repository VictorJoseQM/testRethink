import React from "react";
import { router } from "expo-router";
import { SearchedMakerProtocol } from "@/types/interfaces/SearchProtocols";
import { TouchableHighlight, View, Text, StyleSheet } from "react-native";
import { Image } from "react-native";

export default function SearchedMaker({
  maker,
}: {
  maker: SearchedMakerProtocol;
}) {
  function pressHandler() {
    router.navigate(`/maker/${maker.id}`);
  }

  return (
    <TouchableHighlight
      style={styles.nativeWeb}
      underlayColor={"transparent"}
      onPress={pressHandler}
    >
      <View style={styles.itemContainer}>
        <View style={styles.maker}>
          <Image
            source={{ uri: maker.image }}
            style={[styles.makerImage, styles.makerImageAditional]}
          />
          <View style={styles.makerInfo}>
            <Text numberOfLines={1} style={styles.makerTitle}>
              {maker.nome}
            </Text>
            <Text numberOfLines={4} style={styles.makerDescription}>
              {maker.descricao}
            </Text>
            <View style={styles.chipsContainer}>
              {maker.servicos.map((servico) => (
                <Text
                  key={`MAKER${maker.id}-SERV:${servico}`}
                  style={styles.insideChip}
                >
                  {servico}
                </Text>
              ))}
            </View>
          </View>
        </View>
        <View style={styles.chipsContainer}>
          {maker.categorias.map((categoria) => (
            <Text
              key={`MAKER${maker.id}-CAT:${categoria}`}
              numberOfLines={1}
              style={[styles.insideChip, styles.categoryChip]}
            >
              {categoria}
            </Text>
          ))}
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  nativeWeb: { borderColor: "transparent", width: "100%" },
  itemContainer: {
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowRadius: 1,
    shadowOffset: { width: 2, height: 2 },
    borderRadius: 10,
    padding: 10,
    flex: 1,
    borderColor: "#bebebe",
    marginVertical: 5,
    elevation: 3,
    backgroundColor: "white",
  },
  maker: { display: "flex", flexDirection: "row", alignItems: "center" },
  makerImageAditional: { flexBasis: "37%" },
  makerDescription: {},
  makerImage: {
    flexBasis: "26%",
    height: "auto",
    aspectRatio: "1 / 1",
    borderRadius: 8,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowOffset: { width: 5, height: 5 },
    elevation: 2,
    backgroundColor: "white",
  },
  makerInfo: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 7,
    height: "100%",
    flex: 1,
  },
  makerTitle: {
    fontSize: 18,
    fontFamily: "Roboto_700Bold",
    color: "#414141",
    overflow: "hidden",
  },
  chipsContainer: { flexDirection: "row", marginVertical: 6, flexWrap: "wrap" },
  insideChip: {
    textAlign: "center",
    fontSize: 12,
    color: "white",
    backgroundColor: "black",
    padding: 5,
    paddingHorizontal: 8,
    borderRadius: 10,
    margin: 2,
  },
  categoryChip: {
    fontSize: 10,
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    fontWeight: 700,
    backgroundColor: "white",
    color: "black",
  },
});
