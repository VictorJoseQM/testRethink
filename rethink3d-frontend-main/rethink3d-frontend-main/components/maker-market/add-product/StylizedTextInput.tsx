import React from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
} from "react-native";

type StylizedTextInputProps = {
  title: string;
  placeholder?: string;
  height?: number;
  multiline?: boolean;
  outStyles?: any;
  keyboardType?: KeyboardTypeOptions;
  onValueChange?: (value: string) => void;
  value?: string;
};

export default function StylizedTextInput({
  ...props
}: StylizedTextInputProps) {
  return (
    <View style={styles.view}>
      <Text style={styles.inputTitle}>{props.title}</Text>
      <TextInput
        value={props.value}
        keyboardType={props.keyboardType ?? "default"}
        style={[styles.input, props.outStyles]}
        placeholder={props.placeholder ?? undefined}
        multiline={props.multiline ?? false}
        onChangeText={(text) => {
          if (props.onValueChange) {
            props.onValueChange(text);
          }
        }}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    display: "flex",
    flexDirection: "column",
  },

  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    padding: 10,
    paddingInlineStart: 20,
    fontSize: 16,
    borderRadius: 8,
  },
  inputTitle: {
    fontSize: 16,
    fontWeight: 500,
  },
});
