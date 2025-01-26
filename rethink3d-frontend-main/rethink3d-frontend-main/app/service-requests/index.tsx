import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ContinueBtn from "@/components/common/ContinueBtn";
import Header from "@/components/common/Header";

export default function SolicitarServico() {
  const [selected, setSelected] = useState<string | null>(null);
  const [error, setError] = useState<string>("");

  const onToggle = (option: string) => {
    setSelected(option);
    setError(""); // Limpa o erro ao selecionar uma opção
  };

  const handleContinue = () => {
    if (!selected) {
      setError("Por favor, escolha uma das opções para continuar.");
      return;
    }
    console.log(`Opção selecionada: ${selected}`);
  };

  return (
    <View style={styles.container}>
      <Header />

      <Text style={styles.title}>Solicitar serviço</Text>

      {/* Botões de opções */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            selected === "possuo"
              ? styles.selectedButton
              : styles.unselectedButton,
          ]}
          onPress={() => onToggle("possuo")}
        >
          <Text
            style={[
              styles.buttonTitle,
              selected === "possuo"
                ? styles.selectedText
                : styles.unselectedText,
            ]}
          >
            Possuo <Text style={{ fontWeight: "bold" }}>modelo 3D</Text>
          </Text>
          <Text
            style={[
              styles.buttonDescription,
              selected === "possuo"
                ? styles.selectedText
                : styles.unselectedText,
            ]}
          >
            e quero encontrar um{" "}
            <Text style={{ fontWeight: "bold" }}>Maker</Text> que o imprima para
            mim.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            selected === "naoPossuo"
              ? styles.selectedButton
              : styles.unselectedButton,
          ]}
          onPress={() => onToggle("naoPossuo")}
        >
          <Text
            style={[
              styles.buttonTitle,
              selected === "naoPossuo"
                ? styles.selectedText
                : styles.unselectedText,
            ]}
          >
            Não possuo <Text style={{ fontWeight: "bold" }}>modelo 3D</Text>
          </Text>
          <Text
            style={[
              styles.buttonDescription,
              selected === "naoPossuo"
                ? styles.selectedText
                : styles.unselectedText,
            ]}
          >
            e quero encontrar um{" "}
            <Text style={{ fontWeight: "bold" }}>Maker</Text> que modele e
            imprima{" "}
            <Text style={{ fontWeight: "bold" }}>
              a partir de uma descrição.
            </Text>
          </Text>
        </TouchableOpacity>
      </View>

      {/* Mensagem adicional abaixo dos botões */}
      <Text style={styles.additionalText}>
        Você também pode solicitar serviços diretamente na página do Maker.{" "}
      </Text>
      <Text style={styles.linkText}>Saiba mais</Text>

      {/* Texto informativo e botão "Continuar" */}
      <View style={styles.footer}>
        <Text style={styles.infoText}>
          Um modelo 3D é um arquivo com dados gráficos da peça a ser impressa.
        </Text>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <ContinueBtn onPress={handleContinue} isComplete={!!selected} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 36,
    fontWeight: "300",
    marginBottom: 20,
    marginLeft: 20,
    textAlign: "left",
  },
  optionsContainer: {
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  button: {
    borderRadius: 10,
    padding: 18,
    marginBottom: 15,
    width: "100%",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  selectedButton: {
    backgroundColor: "#000",
  },
  unselectedButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  buttonTitle: {
    fontSize: 32,
    marginBottom: 5,
    fontWeight: "300",
  },
  buttonDescription: {
    fontSize: 14,
  },
  selectedText: {
    color: "#fff",
  },
  unselectedText: {
    color: "#000",
  },
  additionalText: {
    fontSize: 15,
    color: "#666",
    textAlign: "center",
    marginLeft: 20,
    marginRight: 20,
  },
  linkText: {
    fontSize: 15,
    color: "#000",
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 7,
  },
  footer: {
    marginTop: "auto",
    alignItems: "center",
  },
  infoText: {
    fontSize: 14,
    color: "#000",
    textAlign: "center",
    marginBottom: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
    textAlign: "center",
  },
});
