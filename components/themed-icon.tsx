import { useThemeColor } from "@/hooks/use-theme-color";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { type TextStyle } from "react-native";

type IconLibrary = "feather" | "material";

type ThemedIconProps = {
  name: string;
  size?: number;
  lightColor?: string;
  darkColor?: string;
  library?: IconLibrary;
  style?: TextStyle;
};

export function ThemedIcon({
  name,
  size = 24,
  lightColor,
  darkColor,
  library = "feather",
  style,
}: ThemedIconProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  const IconComponent = library === "material" ? MaterialIcons : Feather;

  return (
    <IconComponent name={name as any} size={size} color={color} style={style} />
  );
}
