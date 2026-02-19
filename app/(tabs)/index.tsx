import { ThemedButtonCircle } from "@/components/themed-button-circle";
import { ThemedIcon } from "@/components/themed-icon";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { View } from "react-native";

export default function NewTrip() {
  return (
    <ThemedView style={{ flex: 1, paddingTop: 50 }}>
      <View
        style={{
          position: "relative",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <ThemedButtonCircle style={{ position: "absolute" }}>
          <ThemedIcon name="chevron-left" library="feather" size={24} />
        </ThemedButtonCircle>
        <ThemedText type="subtitle" style={{ margin: "auto" }}>
          Trip Details
        </ThemedText>
      </View>
    </ThemedView>
  );
}
