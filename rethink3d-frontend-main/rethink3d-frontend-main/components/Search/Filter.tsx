import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";

export default function Filter(props: { title: string }) {
  // TODO: implementar filtro de busca
  function filterSelect() {
    alert("filtrando");
  }
  function sortSelect() {
    alert("ordenando");
  }
  return (
    <View style={styles.filterSection}>
      <Text style={styles.sectionTitle}>{props.title}</Text>
      <View style={styles.auxButtons}>
        <FontAwesome6 name="sort" size={24} onPress={sortSelect} />
        <Ionicons name="filter" size={24} onPress={filterSelect} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  filterSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  sectionTitle: { fontWeight: 700, fontSize: 24 },
  auxButtons: { flexDirection: "row", gap: 10 },
});
