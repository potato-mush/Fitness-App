import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomNavigation from "./BottomNavigation";  // Import the BottomNavigation component

const AchievementsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Achievements</Text>
      {/* Add content related to achievements here */}

      {/* Render the BottomNavigation at the bottom of the screen */}
      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", // Align content at the top, leaving space for the bottom navigation
    alignItems: "center",
    paddingBottom: 80, // Make space at the bottom for the BottomNavigation component
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20, // Some margin for spacing
  },
});

export default AchievementsScreen;
