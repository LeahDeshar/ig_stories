import { type ComponentProps } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { MaterialCommunityIcons } from "@expo/vector-icons";
type IconLibrary =
  | "Ionicons"
  | "FontAwesome"
  | "Feather"
  | "MaterialCommunityIcons";

interface TabBarIconProps {
  name: string; // Icon name from the library
  library?: IconLibrary; // The icon library to use
  style?: any; // Additional styles
}

export function TabBarIcon({
  library = "Ionicons",
  name,
  style,
  ...rest
}: TabBarIconProps) {
  // Determine the correct icon component based on the library prop
  const IconComponent =
    library === "FontAwesome"
      ? FontAwesome
      : library === "Feather"
      ? Feather
      : library === "MaterialCommunityIcons"
      ? MaterialCommunityIcons
      : Ionicons;

  return (
    <IconComponent
      name={name}
      size={23}
      style={[{ marginBottom: -3, marginTop: 5 }, style]}
      {...rest}
    />
  );
}
