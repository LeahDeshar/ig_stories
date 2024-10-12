import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Svg, { Path, Rect, Circle } from "react-native-svg";

const MaskDesign = () => {
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1621193677201-096db5e45734?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }} // Replace with your image
        style={styles.backgroundImage}
      />
      <Svg width={100} height={100} viewBox="0 0 100 100" style={styles.svg}>
        {/* Create a rounded rectangle */}
        <Rect
          x="0"
          y="0"
          width="80"
          height="100"
          rx="15" // rounded corners
          fill="transparent"
        />
        {/* Circle cut-out */}
        <Circle cx="80" cy="50" r="15" fill="white" />
        {/* Create a mask to show the cut-out effect */}
        <Path
          d="M 0 0 H 80 V 100 H 0 Z M 80 35 C 80 15 100 15 100 35 L 100 65 C 100 85 80 85 80 65"
          fill="none"
          stroke="white"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    position: "relative",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute", // Place the image behind the SVG
    top: 0,
    left: 0,
    borderRadius: 15, // rounded corners
  },
  svg: {
    position: "absolute", // Place the SVG over the image
    top: 0,
    left: 0,
  },
});

export default MaskDesign;
