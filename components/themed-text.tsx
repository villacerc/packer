import { Colors } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Text, type TextProps } from "react-native";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:
    | "default"
    | "heading"
    | "title"
    | "caption"
    | "defaultBold"
    | "defaultSemiBold"
    | "link";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const variant = typography[type];

  const color = useThemeColor(
    { light: lightColor, dark: darkColor },
    variant.colorToken as keyof typeof Colors.light & keyof typeof Colors.dark,
  );

  return (
    <Text
      style={[
        {
          color,
          fontSize: variant.fontSize,
          lineHeight: variant.lineHeight,
          fontFamily: variant.fontFamily,
        },
        style,
      ]}
      {...rest}
    />
  );
}

const typography = {
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Roboto_400Regular",
    colorToken: "text",
  },
  heading: {
    fontSize: 32,
    lineHeight: 32,
    fontFamily: "Roboto_700Bold",
    colorToken: "text",
  },
  title: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: "Roboto_700Bold",
    colorToken: "text",
  },
  caption: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Roboto_400Regular",
    colorToken: "textSecondary",
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Roboto_600SemiBold",
    colorToken: "text",
  },
  defaultBold: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Roboto_700Bold",
    colorToken: "text",
  },
  link: {
    fontSize: 16,
    lineHeight: 30,
    fontFamily: "Roboto_400Regular",
    colorToken: "primary",
  },
} as const;
