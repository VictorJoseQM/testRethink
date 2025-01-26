import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import ContinueBtn from "../../common/ContinueBtn";
import { useFormData } from "../context/FormDataProvider";

export default function AuthForm({ onContinue }) {
  const { updateFormData } = useFormData(); // Hook para acessar o contexto
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "O campo email é obrigatório.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Insira um email válido.";
    }

    if (!password) {
      newErrors.password = "O campo senha é obrigatório.";
    } else if (password.length < 8) {
      newErrors.password = "A senha deve ter pelo menos 8 caracteres.";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "O campo de confirmação é obrigatório.";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "As senhas não coincidem.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (handleValidation()) {
      updateFormData("authData", { email, password });
      onContinue();
    }
  };

  const isComplete = email && password && confirmPassword;

  return (
    <View style={styles.form}>
      <Text style={styles.sectionTitle}>Autenticação</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        placeholderTextColor="#000"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholderTextColor="#000"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      {errors.password && (
        <Text style={styles.errorText}>{errors.password}</Text>
      )}

      <Text style={styles.label}>Confirme a Senha</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholderTextColor="#000"
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      {errors.confirmPassword && (
        <Text style={styles.errorText}>{errors.confirmPassword}</Text>
      )}

      <View style={styles.footer}>
        <Text style={styles.info}>
          A Rethink3D poderá entrar em contato através desse e-mail. Para
          cancelar comunicações, acesse 'Configurações'.
        </Text>
        {/* Passa `isComplete` como prop para o botão */}
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
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 30,
    color: "#000",
    alignSelf: "flex-start",
    marginLeft: 30,
  },
  label: {
    width: "85%",
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 5,
    color: "#000",
  },
  input: {
    width: "85%",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    fontSize: 16,
    marginBottom: 10,
    color: "#000",
    paddingVertical: 5,
    paddingLeft: 10,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    alignSelf: "flex-start",
    marginLeft: "7.5%",
    marginBottom: 10,
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
});
