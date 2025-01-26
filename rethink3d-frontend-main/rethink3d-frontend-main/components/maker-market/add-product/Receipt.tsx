import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import StylizedTextInput from "./StylizedTextInput";

export function Receipt({ onChange }: { onChange: (valor: number) => void }) {
  const [valor, setValor] = useState<number>(0.0);

  return (
    <View style={styles.view}>
      <StylizedTextInput
        title="Preço mínimo (R$): "
        keyboardType="numeric"
        placeholder={"0,00"}
        onValueChange={(value: string) => {
          const price = Number(value) > 0 ? Number(value) : 0;
          setValor(price);
          onChange(valor);
        }}
      />
      <View>
        <Text style={styles.checkout}>Você recebe: </Text>
        <Text style={styles.checkoutPrice}>
          R$ {(valor - valor * 0.1).toFixed(2)}
        </Text>
        <Text>(Taxa de serviço de 10%)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    gap: 10,
  },
  checkout: { fontSize: 16 },
  checkoutPrice: { fontSize: 24, fontWeight: 600 },
});
