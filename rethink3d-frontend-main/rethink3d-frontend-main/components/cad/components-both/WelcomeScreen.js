import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { useFormData } from "../context/FormDataProvider"; // Importa o hook para acessar o FormData

export default function WelcomeScreen() {
  const { formData } = useFormData(); // Acessa os dados do formulário a partir do contexto

  // Obtém o nome completo do usuário (nome + sobrenome) a partir dos dados pessoais
  const fullName = formData.personalData
    ? `${formData.personalData.firstName} ${formData.personalData.lastName}`
    : "Usuário";

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Bem-vindo, <Text style={styles.bold}>{fullName}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 36,
    color: "#000",
    textAlign: "center",
    fontWeight: "300",
  },
  bold: {
    fontWeight: "bold",
  },
});
