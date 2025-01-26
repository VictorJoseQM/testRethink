import React from "react";
import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";
import SingleOptionInput from "@/components/maker-market/add-product/SingleOptionInput";
import StylizedTextInput from "@/components/maker-market/add-product/StylizedTextInput";
import { Row } from "@/components/maker-market/add-product/Row";
import { Receipt } from "@/components/maker-market/add-product/Receipt";
import CategoryAdder from "@/components/maker-market/add-product/CategoryAdder";
import { ImageGrid } from "@/components/maker-market/add-product/ImageGrid";
import submit from "@/api/maker/add-product/submit";
import useInputData from "@/hooks/add-product/useInputData";
import { InputData } from "@/types/inputData";
import { ImageProps } from "@/types/imageProps";
import { router } from "expo-router";

export default function index() {
  return (
    <ScrollView style={styles.view}>
      {/* Conteúdo */}
      <View style={styles.formContainer}>
        {/* Título */}
        <Text style={styles.title}>Adicionar produto</Text>

        {/* Formulário */}
        <Form />
      </View>
    </ScrollView>
  );
}

function Form() {
  const formData = new FormData();

  const { inputData, updateField } = useInputData();

  function submitForm() {
    for (const key in inputData) {
      formData.append(key, JSON.stringify(inputData[key as keyof InputData]));
    }
    submit("/", formData);
    router.back();
  }

  return (
    <View>
      {/* Grid de Imagens */}
      <ImageGrid
        onChange={(images: ImageProps[]) => updateField("images", images)}
      />

      {/* Nome */}
      <StylizedTextInput
        title="Nome do produto"
        onValueChange={(text) => updateField("name", text)}
      />

      {/* Desc */}
      <StylizedTextInput
        title="Descrição"
        multiline={true}
        outStyles={{ textAlignVertical: "top", flex: 1 }}
        onValueChange={(desc) => updateField("desc", desc)}
      />

      {/* Dimensões */}
      <SingleOptionInput
        title="Dimensões"
        options={["Fixas", "Personalizável"]}
        onSelect={(value) => {
          if (value == "Fixas") updateField("fixedDimensions", true);
          else updateField("fixedDimensions", false);
        }}
      />

      {inputData?.fixedDimensions && (
        <View style={styles.horizontalInputs}>
          <StylizedTextInput
            title="Altura (cm)"
            keyboardType="numeric"
            onValueChange={(value) => updateField("height", Number(value))}
          />
          <StylizedTextInput
            title="Largura (cm)"
            keyboardType="numeric"
            onValueChange={(value) => updateField("width", Number(value))}
          />
        </View>
      )}

      {/* Peso */}
      <StylizedTextInput
        title="Peso (g)"
        keyboardType="numeric"
        onValueChange={(value) => updateField("weight", Number(value))}
      />

      {/* Categorias */}
      <CategoryAdder
        title="Categorias"
        options={["+ Adicionar categoria"]}
        onChange={(categorias) => updateField("categories", categorias)}
      />

      {/* Divisória */}
      <Row height={1} />

      {/* Preço */}
      <Receipt onChange={(valor) => updateField("price", valor)} />

      {/* Submit */}
      <TouchableOpacity style={styles.button} onPress={submitForm}>
        <Text style={styles.whiteText}>Adicionar produto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  view: { flex: 1, fontFamily: "Roboto" },
  formContainer: { paddingHorizontal: 20 },
  title: {
    fontSize: 32,
    marginVertical: 20,
  },
  button: {
    display: "flex",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    marginVertical: 12,
    backgroundColor: "black",
  },
  input: {
    width: "100%",
    flex: 1,
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    padding: 10,
    paddingInlineStart: 20,
    fontSize: 16,
    borderRadius: 8,
    height: 100,
    textAlignVertical: "top",
  },
  whiteText: { color: "white" },
  grid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 10,
    rowGap: 2,
  },
  cell: {
    display: "flex",
    backgroundColor: "lightgray",
    width: "32%",
    height: "auto",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: "1 / 1",
    borderRadius: 10,
    margin: 2,
  },
  cameraIcon: {
    opacity: 10,
  },
  horizontalInputs: {
    display: "flex",
    flexDirection: "row",
    width: "30%",
    gap: 10,
  },
  inactiveCell: {
    opacity: 0.1,
  },
});
