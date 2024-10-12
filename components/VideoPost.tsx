import { useEffect, useRef, useState } from "react";
import { ResizeMode, Video, AVPlaybackStatus } from "expo-av";
import {
  View,
  Pressable,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import MaskDesign from "./MaskDesign";

type VideoPost = {
  post: {
    id: string;
    video: string;
    caption: string;
    thumbnail: string;
  };
  activePostId: string;
};

const VideoPost = ({ post, activePostId }: VideoPost) => {
  const video = useRef<Video>(null);
  const [status, setStatus] = useState<AVPlaybackStatus>();
  const { height } = useWindowDimensions();

  useEffect(() => {
    if (video.current) {
      if (activePostId === post.id) {
        video.current.playAsync();
      } else {
        video.current.pauseAsync();
      }
    }
  }, [activePostId]);

  const handlePressIn = () => {
    if (status?.isPlaying) {
      video.current.pauseAsync();
    }
  };

  const handlePressOut = () => {
    if (status && !status.isPlaying) {
      video.current.playAsync();
    }
  };
  const myProfile = {
    userImg:
      "https://as2.ftcdn.net/v2/jpg/04/10/43/77/1000_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg",
  };
  return (
    <View style={[styles.container, { height: height - 80 }]}>
      <Video
        ref={video}
        style={StyleSheet.absoluteFill}
        // source={{ uri: post.video }}
        source={post.video}
        resizeMode={ResizeMode.COVER}
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />
      <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={styles.content}
      >
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={styles.overlay}
        />
        <LinearGradient
          colors={["rgba(0,0,0,0.4)", "transparent"]}
          style={{ ...StyleSheet.absoluteFillObject, top: 0, height: "18%" }}
        />
        <SafeAreaView style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              top: 30,
              marginHorizontal: 20,
            }}
          >
            <View
              style={[
                {
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 22,
                  fontWeight: "bold",
                  //   marginLeft: 10,
                  marginRight: 5,
                }}
              >
                Reels
              </Text>
              <FontAwesome name="angle-down" size={20} color="white" />
            </View>
            <View>
              <Ionicons name="camera-outline" size={28} color="white" />
            </View>
          </View>
          <View
            style={{
              marginTop: "auto",
              flexDirection: "row",
              alignItems: "flex-end",
              // borderColor: "white",
              // borderWidth: 2,
              height: "40%",
              marginRight: 10,
            }}
          >
            <View
              style={[
                {
                  flex: 1,
                  marginHorizontal: 10,
                },
              ]}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  source={{ uri: myProfile.userImg }}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 20,
                    marginRight: 10,
                  }}
                />
                <Text
                  style={{
                    color: "white",
                    fontSize: 15,
                    fontWeight: "bold",
                    marginRight: 9,
                  }}
                >
                  crossing_thoughts
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#8080809d",
                    padding: 5,
                    borderRadius: 9,
                    paddingHorizontal: 9,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 12,
                    }}
                  >
                    Follow
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  marginTop: 10,
                  marginLeft: 3,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 12,
                  }}
                >
                  {post.caption}
                </Text>
              </View>
            </View>
            <View
              style={{
                // borderWidth: 1,
                // borderColor: "white",
                height: "100%",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign name="hearto" size={25} color="white" />
                <Text
                  style={{
                    fontSize: 12,
                    textAlign: "center",
                    marginVertical: 5,
                    color: "white",
                  }}
                >
                  37.8k
                </Text>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="chatbubble-outline" size={25} color="white" />
                <Text
                  style={{
                    fontSize: 12,
                    textAlign: "center",
                    marginVertical: 5,
                    color: "white",
                  }}
                >
                  37.8k
                </Text>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Feather name="send" size={25} color="white" />
                <Text
                  style={{
                    fontSize: 12,
                    textAlign: "center",
                    marginVertical: 5,
                    color: "white",
                  }}
                >
                  3,556
                </Text>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Feather name="bookmark" size={25} color="white" />
                <Text
                  style={{
                    fontSize: 12,
                    textAlign: "center",
                    marginVertical: 5,
                    color: "white",
                  }}
                >
                  1,100
                </Text>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="ellipsis-horizontal" size={19} color="white" />
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginHorizontal: 10,
              // borderColor: "white",
              // borderWidth: 1,
              top: 20,
            }}
          >
            <View
              style={{
                backgroundColor: "#91919159",
                borderRadius: 25,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: 15,
                paddingVertical: 3,
              }}
            >
              <Ionicons name="musical-notes-sharp" size={15} color="white" />
              <Text
                style={{
                  color: "white",
                  fontSize: 12,
                  marginLeft: 5,
                }}
              >
                sam smith - original audio
              </Text>
            </View>
            <View
              style={{
                borderColor: "#ffffff75",
                borderWidth: 1,
                borderRadius: 10,
                overflow: "hidden",
              }}
            >
              <Image
                source={{
                  uri: post?.thumbnail,
                }}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 10,
                }}
              />
              <View
                style={{
                  position: "absolute",
                  top: 6,
                  left: 5,
                }}
              >
                <Ionicons name="musical-notes-sharp" size={18} color="white" />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1 },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    top: "45%",
  },
  playIcon: { position: "absolute", alignSelf: "center", top: "50%" },
  footer: {},
  leftColumn: {},
  caption: { color: "white", fontSize: 18 },
});

export default VideoPost;
