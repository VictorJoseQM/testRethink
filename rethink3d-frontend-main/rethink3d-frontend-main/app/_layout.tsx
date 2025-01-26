import React, { useEffect } from "react";
import { Stack } from "expo-router";
import useFonts from "@/assets/fonts/useFonts";

export default function Layout() {
  useEffect(() => {
    useFonts();
  }, []);
  return <Stack screenOptions={{ headerShown: false }}></Stack>;
}
