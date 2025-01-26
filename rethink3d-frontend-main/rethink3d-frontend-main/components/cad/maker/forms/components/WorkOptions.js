import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { useFormData } from "../../../context/FormDataProvider";

export default function WorkOptions({
  opcoesTrabalho,
  setOpcoesTrabalho,
  novaOpcao,
  setNovaOpcao,
}) {
  const { formData, updateFormData } = useFormData(); // Usa o contexto
  const [errorMessage, setErrorMessage] = useState("");

  // Alternar seleção de opções
  const toggleOpcao = (label) => {
    const selecionadas = new Set(formData.makerDetails?.categorias || []);
    if (selecionadas.has(label)) {
      selecionadas.delete(label); // Remove se já estiver selecionada
    } else {
      selecionadas.add(label); // Adiciona se não estiver selecionada
    }

    // Atualiza o formData com as categorias selecionadas
    updateFormData("makerDetails", {
      ...formData.makerDetails,
      categorias: Array.from(selecionadas),
    });
  };

  // Adicionar nova opção personalizada
  const adicionarOpcaoPersonalizada = () => {
    const novaOpcaoTrimmed = novaOpcao.trim();

    if (!novaOpcaoTrimmed) {
      setErrorMessage("A opção personalizada não pode estar vazia.");
      return;
    }

    if (opcoesTrabalho.includes(novaOpcaoTrimmed)) {
      setErrorMessage("Essa opção já existe.");
      return;
    }

    setOpcoesTrabalho([...opcoesTrabalho, novaOpcaoTrimmed]); // Atualizando o estado
    toggleOpcao(novaOpcaoTrimmed); // Adiciona a nova opção diretamente como selecionada
    setNovaOpcao(""); // Limpa o campo após adicionar
    setErrorMessage("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Com que você trabalha?</Text>
      <FlatList
        data={opcoesTrabalho} // Agora está recebendo a lista atualizada
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.opcaoButton,
              formData.makerDetails?.categorias?.includes(item) &&
                styles.opcaoButtonSelected,
            ]}
            onPress={() => toggleOpcao(item)}
          >
            <Text
              style={[
                styles.opcaoButtonText,
                formData.makerDetails?.categorias?.includes(item) &&
                  styles.opcaoButtonTextSelected,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.customOptionContainer}>
        <TextInput
          style={[styles.input, styles.customOptionInput]}
          placeholder="Adicionar opção personalizada"
          value={novaOpcao}
          onChangeText={(text) => {
            setNovaOpcao(text);
            setErrorMessage(""); // Limpa a mensagem de erro ao digitar
          }}
        />
        <TouchableOpacity
          style={styles.addOptionButton}
          onPress={adicionarOpcaoPersonalizada}
        >
          <Text style={styles.addOptionButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}
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
    marginBottom: 10,
    marginLeft: 10,
  },
  opcaoButton: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    marginRight: 8,
    backgroundColor: "#f9f9f9",
  },
  opcaoButtonSelected: {
    backgroundColor: "#000",
    borderColor: "#000",
  },
  opcaoButtonText: {
    fontSize: 14,
    color: "#333",
  },
  opcaoButtonTextSelected: {
    color: "#fff",
  },
  customOptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ddd",
  },
  customOptionInput: {
    marginRight: 10,
  },
  addOptionButton: {
    padding: 10,
    backgroundColor: "#000",
    borderRadius: 5,
  },
  addOptionButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    fontSize: 14,
  },
});
