import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import suggestedUsers from "@/assets/data/suggestedUsers.js";

const SuggestedPeople = ({ title = "Suggested for you" }) => {
  return (
    <View
      style={{
        marginVertical: 10,
        marginBottom: 12,
      }}
    >
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
          {title}
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

export default SuggestedPeople;

const styles = StyleSheet.create({});
