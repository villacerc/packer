import { StyleSheet, Text, type TextProps } from "react-native";

import { useThemeColor } from "@/hooks/use-theme-color";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
  muted?: boolean;
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  muted = false,
  ...rest
}: ThemedTextProps) {
  const colorName = muted ? "mutedText" : "text";
  const color = useThemeColor(
    { light: lightColor, dark: darkColor },
    colorName,
  );

  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Roboto_400Regular", // regular
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Roboto_600SemiBold", // semi-bold
  },
  title: {
    fontSize: 32,
    lineHeight: 32,
    fontFamily: "Roboto_700Bold", // bold
  },
  subtitle: {
    fontSize: 20,
    fontFamily: "Roboto_700Bold", // bold
  },
  link: {
    fontSize: 16,
    lineHeight: 30,
    fontFamily: "Roboto_400Regular", // regular
    color: "#0a7ea4",
  },
});
