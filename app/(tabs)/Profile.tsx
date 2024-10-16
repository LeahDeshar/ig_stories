import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import SuggestedPeople from "@/components/SuggestedPeople";
import highlightData from "@/assets/data/highlightData";

import { LinearGradient } from "expo-linear-gradient";
import Carousel from "react-native-reanimated-carousel";
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
      {/* <StatusBar style="auto" /> */}

      <ScrollView
        contentContainerStyle={{
          paddingVertical: 10,
          paddingBottom: 130,
        }}
      >
        <ProfileHeader />
        <ProfileFollower />
        <ProfileButton />
        <SuggestedPeople title={"Discover people"} />
        <Highlight />

        <IconButtonSlider />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const Highlight = () => {
  return (
    <ScrollView horizontal>
      {highlightData.map((high, index) => (
        <TouchableOpacity style={styles.storyContainer} key={index}>
          <View style={styles.gradient}>
            <View
              style={{
                backgroundColor: "white",
                width: 60,
                height: 60,
                borderRadius: 35,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: high.thumbnail }}
                style={styles.profileImage}
              />
            </View>
          </View>
          <Text style={styles.username}>{high.title}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={[styles.storyContainer, { marginTop: 2 }]}>
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 35,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 5,
            backgroundColor: "#8080807e",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              width: 55,
              height: 55,
              borderRadius: 35,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="plus" size={40} color="#8f8e8e" />
          </View>
        </View>
        <Text style={styles.username}>New</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const ProfileFollower = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        // marginHorizontal: 13,
        // backgroundColor: "red",
        marginBottom: 13,
        marginTop: 30,
      }}
    >
      <View
        style={{
          marginRight: 13,
        }}
      >
        <Image
          source={{ uri: myProfile.userImg }}
          style={{
            width: 85,
            height: 85,
            borderRadius: 50,
            marginHorizontal: 15,
            marginTop: 10,
          }}
        />

        <View
          style={{
            position: "absolute",
            width: 85,
            height: 85,
            borderRadius: 50,
            marginHorizontal: 15,
            marginTop: 10,
            backgroundColor: "#08080830",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <FontAwesome name="camera" size={24} color="#ffffff" />
          </View>
        </View>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginTop: 5,
          }}
        >
          Leah Deshar
        </Text>
      </View>

      <BubbleMessage />

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
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            0
          </Text>
          <Text
            style={{
              textAlign: "center",
            }}
          >
            posts
          </Text>
        </View>

        <View>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 16,
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
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            64
          </Text>
          <Text>following</Text>
        </View>
      </View>
    </View>
  );
};

const BubbleMessage = () => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 55,
        left: 10,
      }}
    >
      <View
        style={{
          borderRadius: 18,
          shadowColor: "#00000085",
          shadowOffset: {
            width: 2,
            height: 2,
          },
          shadowOpacity: 0.5,
        }}
      >
        <LinearGradient
          colors={["#c5c2c2", "#4d4d4d", "#4d4d4d", "#4d4d4d"]}
          // diagonal
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            borderRadius: 18,
            width: 70,
            height: 50,
            // justifyContent: "center",
            alignItems: "center",
            // paddingVertical: 10,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              paddingVertical: 6,
              width: "80%",
              fontSize: 14,
              // borderWidth: 1,
              flexWrap: "nowrap",
              color: "#c9c9c9d3",
            }}
          >
            Drop a thought
          </Text>
        </LinearGradient>
      </View>

      <View
        style={{
          backgroundColor: "#4d4d4d",
          borderRadius: 20,
          width: 20,
          height: 20,
          bottom: 13,
          left: 15,
        }}
      />
      <View
        style={{
          backgroundColor: "#4d4d4d",
          borderRadius: 20,
          width: 7,
          height: 7,
          bottom: 8,
          left: 35,
        }}
      />
    </View>
  );
};
const ProfileButton = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginHorizontal: 15,
        gap: 5,
        marginBottom: 10,
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
const styles = StyleSheet.create({
  storyContainer: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  gradient: {
    width: 65,
    height: 65,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    backgroundColor: "#8080807e",
  },
  profileImage: {
    width: 55,
    height: 55,
    borderRadius: 32,
    backgroundColor: "#fff",
  },
  username: {
    fontSize: 12,
    textAlign: "center",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 23,
    // backgroundColor: "red",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: 20,
  },
  iconButton: {
    padding: 10,
    width: "25%",

    marginHorizontal: 10,
  },
  activeButton: {
    borderBottomWidth: 2,
    borderBottomColor: "grey",
  },
  iconText: {
    fontSize: 24,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
    height: 300,
    borderRadius: 8,
    backgroundColor: "red",
  },
  pageTitle: {
    marginTop: 15,
    fontSize: 23,
    fontWeight: "bold",
    // color: "#FFFFFF",
  },
});
const data = [
  { title: 1, color: "#ffffff" },
  { title: 2, color: "#ffffff" },
  { title: 3, color: "#ffffff" },
];

const IconButtonSlider = () => {
  const screenWidth = Dimensions.get("window").width;
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleButtonPress = (index) => {
    setCurrentIndex(index);
    carouselRef?.current.scrollTo({ index, animated: true });
  };

  return (
    <View style={styles.container}>
      {/* Icon Buttons */}
      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={[styles.iconButton, currentIndex === 0 && styles.activeButton]}
          onPress={() => handleButtonPress(0)}
        >
          <MaterialCommunityIcons
            name="dots-grid"
            size={33}
            color="black"
            style={{
              textAlign: "center",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconButton, currentIndex === 1 && styles.activeButton]}
          onPress={() => handleButtonPress(1)}
        >
          {/* <Text style={styles.iconText}>🔍</Text> */}
          <MaterialIcons
            name="movie"
            size={32}
            color="black"
            style={{
              textAlign: "center",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconButton, currentIndex === 2 && styles.activeButton]}
          onPress={() => handleButtonPress(2)}
        >
          <MaterialCommunityIcons
            name="account-box-outline"
            size={30}
            color="black"
            style={{
              textAlign: "center",
            }}
          />
          {/* <Text style={styles.iconText}>📁</Text> */}
        </TouchableOpacity>
      </View>

      {/* Slider View Pager */}
      <Carousel
        ref={carouselRef}
        width={screenWidth}
        height={200}
        data={data}
        onSnapToItem={(index) => setCurrentIndex(index)}
        renderItem={({ item }) => (
          <View style={[styles.page, { backgroundColor: item.color }]}>
            {item.title === 1 ? (
              <View
                style={{
                  // backgroundColor: "red",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 85,
                    height: 85,
                    borderRadius: 55,
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: "grey",
                  }}
                >
                  <SimpleLineIcons name="camera" size={30} color="black" />
                </View>
                <Text style={styles.pageTitle}>No Post Yet</Text>
              </View>
            ) : (
              <View>
                <Text>No Post yet</Text>
              </View>
            )}
          </View>
        )}
        loop={false}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
      />
    </View>
  );
};
