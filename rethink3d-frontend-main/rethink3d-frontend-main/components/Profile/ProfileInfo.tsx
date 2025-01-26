import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

interface FieldValues {
  name: string;
  email: string;
  cpf: string;
  address: string;
  password: string;
}

interface ProfileInfoProps {
  fieldValues: FieldValues;
  onEditPress: () => void;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({
  fieldValues,
  onEditPress,
}) => {
  const infoItems = [
    {
      icon: <FontAwesome name="user" size={20} color="#555" />,
      text: `Nome: ${fieldValues.name}`,
    },
    {
      icon: <MaterialIcons name="email" size={20} color="#555" />,
      text: `Email: ${fieldValues.email}`,
    },
    {
      icon: <FontAwesome name="id-card" size={20} color="#555" />,
      text: `CPF: ${fieldValues.cpf}`,
    },
    {
      icon: <FontAwesome name="home" size={20} color="#555" />,
      text: `Endereço: ${fieldValues.address}`,
    },
    {
      icon: <FontAwesome name="key" size={20} color="#555" />,
      text: `Senha: ${fieldValues.password}`,
    },
  ];

  return (
    <View style={styles.infoContainer}>
      <View style={styles.infoHeader}>
        <Text style={styles.infoTitle}>Informações Pessoais</Text>
        <TouchableOpacity style={styles.editButton} onPress={onEditPress}>
          <Text style={styles.editButtonText}>Editar dados</Text>
          <MaterialIcons name="edit" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      {infoItems.map((item, index) => (
        <View style={styles.infoItem} key={index}>
          <View style={styles.infoIcon}>{item.icon}</View>
          <Text style={styles.infoText}>{item.text}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
    marginBottom: 20,
    padding: 15,
  },
  infoHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#000",
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  editButtonText: {
    fontSize: 16,
    color: "#000",
    marginRight: 5,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    gap: 10,
  },
  infoText: {
    fontSize: 16,
    color: "#555",
    flexShrink: 1,
  },
  infoIcon: {
    width: 25,
    alignItems: "center",
  },
});

export default ProfileInfo;
