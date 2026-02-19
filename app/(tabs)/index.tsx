import { ThemedCard } from "@/components/themed-card";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import Feather from "@expo/vector-icons/Feather";
import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";

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
  return (
    <ThemedView style={styles.container}>
      <View style={{ marginTop: 50 }}>
        <Pressable
          style={styles.button}
          onPress={() => console.log("Pressed!")}
        >
          <Feather name="plus" size={22} color="white" />
          <ThemedText
            style={{ marginLeft: 10, color: "white", textAlign: "center" }}
          >
            Start a New Packing List
          </ThemedText>
        </Pressable>
      </View>
      <ThemedText
        type="subtitle"
        style={{ fontSize: 18, marginTop: 30, marginLeft: 5 }}
      >
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
                  source={require("@/assets/images/destination.png")}
                  style={{ width: 65, height: 65, borderRadius: 100 }}
                />
                <View style={{ marginLeft: 20, flex: 1 }}>
                  <ThemedText type="defaultBold">
                    {trips[0].destination}
                  </ThemedText>
                  <ThemedText muted style={{ fontSize: 14 }}>
                    {trips[0].dates}
                  </ThemedText>
                </View>
              </View>
            </ThemedCard>
          ))}
      </ScrollView>
    </ThemedView>
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
