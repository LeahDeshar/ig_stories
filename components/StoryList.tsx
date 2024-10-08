import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import userStories from "@/assets/data/stories.js";
import { LinearGradient } from "expo-linear-gradient";

const Story = ({ username, profilePic }) => {
  return (
    <TouchableOpacity style={styles.storyContainer}>
      <LinearGradient
        colors={["#f88084", "#f9a9e0", "#d39ec2"]}
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
const myProfile = {
  userImg:
    "https://as2.ftcdn.net/v2/jpg/04/10/43/77/1000_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg",
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

export default StoryList;

const styles = StyleSheet.create({
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
