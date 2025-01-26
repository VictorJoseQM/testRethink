import React, { useEffect } from "react";
import { StyleSheet, ScrollView, Image } from "react-native";
import useFonts from "@/assets/fonts/useFonts";
import Destaques from "@/components/home/Highlights";
import Categorias from "@/components/home/Categories";
import MakerProfile from "@/components/home/MakersProfiles";

export default function Index() {
  useEffect(() => {
    useFonts();
  }, []);

  const destaques = [
    {
      id: 1,
      image: require("@/assets/images/home/Cadeia.png"),
      title: "Escultura Estrutura Molecular em metal",
      oldPrice: "R$ 49,99",
      price: "R$ 39,99",
      installment: "em até 6x",
      discount: "20% de desconto",
      promoActive: true,
    },
    {
      id: 2,
      image: require("@/assets/images/home/Elefante.png"),
      title: "Estatueta reluzente em metal",
      oldPrice: "R$ 90,00",
      price: "R$ 79,00",
      installment: "em até 6x ou",
      discount: "12% de desconto",
      promoActive: false,
    },
    {
      id: 3,
      image: require("@/assets/images/home/Lady.png"),
      title: "Lady Dimitrescu suporte para livros",
      oldPrice: "R$ 109,99",
      price: "R$ 87,99",
      installment: "em até 6x",
      discount: "20% de desconto",
      promoActive: false,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Destaques */}
      <Destaques items={destaques} />

      {/* Categorias */}
      <Categorias />

      {/* Banner -não encontrou- */}
      <Image
        source={require("@/assets/images/home/Banner.png")}
        style={styles.banner}
      />

      {/* Makers */}
      <MakerProfile />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  banner: {
    borderRadius: 8,
    width: "100%",
  },
});
