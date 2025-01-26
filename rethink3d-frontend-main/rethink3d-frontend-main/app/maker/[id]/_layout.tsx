import React from "react";
import { Slot } from "expo-router";
import { StyleSheet, View } from "react-native";
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
