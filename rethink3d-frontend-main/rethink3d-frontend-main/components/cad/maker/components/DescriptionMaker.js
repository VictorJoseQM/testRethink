import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Description() {
  return (
    <View>
      <Text style={styles.text_1}>
        Junte-se à <Text style={styles.highlight}>Rethink3D</Text> e faça parte
        da revolução movida pelos serviços de impressão 3D.
      </Text>
      <Text style={styles.text_2}>
        {"\u2022"} Escolha entre vender suas próprias criações, oferecer
        serviços de modelagem e impressão{" "}
        <Text style={styles.highlight}> ou todos juntos!</Text>
      </Text>
      <Text style={styles.text_2}>
        {"\u2022"} Tenha em mãos o gerenciamento completo de pedidos e
        orçamentos em um só lugar
      </Text>
      <Text style={styles.text_2}>
        {"\u2022"} Amplie sua teia de clientes e feche negócios de maneira
        simples e intermediada por nós, por uma taxa de serviço que se adapta a
        você.
      </Text>
      <Text style={styles.text_1}>
        A <Text style={styles.highlight}>Rethink 3D</Text> visa conectar
        necessidades à quem possa resolvê-las:{" "}
        <Text style={styles.highlight}>você, Maker!</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text_1: {
    color: "#fff",
    fontSize: 15,
    marginLeft: 20,
    fontWeight: 300,
    marginRight: 20,
    marginBottom: 10,
  },
  text_2: {
    color: "#fff",
    fontSize: 15,
    marginLeft: 33,
    fontWeight: 300,
    marginRight: 50,
    marginBottom: 10,
  },
  highlight: {
    color: "#fff",
    fontWeight: "bold",
  },
});
