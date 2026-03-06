import { Colors } from "@/src/constants/theme";
import { useAppScheme } from "@/src/hooks/use-app-scheme";
import { StyleSheet, TextInput, type TextInputProps } from "react-native";

type ThemedInputProps = TextInputProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedTextInput({
  style,
  lightColor,
  darkColor,
  ...rest
}: ThemedInputProps) {
  const { scheme } = useAppScheme();
  const themeStyles = scheme === "light" ? styles.light : styles.dark;

  return (
    <TextInput
      style={[styles.input, themeStyles, style]}
      placeholderTextColor={Colors[scheme].textTertiary}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    paddingHorizontal: 12,
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
