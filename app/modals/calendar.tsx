import { ThemedButtonCircle } from "@/src/components/themed-button-circle";
import { ThemedIcon } from "@/src/components/themed-icon";
import { ThemedText } from "@/src/components/themed-text";
import { ThemedView } from "@/src/components/themed-view";
import { Colors } from "@/src/constants/theme";
import { useThemeColor } from "@/src/hooks/use-theme-color";
import { useRouter } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { CalendarList } from "react-native-calendars";
import XDate from "xdate";

export default function Calendar() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [range, setRange] = useState<{
    start?: string; // YYYY-MM-DD
    end?: string; // YYYY-MM-DD
  }>({});
  const router = useRouter();
  const backgroundColor = useThemeColor({}, "inputBackground");
  const textColor = useThemeColor({}, "text");
  const weekdayColor = useThemeColor({}, "textTertiary");

  useEffect(() => {
    setTimeout(() => {
      setShowCalendar(true);
    }, 300);
  }, []);

  const onDayPress = (day: { dateString: string }) => {
    if (!range.start || (range.start && range.end)) {
      // Start a new range
      setRange({ start: day.dateString, end: undefined });
    } else if (!range.end) {
      // Set the end date
      const start = new XDate(range.start);
      const end = new XDate(day.dateString);

      // restart if the user tapped an earlier day
      if (start.diffDays(end) < 0) {
        setRange({ start: day.dateString, end: undefined });
      } else {
        setRange({ ...range, end: day.dateString });
      }
    }
  };

  const getMarkedDates = useMemo(() => {
    if (!range.start) return {};
    const marked: Record<string, any> = {};
    marked[range.start] = {
      startingDay: true,
      endingDay: true,
      color: Colors.primary,
      textColor: Colors.primaryContent,
    };

    if (range.end) {
      const start = new XDate(range.start);
      const end = new XDate(range.end);
      let intermediate_date = start.clone();

      for (let i = 0; i < start.diffDays(end) - 1; i++) {
        intermediate_date.addDays(1);
        const dateStr = intermediate_date.toString("yyyy-MM-dd");
        marked[dateStr] = {
          color: Colors.primary,
          textColor: Colors.primaryContent,
        };
      }

      marked[range.start].endingDay = false;
      marked[range.end] = {
        endingDay: true,
        color: Colors.primary,
        textColor: Colors.primaryContent,
      };
    }

    return marked;
  }, [range]);

  return (
    <ThemedView
      lightColor={backgroundColor}
      darkColor={backgroundColor}
      style={styles.container}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
          marginBottom: 10,
        }}
      >
        <ThemedText type="title">Travel Dates</ThemedText>
        <ThemedButtonCircle
          style={{ position: "absolute", right: 20 }}
          onPress={() => router.back()}
        >
          <ThemedIcon name="close" library="material" size={20} />
        </ThemedButtonCircle>
      </View>
      <View style={{ paddingBottom: 50 }}>
        <CalendarList
          markingType="period"
          calendarHeight={300}
          pastScrollRange={6}
          futureScrollRange={12}
          initialNumToRender={3}
          windowSize={5}
          calendarStyle={{
            opacity: showCalendar ? 1 : 0,
            paddingRight: 0,
            paddingLeft: 0,
          }}
          theme={{
            calendarBackground: backgroundColor,
            monthTextColor: textColor,
            dayTextColor: textColor,
            textSectionTitleColor: weekdayColor,
            todayTextColor: Colors.primary,
          }}
          markedDates={getMarkedDates}
          onDayPress={onDayPress}
        />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flex: 1,
  },
});
