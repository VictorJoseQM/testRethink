import React from "react";
import { View, StyleSheet } from "react-native";
import Title from "./components/TitleCli";
import Description from "./components/DescriptionCli";

export default function ClientSelectionPage() {
  return (
    <View style={styles.container}>
      <Title />
      <Description />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "#fff",
  },
});
