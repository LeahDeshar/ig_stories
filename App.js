import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import userStories from "./stories";
import { StatusBar } from "expo-status-bar";

const uri =
  "https://images.unsplash.com/photo-1472586662442-3eec04b9dbda?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const App = () => {
  const [userIndex, setUserIndex] = useState(0);
  const [storyIndex, setStoryIndex] = useState(0);

  const user = userStories[userIndex];
  const story = user.stories[storyIndex];
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: story?.uri }}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <View
        style={{
          position: "absolute",
          top: 100,
          width: "100%",
        }}
      >
        <Text style={{}}>{user.username}</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
