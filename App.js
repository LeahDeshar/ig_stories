import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  Pressable,
} from "react-native";
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
  const goToPrevStory = () => {
    setStoryIndex((index) => {
      if (index == 0) {
        goToPrevUser();
        return 0;
      } else {
        return index - 1;
      }
    });
  };

  const goToPrevUser = () => {
    setUserIndex((index) => {
      if (index === 0) {
        return userStories.length - 1;
      } else {
        return index - 1;
      }
    });
  };
  const goToNextStory = () => {
    setStoryIndex((index) => {
      if (index == user.stories.length - 1) {
        goToNextUser();
        return 0;
      } else {
        return index + 1;
      }
    });
  };
  const goToNextUser = () => {
    setUserIndex((index) => {
      if (index == userStories.length - 1) {
        return 0;
      } else {
        return index + 1;
      }
    });
  };
  // const goToNextStory = () => {
  //   console.log("Next");
  //   // go to next story logic
  //   if (storyIndex < user.stories.length - 1) {
  //     setStoryIndex((index) => index + 1);
  //   } else if (userIndex < userStories.length - 1) {
  //     setUserIndex((index) => index + 1);
  //     setStoryIndex(0);
  //   }
  // };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "black",
      }}
    >
      <View style={{ flex: 1 }}>
        <Image
          source={{ uri: story?.uri }}
          style={{
            width: "100%",
            height: "100%",
            // flex: 1,
            borderRadius: 10,
          }}
        />
        <Pressable
          style={{
            position: "absolute",
            backgroundColor: "red",
            width: "30%",
            height: "100%",
          }}
          onPress={goToPrevStory}
        />
        <Pressable
          style={{
            position: "absolute",
            right: 0,
            backgroundColor: "red",
            width: "30%",
            height: "100%",
          }}
          onPress={goToNextStory}
        />
        <View
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.3)",
            padding: 10,
            paddingVertical: 20,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            {user.username}
          </Text>
        </View>
      </View>
      <View
        style={{
          height: 100,
          width: "100%",
          backgroundColor: "black",
          padding: 10,
        }}
      >
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "gray",
            padding: 10,
            borderRadius: 50,
            color: "white",
          }}
          placeholder="Send message"
          placeholderTextColor="gray"
        />
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
