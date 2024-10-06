import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          // title: 'Home',

          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              style={{ color: color }}
            />
          ),
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="Search"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "search" : "search-outline"}
              library="Ionicons"
              style={{ color: color }}
            />
          ),
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="NewPost"
        options={{
          title: "New",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "plus-square" : "plus-square-o"}
              library="FontAwesome"
              style={{ color: color }}
            />
          ),
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="Reels"
        options={{
          title: "reel",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "movie" : "movie-outline"}
              library="MaterialCommunityIcons"
              style={{ color: color }}
            />
          ),
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "profile",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "user-circle" : "user-circle-o"}
              library="FontAwesome"
              style={{ color: color }}
            />
          ),
          tabBarLabel: "",
        }}
      />
    </Tabs>
  );
}
