import React from "react";
import { SearchedProductProtocol } from "@/types/interfaces/SearchProtocols";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { Image } from "react-native";
import { router } from "expo-router";

export default function SearchedProduct({
  product,
}: {
  product: SearchedProductProtocol;
}) {
  const valorFinal = (
    product.preco -
    (product.preco * (product.desconto || 0)) / 100
  ).toFixed(2);

  function pressHandler() {
    router.navigate(`/_sitemap`);
  }

  return (
    <TouchableHighlight
      style={styles.nativeWeb}
      underlayColor={"transparent"}
      onPress={pressHandler}
    >
      <View style={styles.product}>
        <Image
          source={{
            uri: product.image,
          }}
          style={styles.productImage}
        />
        <View style={styles.productInfo}>
          <Text numberOfLines={1} style={styles.productTitle}>
            {product.nome}
          </Text>
          <Text style={styles.productAditionalText}>
            R$ {product.preco} em até {product.parcelasMax}x ou
          </Text>
          <Text style={styles.productPrice}>
            <Text style={styles.priceDestaque}>R${valorFinal}</Text> à vista
          </Text>
          {product.desconto && (
            <Text style={styles.productDiscount}>
              ({product.desconto}% de desconto)
            </Text>
          )}
        </View>
        {/* REGRA DE NEGÓCIO - remover */}
        {product.desconto! >= 40 && (
          <Text style={styles.promoChip}>PROMOÇÃO</Text>
        )}
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  nativeWeb: { borderColor: "transparent", width: "100%" },
  product: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
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
  productImage: {
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
  productInfo: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 7,
    height: "100%",
    flex: 1,
  },
  productTitle: {
    fontSize: 18,
    fontFamily: "Roboto_700Bold",
    color: "#414141",
    overflow: "hidden",
  },
  productAditionalText: {
    color: "#747474",
  },
  productPrice: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "#747474",
  },
  priceDestaque: {
    fontFamily: "Roboto_700Bold",
    color: "black",
    fontSize: 18,
  },
  productDiscount: {
    color: "#509656",
  },
  promoChip: {
    fontFamily: "Roboto_100Thin",
    position: "absolute",
    bottom: 0,
    right: 0,
    color: "white",
    backgroundColor: "black",
    padding: 8,
    borderRadius: 10,
    zIndex: 1,
  },
});
