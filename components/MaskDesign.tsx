import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Svg, { Defs, ClipPath, Rect, Circle } from "react-native-svg";

const MaskDesign = () => {
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1619963184912-ea0a84514484?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds",
        }} // Replace with your image
        style={styles.backgroundImage}
      />

      <Svg width={50} height={50} viewBox="0 0 100 100" style={styles.svg}>
        <Defs>
          {/* Define a clip path with a rectangle and a circular cut-out */}
          <ClipPath id="clip">
            {/* Square (or rounded rectangle) */}
            <Rect
              x="0"
              y="0"
              width="80"
              height="100"
              rx="15"
              fill={"#ffffff8e"}
            />
            {/* Circular cut-out */}
            <Circle cx="80" cy="50" r="15" />
          </ClipPath>
        </Defs>

        {/* Use the clip path to create the see-through effect */}
        <Rect width="100" height="100" fill="white" clipPath="url(#clip)" />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    position: "relative",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute", // Place the image behind the SVG
    top: 0,
    left: 0,
    borderRadius: 15, // rounded corners for the image
  },
  svg: {
    position: "absolute", // Place the SVG over the image
    top: 0,
    left: 0,
  },
});

export default MaskDesign;
