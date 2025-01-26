import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import ImgBack from "@/assets/images/auth/Background.svg";

export default function index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Texto principal */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          A <Text style={styles.rethink3d}>Rethink3D</Text>
        </Text>
        <Text style={styles.subtitle}>
          conecta suas necessidades às nossas soluções.
        </Text>
      </View>

      {/* Imagem do fundo */}
      <ImgBack style={styles.image} />

      {/* Botões */}
      <View style={styles.lowContainer}>
        <TouchableOpacity style={styles.buttonPrimary}>
          <Text style={styles.buttonText}>Já possuo uma conta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSecondary}>
          <Text style={styles.buttonSecondaryText}>Criar uma conta</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.guestText}>Acessar como visitante</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "space-between",
  },
  textContainer: {
    alignItems: "flex-start",
    marginHorizontal: 20,
    marginTop: 70,
  },
  title: {
    fontSize: 48,
    fontWeight: "black",
    color: "#FFF",
  },
  rethink3d: {
    fontSize: 48,
    fontWeight: "700",
    color: "#FFF",
  },
  subtitle: {
    fontWeight: "300",
    fontSize: 48,
    color: "#FFFF",
    lineHeight: 40,
  },
  image: {
    position: "absolute",
    height: 800,
    left: 10,
  },
  lowContainer: {
    alignItems: "center",
    backgroundColor: "#fff",
    height: 250,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  buttonPrimary: {
    backgroundColor: "#000",
    paddingVertical: 15,
    width: "88%",
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
    borderWidth: 2,
    marginTop: 30,
  },
  buttonSecondary: {
    backgroundColor: "#FFF",
    paddingVertical: 15,
    width: "88%",
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
    borderWidth: 2,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "500",
    fontSize: 15,
  },
  buttonSecondaryText: {
    color: "#000",
    fontWeight: "500",
    fontSize: 15,
  },
  guestText: {
    paddingTop: 30,
  },
});
