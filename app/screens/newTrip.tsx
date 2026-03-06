import { ButtonPrimary } from "@/src/components/button-primary";
import { ThemedButtonCircle } from "@/src/components/themed-button-circle";
import { ThemedIcon } from "@/src/components/themed-icon";
import { ThemedSafeAreaView } from "@/src/components/themed-safe-area-view";
import { ThemedText } from "@/src/components/themed-text";
import { ThemedTextInput } from "@/src/components/themed-text-input";
import { ThemedView } from "@/src/components/themed-view";
import { useRouter } from "expo-router";
import { Image, Pressable, ScrollView, View } from "react-native";

export default function NewTrip() {
  const router = useRouter();
  return (
    <>
      <ThemedSafeAreaView>
        <View
          style={{
            marginTop: 10,
            position: "relative",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <ThemedButtonCircle
            style={{ position: "absolute" }}
            onPress={() => router.back()}
          >
            <ThemedIcon name="chevron-left" library="feather" size={24} />
          </ThemedButtonCircle>
          <ThemedText type="title" style={{ margin: "auto" }}>
            Trip Details
          </ThemedText>
        </View>
      </ThemedSafeAreaView>
      <ThemedView style={{ flex: 1, position: "relative", paddingTop: 5 }}>
        <View>
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
            <Pressable
              style={{ flex: 1 }}
              onPress={() => router.push("/modals/calendar")}
            >
              <ThemedTextInput
                placeholder="Start Date"
                editable={false}
                pointerEvents="none"
              />
            </Pressable>
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
                  source={require("@/src/assets/images/destination.png")}
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
        <Pressable
          style={{
            marginTop: 40,
            position: "absolute",
            bottom: 16,
            left: 0,
            right: 0,
          }}
        >
          <ButtonPrimary
            label="Next"
            rightIcon={{ library: "feather", name: "arrow-right" }}
          />
        </Pressable>
      </ThemedView>
    </>
  );
}
