import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import userStories from "./stories";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  useAnimatedReaction,
  runOnJS,
} from "react-native-reanimated";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

const uri =
  "https://images.unsplash.com/photo-1472586662442-3eec04b9dbda?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const storyViewDuration = 5 * 1000;
const App = () => {
  const [userIndex, setUserIndex] = useState(0);
  const [storyIndex, setStoryIndex] = useState(0);
  const progress = useSharedValue(0);

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

  useEffect(() => {
    progress.value = 0;
    progress.value = withTiming(1, {
      duration: storyViewDuration,
      easing: Easing.linear,
    });
  }, [storyIndex, userIndex]);
  useAnimatedReaction(
    () => progress.value,
    (currentValue, previousValue) => {
      if (currentValue !== previousValue && currentValue === 1) {
        runOnJS(goToNextStory)();
      }
    }
  );

  const indicatorAnimatedStyle = useAnimatedStyle(() => ({
    width: `${progress.value * 100}%`,
  }));

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
      }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled
    >
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
              borderRadius: 10,
            }}
          />
          <Pressable
            style={{
              position: "absolute",
              // backgroundColor: "red",
              width: "30%",
              height: "100%",
            }}
            onPress={goToPrevStory}
          />
          <Pressable
            style={{
              position: "absolute",
              right: 0,
              // backgroundColor: "red",
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
              padding: 20,
              paddingTop: 5,
            }}
          >
            <LinearGradient
              colors={["rgba(0,0,0,0.7)", "transparent"]}
              style={StyleSheet.absoluteFill}
            />

            <View
              style={{
                gap: 5,
                flexDirection: "row",
                marginBottom: 10,
                marginTop: 5,
              }}
            >
              {user.stories.map((story, index) => (
                <View
                  key={index}
                  style={{
                    flex: 1,
                    height: 2,
                    backgroundColor: "gray",
                    borderRadius: 10,
                    overflow: "hidden",
                  }}
                >
                  <Animated.View
                    style={[
                      {
                        backgroundColor: "white",
                        height: "100%",
                      },
                      index === storyIndex && indicatorAnimatedStyle,
                      index > storyIndex && { width: 0 },
                      index < storyIndex && { width: "100%" },
                    ]}
                  />
                </View>
              ))}
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <Image
                  source={{ uri: user.userImg }}
                  style={{
                    width: 35,
                    height: 35,
                    borderRadius: 25,
                  }}
                />
                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        // marginTop: 10,
                      }}
                    >
                      {user.username}
                    </Text>
                    <Text
                      style={{
                        fontSize: 11,
                        color: "white",
                        marginTop: 2,
                      }}
                    >
                      {story?.time}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 2,
                      marginTop: 1.5,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="movie-play"
                      size={14}
                      color="white"
                    />
                    <Text style={{ color: "white", fontSize: 13 }}>
                      Watch full reel
                    </Text>
                    <AntDesign name="right" size={12} color="white" />
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <MaterialCommunityIcons
                  name="dots-horizontal"
                  size={20}
                  color="white"
                />
                <AntDesign name="close" size={24} color="white" />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            // gap: 3,
            height: 110,
          }}
        >
          <View
            style={{
              width: "81%",
              backgroundColor: "black",
              marginRight: 9,
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
              placeholder="Send message..."
              placeholderTextColor="gray"
            />
          </View>
          <View
            style={{
              marginRight: 10,
            }}
          >
            <AntDesign name="hearto" size={22} color="white" />
          </View>
          <Feather name="send" size={22} color="white" />
        </View>
        <StatusBar style="light" />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
