import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useState } from "react";
import ReelsList, { VideoItemType } from "react-native-reels-list";
import { Video } from "expo-av";

const videoData = [
  {
    id: "1",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    username: "user1",
  },
  {
    id: "2",
    videoUrl: "https://cdn.pixabay.com/video/2024/03/29/206139_large.mp4",
    username: "user2",
  },
  {
    id: "3",
    videoUrl: "https://cdn.pixabay.com/video/2024/08/30/228847_large.mp4",
    username: "user3",
  },
];

const VideoReelItem = ({ item, isActive, isMuted }) => {
  const videoRef = React.useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  React.useEffect(() => {
    if (videoRef.current) {
      if (isActive && !isPaused) {
        videoRef.current.playAsync();
      } else {
        videoRef.current.pauseAsync();
      }
    }
  }, [isActive, isPaused]);

  const handlePressIn = () => {
    setIsPaused(true);
  };

  const handlePressOut = () => {
    setIsPaused(false);
  };

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={{
        backgroundColor: "red",
        flex: 1,
      }}
    >
      <Video
        ref={videoRef}
        source={{ uri: item.videoUrl }}
        style={styles.video}
        isMuted={isMuted}
        useNativeControls={false}
        isLooping
        resizeMode="cover"
        shouldPlay={isActive && !isPaused}
      />
    </Pressable>
  );
};

const Reels = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(false);

  const handleMuteToggle = () => {
    setIsMuted((prev) => !prev);
  };

  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const visibleItemId = viewableItems[0].item.id;
      setActiveVideo(visibleItemId);
    }
  }, []);

  const overlayComponent = useCallback(
    ({ item }: { item: VideoItemType; index: number }) => (
      <View
        style={{
          position: "absolute",
          bottom: 190,
          left: 58,
          zIndex: 2,
          backgroundColor: "red",
        }}
      >
        <Pressable onPress={handleMuteToggle}>
          <Text style={{ color: "white" }}>
            @{item.username} {isMuted ? "🔇" : "🔊"}
          </Text>
        </Pressable>
      </View>
    ),
    [isMuted]
  );

  return (
    <View style={{ flex: 1 }}>
      <ReelsList
        data={videoData}
        renderItem={({ item }) => (
          <VideoReelItem
            item={item}
            isActive={item.id === activeVideo}
            isMuted={isMuted}
          />
        )}
        keyExtractor={(item) => item.id}
        onViewableItemsChanged={onViewableItemsChanged}
        showSeekbar={true}
        showLoadingIndicator={true}
        overlayComponent={overlayComponent}
      />
    </View>
  );
};

export default Reels;

const styles = StyleSheet.create({
  videoContainer: {
    // flex: 1,
  },
  video: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,

    // height: "100%",
  },
});
