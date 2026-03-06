import { useThemeColor } from "@/src/hooks/use-theme-color";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedViewProps } from "./themed-view";

export function ThemedSafeAreaView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background",
  );

  return <SafeAreaView style={[{ backgroundColor }, style]} {...otherProps} />;
}
