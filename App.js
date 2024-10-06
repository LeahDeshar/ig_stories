import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  Pressable,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
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
  cancelAnimation,
} from "react-native-reanimated";
import {
  AntDesign,
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const chunkArray = (array, size) => {
  const chunkedArr = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
};

const myProfile = {
  userImg:
    "https://as2.ftcdn.net/v2/jpg/04/10/43/77/1000_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg",
};
const storyViewDuration = 5 * 1000;
const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <InstaHeader />
      <StoryList />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
          marginHorizontal: 15,
          marginTop: 20,
        }}
      >
        <LinearGradient
          colors={["#ff9a9e", "#fecfef", "#fecfef"]}
          style={{
            width: 25,
            height: 25,
            borderRadius: 35,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 5,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              width: 20,
              height: 20,
              borderRadius: 35,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="checkmark" size={20} color="#fecfef" />
          </View>
        </LinearGradient>
        <View>
          <Text
            style={{
              fontSize: 12,
              color: "#8e8e8e",
            }}
          >
            You've seen all new posts from the past three days from accounts you
            follow.
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 15,
          marginTop: 25,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Suggested for you
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: "#0088ff",
            }}
          >
            Older posts
          </Text>
        </TouchableOpacity>
      </View>

      <InstaFeedCard />
    </SafeAreaView>
  );
};

export default App;

const InstaHeader = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 10,
        marginVertical: 10,
      }}
    >
      <Image
        source={{
          uri: "https://logos-world.net/wp-content/uploads/2020/05/Instagram-Logo-2016-present.png",
        }}
        style={{
          width: 130,
          height: 40,
          resizeMode: "cover",
        }}
      />
      <View
        style={{
          flexDirection: "row",
          gap: 20,
        }}
      >
        <AntDesign name="hearto" size={24} color="black" />
        <FontAwesome5 name="facebook-messenger" size={24} color="black" />
      </View>
    </View>
  );
};
const MyProfile = () => {
  return (
    <View
      style={{
        marginHorizontal: 10,
      }}
    >
      <View>
        <Image
          source={{ uri: myProfile.userImg }}
          style={{
            width: 73,
            height: 73,
            borderRadius: 50,
          }}
        />
        <View
          style={{
            position: "absolute",

            bottom: 3,
            left: 53,
            backgroundColor: "#00aaff",
            borderRadius: 25,
            width: 23,
            height: 23,
          }}
        >
          <Text
            style={{
              fontSize: 28,
              color: "#fff",
              textAlign: "center",
              bottom: 5,
            }}
          >
            +
          </Text>
        </View>
      </View>
      <View>
        <Text
          style={{
            marginTop: 8,
            textAlign: "center",
            fontSize: 12,
          }}
        >
          Your story
        </Text>
      </View>
    </View>
  );
};

