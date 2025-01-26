import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

export default function HeaderBar() {
  return (
    <View style={styles.view}>
      <TextInput
        style={styles.input}
        placeholder="Sua próxima ideia..."
      ></TextInput>
      <Ionicons name="search" size={24} color={"black"} />
      <FontAwesome name="user-circle" size={24} color={"black"} />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    padding: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    padding: 10,
    paddingInlineStart: 20,
    fontSize: 16,
    borderRadius: 20,
  },
});
