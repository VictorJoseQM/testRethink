import { Stack } from "expo-router";
import Header from "@/components/common/Header";
import { StyleSheet, View } from "react-native";

export default function Layout() {
  return (
    <View style={styles.container}>
      {/* Header global */}
      <Header />

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 }
});