const InstaFeedCard = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
          marginHorizontal: 15,
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LinearGradient
            colors={["#ff9a9e", "#fecfef", "#fecfef"]}
            style={{
              width: 45,
              height: 45,
              borderRadius: 35,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 5,
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                width: 39,
                height: 39,
                borderRadius: 35,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: userStories[0].userImg }}
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 32,
                  backgroundColor: "#fff",
                }}
              />
            </View>
          </LinearGradient>
          <View
            style={{
              marginLeft: 8,
            }}
          >
            <Text
              style={{
                fontSize: 15,
              }}
            >
              {userStories[0].username}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "#3f3e3e",
              }}
            >
              2 days ago
            </Text>
          </View>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#f5f5f5",
              paddingHorizontal: 15,
              paddingVertical: 8,
              borderRadius: 5,
              marginRight: 10,
            }}
          >
            <Text>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons name="dots-horizontal" size={25} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
  storyContainer: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  gradient: {
    width: 75,
    height: 75,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    // padding: 10,
  },
  profileImage: {
    width: 66,
    height: 66,
    borderRadius: 32,
    backgroundColor: "#fff", // Fallback in case of missing image
  },
  username: {
    fontSize: 12,
    // color: "#fff",
    textAlign: "center",
  },
});
const Story = ({ username, profilePic }) => {
  return (
    <TouchableOpacity style={styles.storyContainer}>
      <LinearGradient
        colors={["#ff9a9e", "#fecfef", "#fecfef"]}
        style={styles.gradient}
      >
        <View
          style={{
            backgroundColor: "white",
            width: 70,
            height: 70,
            borderRadius: 35,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={{ uri: profilePic }} style={styles.profileImage} />
        </View>
      </LinearGradient>
      <Text style={styles.username}>{username}</Text>
    </TouchableOpacity>
  );
};

const StoryList = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <MyProfile />
        {userStories.map((item, index) => (
          <Story
            key={index}
            username={item.username}
            profilePic={item.userImg}
          />
        ))}
      </ScrollView>
    </View>
  );
};
const StoriesScreen = () => {
  const [userIndex, setUserIndex] = useState(0);
  const [storyIndex, setStoryIndex] = useState(0);
  const progress = useSharedValue(0);
  const [message, setMessage] = useState("");

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

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const emojiReactions = ["😂", "🔥", "👏", "😍", "😢", "😮"];
  const emojiChunks = chunkArray(emojiReactions, 3);
  // Keyboard event listeners
  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
        cancelAnimation(progress);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
        progress.value = withTiming(1, {
          duration: (1 - progress.value) * storyViewDuration,
          easing: Easing.linear,
        });
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  const pauseProgress = () => {
    cancelAnimation(progress);
  };

  const resumeProgress = () => {
    progress.value = withTiming(1, {
      duration: (1 - progress.value) * storyViewDuration,
      easing: Easing.linear,
    });
  };
  const inputRef = useRef(null);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }
    );
    return () => {
      keyboardDidShowListener.remove();
    };
  }, []);
  <SafeAreaView
    style={{
      flex: 1,
      backgroundColor: "black",
    }}
  >
    <Pressable
      style={{ flex: 1 }}
      onPressIn={pauseProgress}
      onPressOut={resumeProgress}
    >
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
    </Pressable>
    {isKeyboardVisible && (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            backgroundColor: "#03000082",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          <View
            style={{
              top: 180,
            }}
          >
            <View
              style={{
                height: "50%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#ffffffa2",
                  fontSize: 18,
                  fontWeight: "semibold",
                  marginBottom: 20,
                }}
              >
                Quick Reactions
              </Text>
              {emojiChunks.map((chunk, rowIndex) => (
                <View
                  key={rowIndex}
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 20,
                  }}
                >
                  {chunk.map((item, emojiIndex) => (
                    <TouchableOpacity
                      key={emojiIndex}
                      onPress={() => console.log(`Reacted with ${item}`)}
                    >
                      <Text style={{ fontSize: 40, marginHorizontal: 20 }}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              ))}
            </View>
            <View
              style={{
                width: "95%",
                top: 120,
                marginLeft: 11,
              }}
            >
              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: "#c0c0c0",
                  padding: 10,
                  borderRadius: 50,
                  color: "white",
                }}
                ref={inputRef}
                placeholder="Send message..."
                placeholderTextColor="#ffffff"
                value={message} // Bind state to TextInput
                onChangeText={(text) => setMessage(text)}
              />
              {message.length > 0 && ( // Conditionally render send icon if there's text
                <View
                  style={{
                    position: "absolute",
                    right: 15,
                    top: 8,
                    transform: [{ rotate: "18deg" }],
                  }}
                >
                  <Feather name="send" size={22} color="white" />
                </View>
              )}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )}
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        // gap: 3,
        // backgroundColor: "white",
        marginHorizontal: 20,

        height: 110,
      }}
    >
      <View
        style={{
          width: "90%",
          // backgroundColor: "white",
        }}
      >
        <View
          style={{
            width: "95%",
            // backgroundColor: "black",
            borderWidth: 2,
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
            placeholderTextColor="#ffffff"
            value={message}
            onChangeText={(text) => setMessage(text)}
          />
        </View>
      </View>
      <View
        style={{
          // marginRight: 10,
          flexDirection: "row",
          gap: 10,
        }}
      >
        <AntDesign name="hearto" size={22} color="white" />
        <Feather name="send" size={22} color="white" />
      </View>
    </View>
    <StatusBar style="light" />
  </SafeAreaView>;
};
