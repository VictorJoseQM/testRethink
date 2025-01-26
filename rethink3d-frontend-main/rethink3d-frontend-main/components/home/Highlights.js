import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Cartao from "./Card";
import Cart from "../../assets/images/home/CartIcon.svg";

export default function Highlights({ items }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Destaques</Text>
        <Cart />
      </View>
      <FlatList
        data={items}
        renderItem={({ item }) => <Cartao item={item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 10,
    marginRight: 0,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0000008E",
    marginRight: 8,
  },
  flatListContent: {
    gap: 10,
  },
});
