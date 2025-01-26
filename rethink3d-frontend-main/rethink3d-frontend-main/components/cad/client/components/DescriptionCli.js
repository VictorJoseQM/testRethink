import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Description() {
  return (
    <View>
      <Text style={styles.text_1}>
        Explore os catálogos de produtos oferecidos pela{" "}
        <Text style={styles.highlight}>Rethink3D</Text> ou inove com sua própria
        ideia e conheça o que há de melhor que a{" "}
        <Text style={styles.highlight}>impressão 3D</Text> tem a oferecer:
      </Text>
      <Text style={styles.text_2}>
        {"\u2022"} Descreva e peça seus próprios produtos personalizados
        diretamente aos <Text style={styles.highlight}>Makers</Text> parceiros.
      </Text>
      <Text style={styles.text_2}>
        {"\u2022"} Explore categorias diversas em nosso catálogo, de acordo com
        suas necessidades.
      </Text>
      <Text style={styles.text_2}>
        {"\u2022"} Tenha à mão todo o poder da tecnologia de impressão e
        modelagem 3D sem depender de equipamento algum.
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
    color: "#000",
    fontSize: 15,
    marginLeft: 20,
    fontWeight: 300,
    marginRight: 20,
    marginBottom: 10,
  },
  text_2: {
    color: "#000",
    fontSize: 15,
    marginLeft: 33,
    fontWeight: 300,
    marginRight: 50,
    marginBottom: 10,
  },
  highlight: {
    color: "#000",
    fontWeight: "bold",
  },
});
