import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useFormData } from "../../../context/FormDataProvider"; // Importando o hook de contexto

export default function NameMaker() {
  const { formData, updateFormData } = useFormData(); // Acessando o estado e a função de atualização
  const nomeInicial = formData.makerDetails?.nome || ""; // Obtendo o nome atual ou uma string vazia
  const [localNome, setLocalNome] = useState(nomeInicial); // Estado local para o nome

  // Função para atualizar o estado global no blur
  const handleBlur = () => {
    updateFormData("makerDetails", {
      ...formData.makerDetails,
      nome: localNome,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome de Apresentação</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira o nome que será exibido aos usuários"
        value={localNome}
        onChangeText={setLocalNome} // Atualiza apenas o estado local
        onBlur={handleBlur} // Envia para o formData ao sair do campo
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
});
