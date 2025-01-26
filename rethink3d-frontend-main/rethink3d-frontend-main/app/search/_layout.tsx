import React from "react";
import { View, StyleSheet } from "react-native";
import { Slot } from "expo-router";
import Header from "@/components/common/Header";

export default function Layout() {
  return (
    <View style={styles.view}>
      <Header />
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  view: { flex: 1 },
});
