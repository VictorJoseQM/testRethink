import React from "react";
import { View, StyleSheet } from "react-native";
import Title from "./components/TitleMaker";
import Description from "./components/DescriptionMaker";

export default function MakerSelectionPage() {
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
    backgroundColor: "#000",
  },
});
