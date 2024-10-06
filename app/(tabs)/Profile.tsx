import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome6,
  Ionicons,
} from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import SuggestedPeople from "@/components/SuggestedPeople";
const myProfile = {
  userImg:
    "https://as2.ftcdn.net/v2/jpg/04/10/43/77/1000_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg",
};
const Profile = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <StatusBar style="dark" />
      <ProfileHeader />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 15,
        }}
      >
        <View>
          <Image
            source={{ uri: myProfile.userImg }}
            style={{
              width: 85,
              height: 85,
              borderRadius: 50,
              marginHorizontal: 15,
              marginVertical: 10,
            }}
          />
          <Text
            style={{
              textAlign: "center",
            }}
          >
            Leah Deshar
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "63%",
          }}
        >
          <View>
            <Text
              style={{
                textAlign: "center",
              }}
            >
              0
            </Text>
            <Text>posts</Text>
          </View>

          <View>
            <Text
              style={{
                textAlign: "center",
              }}
            >
              62
            </Text>
            <Text>followers</Text>
          </View>
          <View>
            <Text
              style={{
                textAlign: "center",
              }}
            >
              64
            </Text>
            <Text>following</Text>
          </View>
        </View>
      </View>

      <ProfileButton />
      <SuggestedPeople />
    </SafeAreaView>
  );
};

export default Profile;
const ProfileButton = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginHorizontal: 15,
        gap: 5,
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "#d3d3d3",
          width: "45%",
          borderRadius: 9,
          paddingVertical: 4,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            paddingVertical: 3,
          }}
        >
          Edit profile
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#d3d3d3",
          width: "45%",
          borderRadius: 9,
          paddingVertical: 4,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            paddingVertical: 3,
          }}
        >
          Share profile
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#d3d3d3",
          width: "9%",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 9,
          paddingVertical: 4,
        }}
      >
        <AntDesign name="adduser" size={22} color="black" />
      </TouchableOpacity>
    </View>
  );
};
const ProfileHeader = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 15,
        marginTop: 15,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons name="lock-closed-outline" size={18} color="black" />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginHorizontal: 2,
          }}
        >
          leahdeshar
        </Text>
        <Entypo name="chevron-small-down" size={24} color="black" />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          gap: 20,
        }}
      >
        <FontAwesome6 name="threads" size={24} color="black" />
        <FontAwesome name="plus-square-o" size={24} color="black" />
        <Ionicons name="menu-outline" size={30} color="black" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({});
