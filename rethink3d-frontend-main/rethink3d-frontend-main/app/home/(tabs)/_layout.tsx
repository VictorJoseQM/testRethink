import { Tabs } from "expo-router";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import HomeIcon from "@/assets/images/common/HomeIcon.svg";
import CarrinhoIcon from "@/assets/images/common/ShoppingCartIcon.svg";
import ChatsIcon from "@/assets/images/common/ChatsIcon.svg";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingTop: 15,
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <HomeIcon />,
        }}
      />
      <Tabs.Screen
        name="Cart"
        options={{
          tabBarIcon: ({ color }) => <CarrinhoIcon />,
        }}
      />
      <Tabs.Screen
        name="Orders"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="list" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="Chats"
        options={{
          tabBarIcon: ({ color }) => <ChatsIcon />,
        }}
      />
    </Tabs>
  );
}
