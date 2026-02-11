import { useThemeColor } from "@/hooks/use-theme-color";
import { StyleSheet, View, type ViewProps } from "react-native";

export type ThemedCardProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedCard({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedCardProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "cardBackground",
  );

  return (
    <View style={[{ backgroundColor }, styles.card, style]} {...otherProps} />
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 18, // Inner spacing
    borderRadius: 28, // Rounded corners
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4, // Shadow for Android
    marginVertical: 8, // Space between cards
  },
});
