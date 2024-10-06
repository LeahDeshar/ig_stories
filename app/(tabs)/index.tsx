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
import postsData from "@/assets/data/postsData.js";

import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Carousel from "react-native-reanimated-carousel";

import {
  AntDesign,
  Feather,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import InstaHeader from "@/components/InstaHeader";
import StoryList from "@/components/StoryList";
import SuggestedPeople from "@/components/SuggestedPeople";
import InstaFeedCard from "@/components/InstaFeedCard";
export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
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
}

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
