import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import CategoriaIcon from "../../assets/images/home/CategoriesIcon.svg";

const categories = [
  "Casa",
  "Decoração",
  "Industriais",
  "Ferramentas",
  "Brinquedos",
  "Capinhas de Celular",
  "Academia e mais",
];

const Categories = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Explore por categorias</Text>
        <CategoriaIcon />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryButton}>
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    marginLeft: 16,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0000008E",
    marginRight: 8,
  },
  categoryButton: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 4,
    borderColor: "#1d1b20",
    borderWidth: 1,
  },
  categoryText: {
    fontSize: 16,
  },
});

export default Categories;
