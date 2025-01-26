import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

type OptionProps = {
  title: string;
  options: string[];
  height?: number;
  outStyles?: any;
  onSelect?: (value: string | number) => void;
};

export default function SingleOptionInput({ ...props }: OptionProps) {
  type Options = typeof props.options;
  const [selectedOption, setSelectedOption] = useState<Options[number]>(
    props.options[0]
  );

  return (
    <View style={styles.view}>
      <Text style={styles.inputTitle}>{props.title}</Text>
      <View style={styles.categories}>
        {props.options &&
          props.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.pressable]}
              onPress={() => {
                setSelectedOption(option);
                props.onSelect && props.onSelect(option);
              }}
            >
              <Text
                style={[
                  styles.categoryInput,
                  selectedOption == option && styles.selectedOption,
                ]}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    display: "flex",
    flexDirection: "column",
  },
  inputTitle: {
    fontSize: 16,
    fontWeight: 500,
  },
  categories: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  pressable: {
    width: "auto",
    margin: 3,
  },
  categoryInput: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    borderRadius: 10,
    fontWeight: 600,
  },
  selectedOption: {
    backgroundColor: "black",
    color: "white",
  },
});
