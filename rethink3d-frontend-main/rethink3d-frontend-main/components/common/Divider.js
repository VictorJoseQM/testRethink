import React from "react";
import { View, StyleSheet } from "react-native";
import Diviser from "../../assets/images/common/Divider.svg";

export default function Diviser() {
  return (
    <View style={styles.divisorContainer}>
      <Diviser style={styles.divisor} />
    </View>
  );
}

const styles = StyleSheet.create({
  divisorContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
