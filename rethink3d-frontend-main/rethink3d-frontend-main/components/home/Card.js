import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Card({ item }) {
  return (
    <TouchableOpacity style={styles.card}>
      {item.promoActive && (
        <View style={styles.promoBadge}>
          <Text style={styles.promoText}>Promoção</Text>
        </View>
      )}

      <Image source={item.image} style={styles.image} />

      <Text style={styles.title}>{item.title}</Text>
      {item.oldPrice && <Text style={styles.oldPrice}>{item.oldPrice}</Text>}
      <Text style={styles.price}>{item.price}</Text>
      <Text style={styles.installment}>{item.installment}</Text>
      <Text style={styles.discount}>{item.discount}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 200,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  promoBadge: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "#979797",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    zIndex: 1,
  },
  promoText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
  },
  oldPrice: {
    fontSize: 12,
    textDecorationLine: "line-through",
    color: "#999",
    marginBottom: 2,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 2,
  },
  installment: {
    fontSize: 12,
    color: "#666",
    marginBottom: 2,
  },
  discount: {
    fontSize: 12,
    color: "#27ae60",
  },
});
