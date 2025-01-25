// src/screens/AvatarScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomNavigation from "./BottomNavigation"; // Import BottomNavigation

const AvatarScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Avatar</Text>
      {/* Add content related to avatar customization or display here */}

      {/* Render the BottomNavigation at the bottom of the screen */}
      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", // Content starts at the top of the screen
    alignItems: "center",
    paddingBottom: 80, // Space at the bottom for BottomNavigation
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20, // Margin for spacing
  },
});

export default AvatarScreen;
