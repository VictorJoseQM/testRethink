import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

export default function LoadingView() {
  return (
    <View style={styles.loadingView}>
      <LoadingComponent />
    </View>
  );
}

function LoadingComponent() {
  return (
    <ActivityIndicator color={"#5e5e5e"} size={48} style={styles.indicator} />
  );
}

const styles = StyleSheet.create({
  loadingView: { height: "100%" },
  indicator: { height: "100%" },
});
