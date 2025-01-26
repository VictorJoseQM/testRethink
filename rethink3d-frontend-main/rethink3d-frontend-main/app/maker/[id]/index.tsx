import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import Profile from "@/components/maker-market/Profile";
import AboutMaker from "@/components/maker-market/AboutMaker";
import RequestButton from "@/components/maker-market/RequestServiceButton";
import Catalog from "@/components/maker-market/Catalog";
import ProfileIcon from "@/assets/images/common/Rethink3DLogo.svg";

export default function Index() {
  return (
    <ScrollView style={style.container}>
      {/* Seção de Profile */}
      <Profile
        nome="Rethink3D"
        etiquetas={[
          "Modela",
          "Imprime",
          "Decoração",
          "Action figures",
          "Industrial",
          "Casa",
        ]}
        dataAdesao="Desde 15/12/2024"
        avaliacao={5}
        SvgImagem={ProfileIcon}
      />

      {/* Seção Sobre o Maker */}
      <AboutMaker />

      {/* Solicitação de Serviço */}
      <RequestButton />

      {/* Seção do Catálogo */}
      <Catalog />
    </ScrollView>
  );
}

export const style = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
});
