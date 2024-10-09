import { Stack } from "expo-router";
import { View, StyleSheet, FlatList, FlatListProps } from "react-native";

import VideoPost from "@/components/VideoPost";
import { useCallback, useEffect, useRef, useState } from "react";

const dummyPosts = [
  {
    id: "6",
    video: require("@/assets/videos/cat.mp4"),
    caption: "user1",
  },
  {
    id: "7",
    video: require("@/assets/videos/react.mp4"),
    caption: "might",
  },
  {
    id: "2",
    video: require("@/assets/videos/cook.mp4"),
    caption: "Caption of the post",
  },
  {
    id: "1",
    video: require("@/assets/videos/coffee.mp4"),
    caption: "Hey there",
  },
  {
    id: "3",
    video: require("@/assets/videos/ai.mp4"),
    caption: "Hola",
  },
  {
    id: "4",
    video: require("@/assets/videos/avocado.mp4"),
    caption: "Piano practice",
  },
  {
    id: "5",
    video: require("@/assets/videos/body.mp4"),
    caption: "Hello World!",
  },
];

import { useFocusEffect } from "@react-navigation/native";

const Reels = () => {
  const [activePostId, setActivePostId] = useState<string | null>(null);
  const [posts, setPosts] = useState(dummyPosts);

  useFocusEffect(
    useCallback(() => {
      // Pause all videos when tab changes
      return () => setActivePostId(null);
    }, [])
  );

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: { itemVisiblePercentThreshold: 50 },
      onViewableItemsChanged: ({ viewableItems }) => {
        if (viewableItems.length > 0) {
          setActivePostId(viewableItems[0].item.id);
        }
      },
    },
  ]);

  const onEndReached = () => {
    setPosts((currentPosts) => [...currentPosts, ...dummyPosts]);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      {/* <StatusBar style="light" /> */}

      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <VideoPost post={item} activePostId={activePostId} />
        )}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        pagingEnabled
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        showsVerticalScrollIndicator={false}
        onEndReached={onEndReached}
        onEndReachedThreshold={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

export default Reels;
