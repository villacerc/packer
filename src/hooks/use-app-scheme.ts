import { ColorSchemeContext } from "@/src/context/color-scheme-context";
import { useContext } from "react";

export function useAppScheme() {
  return useContext(ColorSchemeContext);
}
