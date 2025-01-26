import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

const makers = [
  {
    id: 1,
    name: "Rethink3D",
    description:
      "Especialista no ramo de impressão com metal. Atua no ramo industrial, comercial e atende...",
    tags: ["Vende", "Modela", "Imprime", "Metal", "Startup"],
    image: require("@/assets/images/home/Logo.png"),
  },
  {
    id: 2,
    name: "FabTech Solutions",
    description:
      "Líder em prototipagem rápida e soluções de fabricação digital. Oferece serviços para startups e grandes indústrias.",
    tags: ["Prototipagem", "Digital", "Startups", "Soluções"],
    image: require("../../assets/images/home/Logo2.png"),
  },
  {
    id: 3,
    name: "Printify Pro",
    description:
      "Empresa focada em impressão sob demanda e personalização em larga escala. Ideal para pequenas empresas.",
    tags: ["Sob Demanda", "Personalização", "Escala", "Imprime"],
    image: require("../../assets/images/home/Logo3.png"),
  },
];

const MakersProfiles = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conheça nossos Makers</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {makers.map((maker) => (
          <TouchableOpacity>
            <View key={maker.id} style={styles.card}>
              <View style={styles.imageAndInfo}>
                <Image source={maker.image} style={styles.image} />
                <View style={styles.info}>
                  <Text style={styles.name}>{maker.name}</Text>
                  <Text style={styles.description} numberOfLines={3}>
                    {maker.description}
                  </Text>
                  <TouchableOpacity>
                    <Text style={styles.learnMore}>Saiba mais</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.tagsContainer}>
                {maker.tags.map((tag, index) => (
                  <Text
                    key={index}
                    style={[
                      styles.tag,
                      tag.toLowerCase() === "modela" && styles.modelaTag,
                    ]}
                  >
                    {tag}
                  </Text>
                ))}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#1d1b20",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    width: 300,
  },
  imageAndInfo: {
    flexDirection: "row",
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0000008E",
  },
  description: {
    fontSize: 14,
    color: "#777",
    marginVertical: 5,
  },
  learnMore: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tag: {
    fontSize: 12,
    color: "#1d1b20",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 6,
    marginTop: 4,
    borderWidth: 1,
    borderColor: "#1d1b20",
  },
  modelaTag: {
    backgroundColor: "#000",
    color: "#fff",
  },
});

export default MakersProfiles;
