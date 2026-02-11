import { ThemedCard } from "@/components/themed-card";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { ScrollView, StyleSheet } from "react-native";

const trips = [
  {
    id: "1",
    destination: "Santorini, Greece",
    dates: "Jul 15-22, 2025",
    packedPercentage: 78,
    gradient: "from-blue-400 via-blue-500 to-indigo-600", // Ocean vibes
  },
];

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Your Trips</ThemedText>
      <ScrollView style={styles.scrollView}>
        {Array(10)
          .fill("")
          .map((_, index) => (
            <ThemedCard key={index}>
              <ThemedText type="defaultSemiBold">
                {trips[0].destination}
              </ThemedText>
              <ThemedText>{trips[0].dates}</ThemedText>
            </ThemedCard>
          ))}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    padding: 5, // Space above the scroll view
    marginTop: 16,
  },
  container: {
    flex: 1, // Take up full screen
    padding: 32, // Inner spacing
    overflow: "hidden",
    // justifyContent: "center", // Vertical alignment
    // alignItems: "center", // Horizontal alignment
  },
});
