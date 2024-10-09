// import { useEffect, useRef, useState } from "react";
// import { ResizeMode, Video, AVPlaybackStatus } from "expo-av";
// import {
//   View,
//   Pressable,
//   Text,
//   StyleSheet,
//   useWindowDimensions,
// } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import { Ionicons } from "@expo/vector-icons";
// import { SafeAreaView } from "react-native-safe-area-context";
// type VideoPost = {
//   post: {
//     id: string;
//     video: string;
//     caption: string;
//   };
//   activePostId: string;
// };
// const VideoPost = ({ post, activePostId }: VideoPost) => {
//   //   console.log("activePostId", activePostId);

//   const video = useRef<Video>(null);
//   const [status, setStatus] = useState<AVPlaybackStatus>();
//   const { height } = useWindowDimensions();

//   useEffect(() => {
//     if (video.current) {
//       console.log(activePostId);
//       console.log("activePostId === post.id", activePostId === post.id);
//       if (activePostId === post.id) {
//         video.current.playAsync();
//       } else {
//         video.current.pauseAsync();
//       }
//     }
//   }, [activePostId]);

//   //   const handlePress = () => {
//   //     if (status?.isPlaying) {
//   //       video.current.pauseAsync();
//   //     } else {
//   //       video.current.playAsync();
//   //     }
//   //   };

//   return (
//     <View style={[styles.container, { height: height - 80 }]}>
//       <Video
//         ref={video}
//         style={StyleSheet.absoluteFill}
//         source={{ uri: post.video }}
//         resizeMode={ResizeMode.COVER}
//         isLooping
//         onPlaybackStatusUpdate={setStatus}
//       />
//       <Pressable
//         //   onPress={handlePress}
//         style={styles.content}
//       >
//         <LinearGradient
//           colors={["transparent", "rgba(0,0,0,0.8)"]}
//           style={styles.overlay}
//         />
//         {/* {!status?.isPlaying && (
//           <Ionicons
//             name="play"
//             size={70}
//             color="rgba(255, 255, 255, 0.6)"
//             style={styles.playIcon}
//           />
//         )} */}
//         <SafeAreaView style={{ flex: 1 }}>
//           <View style={styles.footer}>
//             <View style={styles.leftColumn}>
//               <Text style={styles.caption}>{post.caption}</Text>
//             </View>
//             <View style={styles.rightColumn}>
//               <Ionicons name="heart" size={35} color="white" />
//               <Ionicons name="share-social-sharp" size={35} color="white" />
//               <Ionicons name="bookmark" size={35} color="white" />
//             </View>
//           </View>
//         </SafeAreaView>
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1 },
//   content: { flex: 1 },
//   overlay: { ...StyleSheet.absoluteFillObject, top: "50%" },
//   playIcon: { position: "absolute", alignSelf: "center", top: "50%" },
//   footer: { marginTop: "auto", flexDirection: "row", alignItems: "flex-end" },
//   leftColumn: { flex: 1 },
//   caption: { color: "white", fontSize: 18 },
//   rightColumn: { gap: 10 },
// });

// export default VideoPost;

import { useEffect, useRef, useState } from "react";
import { ResizeMode, Video, AVPlaybackStatus } from "expo-av";
import {
  View,
  Pressable,
  Text,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

type VideoPost = {
  post: {
    id: string;
    video: string;
    caption: string;
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
        <SafeAreaView style={{ flex: 1 }}>
          <View>
            <Text style={{}}>Header</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.leftColumn}>
              <Text style={styles.caption}>{post.caption}</Text>
            </View>
            <View style={styles.rightColumn}>
              <Ionicons name="heart" size={35} color="white" />
              {/* comment icon*/}

              <Ionicons name="chatbubble" size={35} color="white" />

              <Ionicons name="share-social-sharp" size={35} color="white" />
              <Ionicons name="bookmark" size={35} color="white" />
              {/* horizontal three dots */}
              <Ionicons name="ellipsis-horizontal" size={35} color="white" />
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
    top: "50%",
  },
  playIcon: { position: "absolute", alignSelf: "center", top: "50%" },
  footer: { marginTop: "auto", flexDirection: "row", alignItems: "flex-end" },
  leftColumn: { flex: 1 },
  caption: { color: "white", fontSize: 18 },
  rightColumn: { gap: 10 },
});

export default VideoPost;
