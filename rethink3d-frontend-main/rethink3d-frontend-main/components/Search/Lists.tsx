import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  SearchedMakerProtocol,
  SearchedProductProtocol,
} from "@/types/interfaces/SearchProtocols";
import SearchedProduct from "./SearchedProduct";
import SearchedMaker from "./SearchedMaker";

export function ProductList({
  products,
  hasTitle,
}: {
  products: SearchedProductProtocol[];
  hasTitle?: boolean;
}) {
  return (
    <View>
      {hasTitle && <Text style={styles.sectionTitle}>Produtos</Text>}
      {products.map((product) => (
        <SearchedProduct key={product.id} product={product}></SearchedProduct>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
    color: "#494949",
  },
});

export function MakerList({
  makers,
  hasTitle,
}: {
  makers: SearchedMakerProtocol[];
  hasTitle?: boolean;
}) {
  return (
    <View>
      {hasTitle && <Text style={styles.sectionTitle}>Makers</Text>}
      {makers.map((maker) => (
        <SearchedMaker key={maker.id} maker={maker} />
      ))}
    </View>
  );
}
