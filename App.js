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
  Dimensions,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import userStories from "./stories";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Carousel from "react-native-reanimated-carousel";
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
  FontAwesome,
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
const postsData = [
  {
    id: 1,
    userImg:
      "https://images.unsplash.com/photo-1717591057301-3dcfe75986ac?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "user1",
    timestamp: "2 days ago",
    like: 1000,
    comment: 37,
    share: 15,
    postImages: [
      {
        uri: "https://images.unsplash.com/photo-1727968451338-209fb8da01a3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }, // Replace with actual image URLs
      {
        uri: "https://images.unsplash.com/photo-1727915325711-5fdfb5a0a55c?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        uri: "https://images.unsplash.com/photo-1723764881665-5b40cea01c9b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    id: 2,
    userImg:
      "https://images.unsplash.com/photo-1527418124353-ca783e9d1d1a?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "user2",
    timestamp: "1 day ago",
    like: 1000,
    comment: 37,
    share: 15,
    postImages: [
      {
        uri: "https://images.unsplash.com/photo-1432457990754-c8b5f21448de?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        uri: "https://images.unsplash.com/photo-1609196141706-91f4f03e1543?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    id: 3,
    userImg:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "user3",
    timestamp: "3 hours ago",
    like: 259,
    comment: 29,
    share: 8,
    postImages: [
      {
        uri: "https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    id: 4,
    userImg:
      "https://images.unsplash.com/photo-1520072959219-c595dc870360?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "user4",
    timestamp: "4 days ago",
    like: 512,
    comment: 48,
    share: 21,
    postImages: [
      {
        uri: "https://images.unsplash.com/photo-1508737027454-e6454ef45afd?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    id: 5,
    userImg:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "user5",
    timestamp: "6 hours ago",
    like: 402,
    comment: 17,
    share: 6,
    postImages: [
      {
        uri: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1747&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        uri: "https://images.unsplash.com/photo-1551601651-bc60f254d532?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    id: 6,
    userImg:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "user6",
    timestamp: "5 hours ago",
    like: 687,
    comment: 33,
    share: 9,
    postImages: [
      {
        uri: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    id: 7,
    userImg:
      "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "user7",
    timestamp: "7 hours ago",
    like: 432,
    comment: 29,
    share: 11,
    postImages: [
      {
        uri: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    id: 8,
    userImg:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "user8",
    timestamp: "2 hours ago",
    like: 1103,
    comment: 62,
    share: 23,
    postImages: [
      {
        uri: "https://images.unsplash.com/photo-1546536133-d1b07a9c768e?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    id: 9,
    userImg:
      "https://images.unsplash.com/photo-1502764613149-7f1d229e230f?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "user9",
    timestamp: "3 days ago",
    like: 753,
    comment: 45,
    share: 17,
    postImages: [
      {
        uri: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        uri: "https://images.unsplash.com/photo-1517059224940-d4af9eec41e3?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    id: 10,
    userImg:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "user10",
    timestamp: "8 hours ago",
    like: 132,
    comment: 8,
    share: 4,
    postImages: [
      {
        uri: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
];
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
      <StatusBar style="dark" />
      <ScrollView>
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
              You've seen all new posts from the past three days from accounts
              you follow.
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

            borderWidth: 1,
            borderColor: "white",
            borderBottomColor: "#c0c0c05a",
            paddingBottom: 10,
            marginBottom: 10,
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
        <InstaFeedCard data={postsData[0]} />
        <SuggestedPeople />
        {postsData.slice(1).map((post) => (
          <InstaFeedCard key={post.id} data={post} />
        ))}
      </ScrollView>
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
            borderRadius: 25,
            width: 27,
            height: 27,
            bottom: 3,
            left: 50,
            backgroundColor: "white",
          }}
        >
          <View
            style={{
              backgroundColor: "#00aaff",
              borderRadius: 25,
              width: 23,
              height: 23,
              left: 2,
              top: 1.2,
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
const suggestedUsers = [
  {
    id: 1,
    userImg:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1080&auto=format&fit=crop&ixlib=rb-1.2.1",
    username: "nature_explorer",
    followers: "10.2k",
    bio: "Discovering the world's beauty, one adventure at a time.",
    followedBy: [
      {
        userImg:
          "https://images.unsplash.com/photo-1521310192545-4ac7951413f0?q=80&w=1080&auto=format&fit=crop&ixlib=rb-1.2.1",
        username: "john_doe",
      },
      {
        userImg:
          "https://images.unsplash.com/photo-1523111567642-f71bebeb173f?q=80&w=1080&auto=format&fit=crop&ixlib=rb-1.2.1",
        username: "jane_smith",
      },
      {
        userImg:
          "https://images.unsplash.com/photo-1527418124353-ca783e9d1d1a?q=80&w=1080&auto=format&fit=crop&ixlib=rb-1.2.1",
        username: "mike_the_great",
      },
      {
        userImg:
          "https://images.unsplash.com/photo-1527418124353-ca783e9d1d1a?q=80&w=1080&auto=format&fit=crop&ixlib=rb-1.2.1",
        username: "mike_the_great",
      },
    ],
  },
  {
    id: 2,
    userImg:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1080&auto=format&fit=crop&ixlib=rb-1.2.1",
    username: "fit_guru",
    followers: "8.5k",
    bio: "Sharing daily fitness tips and workouts. Let’s stay fit together!",
    followedBy: [
      {
        userImg:
          "https://images.unsplash.com/photo-1521310192545-4ac7951413f0?q=80&w=1080&auto=format&fit=crop&ixlib=rb-1.2.1",
        username: "john_doe",
      },
      {
        userImg:
          "https://images.unsplash.com/photo-1523111567642-f71bebeb173f?q=80&w=1080&auto=format&fit=crop&ixlib=rb-1.2.1",
        username: "jane_smith",
      },
      {
        userImg:
          "https://images.unsplash.com/photo-1527418124353-ca783e9d1d1a?q=80&w=1080&auto=format&fit=crop&ixlib=rb-1.2.1",
        username: "mike_the_great",
      },
      {
        userImg:
          "https://images.unsplash.com/photo-1527418124353-ca783e9d1d1a?q=80&w=1080&auto=format&fit=crop&ixlib=rb-1.2.1",
        username: "mike_the_great",
      },
    ],
  },
  {
    id: 3,
    userImg:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1080&auto=format&fit=crop&ixlib=rb-1.2.1",
    username: "foodie_jane",
    followers: "15.8k",
    bio: "Traveling the world one meal at a time 🌍🍲",
  },
  {
    id: 4,
    userImg:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1080&auto=format&fit=crop&ixlib=rb-1.2.1",
    username: "urban_shots",
    followers: "23.4k",
    bio: "Capturing urban life through the lens. Photographer 📷",
  },
  {
    id: 5,
    userImg:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1080&auto=format&fit=crop&ixlib=rb-1.2.1",
    username: "tech_geek",
    followers: "12.1k",
    bio: "Latest tech trends and gadget reviews. 🚀",
  },
  {
    id: 6,
    userImg:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1080&auto=format&fit=crop&ixlib=rb-1.2.1",
    username: "pet_lover",
    followers: "6.9k",
    bio: "Dog mom and cat lover 🐾 | Sharing cute animal pics daily!",
  },
  {
    id: 7,
    userImg:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1080&auto=format&fit=crop&ixlib=rb-1.2.1",
    username: "wanderlust",
    followers: "19.3k",
    bio: "Adventure seeker. Traveling to offbeat places 🌍",
  },
  {
    id: 8,
    userImg:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1080&auto=format&fit=crop&ixlib=rb-1.2.1",
    username: "creative_mind",
    followers: "9.7k",
    bio: "Graphic designer | Illustrator 🎨 | Sharing daily art.",
  },
  {
    id: 9,
    userImg:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1080&auto=format&fit=crop&ixlib=rb-1.2.1",
    username: "style_icon",
    followers: "14.6k",
    bio: "Fashion enthusiast | Daily outfit inspirations 👗👠",
  },
  {
    id: 10,
    userImg:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1080&auto=format&fit=crop&ixlib=rb-1.2.1",
    username: "music_junkie",
    followers: "18.2k",
    bio: "DJ and music producer | Sharing my favorite tracks 🎶",
  },
];
const SuggestedPeople = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 15,
          marginTop: 10,
          marginBottom: 10,
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
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {suggestedUsers.map((user) => (
          <View
            style={{
              backgroundColor: "#e2e2e292",
              paddingVertical: 20,
              paddingHorizontal: 10,
              width: 200,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
              marginHorizontal: 10,
              // shadow
              shadowColor: "#00000060",
              shadowOffset: {
                width: 1,
                height: 3,
              },
              shadowOpacity: 0.3,
            }}
          >
            <Image
              source={{
                uri: user?.userImg,
              }}
              style={{
                width: 135,
                height: 135,
                borderRadius: 75,
              }}
            />
            <Text
              style={{
                fontWeight: "bold",
                marginBottom: 4,
                marginTop: 3,
                textAlign: "center",
              }}
            >
              {user?.username}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 5,
                marginBottom: 8,
              }}
            >
              {user?.followedBy?.slice(0, 2).map((u, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={{ uri: u.userImg }}
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 25,
                      marginLeft: index > 0 ? -10 : 0,
                      marginBottom: index > 0 ? -10 : 0,
                    }}
                  />
                </View>
              ))}
              <View
                style={{
                  marginLeft: 5,
                  width: "85%",
                  // backgroundColor: "red",
                }}
              >
                <Text
                  style={{
                    fontSize: 11,
                  }}
                >
                  Followed by{" "}
                </Text>
                <Text
                  style={{
                    fontSize: 11,
                  }}
                >
                  {user?.followedBy
                    ?.slice(0, 2)
                    .map((user) => user.username)
                    .join(", ")}{" "}
                  + more
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: "#0088ff",
                width: "100%",
                borderRadius: 10,
                paddingVertical: 8,
                marginTop: 10,
              }}
            >
              <Text style={{ color: "white", textAlign: "center" }}>
                Follow
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const InstaFeedCard = ({ data }) => {
  console.log("check", data);
  return (
    <View
      style={{
        marginBottom: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
          marginHorizontal: 5,
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
                source={{ uri: data?.userImg }}
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
              {data?.username}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "#3f3e3e",
              }}
            >
              {data?.timestamp}
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

      <View>
        <SwipablePost data={data} />
      </View>
    </View>
  );
};

const { width: viewportWidth } = Dimensions.get("window");

const images = [
  {
    uri: "https://images.unsplash.com/photo-1727968451338-209fb8da01a3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }, // Replace with actual image URLs
  {
    uri: "https://images.unsplash.com/photo-1727915325711-5fdfb5a0a55c?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    uri: "https://images.unsplash.com/photo-1723764881665-5b40cea01c9b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  // Add more images as needed
];
const DotIndicator = ({ currentIndex, total }) => {
  return (
    <View
      style={{ flexDirection: "row", justifyContent: "center", marginTop: 8 }}
    >
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          style={[
            {
              width: 5,
              height: 5,
              borderRadius: 4,
              backgroundColor: "#2eb3fb", // Change this to your desired color
              margin: 4,
            },
            { opacity: currentIndex === index ? 1 : 0.5 },
          ]}
        />
      ))}
    </View>
  );
};
const SwipablePost = ({ data }) => {
  console.log(data);
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View>
      <Carousel
        ref={carouselRef}
        data={data?.postImages}
        renderItem={({ item }) => (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              source={{ uri: item.uri }}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </View>
        )}
        width={viewportWidth}
        height={450} // Adjust height as needed
        onSnapToItem={(index) => setCurrentIndex(index)}
        pagingEnabled={true}
      />
      <DotIndicator
        currentIndex={currentIndex}
        total={data?.postImages?.length}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 13,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 12,
          }}
        >
          <AntDesign name="hearto" size={24} color="black" />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Feather
              style={{
                // rotate/mirror
                transform: [{ rotate: "255deg" }],
              }}
              name="message-circle"
              size={26}
              color="black"
            />
            <Text>{data?.comment}</Text>
          </View>
          <Feather name="send" size={22} color="black" />
        </View>
        <View>
          <FontAwesome name="bookmark-o" size={24} color="black" />
        </View>
      </View>

      <View
        style={{
          marginHorizontal: 13,
        }}
      >
        <TouchableOpacity>
          <Text
            style={{
              marginTop: 5,
            }}
          >
            Liked by{" "}
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              user123
            </Text>{" "}
            and{" "}
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              1,234 others
            </Text>
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "semibold" }}>__its.xyz__</Text>
          <Text> Reminder.Keep working hard 🔥</Text>
        </View>

        <TouchableOpacity>
          <Text
            style={{
              color: "#8e8e8e",
              marginTop: 5,
            }}
          >
            View all comments
          </Text>
        </TouchableOpacity>
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
