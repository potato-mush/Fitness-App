import { useNavigation, useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { useContext } from "react";
import { FitnessItems } from "../Context";

const FitScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const exercise = route.params?.exercises || []; // Ensure it's an array if undefined
  const difficulty = route.params?.difficulty || "Beginner"; // Fallback to 'Beginner'
  const current = exercise[index] || {}; // Fallback to an empty object if undefined
  const {
    completed,
    setCompleted,
    calories,
    setCalories,
    minutes,
    setMinutes,
    workout,
    setWorkout,
  } = useContext(FitnessItems);

  const [currentDuration, setCurrentDuration] = useState(0); // Initial duration value
  const [currentSets, setCurrentSets] = useState(0); // Initial sets value

  // Format the duration to "mm:ss"
  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  // Function to get duration for the exercise based on difficulty
  const getDuration = (exercise, difficulty) => {
    if (exercise && exercise.duration && exercise.duration[difficulty]) {
      return exercise.duration[difficulty];
    }
    return 0; // Default to 0 if the duration or difficulty is undefined
  };

  // Function to get sets for the exercise based on difficulty
  const getSets = (exercise, difficulty) => {
    if (exercise && exercise.sets && exercise.sets[difficulty]) {
      return exercise.sets[difficulty];
    }
    return 0; // Default to 0 if the sets or difficulty is undefined
  };

  useEffect(() => {
    if (!current || !current.name) {
      console.log("Workout data is missing!");
      return;
    }

    if (workout.name === "FULL BODY") {
      setCurrentDuration(current.duration); // Directly use the exercise's duration for Full Body
      setCurrentSets(current.sets); // Directly use the sets for Full Body
    } else {
      setCurrentDuration(getDuration(current, difficulty)); // Use duration based on difficulty
      setCurrentSets(getSets(current, difficulty)); // Use sets based on difficulty
    }

    let timer;
    if (current.duration) {
      timer = setInterval(() => {
        setCurrentDuration((prevDuration) => {
          if (prevDuration > 0) {
            return prevDuration - 1;
          } else {
            clearInterval(timer);
            return 0;
          }
        });
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [current, difficulty, workout.name]); // Add workout.name as a dependency

  const handleNextExercise = () => {
    if (index + 1 >= exercise.length) {
      navigation.navigate("Training");
      setCompleted([...completed, current?.name]);
      setWorkout(workout + 1);
      setMinutes(minutes + 2.5);
      setCalories(calories + 6.3);
    } else {
      // Navigate to Rest screen first before the next exercise
      navigation.navigate("Rest");

      // Wait for 3 seconds (or however long you want the rest period to be)
      setTimeout(() => {
        setIndex(index + 1); // After rest, go to the next exercise
      }, 3000); // Rest for 3 seconds before moving to next exercise
    }
  };

  if (!current.name) {
    return <Text>Loading...</Text>; // Return a loading screen if data is still being loaded
  }

  // Check if the image is a URL or a local asset
  const getImageSource = (image) => {
    if (typeof image === "string" && image.startsWith("http")) {
      return { uri: image }; // Use URL if it's an external link
    } else {
      return image; // Otherwise, assume it's a local asset
    }
  };

  return (
    <SafeAreaView>
      {/* Use the getImageSource function to determine whether the image is local or external */}
      <Image
        style={{ width: "100%", height: 400 }}
        source={getImageSource(current?.image)} // Use the getImageSource function here
      />
      <Text
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 30,
        }}
      >
        {current?.name} <Octicons name="question" size={22} color="#6d6868" />
      </Text>

      {/* Display duration if it's a duration-based exercise */}
      {current.duration ? (
        <Text
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: 45,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          {formatDuration(currentDuration)}
        </Text>
      ) : (
        // Display sets if it's a set-based exercise
        <Text
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: 45,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          x{currentSets}
        </Text>
      )}

      <TouchableOpacity
        onPress={handleNextExercise}
        style={{
          backgroundColor: "#198f51",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 50,
          borderRadius: 30,
          padding: 10,
          width: "90%",
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          <Ionicons name="checkmark-circle" size={24} color="white" /> DONE
        </Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          marginTop: 25,
        }}
      >
        <TouchableOpacity
          disabled={index === 0}
          onPress={() => setIndex(index - 1)}
          style={{
            borderRadius: 30,
            padding: 10,
            width: "42%",
          }}
        >
          <Text
            style={{
              color: "#6d6868",
              fontWeight: "bold",
              fontSize: 18,
              textAlign: "center",
            }}
          >
            <Ionicons name="play-skip-back" size={22} color="#6d6868" /> PREV
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleNextExercise}
          style={{
            borderRadius: 30,
            padding: 10,
            width: "42%",
          }}
        >
          <Text
            style={{
              color: "#3f3d3d",
              fontWeight: "bold",
              fontSize: 18,
              textAlign: "center",
            }}
          >
            <Ionicons name="play-skip-forward" size={22} color="#3f3d3d" /> SKIP
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FitScreen;
