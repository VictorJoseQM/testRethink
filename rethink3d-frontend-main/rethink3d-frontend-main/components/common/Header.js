import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";
import LupaIcon from "@/assets/images/maker-market/SearchIcon.svg";
import CoracaoIcon from "@/assets/images/maker-market/Heart.svg";
import PerfilIcon from "@/assets/images/maker-market/ProfileIcon.svg";

export default function Header() {
  const [searchParam, setSearchParam] = useState("");

  const navigateHandler = () => {
    router.push(
      {
        pathname: "/search",
        params: { searchParam: searchParam },
      },
      { relativeToDirectory: false }
    );
  };

  return (
    <View style={styles.header}>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Sua próxima ideia..."
          placeholderTextColor="#999"
          onChangeText={setSearchParam}
          onSubmitEditing={navigateHandler}
        />
        <TouchableOpacity>
          <LupaIcon
            width={24}
            height={24}
            style={styles.icon}
            onPress={navigateHandler}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.icons}>
        <TouchableOpacity>
          <CoracaoIcon width={24} height={24} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <PerfilIcon width={24} height={24} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  searchBarContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    paddingHorizontal: 10,
    height: 40,
    borderColor: "black",
    borderWidth: 1,
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 10,
    fontWeight: "400",
    borderWidth: 0,
    outlineStyle: "none",
  },
  icon: {
    marginLeft: 10,
    width: 24,
    height: 24,
    tintColor: "#999",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 85,
  },
});
