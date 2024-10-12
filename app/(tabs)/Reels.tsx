import { Stack } from "expo-router";
import { View, StyleSheet, FlatList, FlatListProps } from "react-native";

import VideoPost from "@/components/VideoPost";
import { useCallback, useEffect, useRef, useState } from "react";

const dummyPosts = [
  {
    id: "6",
    video: require("@/assets/videos/cat.mp4"),
    caption: "Cats: because sometimes, you just need a purr-fect moment 🐱",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1661603403807-aa68bfcc983a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "7",
    video: require("@/assets/videos/react.mp4"),
    caption: "React in action! Building UIs like a pro ⚛️💻",
    thumbnail:
      "https://images.unsplash.com/photo-1506322845680-6e3e1a5b1de1?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    video: require("@/assets/videos/cook.mp4"),
    caption: "Cooking up some delicious moments! 🍳👨‍🍳",
    thumbnail:
      "https://images.unsplash.com/photo-1607309661539-be7af35263a7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "1",
    video: require("@/assets/videos/coffee.mp4"),
    caption: "Life happens, but coffee helps ☕️✨ #CoffeeLover #CaffeineFix",
    thumbnail:
      "https://images.unsplash.com/photo-1612083110364-19c75fa82e19?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    video: require("@/assets/videos/ai.mp4"),
    caption: "AI: The future is now! 🤖🚀",
    thumbnail:
      "https://images.unsplash.com/photo-1622405556585-412f1df162ba?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    video: require("@/assets/videos/avocado.mp4"),
    caption: "Perfecting my avocado toast game 🥑🎹",
    thumbnail:
      "https://images.unsplash.com/photo-1621193677201-096db5e45734?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "5",
    video: require("@/assets/videos/body.mp4"),
    caption: "Fitness journey: Every rep counts! 💪🏋️‍♂️",
    thumbnail:
      "https://images.unsplash.com/photo-1619963184912-ea0a84514484?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
