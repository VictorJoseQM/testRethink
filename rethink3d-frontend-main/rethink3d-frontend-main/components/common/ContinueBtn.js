import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ContinueBtn({ onPress, isComplete }) {
  return (
    <TouchableOpacity
      style={[
        styles.continueButton,
        isComplete ? styles.enabledButton : styles.disabledButton,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.continueText,
          isComplete ? styles.enabledText : styles.disabledText,
        ]}
      >
        Continuar
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  continueButton: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    elevation: 10,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    width: "90%",
    marginBottom: 20,
  },
  enabledButton: {
    backgroundColor: "#000",
    borderColor: "#000",
    shadowColor: "#fff",
  },
  disabledButton: {
    backgroundColor: "#FFF",
    borderColor: "#000",
    shadowColor: "#000",
  },
  continueText: {
    fontSize: 16,
    fontWeight: "500",
  },
  enabledText: {
    color: "#FFF",
  },
  disabledText: {
    color: "#000",
  },
});
