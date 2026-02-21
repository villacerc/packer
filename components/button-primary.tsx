import { Colors } from "@/constants/theme";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";

const ICON_MAP = {
  feather: Feather,
  material: MaterialIcons,
};

type IconLibrary = keyof typeof ICON_MAP;

type IconConfig<L extends IconLibrary> = {
  library: L;
  name: any;
  size?: number;
};

type ButtonProps = {
  label: string;
  leftIcon?: IconConfig<IconLibrary>;
  rightIcon?: IconConfig<IconLibrary>;
} & React.ComponentProps<typeof Pressable>;

function renderIcon<L extends IconLibrary>(icon?: IconConfig<L>) {
  if (!icon) return null;

  const { library, name, size = 20 } = icon;

  switch (library) {
    case "feather":
      return <Feather name={name as any} size={size} color="white" />;
    case "material":
      return <MaterialIcons name={name as any} size={size} color="white" />;
  }
}

export function ButtonPrimary({
  label,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) {
  return (
    <Pressable style={styles.container} {...props}>
      {renderIcon(leftIcon)}
      <Text style={styles.text}>{label}</Text>
      {renderIcon(rightIcon)}
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    padding: 20,
    borderRadius: 25,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    marginHorizontal: 10,
  },
});
