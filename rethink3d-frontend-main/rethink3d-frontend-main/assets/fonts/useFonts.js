import * as Font from "expo-font";

const useFonts = async () => {
  await Font.loadAsync({
    Roboto_100Thin: require("@expo-google-fonts/roboto/Roboto_100Thin.ttf"),
    Roboto_300Light: require("@expo-google-fonts/roboto/Roboto_300Light.ttf"),
    Roboto_400Regular: require("@expo-google-fonts/roboto/Roboto_400Regular.ttf"),
    Roboto_500Medium: require("@expo-google-fonts/roboto/Roboto_500Medium.ttf"),
    Roboto_700Bold: require("@expo-google-fonts/roboto/Roboto_700Bold.ttf"),
    Roboto_900Black: require("@expo-google-fonts/roboto/Roboto_900Black.ttf"),
  });
};

export default useFonts;
