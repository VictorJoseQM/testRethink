import React, { useState } from "react";
import { Text, View, StyleSheet, Modal } from "react-native";
import { TouchableOpacity } from "react-native";
import StylizedTextInput from "./StylizedTextInput";
import { useCategories } from "@/hooks/add-product/useCategories";

type CategoryProps = {
  title: string;
  options: string[];
  height?: number;
  outStyles?: any;
  onChange?: (values: string[]) => void;
};

type Categoria = string;

export default function CategoryAdder({ ...props }: CategoryProps) {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const { categories, addCategory, removeCategory } = useCategories();

  return (
    <View style={styles.view}>
      <Text style={styles.inputTitle}>{props.title}</Text>
      <View style={styles.categories}>
        {categories &&
          categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[styles.pressable]}
              onPress={() => {
                const newCategories = removeCategory(category);
                if (props.onChange) props.onChange(newCategories);
              }}
            >
              <Text style={[styles.categoryInput]}>{category}</Text>
            </TouchableOpacity>
          ))}
        <TouchableOpacity
          style={[styles.pressable]}
          onPress={() => {
            setModalActive(!modalActive);
          }}
        >
          <Text style={[styles.categoryInput, { opacity: 0.6 }]}>
            + Adicionar Categoria
          </Text>
        </TouchableOpacity>
      </View>
      {modalActive && (
        <InputCategoryModal
          categories={categories}
          onAdd={(value) => {
            const newCategories = addCategory(value);
            if (props.onChange) props.onChange(newCategories);
            setModalActive(false);
          }}
        />
      )}
    </View>
  );
}

function InputCategoryModal(props: {
  categories: string[];
  onAdd: (value: string) => void;
}) {
  const [inputText, setInputText] = useState<string>("");
  return (
    <Modal transparent={true} animationType="slide">
      <View style={styles.outView}>
        <View style={styles.innerView}>
          <StylizedTextInput
            title="Nova categoria"
            value={inputText}
            onValueChange={(value) => {
              setInputText(value);
            }}
          ></StylizedTextInput>
          <Text>{props.categories.join(", ")}.</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setInputText("");
              props.onAdd(inputText);
            }}
          >
            <Text style={styles.whiteText}>Adicionar categoria</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  outView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#00000075",
    padding: 20,
  },
  innerView: {
    backgroundColor: "white",
    width: "100%",
    padding: "10%",
    borderRadius: 20,
  },
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
    width: "100%",
  },
  pressable: {
    margin: 3,
    width: "auto",
  },
  categoryInput: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    borderRadius: 10,
    fontWeight: 600,
    width: "100%",
  },
  selectedOption: {
    backgroundColor: "black",
    color: "white",
  },
  whiteText: { color: "white" },
  checkout: {
    fontSize: 16,
  },
  button: {
    display: "flex",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    marginVertical: 12,
    backgroundColor: "black",
  },
});
