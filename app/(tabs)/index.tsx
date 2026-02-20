import { ThemedButtonCircle } from "@/components/themed-button-circle";
import { ThemedIcon } from "@/components/themed-icon";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function NewTrip() {
  return (
    <ThemedView style={{ flex: 1, paddingTop: 50 }}>
      <ThemedView
        style={{
          position: "relative",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <ThemedButtonCircle style={{ position: "absolute" }}>
          <ThemedIcon name="chevron-left" library="feather" size={24} />
        </ThemedButtonCircle>
        <ThemedText type="title" style={{ margin: "auto" }}>
          Trip Details
        </ThemedText>
      </ThemedView>
      <ThemedView style={{ marginTop: 40 }}>
        <ThemedText type="heading">Where to?</ThemedText>
        <ThemedText type="caption" style={{ marginTop: 10 }}>
          Fill in the details for your upcoming journey.
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
}
