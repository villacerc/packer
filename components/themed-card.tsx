import { Colors } from "@/constants/theme";
import { useAppScheme } from "@/hooks/use-app-scheme";
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
  const { scheme } = useAppScheme();
  const backgroundColor =
    lightColor || darkColor || Colors[scheme].cardBackground;
  const themeStyles = scheme === "light" ? styles.cardLight : styles.cardDark;

  return (
    <View
      style={[{ backgroundColor }, themeStyles, styles.card, style]}
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 18, // Inner spacing
    borderRadius: 28, // Rounded corners
    marginVertical: 8, // Space between cards
  },
  cardLight: {
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4, // Shadow for Android
  },
  cardDark: {
    borderWidth: 1, // Border for dark mode
    borderColor: "rgba(30, 41, 59, 0.5)", // Border color for dark mode
  },
});
