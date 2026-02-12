import React, { createContext, useState } from "react";
import { useColorScheme } from "react-native";

type Scheme = "light" | "dark";

export const ColorSchemeContext = createContext<{
  scheme: Scheme;
  setScheme: (scheme: Scheme) => void;
}>({
  scheme: "light",
  setScheme: () => {},
});

export function ColorSchemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const systemScheme = useColorScheme() ?? "light";
  const [overrideScheme, setOverrideScheme] = useState<Scheme | null>("light");

  const scheme = overrideScheme ?? systemScheme;

  return (
    <ColorSchemeContext.Provider
      value={{ scheme, setScheme: setOverrideScheme }}
    >
      {children}
    </ColorSchemeContext.Provider>
  );
}
