import { ButtonPrimary } from "@/src/components/button-primary";
import { ThemedButtonCircle } from "@/src/components/themed-button-circle";
import { ThemedIcon } from "@/src/components/themed-icon";
import { ThemedMenu } from "@/src/components/themed-menu";
import { ThemedSafeAreaView } from "@/src/components/themed-safe-area-view";
import { ThemedText } from "@/src/components/themed-text";
import { ThemedTextInput } from "@/src/components/themed-text-input";
import { ThemedView } from "@/src/components/themed-view";
import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Pressable, View } from "react-native";

export default function NewTrip() {
  const [destination, setDestination] = useState("");
  const [destinationSuggestions, setDestinationSuggestions] = useState<
    string[]
  >([]);
  const router = useRouter();

  const handleDestinationChange = (text: string) => {
    if (!text) setDestinationSuggestions([]);
    else
      setDestinationSuggestions([
        "Kyoto, Japan",
        "Osaka, Japan",
        "Tokyo, Japan",
      ]);
    setDestination(text);
  };

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
          <View style={{ position: "relative" }}>
            <ThemedTextInput
              placeholder="e.g. Kyoto, Japan"
              onChangeText={handleDestinationChange}
              style={{ marginTop: 10 }}
            />
            {destinationSuggestions.length > 0 && (
              <ThemedMenu
                style={{
                  position: "absolute",
                  top: 60,
                  left: 0,
                  right: 0,
                  zIndex: 10,
                  paddingVertical: 5,
                }}
              >
                <FlatList
                  data={destinationSuggestions}
                  renderItem={({ item }) => (
                    <ThemedText
                      style={{ paddingVertical: 5, paddingHorizontal: 10 }}
                    >
                      {item}
                    </ThemedText>
                  )}
                  keyExtractor={(item) => item}
                />
              </ThemedMenu>
            )}
          </View>
        </View>
        <View style={{ marginTop: 35 }}>
          <ThemedText type="label">Travel Dates</ThemedText>

          <View style={{ marginTop: 10, flexDirection: "row", gap: 10 }}>
            <Pressable
              style={{ flex: 1 }}
              onPress={() => router.push("/modals/calendar")}
            >
              <ThemedTextInput
                placeholder="Depart - Return"
                editable={false}
                pointerEvents="none"
              />
            </Pressable>
          </View>
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
