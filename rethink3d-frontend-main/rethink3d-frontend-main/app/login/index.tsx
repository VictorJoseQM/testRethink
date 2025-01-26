import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import useFonts from "@/assets/fonts/useFonts";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { AntDesign } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Logo from "@/assets/images/common/Logo.svg";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    useFonts();
  }, []);
  const handleLogin = async () => {
    try {
      const response = await fetch("http://SEU_BACKEND_URL/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const responseData = await response.json();

      if (response.ok) {
        // Login bem-sucedido
        console.log("Login bem-sucedido:", responseData);
        setErrorMessage(""); // Limpa mensagem de erro
        // redirecionar ou salvar o token de autenticação
      } else {
        // Tratamento para respostas de erro
        switch (response.status) {
          case 400:
            setErrorMessage(
              "Por favor, preencha todos os campos corretamente."
            );
            break;
          case 401:
            setErrorMessage("E-mail ou senha inválidos. Tente novamente.");
            break;
          case 500:
            setErrorMessage("Erro interno no servidor. Tente mais tarde.");
            break;
          default:
            setErrorMessage("Ocorreu um erro inesperado. Tente novamente.");
        }
      }
    } catch (error) {
      // Erro de rede ou conexão
      setErrorMessage("Erro de rede. Verifique sua conexão.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Área preta no topo com título */}
      <View style={styles.topBlackBar}>
        <Text style={styles.title}>Entre com sua conta</Text>
      </View>

      {/* Wrapper para conteúdo e footer */}
      <View style={styles.contentWrapper}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Logo */}
          <View style={styles.logoContainer}>
            <View style={styles.logoWrapper}>
              <Logo style={styles.logo} />
              <View style={styles.rethink3DWrapper}>
                <Text style={styles.rethink3D}>Rethink3D</Text>
              </View>
            </View>
          </View>

          {/* Inputs */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              placeholderTextColor="#AAAAAA"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#AAAAAA"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            {errorMessage ? (
              <Text style={styles.errorMessage}>{errorMessage}</Text>
            ) : null}

            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
            </TouchableOpacity>
          </View>

          {/* Social Login */}
          <View style={styles.socialLoginContainer}>
            <Text style={styles.socialLoginText}>Entre usando</Text>
            <View style={styles.socialIconsContainer}>
              <TouchableOpacity style={styles.iconButton}>
                <FontAwesome5 name="facebook" size={32} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <AntDesign name="google" size={32} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <FontAwesome6 name="square-x-twitter" size={32} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        {/* Footer */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.continueButton} onPress={handleLogin}>
            <Text style={styles.continueText}>Continuar</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.helpText}>Precisa de ajuda?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  topBlackBar: {
    width: "100%",
    height: 75,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    color: "#fff",
    fontWeight: "100",
    fontSize: 36,
    marginLeft: 15,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
  },
  logoContainer: {
    marginTop: 50,
    alignItems: "center",
  },
  logoWrapper: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  logo: {
    position: "absolute",
  },
  rethink3DWrapper: {
    marginTop: 150,
    zIndex: 1,
  },
  rethink3D: {
    fontSize: 32,
    fontWeight: "500",
    color: "#4e4f4f",
  },
  inputContainer: {
    width: "90%",
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    fontSize: 16,
    color: "#000",
  },
  forgotPassword: {
    alignSelf: "flex-end",
    color: "#555",
    marginBottom: 20,
  },
  socialLoginContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  socialLoginText: {
    color: "#555",
    marginBottom: 10,
    fontSize: 16,
  },
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconButton: {
    marginHorizontal: 15,
    borderRadius: 8,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "#fff",
  },
  continueButton: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    borderColor: "#6b6b6b",
    borderWidth: 1,
    elevation: 10,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    width: "90%",
    marginBottom: 20,
  },
  continueText: {
    color: "#4d4d4d",
    fontSize: 16,
    fontWeight: "300",
  },
  helpText: {
    color: "#555",
    textDecorationLine: "underline",
  },
  errorMessage: {
    color: "red",
    marginVertical: 10,
    fontSize: 14,
    textAlign: "center",
  },
});
