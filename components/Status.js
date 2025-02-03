import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const Status = () => {
  // Example data
  const userStats = {
    level: 5,
    xp: 1200,
    xpMax: 2000,
    stamina: 75,
    staminaMax: 100,
    coins: 500,
    chest: 15,
    arms: 20,
    abs: 30,
    legs: 25,
    back: 10,
    calories: 450,
    duration: "1hr 30mins",
    exercises: 12,
  };

  return (
    <ScrollView style={styles.container}>
      {/* First Row: Level, XP, and Stamina */}
      <View style={styles.centerRow}>
        <Text style={styles.levelText}>Level {userStats.level}</Text>
      </View>
      <View style={styles.xpContainer}>
        <Text style={styles.xpText}>XP.</Text>
        <View style={styles.xpBar}>
          <View
            style={[
              styles.xpFill,
              { width: `${(userStats.xp / userStats.xpMax) * 100}%` },
            ]}
          />
        </View>
      </View>
      <View style={styles.staminaContainer}>
        <Image
          source={require("../assets/status/flash.png")}
          style={styles.staminaIcon}
        />
        <View style={styles.staminaBar}>
          <View
            style={[
              styles.staminaFill,
              {
                width: `${(userStats.stamina / userStats.staminaMax) * 100}%`,
              },
            ]}
          />
        </View>
      </View>
      {/* Divider */}
      <View style={styles.divider} />
      {/* Second Row: Stats - chest, arms, abs, legs, back */}
      <View style={styles.row}>
        <View style={styles.column}>
          <View style={styles.iconContainer}>
            <Image
              source={require("../assets/status/chest.png")}
              style={styles.icon}
            />
            <Text style={styles.text}>{userStats.chest}</Text>
          </View>
          <View style={styles.iconContainer}>
            <Image
              source={require("../assets/status/arm.png")}
              style={styles.icon}
            />
            <Text style={styles.text}>{userStats.arms}</Text>
          </View>
          <View style={styles.iconContainer}>
            <Image
              source={require("../assets/status/abs.png")}
              style={styles.icon}
            />
            <Text style={styles.text}>{userStats.abs}</Text>
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.iconContainer}>
            <Image
              source={require("../assets/status/leg.png")}
              style={styles.icon}
            />
            <Text style={styles.text}>{userStats.legs}</Text>
          </View>
          <View style={styles.iconContainer}>
            <Image
              source={require("../assets/status/back.png")}
              style={styles.icon}
            />
            <Text style={styles.text}>{userStats.back}</Text>
          </View>
        </View>
      </View>
      {/* Divider */}
      <View style={styles.divider} />
      {/* Third Row: Stats - duration, calories, exercises in two columns */}
      <View style={styles.row}>
        <View style={styles.column}>
          <View style={styles.iconContainer}>
            <Image
              source={require("../assets/status/calories.png")}
              style={styles.icon}
            />
            <Text style={styles.text}>{userStats.calories}</Text>
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.iconContainer}>
            <Image
              source={require("../assets/status/chronometer.png")}
              style={styles.icon}
            />
            <Text style={styles.text}>{userStats.duration}</Text>
          </View>
        </View>
      </View>
      {/* Last Row (still in two columns) */}
      <View style={styles.row}>
        <View style={styles.column}>
          <View style={styles.iconContainer}>
            <Image
              source={require("../assets/status/fitness.png")}
              style={styles.icon}
            />
            <Text style={styles.text}>{userStats.exercises}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 60,
    paddingHorizontal: 16,
  },
  centerRow: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },

  centerColumn: {
    alignItems: "flex-start", // Align XP bar and stamina to the left
    width: "100%", // Ensure it takes up full width
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  column: {
    flex: 1,
    alignItems: "center",
  },
  levelText: {
    fontSize: 24, // Larger font size for the level
    fontWeight: "bold", // Optional: Make the level text bold
    color: "#333", // You can change this color if needed
  },
  text: {
    fontSize: 16,
    color: "#333",
    marginVertical: 4,
  },
  staminaIcon: {
    width: 25,
    height: 25,
    marginHorizontal: 4,
  },
  xpContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginVertical: 8,
  },
  xpText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#333",
    marginHorizontal: 8,
  },
  xpBar: {
    height: 10,
    width: "90%", // Set to full width
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    marginVertical: 8,
  },
  xpFill: {
    height: "90%",
    backgroundColor: "#4caf50",
    borderRadius: 5,
  },
  staminaContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    width: "90%", // Set to full width
  },
  staminaBar: {
    height: 10,
    width: "90%", // Set to full width
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    marginLeft: 8,
  },
  staminaFill: {
    height: "90%",
    backgroundColor: "#ff9800",
    borderRadius: 5,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 16,
  },
});

export default Status;
