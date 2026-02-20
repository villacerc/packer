import { ThemedButtonCircle } from "@/components/themed-button-circle";
import { ThemedIcon } from "@/components/themed-icon";
import { ThemedText } from "@/components/themed-text";
import { ThemedTextInput } from "@/components/themed-text-input";
import { ThemedView } from "@/components/themed-view";
import { Image, ScrollView, View } from "react-native";

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
        <ThemedText type="title" style={{ margin: "auto" }}>
          Trip Details
        </ThemedText>
      </View>
      <View style={{ marginTop: 40 }}>
        <ThemedText type="heading">Where to?</ThemedText>
        <ThemedText type="caption" style={{ marginTop: 10 }}>
          Fill in the details for your upcoming journey.
        </ThemedText>
      </View>
      <View style={{ marginTop: 35 }}>
        <ThemedText type="label">Destination</ThemedText>
        <ThemedTextInput
          placeholder="e.g. Kyoto, Japan"
          style={{ marginTop: 10 }}
        />
      </View>
      <View style={{ marginTop: 35 }}>
        <ThemedText type="label">Travel Dates</ThemedText>

        <View style={{ marginTop: 10, flexDirection: "row", gap: 10 }}>
          <ThemedTextInput style={{ flex: 1 }} placeholder="Start Date" />
          <ThemedTextInput style={{ flex: 1 }} placeholder="End Date" />
        </View>
      </View>
      <View style={{ marginTop: 35 }}>
        <ThemedText type="label">Trip Suggestions</ThemedText>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 20 }}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <View
              key={i}
              style={i < 4 ? { marginLeft: 20 } : { marginHorizontal: 20 }}
            >
              <Image
                source={require("@/assets/images/destination.png")}
                style={{ width: 165, height: 200, borderRadius: 30 }}
              />
              <View style={{ marginLeft: 5, marginTop: 10 }}>
                <ThemedText type="defaultSemiBold">Bali</ThemedText>
                <ThemedText type="subtext">Indonesia</ThemedText>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </ThemedView>
  );
}
