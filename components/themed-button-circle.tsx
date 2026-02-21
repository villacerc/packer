import { Colors } from "@/constants/theme";
import { useAppScheme } from "@/hooks/use-app-scheme";
import { StyleSheet, View, type ViewProps } from "react-native";

export function ThemedButtonCircle({ style, ...otherProps }: ViewProps) {
  const { scheme } = useAppScheme();
  const themeStyles = scheme === "light" ? styles.light : styles.dark;
  return (
    <View style={[styles.container, style, themeStyles]} {...otherProps} />
  );
}

const styles = StyleSheet.create({
  container: {
    color: "#fff",
    width: 45,
    height: 45,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  light: {
    backgroundColor: Colors.light.btnCircleBackground,
    borderColor: Colors.light.btnCircleBorderColor,
  },
  dark: {
    backgroundColor: Colors.dark.btnCircleBackground,
    borderColor: Colors.dark.btnCircleBorderColor,
  },
});
