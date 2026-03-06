import { ButtonPrimary } from "@/src/components/button-primary";
import { ThemedCard } from "@/src/components/themed-card";
import { ThemedSafeAreaView } from "@/src/components/themed-safe-area-view";
import { ThemedText } from "@/src/components/themed-text";
import { ThemedView } from "@/src/components/themed-view";
import { Colors } from "@/src/constants/theme";
import { useRouter } from "expo-router";
import { Image, ScrollView, StyleSheet, View } from "react-native";

const trips = [
  {
    id: "1",
    destination: "Santorini, Greece",
    dates: "Jul 15 - 22, 2025",
    packedPercentage: 78,
    gradient: "from-blue-400 via-blue-500 to-indigo-600", // Ocean vibes
  },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <>
      <ThemedSafeAreaView>
        <View style={{ marginTop: 20 }}>
          <ButtonPrimary
            leftIcon={{ library: "feather", name: "plus" }}
            label="Start a New Packing List"
            onPress={() => router.push("/screens/newTrip")}
          />
        </View>
      </ThemedSafeAreaView>
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={{ fontSize: 18, marginLeft: 5 }}>
          Your Trips
        </ThemedText>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          {Array(10)
            .fill("")
            .map((_, index) => (
              <ThemedCard key={index}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={require("@/src/assets/images/destination.png")}
                    style={{ width: 65, height: 65, borderRadius: 100 }}
                  />
                  <View style={{ marginLeft: 20, flex: 1 }}>
                    <ThemedText type="defaultBold">
                      {trips[0].destination}
                    </ThemedText>
                    <ThemedText
                      type="caption"
                      darkColor={Colors.primaryAlt}
                      style={{ fontSize: 14 }}
                    >
                      {trips[0].dates}
                    </ThemedText>
                  </View>
                </View>
              </ThemedCard>
            ))}
        </ScrollView>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 25,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    padding: 5, // Space above the scroll view
    marginTop: 10,
  },
  container: {
    flex: 1, // Take up full screen
    paddingHorizontal: 20, // Inner spacing
    overflow: "hidden",
  },
});
