import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ContinueBtn from "../../../common/ContinueBtn";
import { useFormData } from "../../context/FormDataProvider";

export default function ProfileMakerForm({ onContinue }) {
  const { updateFormData } = useFormData();
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(""); // Estado para a mensagem de erro

  const onToggle = (option) => {
    setSelected(option);
    setError(""); // Limpa o erro ao selecionar uma opção
  };

  const handleContinue = () => {
    if (!selected) {
      setError("Por favor, escolha uma das opções para continuar."); // Define a mensagem de erro
      return;
    }
    // Atualiza o contexto com a escolha do tipo de Maker
    updateFormData("makerType", selected);
    onContinue();
  };

  const isComplete = selected;

  return (
    <View style={styles.form}>
      <Text style={styles.sectionTitle}>"Eu quero..."</Text>

      {/* Opção "Vender" */}
      <TouchableOpacity
        style={[
          styles.button,
          selected === "vender"
            ? styles.selectedButton
            : styles.unselectedButton,
        ]}
        onPress={() => onToggle("vender")}
      >
        <Text
          style={[
            styles.buttonTitle,
            selected === "vender" ? styles.selectedText : styles.unselectedText,
          ]}
        >
          Vender
        </Text>
        <Text
          style={[
            styles.buttonDescription,
            selected === "vender" ? styles.selectedText : styles.unselectedText,
          ]}
        >
          e catalogar meus produtos e criações advindos da tecnologia de
          impressão 3D.
        </Text>
      </TouchableOpacity>

      {/* Opção "Modelar" */}
      <TouchableOpacity
        style={[
          styles.button,
          selected === "modelar"
            ? styles.selectedButton
            : styles.unselectedButton,
        ]}
        onPress={() => onToggle("modelar")}
      >
        <Text
          style={[
            styles.buttonTitle,
            selected === "modelar"
              ? styles.selectedText
              : styles.unselectedText,
          ]}
        >
          Modelar
        </Text>
        <Text
          style={[
            styles.buttonDescription,
            selected === "modelar"
              ? styles.selectedText
              : styles.unselectedText,
          ]}
        >
          e receber pedidos referentes à modelagem 3D de maneira personalizada
          pelos meus clientes.
        </Text>
      </TouchableOpacity>

      {/* Opção "Ambos" */}
      <TouchableOpacity
        style={[
          styles.button,
          selected === "ambos"
            ? styles.selectedButton
            : styles.unselectedButton,
        ]}
        onPress={() => onToggle("ambos")}
      >
        <Text
          style={[
            styles.buttonTitle,
            selected === "ambos" ? styles.selectedText : styles.unselectedText,
          ]}
        >
          Ambos!
        </Text>
        <Text
          style={[
            styles.buttonDescription,
            selected === "ambos" ? styles.selectedText : styles.unselectedText,
          ]}
        >
          Quero vender e catalogar meus produtos na plataforma, além de oferecer
          serviços de modelagem e impressão personalizados.
        </Text>
      </TouchableOpacity>

      {/* Exibe mensagem de erro, se houver */}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <View style={styles.footer}>
        <Text style={styles.info}>
          Seu <Text style={styles.highlight}>Perfil Maker</Text> poderá ser
          alterado posteriormente em ‘Configurações de Conta’.
        </Text>

        <ContinueBtn onPress={handleContinue} isComplete={isComplete} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 36,
    fontWeight: "300",
    marginBottom: 30,
    color: "#000",
    alignSelf: "flex-start",
    marginLeft: 30,
  },
  button: {
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    width: "90%",
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
    fontWeight: "300",
    marginBottom: 5,
    fontWeight: "bold",
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
  footer: {
    marginTop: "auto",
    alignItems: "center",
    width: "100%",
    paddingBottom: 10,
  },
  info: {
    fontSize: 13,
    color: "#000",
    textAlign: "center",
    marginBottom: 20,
    width: "85%",
    lineHeight: 16,
    fontWeight: "300",
  },
  highlight: {
    fontWeight: "900",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 10,
    alignSelf: "center",
  },
});
