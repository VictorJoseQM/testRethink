import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import ContinueBtn from "../../common/ContinueBtn";
import { useFormData } from "../context/FormDataProvider";

export default function Buttons({ onContinue, onTypeChange, selectedType }) {
  const { formData, updateFormData } = useFormData();
  const [localSelectedType, setLocalSelectedType] = useState(
    selectedType || "cliente"
  );

  // Sincronizar o estado local com estado global (formData) quando o componente for montado
  useEffect(() => {
    if (formData.userType) {
      setLocalSelectedType(formData.userType);
    }
  }, [formData.userType]);

  useEffect(() => {
    // Atualizar o estado local quando o selectedType mudar
    if (selectedType) {
      setLocalSelectedType(selectedType);
    }
  }, [selectedType]);

  const handleSelection = (type) => {
    setLocalSelectedType(type);
    if (onTypeChange) onTypeChange(type); // Informa o tipo selecionado
  };

  const handleContinue = () => {
    if (localSelectedType) {
      updateFormData("userType", localSelectedType); // Atualiza o formData
    }
    if (localSelectedType === "cliente" || "maker") {
      // Limpar dados
      updateFormData("authData", undefined);
      updateFormData("personalData", undefined);
      updateFormData("addressData", undefined);
      updateFormData("makerType", undefined);
      updateFormData("makerDetails", undefined);
    }
    onContinue(); // Avança para o próximo passo
  };

  return (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity
        style={[
          styles.button,
          localSelectedType === "cliente"
            ? styles.selectedButton
            : styles.unselectedButton,
        ]}
        onPress={() => handleSelection("cliente")}
      >
        <Text
          style={[
            styles.buttonTitle,
            localSelectedType === "cliente"
              ? styles.selectedTitle
              : styles.unselectedTitle,
          ]}
        >
          Sou um <Text style={styles.highlight}>Cliente</Text>
        </Text>
        <Text
          style={[
            styles.buttonDescription,
            localSelectedType === "cliente"
              ? styles.selectedDescription
              : styles.unselectedDescription,
          ]}
        >
          e quero descobrir de quais maneiras a impressão 3D pode mudar minha
          vida. 😜
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          localSelectedType === "maker"
            ? styles.selectedButton
            : styles.unselectedButton,
        ]}
        onPress={() => handleSelection("maker")}
      >
        <Text
          style={[
            styles.buttonTitle,
            localSelectedType === "maker"
              ? styles.selectedTitle
              : styles.unselectedTitle,
          ]}
        >
          Quero ser um <Text style={styles.highlight}>Maker!</Text>
        </Text>
        <Text
          style={[
            styles.buttonDescription,
            localSelectedType === "maker"
              ? styles.selectedDescription
              : styles.unselectedDescription,
          ]}
        >
          e oferecer produtos, suporte ou serviços de impressão 3D. 🔧
        </Text>
      </TouchableOpacity>

      <ContinueBtn onPress={handleContinue} isComplete={!!localSelectedType} />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    borderColor: "#d9d9d9",
    borderWidth: 3,
    elevation: 10,
    shadowColor: "#FFF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    paddingTop: 20,
  },
  button: {
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    borderWidth: 3,
    width: "90%",
    elevation: 5,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  selectedButton: {
    backgroundColor: "#000",
  },
  unselectedButton: {
    backgroundColor: "#fff",
    borderColor: "#fff",
  },
  buttonTitle: {
    fontSize: 32,
    fontWeight: "300",
    marginBottom: 5,
  },
  selectedTitle: {
    color: "#fff",
  },
  unselectedTitle: {
    color: "#000",
  },
  buttonDescription: {
    fontSize: 14,
    fontWeight: "300",
  },
  selectedDescription: {
    color: "#fff",
  },
  unselectedDescription: {
    color: "#000",
  },
  highlight: {
    fontWeight: "bold",
  },
});
