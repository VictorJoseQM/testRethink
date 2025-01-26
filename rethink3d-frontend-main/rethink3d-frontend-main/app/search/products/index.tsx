import { ProductList } from "@/components/search/Lists";
import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { Link } from "expo-router";
import { produtos } from "@/api/test/search/data";
import Filter from "@/components/search/Filter";

export default function Index() {
  return (
    // TODO: Testar alternativas ao ScrollView por questões performáticas
    <>
      <Filter title="Produtos" />
      <ScrollView>
        <View style={styles.view}>
          <ProductList products={produtos} />
          <Link style={styles.linkToRequest} href={"/_sitemap"}>
            Não encontrou o que procura? Peça a um Maker!
          </Link>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  view: { paddingHorizontal: 20 },
  linkToRequest: { fontWeight: 500, textAlign: "center", padding: 20 },
});
