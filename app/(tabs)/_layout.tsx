import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useAppScheme } from "@/hooks/use-app-scheme";
import Feather from "@expo/vector-icons/Feather";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  const { scheme: colorScheme } = useAppScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme].background, // <--- set the background herer
          borderTopWidth: 1,
          borderTopColor: Colors[colorScheme].tabBorder, // <--- set the border color here
        },
        tabBarLabelStyle: {
          marginTop: 4, // Increase this to push the label away from the icon
          fontSize: 12, // Optional: adjust label size
        },
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Trips",
          tabBarIcon: ({ color }) => (
            <Feather name="briefcase" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
