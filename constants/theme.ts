/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from "react-native";

export const Colors = {
  primary: "#7a16e0",
  primaryAlt: "#A78BFA",
  primaryContent: "#fff",
  light: {
    text: "#11181C",
    textSecondary: "#64748B",
    textTertiary: "#94A3B8",
    background: "#f7f7f7",
    cardBackground: "#fff",
    btnCircleBackground: "#fff",
    btnCircleBorderColor: "#F1F5F9",
    inputBackground: "#fff",
    inputBorderColor: "#fff",
    icon: "#687076",
    tabBorder: "#f1f1f1",
    tabIconDefault: "#687076",
  },
  dark: {
    text: "#ECEDEE",
    textSecondary: "#94A3B8",
    textTertiary: "#6B7280",
    background: "#0a0e1a",
    cardBackground: "#0f172a",
    btnCircleBackground: "#0F1123",
    btnCircleBorderColor: "#1E293B",
    inputBackground: "#0F1123",
    inputBorderColor: "#1E293B",
    icon: "#9BA1A6",
    tabBorder: "#0f172a",
    tabIconDefault: "#9BA1A6",
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "Roboto_400Regular",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "Roboto",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "Roboto, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
