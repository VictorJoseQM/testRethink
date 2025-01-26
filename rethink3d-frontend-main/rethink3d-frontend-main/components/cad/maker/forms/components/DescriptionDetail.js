import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useFormData } from "../../../context/FormDataProvider"; // Importando o hook de contexto

export default function DescriptionDetail() {
  const { formData, updateFormData } = useFormData(); // Acessando o estado e a função de atualização
  const descricaoInicial = formData.makerDetails?.descricao || ""; // Obtendo a descrição inicial ou uma string vazia
  const [localDescricao, setLocalDescricao] = useState(descricaoInicial); // Estado local para a descrição

  // Função para atualizar o estado global no blur
  const handleBlur = () => {
    updateFormData("makerDetails", {
      ...formData.makerDetails,
      descricao: localDescricao,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Descreva seu serviço de forma clara e atrativa"
        value={localDescricao}
        onChangeText={setLocalDescricao} // Atualiza apenas o estado local
        onBlur={handleBlur} // Envia para o formData ao sair do campo
        multiline
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    marginLeft: 10,
  },
  input: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fff",
    alignSelf: "center",
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
});
