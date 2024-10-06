import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import {
  AntDesign,
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Carousel from "react-native-reanimated-carousel";

const { width: viewportWidth } = Dimensions.get("window");

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
export default InstaFeedCard;
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
