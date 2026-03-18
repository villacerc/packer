import { Colors } from "@/src/constants/theme";
import { useAppScheme } from "@/src/hooks/use-app-scheme";
import { StyleSheet, View, type ViewProps } from "react-native";

type ThemedMenuProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedMenu({
  style,
  lightColor,
  darkColor,
  ...rest
}: ThemedMenuProps) {
  const { scheme } = useAppScheme();
  const themeStyles = scheme === "light" ? styles.light : styles.dark;

  return <View style={[styles.container, themeStyles, style]} {...rest} />;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    borderWidth: 1,
  },
  light: {
    color: Colors.light.text,
    backgroundColor: Colors.light.inputBackground,
    borderColor: Colors.light.inputBorderColor,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.04,
    shadowRadius: 30,
    elevation: 4,
  },
  dark: {
    color: Colors.dark.text,
    backgroundColor: Colors.dark.inputBackground,
    borderColor: Colors.dark.inputBorderColor,
  },
});
