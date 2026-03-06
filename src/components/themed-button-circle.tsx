import { Colors } from "@/src/constants/theme";
import { useAppScheme } from "@/src/hooks/use-app-scheme";
import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";

export function ThemedButtonCircle({
  style,
  ...otherProps
}: React.ComponentProps<typeof Pressable>) {
  const { scheme } = useAppScheme();
  const themeStyles = scheme === "light" ? styles.light : styles.dark;
  return (
    <Pressable
      style={[styles.container, style, themeStyles] as StyleProp<ViewStyle>}
      {...otherProps}
    />
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
