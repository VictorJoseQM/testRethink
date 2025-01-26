import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { LinkProps, router } from "expo-router";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ChangeSectionButton(props: LinkProps) {
  return (
    <TouchableOpacity
      style={styles.changeButton}
      onPress={() => {
        router.navigate(props.href);
      }}
    >
      <Text style={styles.moreResults}>
        VER MAIS <AntDesign name="arrowright" size={16} />
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  moreResults: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Roboto_100Thin",
    marginVertical: 10,
    textAlign: "center",
    color: "white",
  },
  changeButton: {
    backgroundColor: "black",
    borderRadius: 10,
    marginVertical: 5,
    paddingHorizontal: "16%",
    width: "auto",
    alignSelf: "flex-end",
  },
});
