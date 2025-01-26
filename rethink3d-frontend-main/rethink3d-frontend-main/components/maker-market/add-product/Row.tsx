import React from "react";
import { View } from "react-native";

const style = {
  backgroundColor: "black",
  margin: 5,
  marginVertical: 10,
};

export function Row(props: { height: number }) {
  return <View style={[style, { height: props.height }]}></View>;
}
