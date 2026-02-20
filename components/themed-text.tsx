import { Colors } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Text, type TextProps } from "react-native";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:
    | "default"
    | "heading"
    | "label"
    | "title"
    | "caption"
    | "subtext"
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
  const { colorToken, ...textStyles } = variant;
  const color = useThemeColor(
    { light: lightColor, dark: darkColor },
    colorToken as keyof typeof Colors.light & keyof typeof Colors.dark,
  );

  return (
    <Text
      style={[
        {
          ...textStyles,
          color,
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
  label: {
    fontSize: 16,
    lineHeight: 20,
    textTransform: "uppercase",
    fontFamily: "Roboto_600SemiBold",
    colorToken: "textSecondary",
  },
  caption: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Roboto_400Regular",
    colorToken: "textSecondary",
  },
  subtext: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto_400Regular",
    colorToken: "textTertiary",
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
