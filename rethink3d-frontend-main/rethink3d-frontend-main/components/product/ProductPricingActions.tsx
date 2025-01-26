import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface ProductPricingActionsProps {
  oldPrice: string;
  currentPrice: string;
  discount: string;
  installments: string;
  onBuyNow: () => void;
  onAddToCart: () => void;
}

export default function ProductPricingActions({
  oldPrice,
  currentPrice,
  discount,
  installments,
  onBuyNow,
  onAddToCart,
}: ProductPricingActionsProps) {
  return (
    <View style={styles.container}>
      <View style={styles.contentRow}>
        <View style={styles.pricing}>
          <Text style={styles.oldPrice}>{oldPrice}</Text>
          <Text style={styles.currentPrice}>{currentPrice}</Text>
          <Text style={styles.installments}>{installments}</Text>
          <Text style={styles.discount}>{discount}</Text>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.buyNowButton} onPress={onBuyNow}>
            <Text style={styles.buyNowText}>Comprar agora</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={onAddToCart}
          >
            <Text style={styles.addToCartText}>Adicionar ao carrinho</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#fff" },
  contentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  pricing: { flex: 1, marginRight: 16 },
  oldPrice: { textDecorationLine: "line-through", color: "#888", fontSize: 14 },
  currentPrice: { fontSize: 24, fontWeight: "bold", color: "#000" },
  installments: { fontSize: 14, color: "#000" },
  discount: { fontSize: 12, color: "green" },
  actions: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  buyNowButton: {
    backgroundColor: "#000",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 8,
    alignItems: "center",
    width: 180,
  },
  buyNowText: { color: "#fff", fontWeight: "bold", fontSize: 14 },
  addToCartButton: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
    width: 180,
  },
  addToCartText: { color: "#000", fontWeight: "bold", fontSize: 14 },
});
