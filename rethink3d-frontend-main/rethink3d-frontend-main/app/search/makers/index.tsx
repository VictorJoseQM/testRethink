import { MakerList } from "@/components/search/Lists";
import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { makers } from "@/api/test/search/data";
import Filter from "@/components/search/Filter";

export default function Index() {
  return (
    // TODO: Testar alternativas ao ScrollView por questões performáticas
    <>
      <Filter title={"Makers"} />
      <ScrollView>
        <View style={styles.view}>
          <MakerList makers={makers} />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  view: { paddingHorizontal: 20 },
  linkToRequest: { fontWeight: 500, textAlign: "center", padding: 20 },
});
