import { View, Text, StyleSheet } from "react-native";

export default function Chats() {
  return (
    <View style={styles.container}>
      <Text>Tela reservada para chats!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  link: { color: "blue", marginTop: 10 },
});
